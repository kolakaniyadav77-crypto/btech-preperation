import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { entranceExams, getExamsByCategory, getAllCategories, searchExams } from '../data/entranceExams';
import '../styles/EntranceExams.css';

export default function EntranceExams() {
  const { currentUser } = useAuth();
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Progress updates when user takes exam practice tests
  // Not just by visiting the page

  const categories = ['All', ...getAllCategories()];

  const getFilteredExams = () => {
    let filtered = selectedCategory === 'All' ? entranceExams : getExamsByCategory(selectedCategory);
    
    if (searchTerm) {
      filtered = searchExams(searchTerm);
    }
    
    return filtered;
  };

  const filteredExams = getFilteredExams();
  const currentExam = selectedExam ? entranceExams.find(e => e.id === selectedExam) : null;

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'easy': return '#34d399';
      case 'easy-medium': return '#34d399';
      case 'medium': return '#f59e0b';
      case 'medium-hard': return '#f59e0b';
      case 'hard': return '#ef4444';
      case 'very hard': return '#dc2626';
      default: return '#a78bfa';
    }
  };

  return (
    <div className="exams-container">
      {/* Header */}
      <div className="exams-header">
        <h1>Entrance Exams Hub</h1>
        <p>Prepare for 20+ major entrance exams across India</p>
        <div className="exams-count">
          <span>{entranceExams.length} Total Exams</span>
        </div>
      </div>

      <div className="exams-layout">
        {/* Left Panel - Exams List */}
        <div className="exams-list-panel">
          {/* Search */}
          <div className="exams-search-section">
            <input
              type="text"
              placeholder="Search exams..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="exams-search-input"
            />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <div className="filter-label">Category</div>
            <div className="categories-scroll">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchTerm('');
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Exams List */}
          <div className="exams-list">
            {filteredExams.length === 0 ? (
              <div className="no-exams">No exams found</div>
            ) : (
              filteredExams.map(exam => (
                <div
                  key={exam.id}
                  className={`exam-item ${selectedExam === exam.id ? 'active' : ''}`}
                  onClick={() => setSelectedExam(exam.id)}
                >
                  <div className="exam-item-header">
                    <h4>{exam.acronym}</h4>
                    <span 
                      className="difficulty-badge"
                      style={{ backgroundColor: getDifficultyColor(exam.difficulty) }}
                    >
                      {exam.difficulty}
                    </span>
                  </div>
                  <p className="exam-name">{exam.name}</p>
                  <div className="exam-meta">
                    <span>{exam.category}</span>
                    <span>•</span>
                    <span>{exam.freqency}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Panel - Exam Details */}
        {currentExam ? (
          <div className="exam-details-panel">
            <div className="exam-details-header">
              <div className="header-title">
                <h2>{currentExam.name}</h2>
                <p className="exam-acronym">{currentExam.acronym}</p>
              </div>
              <div className="header-badges">
                <span className="category-badge">{currentExam.category}</span>
                <span 
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(currentExam.difficulty) }}
                >
                  {currentExam.difficulty}
                </span>
              </div>
            </div>

            <div className="exam-details-content">
              {/* Key Info Grid */}
              <section className="details-section">
                <h3>Key Information</h3>
                <div className="info-grid">
                  <div className="info-box">
                    <strong>Frequency</strong>
                    <p>{currentExam.freqency}</p>
                  </div>
                  <div className="info-box">
                    <strong>Exam Fee</strong>
                    <p>{currentExam.examFee}</p>
                  </div>
                  <div className="info-box">
                    <strong>Duration</strong>
                    <p>{currentExam.duration}</p>
                  </div>
                  <div className="info-box">
                    <strong>Total Marks</strong>
                    <p>{currentExam.totalMarks}</p>
                  </div>
                  <div className="info-box">
                    <strong>Prep Time</strong>
                    <p>{currentExam.prepTime}</p>
                  </div>
                </div>
              </section>

              {/* Exam Details */}
              <section className="details-section">
                <h3>Exam Details</h3>
                <div className="exam-details-grid">
                  <div className="detail-row">
                    <strong>Exam Pattern:</strong>
                    <span>{currentExam.examPattern}</span>
                  </div>
                  <div className="detail-row">
                    <strong>Syllabus:</strong>
                    <span>{currentExam.syllabus}</span>
                  </div>
                  {currentExam.branches && currentExam.branches.length > 0 && (
                    <div className="detail-row">
                      <strong>Branches/Streams:</strong>
                      <div className="branches-list">
                        {currentExam.branches.map((branch, idx) => (
                          <span key={idx} className="branch-tag">{branch}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Benefits */}
              <section className="details-section">
                <h3>Benefits & Opportunities</h3>
                <div className="benefits-list">
                  {currentExam.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Resources */}
              <section className="details-section">
                <h3>Learning Resources</h3>
                <div className="resources-links">
                  {currentExam.resources.map((resource, idx) => (
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

              {/* Application Links */}
              <section className="details-section cta-section">
                <div className="cta-buttons">
                  <a
                    href={currentExam.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn primary"
                  >
                    Official Website →
                  </a>
                  <a
                    href={currentExam.applicationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn secondary"
                  >
                    Apply Now →
                  </a>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📖</div>
            <p>Select an exam to view details and resources</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <section className="exams-info-section">
        <div className="info-card">
          <h3>📚 Popular Exam Categories</h3>
          <ul>
            <li><strong>Engineering:</strong> JEE Main, JEE Advanced, GATE, BITSAT, VITEEE</li>
            <li><strong>Medical:</strong> NEET, AIIMS NEET</li>
            <li><strong>MBA:</strong> CAT, XAT, IIFT, SNAP</li>
            <li><strong>Government:</strong> UPSC CSE, SSC CGL, RRB, BANK PO, CDS</li>
            <li><strong>International:</strong> GRE, GMAT, IELTS, TOEFL, SAT, ACT</li>
          </ul>
        </div>
        <div className="info-card">
          <h3>💡 Preparation Tips</h3>
          <ul>
            <li>Start preparation 3-6 months before exam</li>
            <li>Follow official syllabus and exam pattern</li>
            <li>Take regular mock tests and analyze performance</li>
            <li>Join online communities for doubt clearing</li>
            <li>Maintain consistent study schedule</li>
            <li>Focus on weak areas during revision</li>
            <li>Practice previous years' papers</li>
            <li>Stay updated with exam notifications</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
