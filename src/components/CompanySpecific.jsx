import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { indianCompanies, getCompanyById, getJobsByCompany, getJobDetails } from '../data/companySpecific';
import '../styles/CompanySpecific.css';

// Skill to Learning Path Mapping
const skillLearningMap = {
  'Java': { route: '/programming', skill: 'Java' },
  'Spring Boot': { route: '/programming', skill: 'Java' },
  'Microservices': { route: '/dsa', topic: 'System Design' },
  'Database': { route: '/dsa', topic: 'Database Design' },
  'Python': { route: '/programming', skill: 'Python' },
  'C++': { route: '/programming', skill: 'C++' },
  'JavaScript': { route: '/programming', skill: 'JavaScript' },
  'SQL': { route: '/dsa', topic: 'SQL' },
  'Linux': { route: '/blueprint' },
  'Windows Server': { route: '/blueprint' },
  'Networking': { route: '/blueprint' },
  'Cloud': { route: '/dsa', topic: 'Cloud Computing' },
  'AWS': { route: '/dsa', topic: 'Cloud Computing' },
  'Azure': { route: '/dsa', topic: 'Cloud Computing' },
  'Docker': { route: '/dsa', topic: 'DevOps' },
  'Kubernetes': { route: '/dsa', topic: 'DevOps' }
};

