import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { jobPlatforms, getActiveJobs, getJobsByPlatform, getUrgentJobs, formatDeadline } from '../data/jobsSearch';
import '../styles/JobSearch.css';

export default function JobSearch() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, internship, fulltime

  // Progress updates when user applies for jobs
  // Not just by visiting the page

  useEffect(() => {
    // Refresh jobs to remove expired ones
    if (activeTab === 'all') {
      setJobs(getActiveJobs());
    } else if (activeTab === 'urgent') {
      setJobs(getUrgentJobs());
    } else if (selectedPlatform) {
      setJobs(getJobsByPlatform(selectedPlatform));
    }
  }, [activeTab, selectedPlatform]);

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || job.jobType.toLowerCase().includes(filterType);
    return matchesSearch && matchesType;
  });

  const handlePlatformClick = (platformName) => {
    setActiveTab('platform');
    setSelectedPlatform(platformName);
  };

  const urgentCount = getUrgentJobs().length;
  const activeJobCount = getActiveJobs().length;

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
        {filteredJobs.map((job, index) => {
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
                <a 
                  href={job.applyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="apply-btn"
                >
                  Apply Now →
                </a>
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
                  {daysLeft < 0 ? '❌ Expired' : `⏰ ${formatDeadline(job.deadline)}`}
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
