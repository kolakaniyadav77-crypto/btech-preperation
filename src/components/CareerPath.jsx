import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { departments } from '../data/careerPaths';
import { getSkillLink } from '../data/skillsMapping';
import './CareerPath.css';

const CareerPath = () => {
  const { currentUser } = useAuth();
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  // Track when user visits this section
  useEffect(() => {
    if (currentUser?.id) {
      progressTracker.incrementSectionProgress(currentUser.id, 'careers', 10);
    }
  }, [currentUser?.id]);

  // Handler for skill badge click
  const handleSkillClick = (skillName) => {
    const skillLink = getSkillLink(skillName);
    if (skillLink.type === 'internal') {
      navigate(skillLink.route);
    } else {
      window.open(skillLink.link, '_blank');
    }
  };

  // View 1: Content View (Learning Path)
  if (selectedDept && selectedJob) {
    const dept = departments.find(d => d.id === selectedDept);
    const job = dept.jobs.find(j => j.id === selectedJob);

    return (
      <div className="career-container">
        <button className="back-btn" onClick={() => setSelectedJob(null)}>
          ← Back to Jobs
        </button>

        <div className="job-header">
          <h2>{job.title}</h2>
          <div className="job-meta">
            <span className="salary">💰 {job.salary}</span>
            <span className="companies">🏢 {job.companies}</span>
          </div>
        </div>

        {/* Required Skills */}
        <div className="section-box">
          <h3>🎯 Required Skills</h3>
          <div className="skills-grid">
            {job.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="skill-badge clickable-skill"
                onClick={() => handleSkillClick(skill)}
                title={`Click to learn ${skill}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path Phases */}
        <div className="learning-phases">
          <h3>📚 Learning Path</h3>
          <div className="timeline">
            {job.learningPath.map((phase, idx) => (
              <div key={idx} className="phase-box">
                <div className="phase-header">
                  <h4>{phase.phase}</h4>
                </div>
                <div className="phase-content">
                  <div className="topics-list">
                    <h5>Topics to Learn:</h5>
                    <ul>
                      {phase.topics.map((topic, i) => (
                        <li key={i}>✓ {topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="resources-list">
                    <h5>Learning Resources:</h5>
                    <ul>
                      {phase.resources.map((resource, i) => (
                        <li key={i}>📖 {resource}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="section-box">
          <h3>⏱️ Total Time Required</h3>
          <p className="timeline-text">{job.timeline}</p>
        </div>

        {/* Important Links */}
        <div className="section-box">
          <h3>🔗 Important Resources & Links</h3>
          <div className="links-grid">
            {job.links.map((link, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                Visit Resource {idx + 1} →
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // View 2: Jobs View
  if (selectedDept) {
    const dept = departments.find(d => d.id === selectedDept);

    return (
      <div className="career-container">
        <button className="back-btn" onClick={() => setSelectedDept(null)}>
          ← Back to Departments
        </button>

        <h2 className="page-title">
          {dept.icon} {dept.name}
        </h2>
        <p className="dept-description">{dept.description}</p>

        <div className="jobs-grid">
          {dept.jobs.map((job) => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => setSelectedJob(job.id)}
            >
              <div className="job-title">{job.title}</div>
              <div className="job-salary">{job.salary}</div>
              <div className="job-companies">{job.companies}</div>
              <div className="job-skills">
                {job.skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
              <button className="explore-btn">Explore Path →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // View 3: Departments View
  return (
    <div className="career-container">
      <h1 className="main-title">🚀 Career Path Navigator</h1>
      <p className="subtitle">
        Explore career paths in different engineering disciplines and get
        personalized learning roadmaps
      </p>

      <div className="departments-grid">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="dept-card"
            onClick={() => setSelectedDept(dept.id)}
          >
            <div className="dept-icon">{dept.icon}</div>
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
            <div className="job-count">{dept.jobs.length}+ Jobs Available</div>
            <button className="explore-btn">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPath;
