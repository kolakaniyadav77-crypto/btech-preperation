import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { allCertifications, getCertificationsByCategory } from '../data/certifications';
import './UniversalSections.css';

export default function Certifications() {
  const { currentUser } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('Cloud');
  const [expandedCert, setExpandedCert] = useState(null);
  const [completedCerts, setCompletedCerts] = useState([]);

  // Track module access
  useEffect(() => {
    if (currentUser?.id) {
      progressTracker.trackModuleAccess(currentUser.id, 'certifications');
    }
  }, [currentUser]);

  // Load completed certifications from localStorage
  useEffect(() => {
    if (currentUser?.id) {
      const saved = localStorage.getItem(`education_path_completed_certs_${currentUser.id}`);
      if (saved) {
        setCompletedCerts(JSON.parse(saved));
      }
    }
  }, [currentUser]);

  const categories = ['Cloud', 'Programming', 'DevOps', 'CRM', 'Data', 'BI/Analytics', 'Security', 'Web Development', 'Mobile', 'AI/ML'];
  const displayedCerts = getCertificationsByCategory(selectedCategory);

  const handleCompletionToggle = (certId) => {
    let updated;
    if (completedCerts.includes(certId)) {
      updated = completedCerts.filter(id => id !== certId);
    } else {
      updated = [...completedCerts, certId];
    }
    setCompletedCerts(updated);
    if (currentUser?.id) {
      localStorage.setItem(`education_path_completed_certs_${currentUser.id}`, JSON.stringify(updated));
    }
  };

  return (
    <main className="main" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="placement-container">
        <h2 className="page-title">📜 Tech Certifications</h2>
        
        <div style={{
          background: '#000000',
          borderRadius: '12px',
          padding: '20px',
          marginBottom: '30px',
          border: '1px solid #333333',
          color: '#ffffff'
        }}>
          <p style={{ marginTop: 0, marginBottom: '15px', lineHeight: '1.6' }}>
            🎯 <strong>Complete industry-recognized certifications</strong> to enhance your profile and become eligible for top companies.
            Each certification includes real training links and company-specific requirements.
          </p>
          <div style={{ fontSize: '14px', color: '#ffffff' }}>
            <strong>Completion Rate:</strong> {completedCerts.length} of {allCertifications.length} certifications completed ({Math.round((completedCerts.length / allCertifications.length) * 100)}%)
          </div>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          flexWrap: 'wrap',
          overflowX: 'auto',
          paddingBottom: '10px'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '10px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                background: selectedCategory === cat 
                  ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                  : '#000000',
                color: selectedCategory === cat ? '#fff' : '#ffffff',
                border: selectedCategory === cat ? '1px solid #10b981' : '1px solid #333333'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {displayedCerts.map(cert => (
            <div
              key={cert.id}
              style={{
                background: '#000000',
                border: completedCerts.includes(cert.id) 
                  ? '2px solid #10b981' 
                  : '1px solid #333333',
                borderRadius: '12px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: expandedCert === cert.id ? 'scale(1.02)' : 'scale(1)',
                boxShadow: expandedCert === cert.id 
                  ? '0 10px 30px rgba(16, 185, 129, 0.2)' 
                  : 'none'
              }}
              onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: completedCerts.includes(cert.id) ? '#10b981' : '#ffffff'
                  }}>
                    {completedCerts.includes(cert.id) ? '✓ ' : ''}{cert.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#888888', marginBottom: '8px' }}>
                    {cert.provider} • {cert.level}
                  </div>
                </div>
              </div>

              {expandedCert === cert.id && (
                <div style={{
                  marginTop: '15px',
                  paddingTop: '15px',
                  borderTop: '1px solid #333333',
                  display: 'grid',
                  gap: '10px'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', color: '#888888', marginBottom: '4px' }}>⏱️ Estimated Hours:</div>
                    <div style={{ color: '#ffffff', fontSize: '14px' }}>{cert.estimatedHours} hours</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '13px', color: '#888888', marginBottom: '4px' }}>🏢 Required by:</div>
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      flexWrap: 'wrap'
                    }}>
                      {cert.companies.slice(0, 3).map((comp, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '12px',
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#10b981',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(16, 185, 129, 0.3)'
                          }}
                        >
                          {comp}
                        </span>
                      ))}
                      {cert.companies.length > 3 && (
                        <span style={{
                          fontSize: '12px',
                          color: '#888888',
                          padding: '4px 8px'
                        }}>
                          +{cert.companies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginTop: '12px'
                  }}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)'}
                      onMouseOut={(e) => e.target.style.boxShadow = 'none'}
                    >
                      🔗 Start Training
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCompletionToggle(cert.id);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        background: completedCerts.includes(cert.id)
                          ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                          : 'rgba(148, 163, 184, 0.2)',
                        color: completedCerts.includes(cert.id) ? '#fff' : '#1f2937',
                        border: completedCerts.includes(cert.id)
                          ? '1px solid #10b981'
                          : '1px solid rgba(148, 163, 184, 0.3)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: '500',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        if (!completedCerts.includes(cert.id)) {
                          e.target.style.background = 'rgba(148, 163, 184, 0.3)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!completedCerts.includes(cert.id)) {
                          e.target.style.background = 'rgba(148, 163, 184, 0.2)';
                        }
                      }}
                    >
                      {completedCerts.includes(cert.id) ? '✓ Completed' : 'Mark Complete'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {displayedCerts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: '#888888'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📭</div>
            <p>No certifications in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
