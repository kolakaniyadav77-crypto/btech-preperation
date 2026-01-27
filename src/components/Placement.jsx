import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { placementData } from "../data/placementData";
import { companyRounds } from "../data/companyRounds";
import { getCompanyJobs } from "../data/companySpecific";
import "./UniversalSections.css";

const Placement = () => {
  const { currentUser } = useAuth();
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Track module access
  useEffect(() => {
    if (currentUser?.id) {
      progressTracker.trackModuleAccess(currentUser.id, 'placement');
    }
  }, [currentUser]);

  /* ================= STEP 1 : COLLEGES ================= */
  if (!selectedCollege) {
    return (
      <div className="placement-container">
        <h2 className="page-title">🎯 Placement Prep</h2>

        <div className="colleges-grid">
          {placementData.map((college) => (
            <div
              key={college.collegeId}
              className="college-card"
              onClick={() => setSelectedCollege(college)}
            >
              <div className="card-icon">🏫</div>
              <h3>{college.collegeName}</h3>
              <p className="college-location">{college.location}</p>
              <div className="company-count">
                {college.companies.length} Companies
              </div>
              <span className="enter">ENTER PORTAL →</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ================= STEP 2 : COMPANIES ================= */
  if (selectedCollege && !selectedCompany) {
    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedCollege(null)}
        >
          ← Back to Colleges
        </button>

        <h2 className="page-title">
          {selectedCollege.collegeName} – 🚀 Placement Drives
        </h2>

        <div className="companies-grid">
          {selectedCollege.companies.map((company) => {
            const companyJobs = getCompanyJobs(company);
            const hasResources = companyJobs && companyJobs.jobs && companyJobs.jobs.length > 0;
            
            return (
              <div
                key={company}
                className="company-card"
                onClick={() => setSelectedCompany(company)}
              >
                <div className="company-icon">💼</div>
                <h3>{company}</h3>
                <p className="company-subtitle">
                  {hasResources ? `${companyJobs.jobs.length} Job Roles` : 'View Interview Details'}
                </p>
                {hasResources && (
                  <div className="resource-badge">
                    ✓ Resources Available
                  </div>
                )}
                <span className="arrow">→</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ================= STEP 3 : JOB ROLES BY COMPANY ================= */
  if (selectedCompany && !selectedJob) {
    const companyJobs = getCompanyJobs(selectedCompany);
    
    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedCompany(null)}
        >
          ← Back to Companies
        </button>

        <h2 className="page-title">
          {selectedCompany} – 💼 Job Opportunities
        </h2>

        {/* Generate generic job roles from company rounds if detailed jobs not available */}
        {(() => {
          const jobsToDisplay = (companyJobs && companyJobs.jobs && companyJobs.jobs.length > 0) 
            ? companyJobs.jobs
            : [
                {
                  jobId: 'generic-1',
                  title: 'Software Engineer',
                  location: 'Multiple Locations',
                  salary: 'Based on Experience',
                  experience: 'Fresher to Experienced',
                  skills: ['Programming', 'Problem Solving', 'Data Structures'],
                  isGeneric: true
                },
                {
                  jobId: 'generic-2',
                  title: 'Technical Analyst',
                  location: 'Multiple Locations',
                  salary: 'Based on Experience',
                  experience: 'Fresher to Experienced',
                  skills: ['Analysis', 'Communication', 'Technical Knowledge'],
                  isGeneric: true
                },
                {
                  jobId: 'generic-3',
                  title: 'Graduate Associate',
                  location: 'Multiple Locations',
                  salary: 'Based on Experience',
                  experience: 'Fresher',
                  skills: ['Basic Programming', 'Aptitude', 'Soft Skills'],
                  isGeneric: true
                }
              ];
          
          return (
            <div className="jobs-container">
              {jobsToDisplay.map((job) => (
                <div
                  key={job.jobId}
                  className="job-role-card"
                  onClick={() => setSelectedJob(job)}
                  style={job.isGeneric ? { opacity: 0.95 } : {}}
                >
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-location">📍 {job.location}</span>
                  </div>
                  <div className="job-details">
                    <div className="detail-item">
                      <span className="label">💰 Salary:</span>
                      <span className="value">{job.salary}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">👤 Experience:</span>
                      <span className="value">{job.experience}</span>
                    </div>
                  </div>
                  <div className="skills-section">
                    <span className="skills-label">Required Skills:</span>
                    <div className="skills-tags">
                      {job.skills && job.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  {job.isGeneric && (
                    <div style={{ 
                      padding: '8px 12px', 
                      background: 'rgba(59, 130, 246, 0.15)', 
                      borderRadius: '6px',
                      marginBottom: '12px',
                      fontSize: '0.85rem',
                      color: '#60a5fa',
                      textAlign: 'center',
                      fontWeight: '600'
                    }}>
                      General Position
                    </div>
                  )}
                  <button className="view-details-btn">
                    View Prep Resources & Rounds →
                  </button>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    );
  }

  /* ================= STEP 4 : JOB PREPARATION DETAILS ================= */
  if (selectedJob && selectedJob !== 'general') {
    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedJob(null)}
        >
          ← Back to Job Roles
        </button>

        <div className="job-prep-header">
          <h2 className="page-title">
            {selectedJob.title} @ {selectedCompany}
          </h2>
          <div className="job-prep-meta">
            <span>📍 {selectedJob.location}</span>
            <span>💰 {selectedJob.salary}</span>
            <span>👤 {selectedJob.experience}</span>
          </div>
        </div>

        {/* Preparation Path */}
        <section className="prep-section">
          <h3 className="section-title">📚 Preparation Path</h3>
          <div className="prep-phases">
            {selectedJob.prepPath && selectedJob.prepPath.map((phase, idx) => (
              <div key={idx} className="phase-card">
                <div className="phase-number">{idx + 1}</div>
                <div className="phase-content">
                  <h4>{phase.phase}</h4>
                  <ul className="topics-list">
                    {phase.topics.map((topic, i) => (
                      <li key={i}>✓ {topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="prep-section">
          <h3 className="section-title">🔗 Learning Resources</h3>
          <div className="resources-grid">
            {selectedJob.resources && selectedJob.resources.map((resource, idx) => (
              <a
                key={idx}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card"
              >
                <span className="resource-icon">📖</span>
                <span className="resource-name">{resource.name}</span>
                <span className="external-link">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* Interview Rounds */}
        <section className="prep-section">
          <h3 className="section-title">🎯 Interview Rounds & Questions</h3>
          <div className="interview-rounds">
            {companyRounds[selectedCompany]?.map((round, idx) => (
              <div key={idx} className="round-card-enhanced">
                <div className="round-header">
                  <div className="round-badge">{idx + 1}</div>
                  <div className="round-info">
                    <h3>{round.round}</h3>
                    <p className="round-type">📝 {round.type}</p>
                  </div>
                </div>

                <div className="round-section">
                  <h4>📚 Preparation Resources</h4>
                  <div className="resources-list">
                    {round.resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-link"
                      >
                        <span className="link-icon">🔗</span>
                        {res.title}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="round-section">
                  <h4>❓ Interview Questions & Tips</h4>
                  <ul className="questions-list">
                    {round.questions.map((q, i) => (
                      <li
                        key={i}
                        className="question-item"
                        onClick={() => setExpandedQuestion(expandedQuestion === `${idx}-${i}` ? null : `${idx}-${i}`)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="q-number">{i + 1}.</span>
                        <div className="q-content">
                          <div className="q-text">{typeof q === "string" ? q : q.question}</div>
                          {typeof q !== "string" && q.answer && expandedQuestion === `${idx}-${i}` && (
                            <div className="q-answer">
                              <strong>💡 Answer:</strong> {q.answer}
                            </div>
                          )}
                          {typeof q !== "string" && q.answer && expandedQuestion !== `${idx}-${i}` && (
                            <div className="expand-hint">[Click to expand answer]</div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  /* ================= STEP 4 (ALTERNATIVE): GENERAL ROUNDS ================= */
  if (selectedJob === 'general') {
    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedJob(null)}
        >
          ← Back to Company
        </button>

        <h2 className="page-title">
          {selectedCompany} – 📋 Interview Rounds
        </h2>

        <div className="interview-rounds">
          {companyRounds[selectedCompany]?.map((round, idx) => (
            <div key={idx} className="round-card-enhanced">
              <div className="round-header">
                <div className="round-badge">{idx + 1}</div>
                <div className="round-info">
                  <h3>{round.round}</h3>
                  <p className="round-type">📝 {round.type}</p>
                </div>
              </div>

              <div className="round-section">
                <h4>📚 Preparation Resources</h4>
                <div className="resources-list">
                  {round.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span className="link-icon">🔗</span>
                      {res.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="round-section">
                <h4>❓ Interview Questions</h4>
                <ul className="questions-list">
                  {round.questions.map((q, i) => (
                    <li key={i} className="question-item">
                      <span className="q-number">{i + 1}.</span>
                      <div className="q-content">
                        <div className="q-text">{typeof q === "string" ? q : q.question}</div>
                        {typeof q !== "string" && q.answer && (
                          <div className="q-answer">
                            <strong>💡 Answer:</strong> {q.answer}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Placement;
