import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { placementDataEnhanced, getCompanyStats } from "../data/placementDataEnhanced";
import { companyRounds } from "../data/companyRounds";
import { getCertificationsByCompany } from "../data/certifications";
import { getCompanyJobs } from "../data/companySpecific";
import "./UniversalSections.css";

const PlacementEnhanced = () => {
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

  /* ================= STEP 1 : COLLEGES (IITs/NITs Only) ================= */
  if (!selectedCollege) {
    return (
      <div className="placement-container">
        <h2 className="page-title">🎯 Placement Preparation</h2>
        
        <div style={{
          background: '#000000',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          border: '1px solid #333333',
          color: '#ffffff'
        }}>
          <p style={{ marginTop: 0, marginBottom: '10px', lineHeight: '1.6' }}>
            📊 <strong>Browse premier institutes</strong> - IITs, NITs, and IIITs - to see company placements, 
            previous year statistics, and student feedback. Click on any institute to explore placement drives and opportunities.
          </p>
        </div>

        <div className="colleges-grid">
          {placementDataEnhanced.map((college) => (
            <div
              key={college.collegeId}
              className="college-card"
              onClick={() => setSelectedCollege(college)}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                background: '#000000',
                border: '1px solid #333333',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(16, 185, 129, 0.2)';
                e.currentTarget.style.borderColor = '#10b981';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#333333';
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {college.type === 'IIT' ? '🏆' : college.type === 'NIT' ? '⭐' : '💡'}
              </div>
              <h3 style={{
                margin: '0 0 8px 0',
                color: '#e2e8f0',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {college.collegeName}
              </h3>
              <p style={{
                margin: '0 0 12px 0',
                color: '#94a3b8',
                fontSize: '14px'
              }}>
                📍 {college.location}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontWeight: '500'
                }}>
                  {college.type} • {Object.keys(college.companies).length} Companies
                </span>
              </div>
              <span style={{
                marginTop: '12px',
                color: '#10b981',
                fontWeight: '600',
                display: 'block'
              }}>
                EXPLORE →
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ================= STEP 2 : COMPANIES WITH STATS ================= */
  if (selectedCollege && !selectedCompany) {
    const collegeCompanies = Object.keys(selectedCollege.companies);
    
    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedCollege(null)}
          style={{
            padding: '10px 16px',
            background: '#000000',
            border: '1px solid #333333',
            color: '#ffffff',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back to Institutes
        </button>

        {/* College Header with Image */}
        <div style={{
          marginBottom: '30px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #333333',
          background: '#000000'
        }}>
          <img
            src={selectedCollege.placement_image}
            alt={selectedCollege.collegeName}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              opacity: 0.8
            }}
          />
          <div style={{ padding: '20px' }}>
            <h2 style={{ margin: '0 0 8px 0', color: '#e2e8f0' }}>
              {selectedCollege.collegeName}
            </h2>
            <p style={{ margin: '0', color: '#94a3b8' }}>
              🔗 <a href={selectedCollege.linkedinProfile} target="_blank" rel="noopener noreferrer" 
                  style={{ color: '#10b981', textDecoration: 'none' }}>
                View LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        {/* Placement Statistics */}
        {selectedCollege.placementStats && (
          <div style={{
            marginBottom: '30px',
            background: '#000000',
            border: '1px solid #333333',
            borderRadius: '12px',
            padding: '25px'
          }}>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '18px' }}>
              📊 Placement Statistics - {selectedCollege.placementStats.year}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '20px'
            }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Total Students</p>
                <p style={{ margin: '0', color: '#10b981', fontSize: '24px', fontWeight: '700' }}>
                  {selectedCollege.placementStats.totalStudents}
                </p>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Placed Students</p>
                <p style={{ margin: '0', color: '#10b981', fontSize: '24px', fontWeight: '700' }}>
                  {selectedCollege.placementStats.placedStudents}
                </p>
              </div>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Placement %</p>
                <p style={{ margin: '0', color: '#10b981', fontSize: '24px', fontWeight: '700' }}>
                  {selectedCollege.placementStats.placementPercentage}%
                </p>
              </div>
              <div style={{
                background: 'rgba(217, 70, 239, 0.1)',
                border: '1px solid rgba(217, 70, 239, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Highest Package</p>
                <p style={{ margin: '0', color: '#d946ef', fontSize: '24px', fontWeight: '700' }}>
                  ₹{selectedCollege.placementStats.highestPackage}
                </p>
              </div>
              <div style={{
                background: 'rgba(217, 70, 239, 0.1)',
                border: '1px solid rgba(217, 70, 239, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Average Package</p>
                <p style={{ margin: '0', color: '#d946ef', fontSize: '20px', fontWeight: '700' }}>
                  ₹{selectedCollege.placementStats.averagePackage}
                </p>
              </div>
              <div style={{
                background: 'rgba(217, 70, 239, 0.1)',
                border: '1px solid rgba(217, 70, 239, 0.3)',
                borderRadius: '8px',
                padding: '15px',
                textAlign: 'center'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '12px' }}>Minimum Package</p>
                <p style={{ margin: '0', color: '#d946ef', fontSize: '20px', fontWeight: '700' }}>
                  ₹{selectedCollege.placementStats.minPackage}
                </p>
              </div>
            </div>
          </div>
        )}

        <h3 style={{ color: '#e2e8f0', marginBottom: '20px', fontSize: '20px' }}>
          💼 Placement Opportunities ({collegeCompanies.length} companies)
        </h3>

        <div className="companies-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {collegeCompanies.map((company) => {
            const stats = selectedCollege.companies[company];
            
            return (
              <div
                key={company}
                className="company-card"
                onClick={() => setSelectedCompany(company)}
                style={{
                  cursor: 'pointer',
                  background: '#000000',
                  border: '1px solid #333333',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#333333';
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{ margin: '0 0 8px 0', color: '#e2e8f0', fontSize: '18px', fontWeight: '600' }}>
                    {company}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gap: '10px',
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  <div style={{ color: '#ffffff' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>👥 Selected:</span> <span style={{ color: '#ffffff' }}>{stats.selected} students</span>
                  </div>
                  <div style={{ color: '#ffffff' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>💰 Avg Package:</span> <span style={{ color: '#ffffff' }}>₹{stats.avgPackage} LPA</span>
                  </div>
                  <div style={{ color: '#ffffff' }}>
                    <span style={{ color: '#f59e0b', fontWeight: '600' }}>🎯 Max Package:</span> <span style={{ color: '#ffffff' }}>₹{stats.maxPackage} LPA</span>
                  </div>
                </div>

                {stats.feedback && (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '8px',
                    padding: '10px',
                    marginBottom: '12px',
                    fontSize: '12px',
                    color: '#cbd5e1'
                  }}>
                    <div style={{ color: '#10b981', fontWeight: '600', marginBottom: '6px' }}>📝 Student Feedback:</div>
                    <ul style={{ margin: '0', paddingLeft: '16px', lineHeight: '1.5' }}>
                      {stats.feedback.slice(0, 2).map((fb, idx) => (
                        <li key={idx} style={{ marginBottom: '4px', fontSize: '11px' }}>{fb}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <span style={{
                  color: '#3b82f6',
                  fontWeight: '600',
                  display: 'block',
                  textAlign: 'center'
                }}>
                  VIEW DETAILS →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ================= STEP 3 : COMPANY DETAILS WITH CERTIFICATIONS ================= */
  if (selectedCompany && !selectedJob) {
    const stats = getCompanyStats(selectedCollege.collegeId, selectedCompany);
    const certifications = getCertificationsByCompany(selectedCompany);
    const companyJobs = getCompanyJobs(selectedCompany);
    const hasDetailedJobs = companyJobs && companyJobs.jobs && companyJobs.jobs.length > 0;

    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedCompany(null)}
          style={{
            padding: '10px 16px',
            background: '#000000',
            border: '1px solid #333333',
            color: '#ffffff',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back to Companies
        </button>

        <h2 style={{ color: '#ffffff', marginBottom: '8px' }}>{selectedCompany} – Placement Details</h2>

        {/* Company Stats Section */}
        <div style={{
          background: '#000000',
          border: '1px solid #333333',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#10b981', marginBottom: '8px' }}>
              {stats?.selected || 'N/A'}
            </div>
            <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Students Selected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
              ₹{stats?.avgPackage || 0} LPA
            </div>
            <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Average Package</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f59e0b', marginBottom: '8px' }}>
              ₹{stats?.maxPackage || 0} LPA
            </div>
            <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Maximum Package</div>
          </div>
        </div>

        {/* Required Certifications */}
        {certifications.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#e2e8f0', marginBottom: '15px' }}>📜 Required Certifications</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {certifications.map(cert => (
                <div
                  key={cert.id}
                  style={{
                    background: cert.priority === 'Must Have' 
                      ? 'rgba(239, 68, 68, 0.1)' 
                      : cert.priority === 'Important'
                      ? 'rgba(59, 130, 246, 0.1)'
                      : 'rgba(107, 114, 128, 0.1)',
                    border: cert.priority === 'Must Have'
                      ? '1px solid rgba(239, 68, 68, 0.3)'
                      : cert.priority === 'Important'
                      ? '1px solid rgba(59, 130, 246, 0.3)'
                      : '1px solid rgba(107, 114, 128, 0.3)',
                    borderRadius: '8px',
                    padding: '15px',
                  }}
                >
                  <div style={{
                    color: cert.priority === 'Must Have'
                      ? '#ef4444'
                      : cert.priority === 'Important'
                      ? '#3b82f6'
                      : '#6b7280',
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontSize: '13px'
                  }}>
                    {cert.priority === 'Must Have' && '🔴 MUST HAVE'}
                    {cert.priority === 'Important' && '🟡 IMPORTANT'}
                    {cert.priority === 'Optional' && '⚪ OPTIONAL'}
                  </div>
                  <h4 style={{ margin: '0 0 8px 0', color: '#cbd5e1', fontSize: '14px', fontWeight: '600' }}>
                    {cert.name}
                  </h4>
                  <p style={{ margin: '0 0 10px 0', color: '#94a3b8', fontSize: '12px' }}>
                    By {cert.provider} • {cert.estimatedHours}h
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '6px 10px',
                      background: 'rgba(59, 130, 246, 0.2)',
                      color: '#3b82f6',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      border: '1px solid rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    🔗 Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Job Roles or Interview Rounds */}
        {hasDetailedJobs ? (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#e2e8f0', marginBottom: '15px' }}>💼 Available Job Roles</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {companyJobs.jobs.map((job, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedJob(job)}
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.6), rgba(45, 27, 78, 0.6))',
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    borderRadius: '8px',
                    padding: '15px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <h4 style={{ margin: '0 0 8px 0', color: '#e2e8f0', fontSize: '15px', fontWeight: '600' }}>
                    {job.title}
                  </h4>
                  <div style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '8px' }}>
                    📍 {job.location} • 💼 {job.experience}
                  </div>
                  <div style={{ color: '#cbd5e1', fontSize: '13px', marginBottom: '10px' }}>
                    💰 {job.salary}
                  </div>
                  <span style={{ color: '#10b981', fontWeight: '600', fontSize: '12px' }}>
                    VIEW DETAILS →
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#e2e8f0', marginBottom: '15px' }}>❓ Interview Preparation</h3>
            {companyRounds[selectedCompany] && (
              <button
                onClick={() => setSelectedJob('general')}
                style={{
                  padding: '12px 20px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px'
                }}
              >
                📚 View Interview Rounds →
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

  /* ================= STEP 4 : JOB DETAILS / INTERVIEW ROUNDS ================= */
  if (selectedJob) {
    const companyJobs = getCompanyJobs(selectedCompany);
    const isGeneralRounds = selectedJob === 'general';
    const rounds = isGeneralRounds ? companyRounds[selectedCompany] : selectedJob.rounds;

    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedJob(null)}
          style={{
            padding: '10px 16px',
            background: 'rgba(148, 163, 184, 0.2)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            color: '#ffffff',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back
        </button>

        <h2 style={{ color: '#ffffff', marginBottom: '8px' }}>
          {isGeneralRounds ? 'Interview Rounds' : selectedJob.title}
        </h2>

        {!isGeneralRounds && (
          <div style={{
            background: '#000000',
            border: '1px solid #333333',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>📍 Location</div>
              <div style={{ color: '#ffffff', fontWeight: '600' }}>{selectedJob.location}</div>
            </div>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>💼 Experience</div>
              <div style={{ color: '#ffffff', fontWeight: '600' }}>{selectedJob.experience}</div>
            </div>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>💰 Salary</div>
              <div style={{ color: '#ffffff', fontWeight: '600' }}>{selectedJob.salary}</div>
            </div>
          </div>
        )}

        {rounds && rounds.length > 0 && (
          <div>
            <h3 style={{ color: '#ffffff', marginBottom: '20px' }}>📋 Interview Rounds</h3>
            {rounds.map((round, idx) => (
              <div
                key={idx}
                style={{
                  background: '#000000',
                  border: '1px solid #333333',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: '700'
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 style={{ margin: '0', color: '#ffffff', fontSize: '16px', fontWeight: '600' }}>
                      {round.round}
                    </h4>
                    <p style={{ margin: '0', color: '#888888', fontSize: '13px' }}>
                      📝 {round.type}
                    </p>
                  </div>
                </div>

                <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                  📚 Preparation Resources
                </h5>
                <div style={{ display: 'grid', gap: '8px', marginBottom: '15px' }}>
                  {round.resources && round.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontSize: '13px',
                        padding: '8px 12px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '6px',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                      }}
                    >
                      🔗 {res.title}
                    </a>
                  ))}
                </div>

                <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                  ❓ Interview Questions
                </h5>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {round.questions && round.questions.map((q, i) => (
                    <div
                      key={i}
                      style={{
                        background: '#222222',
                        border: '1px solid #333333',
                        borderRadius: '8px',
                        padding: '12px',
                        cursor: 'pointer'
                      }}
                      onClick={() => setExpandedQuestion(expandedQuestion === `${idx}-${i}` ? null : `${idx}-${i}`)}
                    >
                      <div style={{ color: '#ffffff', marginBottom: '8px', fontWeight: '500' }}>
                        {typeof q === 'string' ? q : q.question}
                      </div>
                      {typeof q !== 'string' && q.answer && expandedQuestion === `${idx}-${i}` && (
                        <div style={{
                          marginTop: '12px',
                          paddingTop: '12px',
                          borderTop: '1px solid #333333',
                          color: '#888888',
                          fontSize: '13px',
                          lineHeight: '1.6'
                        }}>
                          <strong style={{ color: '#10b981' }}>💡 Answer:</strong> {q.answer}
                        </div>
                      )}
                      {typeof q !== 'string' && q.answer && (
                        <div style={{ color: '#888888', fontSize: '12px', marginTop: '8px' }}>
                          {expandedQuestion === `${idx}-${i}` ? '▼' : '▶'} Click to {expandedQuestion === `${idx}-${i}` ? 'collapse' : 'expand'} answer
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default PlacementEnhanced;
