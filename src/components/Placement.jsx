import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { placementData } from "../data/placementData";
import { companyRounds } from "../data/companyRounds";
import { getCompanyJobs } from "../data/companySpecific";
import generatePracticeQuestions from "../utils/practiceGenerator";
import "./Placement.css";

const Placement = () => {
  const { currentUser } = useAuth();
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const generateAnswer = (questionText) => {
    const q = (questionText || '').toLowerCase();
    
    // Database & Performance
    if (/optimis|optimise|optimized|optimised|slow query|query optimization/.test(q)) {
      return `Approach: (1) Profile the query using EXPLAIN PLAN to identify bottlenecks. (2) Check for missing indexes on filter/join columns. (3) Analyze expensive operations (nested loops, full scans). (4) Optimize: add indexes, rewrite joins/subqueries, limit selected columns. (5) Use materialized views for complex aggregations. Example: An ORM query was forcing N+1 problem. Solution: Used join eager loading, reduced 1000+ queries to 5. Measured 10x improvement in response time.`;
    }
    
    // Production Issues
    if (/resolved a production bug|production bug|critical issue|debugging|bug fix/.test(q)) {
      return `STAR Method: Situation: Production database connection pool was exhausted during peak traffic, causing 500 errors. Task: Diagnose and fix within 2 hours. Action: (1) Checked connection logs and found unclosed connections. (2) Identified a legacy endpoint not closing DB connections properly. (3) Added connection pooling with proper cleanup in finally blocks. (4) Deployed hotfix with monitoring. (5) Implemented automated connection leak detection. Result: Reduced errors by 99%, zero connection pool issues for 6 months. Learning: Implement connection lifecycle hooks from start.`;
    }
    
    // Teamwork
    if (/worked in a team|team to deliver|teamwork|collaborated|cross-functional/.test(q)) {
      return `Situation: Cross-functional project with backend, frontend, and DevOps teams. Task: Deliver microservice payment module in 4 sprints. My Role & Actions: (1) Led architecture design with backend team, ensured API contracts. (2) Coordinated with frontend on request/response formats via Swagger docs. (3) Worked with DevOps on deployment pipeline and monitoring. (4) Held daily 15-min sync calls to unblock issues. (5) Created shared Slack workspace for quick decisions. Result: Delivered on schedule with zero blocking issues. Payment system processed $2M in first month. Team efficiency improved 40% through communication structure.`;
    }
    
    // System Design
    if (/design|system design|url shortener|cache|scalability|architecture|distributed/.test(q)) {
      return `Problem: Design a URL shortening service handling 1M requests/day. Components: (1) API Gateway for load balancing. (2) Microservice for URL encoding/decoding. (3) Redis cache for hot URLs (99.5% hit rate). (4) PostgreSQL for persistent storage with sharding. (5) CDN for global distribution. Data Flow: User submits long URL → API → Check cache → If miss, generate short code, cache, store in DB → return short URL. Scaling: Used consistent hashing for cache distribution, database sharding by URL prefix, async job queue for cleanup. Metrics: P99 latency <100ms, 99.9% availability, 10x cost savings via caching.`;
    }
    
    // Leadership
    if (/lead|leadership|mentor|junior|mentored/.test(q)) {
      return `Context: Promoted to Senior Developer, mentored 3 junior developers. Actions: (1) Created structured onboarding with pair programming schedule. (2) Did weekly 1:1s focusing on skill gaps identification. (3) Assigned progressively challenging tasks: bug fixes → feature development → system design. (4) Did code reviews with constructive feedback, not just corrections. (5) Encouraged conference talks and tech blog posts. Results: 2 juniors promoted to mid-level within 18 months. Team code quality improved (PR review time -50%). One mentee later led critical project successfully.`;
    }
    
    // Conflict Resolution
    if (/conflict|disagreement|challenging|difficult|stakeholder/.test(q)) {
      return `Situation: Backend and frontend teams disagreed on API design. Backend wanted to return nested objects, frontend wanted flat responses (performance-critical mobile). My Action: (1) Called meeting with both teams and customers. (2) Presented both approaches with trade-offs: flexibility vs performance. (3) Proposed versioned API supporting both v1 (flat, mobile) and v2 (nested). (4) Implemented feature flag for gradual rollout. (5) Set metrics to measure performance impact. Result: Mobile load time improved 30%, backend got flexibility for future. Both teams satisfied, launched features 2 weeks ahead of schedule.`;
    }
    
    // Innovation
    if (/innovation|new|idea|improve|optimization|initiative/.test(q)) {
      return `Challenge: Customer support team spending 3 hours daily on repetitive email queries. Initiative: Built AI-powered ticket classifier using NLP and ML. (1) Analyzed 5000 historical tickets, identified 20 common patterns. (2) Trained classifier using TensorFlow, achieved 94% accuracy. (3) Integrated with support system to auto-categorize and suggest templates. (4) Added feedback loop for continuous improvement. Results: Support response time reduced 60%, team satisfaction increased. Cost savings: $50K/year. This became core product feature, now handles 10K+ tickets/month. Demonstrated company-wide impact of technology innovation.`;
    }
    
    // Code Quality
    if (/code quality|review|testing|unit test|coverage|best practice/.test(q)) {
      return `Approach: (1) Enforce code review standards: 2 approvals required, checklist for security/performance. (2) Implement automated testing: 80%+ coverage requirement, integration tests for critical paths. (3) Use static analysis (SonarQube, ESLint) to catch issues early. (4) Refactor technical debt: dedicate 20% sprint time. (5) Knowledge sharing: bi-weekly code review sessions to educate team. (6) Metrics: track bug escape rate, code review turnaround time. Example: Implemented these practices reduced production bugs by 70%, improved onboarding time 35%. Team confidence in code quality increased significantly.`;
    }
    
    // API Design
    if (/api|rest|endpoint|microservice|contract|interface/.test(q)) {
      return `Principles: (1) RESTful design with clear resource names. (2) Versioning support (/v1/, /v2/). (3) Comprehensive error responses with error codes and messages. (4) Request/response documentation via OpenAPI/Swagger. (5) Rate limiting with clear headers. (6) Pagination, filtering, sorting support. Example: Designed payment API. Endpoints: POST /payments (create), GET /payments/:id (retrieve), GET /payments?status=pending (list). Error codes: 400 (bad request), 401 (unauthorized), 422 (validation), 429 (rate limit), 500 (server). Response format: {status, data, meta}. Used async webhooks for notifications. Reduced client-side errors 80% through clear contracts.`;
    }
    
    // Monitoring & Analytics
    if (/monitor|alert|metric|observability|logging|dashboard/.test(q)) {
      return `Strategy: (1) Implement comprehensive logging (structured, different levels). (2) Metrics collection: response times, error rates, business metrics. (3) Real-time dashboards: Grafana for infrastructure, custom dashboard for business KPIs. (4) Alert thresholds: P99 latency >500ms, error rate >1%, disk usage >80%. (5) Distributed tracing (Jaeger) for microservices debugging. (6) Regular incident reviews. Example: Implemented monitoring for payment system. Detected N+1 query issue 2 hours after deploy through latency spike. Alert triggered, investigation took 15 min, fix 10 min, rollback 5 min. Prevented revenue loss. Now proactively alerts catch 95% of issues pre-customer impact.`;
    }
    
    // Security
    if (/security|vulnerability|authentication|authorization|encryption|injection/.test(q)) {
      return `Practices: (1) Input validation: sanitize all user inputs, use parameterized queries (prevent SQL injection). (2) Authentication: implement 2FA, use OAuth2 for third-party integrations. (3) Authorization: role-based access control (RBAC), deny by default. (4) Encryption: TLS for transport, AES-256 for at-rest sensitive data. (5) Secrets management: use vaults (SHA, HashiCorp), never hardcode keys. (6) Dependency scanning: regular audits for vulnerable packages. (7) Penetration testing: quarterly third-party security audits. Example: Discovered SQL injection vulnerability during code review. Fixed immediately, added parameterized queries. Implemented SAST tool to catch similar issues. Zero security incidents in last 2 years due to proactive practices.`;
    }
    
    // Default comprehensive answer
    return `STAR Method: Situation: Describe the context, company size, technology stack. Task: Clearly state the challenge or goal. Action: Detail specific steps you took: technologies used, tools, frameworks. Include decision-making process and alternatives considered. Result: Quantify impact: metrics (latency -50%, cost -30%), timeframe, user impact. Learning: What did you learn? How would you improve if repeated? Always include concrete numbers and business impact. Avoid generic answers - specific examples resonate better and show real experience.`;
  };

  // Track interactions for progress
  const updatePlacementProgress = () => {
    if (!currentUser?.id) return;
    
    // Calculate progress based on user interactions
    // Viewing college = 20%, Company = 40%, Job details = 60%, Viewing questions = 100%
    let progressPercent = 0;
    
    if (selectedJob) {
      progressPercent = 80; // Viewing job prep details
    } else if (selectedCompany) {
      progressPercent = 50; // Viewing companies
    } else if (selectedCollege) {
      progressPercent = 25; // Viewing specific college
    }
    
    // Only update if there's actual progress
    if (progressPercent > 0) {
      progressTracker.updateSectionProgress(currentUser.id, 'placement', progressPercent);
    }
  };

  // Update progress when navigating through placement
  useEffect(() => {
    updatePlacementProgress();
  }, [selectedCollege, selectedCompany, selectedJob, currentUser?.id]);

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
                <div className="company-count" style={{ 
                  color: '#000000', 
                  fontWeight: '700', 
                  fontSize: '14px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}>
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
                  <div className="resource-badge" style={{ 
                    color: '#000000', 
                    fontWeight: '700', 
                    fontSize: '13px',
                    background: '#e8f5e9',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #c8e6c9',
                    display: 'inline-block',
                    marginTop: '8px'
                  }}>
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
                    {(round.questions || []).map((q, i) => {
                      const questionText = typeof q === 'string' ? q : q.question;
                      const answerText = typeof q === 'string' ? generateAnswer(questionText) : (q.answer || '');
                      return (
                        <li
                          key={i}
                          className="question-item"
                          onClick={() => setExpandedQuestion(expandedQuestion === `${idx}-${i}` ? null : `${idx}-${i}`)}
                          style={{ cursor: 'pointer' }}
                        >
                          <span className="q-number">{i + 1}.</span>
                          <div className="q-content">
                            <h5 style={{ color: '#111827', margin: '0 0 5px 0', fontSize: '14px' }}>
                              {questionText}
                            </h5>
                            {answerText && expandedQuestion === `${idx}-${i}` && (
                              <div className="q-answer">
                                <strong style={{ color: '#111827' }}>💡 Answer:</strong> <span style={{ color: '#111827' }}>{answerText}</span>
                              </div>
                            )}
                            {answerText && expandedQuestion !== `${idx}-${i}` && (
                              <div className="expand-hint">[Click to expand answer]</div>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div style={{ marginTop: 10 }}>
                    <button className="enter" onClick={() => {
                      const generated = generatePracticeQuestions({ area: 'interview', count: 20, role: selectedJob.title, company: selectedCompany });
                      // Update progress to 100% when user practices
                      if (currentUser?.id) {
                        progressTracker.updateSectionProgress(currentUser.id, 'placement', 100);
                      }
                      alert('Generated ' + generated.length + ' practice interview prompts. Use console to inspect.');
                      console.log('Generated interview practice:', generated);
                    }}>Practice Interview Prompts</button>
                  </div>
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
                  {round.questions.map((q, i) => {
                    const questionText = typeof q === 'string' ? q : q.question;
                    const answerText = typeof q === 'string' ? generateAnswer(questionText) : (q.answer || '');
                    return (
                      <li key={i} className="question-item" onClick={() => setExpandedQuestion(expandedQuestion === `gen-${idx}-${i}` ? null : `gen-${idx}-${i}`)} style={{ cursor: 'pointer' }}>
                        <span className="q-number">{i + 1}.</span>
                        <div className="q-content">
                          <div className="q-text">{questionText}</div>
                          {answerText && expandedQuestion === `gen-${idx}-${i}` && (
                            <div className="q-answer">
                              <strong>💡 Answer:</strong> {answerText}
                            </div>
                          )}
                          {answerText && expandedQuestion !== `gen-${idx}-${i}` && (
                            <div className="expand-hint">[Click to expand answer]</div>
                          )}
                        </div>
                      </li>
                    );
                  })}
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

