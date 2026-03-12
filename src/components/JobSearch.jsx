import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { jobPlatforms, getActiveJobs, getJobsByPlatform, getUrgentJobs, formatDeadline, updateJobUrl } from '../data/jobsSearch';
import '../styles/JobSearch.css';

export default function JobSearch() {
  // eslint-disable-next-line no-unused-vars
  const { currentUser } = useAuth(); // currentUser for future features
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, internship, fulltime

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || job.jobType.toLowerCase().includes(filterType);
    return matchesSearch && matchesType;
  });

  // Progress updates when user uses job search and applies
  // Track module access
  useEffect(() => {
    if (currentUser?.id) {
      progressTracker.trackModuleAccess(currentUser.id, 'jobsearch');
    }
  }, [currentUser?.id]);

  // Update progress based on user interactions
  useEffect(() => {
    if (!currentUser?.id) return;
    
    let progress = 40;
    if (activeTab === 'urgent') progress = 60; // Viewing urgent jobs
    if (selectedPlatform) progress = 70;       // Viewing specific platform
    if (filteredJobs.length > 0 && searchTerm) progress = 80; // Searching for jobs
    
    if (progress > 40) {
      progressTracker.updateSectionProgress(currentUser.id, 'jobsearch', progress);
    }
  }, [activeTab, selectedPlatform, searchTerm, filteredJobs.length, currentUser?.id]);

  useEffect(() => {
    // Refresh jobs to remove expired ones whenever tab/platform changes.
    // also poll periodically in case deadline passes while user is on page
    const update = () => {
      let jobsToShow = [];
      if (activeTab === 'all') {
        jobsToShow = getActiveJobs();
      } else if (activeTab === 'urgent') {
        jobsToShow = getUrgentJobs();
      } else if (selectedPlatform) {
        jobsToShow = getJobsByPlatform(selectedPlatform);
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setJobs(jobsToShow);
    };

    update();
    const interval = setInterval(update, 60 * 1000); // refresh every minute
    return () => clearInterval(interval);
  }, [activeTab, selectedPlatform]);


  const handlePlatformClick = (platformName) => {
    setActiveTab('platform');
    setSelectedPlatform(platformName);
  };

  const urgentCount = getUrgentJobs().length;
  const activeJobCount = getActiveJobs().length;

  // force a re-render every minute so daysLeft values update
  useEffect(() => {
    const ticker = setInterval(() => {
      setJobs(prev => [...prev]); // trigger render
    }, 60 * 1000);
    return () => clearInterval(ticker);
  }, []);

  return (
    <div className="job-search-container">
      <div className="job-search-header">
        <div className="header-content">
          <h1>Job Search Hub</h1>
          <p>Find your next opportunity across multiple platforms</p>
        </div>
        <div className="job-stats">
          <div className="stat">
            <span className="stat-number">{activeJobCount}</span>
            <span className="stat-label">Active Jobs</span>
          </div>
          <div className="stat urgent">
            <span className="stat-number">{urgentCount}</span>
            <span className="stat-label">Urgent</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search jobs by title, company, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
            <select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Job Types</option>
          <option value="internship">Internships</option>
          <option value="fulltime">Full-time Jobs</option>
        </select>
      </div>

      {/* Job Platforms Section */}
      <section className="platforms-section">
        <div className="section-header">
          <h2>Popular Job Platforms</h2>
          <p>Visit these platforms to apply directly</p>
        </div>
        <div className="platforms-grid">
          {jobPlatforms.map(platform => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              style={{ borderLeftColor: platform.color }}
            >
              <div className="platform-logo">{platform.logo}</div>
              <div className="platform-info">
                <h3>{platform.name}</h3>
                <p className="platform-desc">{platform.description}</p>
                <span className="platform-tag">{platform.jobs}</span>
              </div>
              <span className="visit-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="job-tabs">
        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('all');
            setSelectedPlatform(null);
          }}
        >
          All Jobs ({getActiveJobs().length})
        </button>
        <button 
          className={`tab ${activeTab === 'urgent' ? 'active' : ''}`}
          onClick={() => {
            setActiveTab('urgent');
            setSelectedPlatform(null);
          }}
        >
          Urgent <span className="urgent-badge">{urgentCount}</span>
        </button>
        {jobPlatforms.map(platform => (
          <button 
            key={platform.id}
            className={`tab ${activeTab === 'platform' && selectedPlatform === platform.name ? 'active' : ''}`}
            onClick={() => handlePlatformClick(platform.name)}
          >
            {platform.name} ({getJobsByPlatform(platform.name).length})
          </button>
        ))}
      </div>

      {/* No Jobs Message */}
      {filteredJobs.length === 0 && (
        <div className="no-jobs">
          <p>📭 No jobs found. Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Jobs List */}
      <div className="jobs-container">
        {filteredJobs.map((job) => {
          const daysLeft = Math.floor((job.deadline - new Date()) / (1000 * 60 * 60 * 24));
          const isUrgent = daysLeft <= 5;

          return (
            <div key={job.id} className={`job-card ${isUrgent ? 'urgent' : ''}`}>
              <div className="job-header">
                <div className="job-title-section">
                  <div className="job-platform-badge" style={{ background: '#667eea' }}>
                    {job.platform}
                  </div>
                  <h3 className="job-title">{job.title}</h3>
                  {isUrgent && <span className="urgent-label">⚡ Urgent</span>}
                </div>
                {/* choose the URL to use; replacementLink takes precedence when present */}
                {(() => {
                  if (daysLeft < 0 && !job.replacementLink) {
                    return <span className="apply-btn disabled">Expired</span>;
                  }

                  const linkUrl = (daysLeft < 0 && job.replacementLink) ? job.replacementLink : job.applyLink;
                  return (
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apply-btn"
                    >
                      Apply Now →
                    </a>
                  );
                })()}
                {/* edit button always available to correct bad URLs */}
                <button
                  className="apply-btn"
                  onClick={() => {
                    const newUrl = prompt('Enter updated application link:');
                    if (newUrl) {
                      updateJobUrl(job.id, newUrl);
                      setJobs(getActiveJobs());
                    }
                  }}
                >
                  ✎
                </button>
              </div>

              <div className="job-company-info">
                <span className="company">{job.company}</span>
                <span className="location">📍 {job.location}</span>
              </div>

              <div className="job-details">
                <div className="detail">
                  <strong>Salary:</strong> {job.salary}
                </div>
                <div className="detail">
                  <strong>Experience:</strong> {job.experience}
                </div>
                <div className="detail">
                  <strong>Type:</strong> <span className="job-type">{job.jobType}</span>
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-skills">
                {job.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>

              <div className="job-footer">
                <span className={`deadline ${isUrgent ? 'urgent-deadline' : ''}`}>
                  {daysLeft < 0
                    ? (job.replacementLink ? '🔄 Updated link available' : '❌ Expired')
                    : `⏰ ${formatDeadline(job.deadline)}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Section */}
      <section className="info-section">
        <div className="info-card">
          <h3>💡 How to Use</h3>
          <ul>
            <li>Browse active jobs from all platforms</li>
            <li>Filter by job type (Internship or Full-time)</li>
            <li>Check urgent jobs (less than 5 days left)</li>
            <li>Click "Apply Now" to apply directly</li>
            <li>Jobs expire automatically after deadline</li>
            <li>If opening a job gives a 404 or generic homepage, click the ✎ button to correct its URL</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>📌 Pro Tips</h3>
          <ul>
            <li>Apply early - avoid last-minute rush</li>
            <li>Customize your resume for each job</li>
            <li>Follow up after 1 week if no response</li>
            <li>Visit platform profiles for more jobs</li>
            <li>Set reminders for urgent applications</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
