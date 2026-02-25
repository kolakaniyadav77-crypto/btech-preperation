import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { placementDataEnhanced, getCompanyStats } from "../data/placementDataEnhanced";
import { companyRounds } from "../data/companyRounds";
import collegeRounds from "../data/collegeRounds";
import { companyCodingProblems, genericCodingProblems } from "../data/companyCodingProblems";
import { getCertificationsByCompany } from "../data/certifications";
import { getCompanyJobs } from "../data/companySpecific";
import CodeEditor from "./CodeEditor";

const PlacementEnhanced = () => {
  const { currentUser } = useAuth();
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [expandedProblem, setExpandedProblem] = useState(null);
  const [editorCode, setEditorCode] = useState({});

  const generateAnswer = (questionText) => {
    const q = (questionText || '').toLowerCase();
    if (/optimis|optimise|optimized|optimised|slow query/.test(q)) {
      return 'Explain how you profiled the query, identified bottlenecks (missing indexes, expensive joins), applied fixes (added indexes, rewrote joins/subqueries, limited columns), and measured improvements with before/after metrics.';
    }
    if (/resolved a production bug|production bug/.test(q)) {
      return 'Use the STAR format: describe the situation and impact, the investigation steps you took to reproduce and root-cause the issue, the specific fix or rollback applied, verification steps, and lessons learned to prevent recurrence.';
    }
    if (/worked in a team|team to deliver|teamwork/.test(q)) {
      return 'Describe your role, how you coordinated with teammates (tools/process), specific contributions you made, challenges faced, and the measurable outcome. Emphasize communication and delivery.';
    }
    if (/design|system design|url shortener|cache|system/.test(q)) {
      return 'Outline high-level components, data flow, key APIs, storage choices, scalability concerns, caching, and trade-offs. Add diagrams and mention metrics and failure modes.';
    }
    // generic fallback
    return 'Answer using the STAR method: Situation, Task, Action, Result. Include concrete actions you took, tools/tech used, and measurable outcomes.';
  };

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
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          border: '1px solid #E5E7EB',
          color: '#111827'
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
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
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
                color: '#111827',
                fontSize: '18px',
                fontWeight: '600'
              }}>
                {college.collegeName}
              </h3>
              <p style={{
                margin: '0 0 12px 0',
                color: '#6B7280',
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
                  color: '#000000 !important',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
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
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            color: '#111827',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back to Institutes
        </button>

        {/* Placement Success Images Grid */}
        {selectedCollege.collegeName === 'Anurag University' && (
          <div style={{
            marginBottom: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {/* Card 1: Cognizant Placement */}
            <div style={{
              background: '#FFFFFF',
              border: '2px solid #10b981',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
            }}>
              {/* Top Section */}
              <div style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #1e3a8a 100%)',
                padding: '30px 20px',
                textAlign: 'center',
                color: '#111827'
              }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '24px', fontWeight: 'bold', lineHeight: '1.3' }}>
                  PLACED AT THE TOP. AND READY TO GO PLACES.
                </h3>
              </div>
              {/* Bottom Section */}
              <div style={{
                padding: '25px 20px',
                textAlign: 'center',
                background: '#F9FAFB',
                borderTop: '1px solid #E5E7EB'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '13px', fontWeight: '500' }}>
                  PLACED AT
                </p>
                <p style={{ margin: '0 0 12px 0', color: '#10b981', fontSize: '28px', fontWeight: 'bold' }}>
                  cognizant
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '15px',
                  marginTop: '15px'
                }}>
                  <div>
                    <p style={{ margin: '0', color: '#fbbf24', fontSize: '22px', fontWeight: 'bold' }}>₹4-6.75</p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '11px' }}>LAKHS PER ANNUM</p>
                  </div>
                  <div>
                    <p style={{ margin: '0', color: '#dc2626', fontSize: '22px', fontWeight: 'bold' }}>126</p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '11px' }}>STUDENTS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Accenture Placement */}
            <div style={{
              background: '#FFFFFF',
              border: '2px solid #10b981',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
            }}>
              {/* Top Section */}
              <div style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #1e3a8a 100%)',
                padding: '30px 20px',
                textAlign: 'center',
                color: '#111827'
              }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '12px', fontWeight: 'bold', color: '#fbbf24' }}>CLASS OF 2026</p>
                <h3 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', lineHeight: '1.3' }}>
                  PLACED AT THE TOP. AND READY TO GO PLACES.
                </h3>
              </div>
              {/* Bottom Section */}
              <div style={{
                padding: '25px 20px',
                textAlign: 'center',
                background: '#F9FAFB',
                borderTop: '1px solid #E5E7EB'
              }}>
                <p style={{ margin: '0 0 8px 0', color: '#94a3b8', fontSize: '13px', fontWeight: '500' }}>
                  PLACED AT
                </p>
                <p style={{ margin: '0 0 12px 0', color: '#10b981', fontSize: '28px', fontWeight: 'bold' }}>
                  accenture
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '15px',
                  marginTop: '15px'
                }}>
                  <div>
                    <p style={{ margin: '0', color: '#fbbf24', fontSize: '22px', fontWeight: 'bold' }}>₹4.5-6.5</p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '11px' }}>LAKHS PER ANNUM</p>
                  </div>
                  <div>
                    <p style={{ margin: '0', color: '#dc2626', fontSize: '22px', fontWeight: 'bold' }}>246</p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '11px' }}>STUDENTS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Global Careers */}
            <div style={{
              background: '#FFFFFF',
              border: '2px solid #10b981',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
            }}>
              {/* Top Section */}
              <div style={{
                background: '#FFFFFF',
                padding: '25px 20px',
                textAlign: 'center'
              }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold', color: '#dc2626', lineHeight: '1.3' }}>
                  BUILDING GLOBAL CAREERS
                </h3>
                <p style={{ margin: '0', fontSize: '13px', color: '#1e3a8a', fontWeight: 'bold' }}>
                  WITH LEADING MNCs
                </p>
              </div>
              {/* Bottom Section */}
              <div style={{
                padding: '20px',
                background: '#F9FAFB',
                borderTop: '1px solid #E5E7EB'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '15px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', color: '#dc2626' }}>282</p>
                    <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>LTIMindtree</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', color: '#10b981' }}>246</p>
                    <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Accenture</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', color: '#3b82f6' }}>159</p>
                    <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Infosys</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: '0', fontSize: '24px', fontWeight: 'bold', color: '#fbbf24' }}>126</p>
                    <p style={{ margin: '8px 0 0 0', fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Cognizant</p>
                  </div>
                </div>
                <p style={{ margin: '15px 0 0 0', fontSize: '11px', color: '#64748b', textAlign: 'center' }}>
                  Plus 5+ leading companies
                </p>
              </div>
            </div>
          </div>
        )}

        {/* College Header with Image */}
        <div style={{
          marginBottom: '30px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #E5E7EB',
          background: '#FFFFFF'
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
            <h2 style={{ margin: '0 0 8px 0', color: '#111827' }}>
                  {selectedCollege.collegeName}
                </h2>
                <p style={{ margin: '0', color: '#6B7280' }}>
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
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '25px'
          }}>
            <h3 style={{ color: '#111827', marginBottom: '20px', fontSize: '18px' }}>
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

        <h3 style={{ color: '#111827', marginBottom: '20px', fontSize: '20px' }}>
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
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
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
                  <h3 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '18px', fontWeight: '600' }}>
                    {company}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gap: '10px',
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  <div style={{ color: '#111827' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>👥 Selected:</span> <span style={{ color: '#111827' }}>{stats.selected} students</span>
                  </div>
                  <div style={{ color: '#111827' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '600' }}>💰 Avg Package:</span> <span style={{ color: '#111827' }}>₹{stats.avgPackage} LPA</span>
                  </div>
                  <div style={{ color: '#111827' }}>
                    <span style={{ color: '#f59e0b', fontWeight: '600' }}>🎯 Max Package:</span> <span style={{ color: '#111827' }}>₹{stats.maxPackage} LPA</span>
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
                    color: '#6B7280'
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
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            color: '#111827',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back to Companies
        </button>

        <h2 style={{ color: '#111827', marginBottom: '8px' }}>{selectedCompany} – Placement Details</h2>

        {/* Company Stats Section */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
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
            <div style={{ color: '#111827', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Students Selected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#3b82f6', marginBottom: '8px' }}>
              ₹{stats?.avgPackage || 0} LPA
            </div>
            <div style={{ color: '#111827', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Average Package</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: '700', color: '#f59e0b', marginBottom: '8px' }}>
              ₹{stats?.maxPackage || 0} LPA
            </div>
            <div style={{ color: '#111827', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Maximum Package</div>
          </div>
        </div>

        {/* Required Certifications */}
        {certifications.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#111827', marginBottom: '15px' }}>📜 Required Certifications</h3>
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
            {/* Always show View Interview Rounds for the company (falls back to college rounds if company rounds missing) */}
            {(companyRounds[selectedCompany] || (selectedCollege && collegeRounds[selectedCollege.collegeId])) && (
              <div style={{ marginTop: '18px' }}>
                <button
                  onClick={() => setSelectedJob('general')}
                  style={{
                    padding: '12px 20px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px'
                  }}
                >
                  📚 View Interview Rounds for {selectedCompany} →
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ marginBottom: '30px' }}>
              <h3 style={{ color: '#e2e8f0', marginBottom: '15px' }}>❓ Interview Preparation</h3>
              {(companyRounds[selectedCompany] || (selectedCollege && collegeRounds[selectedCollege.collegeId])) && (
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
    // getCompanyJobs available for future use
    const isGeneralRounds = selectedJob === 'general';
    // Prefer company-specific rounds, fall back to college-specific rounds when available
    let rounds = null;
    if (isGeneralRounds) {
      rounds = companyRounds[selectedCompany] || (selectedCollege && collegeRounds[selectedCollege.collegeId]) || [];
    } else {
      rounds = selectedJob.rounds || [];
    }
    const codingProblems = (companyCodingProblems && companyCodingProblems[selectedCompany]) ? companyCodingProblems[selectedCompany] : genericCodingProblems;

    return (
      <div className="placement-container">
        <button
          className="back-btn"
          onClick={() => setSelectedJob(null)}
          style={{
            padding: '10px 16px',
            background: 'rgba(148, 163, 184, 0.2)',
            border: '1px solid rgba(148, 163, 184, 0.3)',
            color: '#111827',
            borderRadius: '6px',
            cursor: 'pointer',
            marginBottom: '20px',
            fontWeight: '600'
          }}
        >
          ← Back
        </button>

        <h2 style={{ color: '#111827', marginBottom: '8px' }}>
          {isGeneralRounds ? 'Interview Rounds' : selectedJob.title}
        </h2>

        {!isGeneralRounds && (
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>📍 Location</div>
              <div style={{ color: '#111827', fontWeight: '600' }}>{selectedJob.location}</div>
            </div>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>💼 Experience</div>
              <div style={{ color: '#111827', fontWeight: '600' }}>{selectedJob.experience}</div>
            </div>
            <div>
              <div style={{ color: '#888888', fontSize: '13px', marginBottom: '4px' }}>💰 Salary</div>
              <div style={{ color: '#111827', fontWeight: '600' }}>{selectedJob.salary}</div>
            </div>
          </div>
        )}

        {rounds && rounds.length > 0 && (
          <div>
            <h3 style={{ color: '#111827', marginBottom: '20px' }}>📋 Interview Rounds</h3>
            {rounds.map((round, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
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
                    <h4 style={{ margin: '0', color: '#111827', fontSize: '16px', fontWeight: '600' }}>
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
                  {round.questions && round.questions.map((q, i) => {
                    const questionText = typeof q === 'string' ? q : q.question;
                    const answerText = typeof q === 'string' ? generateAnswer(questionText) : (q.answer || '');
                    const keyId = `${idx}-${i}`;
                    return (
                      <div
                        key={i}
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          padding: '12px',
                          cursor: 'pointer'
                        }}
                        onClick={() => setExpandedQuestion(expandedQuestion === keyId ? null : keyId)}
                      >
                        <div style={{ color: '#111827', marginBottom: '8px', fontWeight: '500' }}>
                          <h6 style={{ margin: '0', color: '#111827', fontSize: '14px' }}>
                            {questionText}
                          </h6>
                        </div>
                        {answerText && expandedQuestion === keyId && (
                          <div style={{
                            marginTop: '12px',
                            paddingTop: '12px',
                            borderTop: '1px solid #E5E7EB',
                            color: '#111827',
                            fontSize: '13px',
                            lineHeight: '1.6'
                          }}>
                            <strong style={{ color: '#10b981' }}>💡 Answer:</strong> {answerText}
                          </div>
                        )}
                        {answerText && (
                          <div style={{ color: '#6B7280', fontSize: '12px', marginTop: '8px' }}>
                            {expandedQuestion === keyId ? '▼' : '▶'} Click to {expandedQuestion === keyId ? 'collapse' : 'expand'} answer
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* if this round includes coding problems, render them with full IDE support */}
                {round.codingProblems && round.codingProblems.length > 0 && (
                  <div style={{ marginTop: '20px' }}>
                    <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                      💻 Coding Practice
                    </h5>
                    <div style={{ display: 'grid', gap: '15px' }}>
                      {round.codingProblems.map((prob) => (
                        <div key={`${idx}-${prob.id}`} style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                          {/* Problem Header */}
                          <div style={{ padding: '15px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '15px' }}>
                              <div>
                                <h4 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '16px', fontWeight: '600' }}>
                                  {prob.title}
                                </h4>
                                <div style={{ color: '#94a3b8', fontSize: '13px' }}>
                                  📊 Difficulty: <span style={{
                                    color: prob.difficulty === 'Easy' ? '#10b981' : prob.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                                    fontWeight: '600'
                                  }}>{prob.difficulty}</span>
                                </div>
                              </div>
                              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                <button
                                  onClick={() => setExpandedProblem(expandedProblem === prob.id ? null : prob.id)}
                                  style={{
                                    padding: '8px 14px',
                                    background: 'rgba(59, 130, 246, 0.2)',
                                    color: '#3b82f6',
                                    border: '1px solid rgba(59, 130, 246, 0.4)',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '12px',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                                  }}
                                  onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                                  }}
                                >
                                  {expandedProblem === prob.id ? 'Hide' : 'Show'} details
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Problem Description & Compiler */}
                          {expandedProblem === prob.id && (
                            <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB' }}>
                              {/* Description */}
                              <div style={{ marginBottom: '20px' }}>
                                <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                                  📝 Problem Statement
                                </h5>
                                <div style={{
                                  background: '#F9FAFB',
                                  border: '1px solid #E5E7EB',
                                  borderRadius: '8px',
                                  padding: '12px',
                                  color: '#cbd5e1',
                                  fontSize: '13px',
                                  lineHeight: '1.6'
                                }}>
                                  {prob.description}
                                </div>
                              </div>

                              {/* Code Editor & Compiler */}
                              <div style={{ marginBottom: '20px' }}>
                                <div>
                                  <CodeEditor
                                    initialCode={editorCode[prob.id] || ''}
                                    language={(() => {
                                      const lang = editorCode[prob.id + '_lang'] || 'javascript';
                                      switch ((lang || '').toLowerCase()) {
                                        case 'javascript': return 'JavaScript';
                                        case 'python': return 'Python';
                                        case 'java': return 'Java';
                                        case 'cpp': return 'C++';
                                        case 'c++': return 'C++';
                                        case 'csharp': return 'C#';
                                        case 'c#': return 'C#';
                                        default: return 'JavaScript';
                                      }
                                    })()}
                                    onCodeChange={(code) => setEditorCode({ ...editorCode, [prob.id]: code })}
                                    showCompiler={true}
                                    allowLanguageChange={true}
                                    onLanguageChange={(lang) => {
                                      const key = (lang || '').toLowerCase();
                                      const short = key === 'c++' ? 'cpp' : key === 'c#' ? 'csharp' : key;
                                      setEditorCode({ ...editorCode, [prob.id + '_lang']: short });
                                    }}
                                  />
                                </div>
                              </div>

                              {/* Load Solution */}
                              <div>
                                <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                                  💡 Solution Approach
                                </h5>
                                <button
                                  style={{
                                    padding: '8px 14px',
                                    background: 'rgba(16, 185, 129, 0.2)',
                                    color: '#10b981',
                                    border: '1px solid rgba(16, 185, 129, 0.4)',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    fontSize: '12px',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onClick={() => {
                                    // naive display of solution if stored on problem
                                    alert(prob.solution || 'Solution not provided');
                                  }}
                                >
                                  View solution
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Coding Questions asked in company drives */}
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#111827', marginBottom: '15px' }}>🧩 Coding Questions (asked in company drives)</h3>
          <div style={{ display: 'grid', gap: '15px' }}>
            {(codingProblems || []).map((prob) => (
              <div key={prob.id} style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                {/* Problem Header */}
                <div style={{ padding: '15px', background: '#F9FAFB', borderBottom: '1px solid #E5E7EB' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '15px' }}>
                    <div>
                      <h4 style={{ margin: '0 0 8px 0', color: '#111827', fontSize: '16px', fontWeight: '600' }}>
                        {prob.title}
                      </h4>
                      <div style={{ color: '#94a3b8', fontSize: '13px' }}>
                        📊 Difficulty: <span style={{
                          color: prob.difficulty === 'Easy' ? '#10b981' : prob.difficulty === 'Medium' ? '#f59e0b' : '#ef4444',
                          fontWeight: '600'
                        }}>{prob.difficulty}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setExpandedProblem(expandedProblem === prob.id ? null : prob.id)}
                        style={{
                          padding: '8px 14px',
                          background: 'rgba(59, 130, 246, 0.2)',
                          color: '#3b82f6',
                          border: '1px solid rgba(59, 130, 246, 0.4)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '12px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.6)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                          e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
                        }}
                      >
                        {expandedProblem === prob.id ? '▼ Collapse' : '▶ Expand'}
                      </button>
                      <a
                        href={prob.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '8px 14px',
                          background: 'rgba(16, 185, 129, 0.2)',
                          color: '#10b981',
                          textDecoration: 'none',
                          border: '1px solid rgba(16, 185, 129, 0.4)',
                          borderRadius: '6px',
                          fontWeight: '600',
                          fontSize: '12px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.3)';
                          e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                          e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                        }}
                      >
                        🔗 View on Platform
                      </a>
                    </div>
                  </div>
                </div>

                {/* Problem Description & Compiler */}
                {expandedProblem === prob.id && (
                  <div style={{ padding: '20px', borderBottom: '1px solid #E5E7EB' }}>
                    {/* Description */}
                    <div style={{ marginBottom: '20px' }}>
                      <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                        📝 Problem Statement
                      </h5>
                      <div style={{
                        background: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        padding: '12px',
                        color: '#cbd5e1',
                        fontSize: '13px',
                        lineHeight: '1.6'
                      }}>
                        {prob.description}
                      </div>
                    </div>

                    {/* Code Editor & Compiler */}
                    <div style={{ marginBottom: '20px' }}>
                      {/* Use the shared CodeEditor component (same as DSA Practice) so compiler output appears inline */}
                      <div>
                        <CodeEditor
                          initialCode={editorCode[prob.id] || ''}
                          language={(() => {
                            const lang = editorCode[prob.id + '_lang'] || 'javascript';
                            // normalize to CodeEditor language names
                            switch ((lang || '').toLowerCase()) {
                              case 'javascript': return 'JavaScript';
                              case 'python': return 'Python';
                              case 'java': return 'Java';
                              case 'cpp': return 'C++';
                              case 'c++': return 'C++';
                              case 'csharp': return 'C#';
                              case 'c#': return 'C#';
                              default: return 'JavaScript';
                            }
                          })()}
                          onCodeChange={(code) => setEditorCode({ ...editorCode, [prob.id]: code })}
                          showCompiler={true}
                          allowLanguageChange={true}
                          onLanguageChange={(lang) => {
                            // map back to internal short keys for consistency
                            const key = (lang || '').toLowerCase();
                            const short = key === 'c++' ? 'cpp' : key === 'c#' ? 'csharp' : key;
                            setEditorCode({ ...editorCode, [prob.id + '_lang']: short });
                          }}
                        />
                      </div>
                    </div>

                    {/* Load Solution */}
                    <div>
                      <h5 style={{ color: '#10b981', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>
                        💡 Solution Approach
                      </h5>
                      <button
                        onClick={() => {
                          const solutionCode = prob.solution || `// Optimal Solution for ${prob.title}\n// Time Complexity: O(n)\n// Space Complexity: O(1)\n\nfunction solve(input) {\n  // Your optimized solution here\n  return result;\n}`;
                          setEditorCode({
                            ...editorCode,
                            [prob.id]: solutionCode,
                            [prob.id + '_showSolution']: !editorCode[prob.id + '_showSolution']
                          });
                        }}
                        style={{
                          padding: '10px 16px',
                          background: 'rgba(16, 185, 129, 0.2)',
                          color: '#10b981',
                          border: '1px solid rgba(16, 185, 129, 0.4)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '12px',
                          marginBottom: '12px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.3)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(16, 185, 129, 0.2)';
                        }}
                      >
                        {editorCode[prob.id + '_showSolution'] ? '🔒 Hide Solution' : '🔓 Load Solution to Editor'}
                      </button>
                      {editorCode[prob.id + '_showSolution'] && (
                        <div style={{
                          background: '#F9FAFB',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          borderRadius: '8px',
                          padding: '12px',
                          color: '#cbd5e1',
                          fontSize: '12px',
                          lineHeight: '1.5',
                          marginTop: '12px'
                        }}>
                          <div style={{ color: '#10b981', fontWeight: '600', marginBottom: '8px' }}>Solution Details:</div>
                          <div style={{ color: '#94a3b8', fontSize: '11px' }}>
                            ✅ Solution loaded in editor above
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Collapsed View */}
                {expandedProblem !== prob.id && (
                  <div style={{ padding: '12px 15px', color: '#94a3b8', fontSize: '13px' }}>
                    {prob.description.substring(0, 100)}...
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }
};

export default PlacementEnhanced;