export default function CompanySpecific() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Progress updates when user completes company interview prep
  // Not just by visiting the page

  const handleSkillClick = (skill) => {
    const skillInfo = skillLearningMap[skill];
    if (skillInfo) {
      // Update progress when user learns a required skill
      if (currentUser?.id) {
        progressTracker.updateSectionProgress(currentUser.id, 'company', 25);
      }
      navigate(skillInfo.route);
    }
  };

  const handleCompanySelect = (companyId) => {
    setSelectedCompany(companyId);
    setSelectedJob(null);
  };

  const handleJobSelect = (jobId) => {
    console.log('Selecting job:', jobId);
    setSelectedJob(jobId);
  };

  const filteredCompanies = indianCompanies.filter(company => 
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentCompany = selectedCompany ? getCompanyById(selectedCompany) : null;
  const currentJobId = selectedJob;
  console.log('Current Company:', currentCompany, 'Current JobId:', currentJobId);
  const currentJob = currentCompany && currentJobId ? getJobDetails(selectedCompany, parseInt(currentJobId)) : null;
  console.log('Current Job:', currentJob);

  return (
    <div className="company-specific-container">
      {/* Header */}
      <div className="company-header">
        <h1>Company-Specific Preparation</h1>
        <p>Prepare for your target companies with tailored learning paths</p>
      </div>

      {/* Search Section */}
      <div className="company-search-section">
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="company-search-input"
        />
      </div>

      <div className="company-content">
        {/* Companies List */}
        <div className="companies-panel">
          <h2>All Indian Companies</h2>
          <div className="companies-list">
            {filteredCompanies.map(company => (
              <div
                key={company.id}
                className={`company-item ${selectedCompany === company.id ? 'active' : ''}`}
                onClick={() => handleCompanySelect(company.id)}
              >
                <div className="company-logo">{company.logo}</div>
                <div className="company-name">
                  <h3>{company.name}</h3>
                  <span className="company-founded">Est. {company.foundedYear}</span>
                </div>
                <span className="company-arrow">→</span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Panel - Jobs */}
        {currentCompany && (
          <div className="jobs-panel">
            <div className="company-details">
              <div className="company-header-info">
                <h2>{currentCompany.name}</h2>
                <p className="company-info-text">{currentCompany.about}</p>
              </div>

              <div className="company-info-grid">
                <div className="info-item">
                  <strong>HQ:</strong> {currentCompany.headquarter}
                </div>
                <div className="info-item">
                  <strong>Founded:</strong> {currentCompany.foundedYear}
                </div>
                <div className="info-item">
                  <a href={currentCompany.website} target="_blank" rel="noopener noreferrer" className="company-link">
                    Official Website →
                  </a>
                </div>
                <div className="info-item">
                  <a href={currentCompany.hiringUrl} target="_blank" rel="noopener noreferrer" className="company-link">
                    Careers Portal →
                  </a>
                </div>
              </div>
            </div>

            <div className="jobs-list-container">
              <h3>Available Positions</h3>
              <div className="jobs-list">
                {currentCompany.jobs.map(job => (
                  <div
                    key={job.jobId}
                    className={`job-item ${selectedJob === job.jobId ? 'active' : ''}`}
                    onClick={() => handleJobSelect(job.jobId)}
                  >
                    <div className="job-info">
                      <h4>{job.title}</h4>
                      <p className="job-location">📍 {job.location}</p>
                      <p className="job-salary">{job.salary}</p>
                      <div className="job-meta">
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <span className="job-arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right Panel - Preparation Path */}
        {currentJob && (
          <div className="prep-panel">
            <div className="prep-header">
              <h2>{currentJob.title}</h2>
              <p className="prep-company">{currentCompany.name}</p>
            </div>

            <div className="prep-content">
              {/* Skills Required */}
              <section className="prep-section">
                <h3>📚 Required Skills</h3>
                <p className="skills-description">Click on any skill to learn it</p>
                <div className="skills-grid">
                  {currentJob.skills.map((skill, idx) => (
                    <button
                      key={idx}
                      className="skill-tag-button"
                      onClick={() => handleSkillClick(skill)}
                      title="Click to learn this skill"
                    >
                      {skill}
                      <span className="skill-arrow">→</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Preparation Path */}
              <section className="prep-section">
                <h3>Learning Path</h3>
                <div className="prep-phases">
                  {currentJob.prepPath.map((phase, idx) => (
                    <div key={idx} className="phase-card">
                      <div className="phase-header">
                        <span className="phase-number">{idx + 1}</span>
                        <h4>{phase.phase}</h4>
                      </div>
                      <ul className="phase-topics">
                        {phase.topics.map((topic, topicIdx) => (
                          <li key={topicIdx}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Resources */}
              <section className="prep-section">
                <h3>Learning Resources</h3>
                <div className="resources-list">
                  {currentJob.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <div className="resource-content">
                        <span className="resource-name">{resource.name}</span>
                        <span className="resource-type">{resource.type}</span>
                      </div>
                      <span className="resource-arrow">→</span>
                    </a>
                  ))}
                </div>
              </section>

              {/* Job Details */}
              <section className="prep-section">
                <h3>Job Details</h3>
                <div className="job-details-grid">
                  <div className="detail-item">
                    <strong>Location:</strong> {currentJob.location}
                  </div>
                  <div className="detail-item">
                    <strong>Salary Range:</strong> {currentJob.salary}
                  </div>
                  <div className="detail-item">
                    <strong>Experience:</strong> {currentJob.experience}
                  </div>
                  <div className="detail-item">
                    <strong>Exam Pattern:</strong> {currentJob.examPattern}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!selectedCompany && (
          <div className="empty-state">
            <div className="empty-icon">🏢</div>
            <p>Select a company to view available positions and preparation paths</p>
          </div>
        )}

        {selectedCompany && !selectedJob && (
          <div className="empty-state">
            <div className="empty-icon">💼</div>
            <p>Select a job position to view the preparation path</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="company-info-section">
        <div className="info-card">
          <h3>💡 How to Use</h3>
          <ul>
            <li>Select a company from the list</li>
            <li>View all available positions in that company</li>
            <li>Choose a job role to see the complete preparation path</li>
            <li>Follow the phased learning approach (3 phases)</li>
            <li>Access resources for each phase</li>
            <li>Apply directly through company careers portal</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>🎯 Preparation Tips</h3>
          <ul>
            <li>Start with Phase 1: Build strong fundamentals</li>
            <li>Complete Phase 2: Learn company-specific technologies</li>
            <li>Phase 3: Practice mock interviews and projects</li>
            <li>Visit company careers portal for latest opportunities</li>
            <li>Follow company blogs and tech talks</li>
            <li>Network with current employees on LinkedIn</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
