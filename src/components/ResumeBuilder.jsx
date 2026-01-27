import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import ResumeTemplate from './ResumeTemplate';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('form');
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      portfolio: '',
      linkedin: ''
    },
    professional: {
      summary: ''
    },
    experience: [
      {
        id: 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        currentlyWorking: false,
        description: ''
      }
    ],
    education: [
      {
        id: 1,
        institution: '',
        degree: '',
        field: '',
        graduationDate: '',
        percentage: ''
      }
    ],
    skills: [
      { id: 1, category: 'Programming', items: '' }
    ],
    certifications: [
      { id: 1, certification: '', issuer: '', date: '' }
    ],
    projects: [
      { id: 1, title: '', description: '', link: '' }
    ]
  });

  // Progress updates when user saves resume
  // Not just by visiting the page
  const updateResumeProgress = () => {
    if (currentUser?.id) {
      progressTracker.updateSectionProgress(currentUser.id, 'resume', 50);
    }
  };

  const handlePersonalChange = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const handleProfessionalChange = (value) => {
    setResumeData(prev => ({
      ...prev,
      professional: { ...prev.professional, summary: value }
    }));
  };

  const handleExperienceChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Math.max(...prev.experience.map(e => e.id)) + 1,
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          currentlyWorking: false,
          description: ''
        }
      ]
    }));
  };

  const removeExperience = (id) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Math.max(...prev.education.map(e => e.id)) + 1,
          institution: '',
          degree: '',
          field: '',
          graduationDate: '',
          percentage: ''
        }
      ]
    }));
  };

  const removeEducation = (id) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const handleSkillsChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [field]: value } : skill
      )
    }));
  };

  const addSkill = () => {
    setResumeData(prev => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: Math.max(...prev.skills.map(s => s.id)) + 1,
          category: '',
          items: ''
        }
      ]
    }));
  };

  const removeSkill = (id) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  const handleCertificationChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert =>
        cert.id === id ? { ...cert, [field]: value } : cert
      )
    }));
  };

  const addCertification = () => {
    setResumeData(prev => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          id: Math.max(...prev.certifications.map(c => c.id)) + 1,
          certification: '',
          issuer: '',
          date: ''
        }
      ]
    }));
  };

  const removeCertification = (id) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cert => cert.id !== id)
    }));
  };

  const handleProjectChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: Math.max(...prev.projects.map(p => p.id)) + 1,
          title: '',
          description: '',
          link: ''
        }
      ]
    }));
  };

  const removeProject = (id) => {
    setResumeData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }));
  };

  return (
    <div className="resume-builder-container">
      <div className="resume-header">
        <h1>📄 ATS-Compliant Resume Builder</h1>
        <p>Create a professional resume that passes ATS screening</p>
      </div>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          📝 Form
        </button>
        <button
          className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          👁️ Preview
        </button>
      </div>

      {activeTab === 'form' ? (
        <div className="form-container">
          {/* PERSONAL INFORMATION */}
          <section className="form-section">
            <h2>👤 Personal Information</h2>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Full Name *"
                value={resumeData.personal.fullName}
                onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email *"
                value={resumeData.personal.email}
                onChange={(e) => handlePersonalChange('email', e.target.value)}
                className="form-input"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={resumeData.personal.phone}
                onChange={(e) => handlePersonalChange('phone', e.target.value)}
                className="form-input"
              />
              <input
                type="text"
                placeholder="Location (City, Country) *"
                value={resumeData.personal.location}
                onChange={(e) => handlePersonalChange('location', e.target.value)}
                className="form-input"
              />
              <input
                type="url"
                placeholder="LinkedIn Profile URL"
                value={resumeData.personal.linkedin}
                onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                className="form-input"
              />
              <input
                type="url"
                placeholder="Portfolio Website (Optional)"
                value={resumeData.personal.portfolio}
                onChange={(e) => handlePersonalChange('portfolio', e.target.value)}
                className="form-input"
              />
            </div>
          </section>

          {/* PROFESSIONAL SUMMARY */}
          <section className="form-section">
            <h2>📝 Professional Summary</h2>
            <textarea
              placeholder="Write a brief professional summary (50-100 words)"
              value={resumeData.professional.summary}
              onChange={(e) => handleProfessionalChange(e.target.value)}
              className="form-textarea"
              rows="4"
            />
          </section>

          {/* EXPERIENCE */}
          <section className="form-section">
            <div className="section-header">
              <h2>💼 Work Experience</h2>
              <button className="add-btn" onClick={addExperience}>+ Add Experience</button>
            </div>
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="sub-section">
                <div className="sub-section-header">
                  <h3>Experience {resumeData.experience.indexOf(exp) + 1}</h3>
                  {resumeData.experience.length > 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => removeExperience(exp.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Company Name *"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Job Title/Position *"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="month"
                    placeholder="Start Date *"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                    className="form-input"
                  />
                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id={`current-${exp.id}`}
                      checked={exp.currentlyWorking}
                      onChange={(e) => handleExperienceChange(exp.id, 'currentlyWorking', e.target.checked)}
                      className="form-checkbox"
                    />
                    <label htmlFor={`current-${exp.id}`}>Currently Working Here</label>
                  </div>
                  {!exp.currentlyWorking && (
                    <input
                      type="month"
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                      className="form-input"
                    />
                  )}
                </div>
                <textarea
                  placeholder="Job Description/Achievements (Enter key points separated by line breaks)"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                  className="form-textarea"
                  rows="4"
                />
              </div>
            ))}
          </section>

          {/* EDUCATION */}
          <section className="form-section">
            <div className="section-header">
              <h2>🎓 Education</h2>
              <button className="add-btn" onClick={addEducation}>+ Add Education</button>
            </div>
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="sub-section">
                <div className="sub-section-header">
                  <h3>Education {resumeData.education.indexOf(edu) + 1}</h3>
                  {resumeData.education.length > 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => removeEducation(edu.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Institution Name *"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Degree (B.Tech, M.Tech, etc.) *"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Field of Study *"
                    value={edu.field}
                    onChange={(e) => handleEducationChange(edu.id, 'field', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="month"
                    placeholder="Graduation Date *"
                    value={edu.graduationDate}
                    onChange={(e) => handleEducationChange(edu.id, 'graduationDate', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Percentage/CGPA"
                    value={edu.percentage}
                    onChange={(e) => handleEducationChange(edu.id, 'percentage', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* SKILLS */}
          <section className="form-section">
            <div className="section-header">
              <h2>💡 Skills</h2>
              <button className="add-btn" onClick={addSkill}>+ Add Skill Category</button>
            </div>
            {resumeData.skills.map((skill) => (
              <div key={skill.id} className="sub-section">
                <div className="sub-section-header">
                  <h3>Skill Category {resumeData.skills.indexOf(skill) + 1}</h3>
                  {resumeData.skills.length > 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => removeSkill(skill.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Category (e.g., Programming, Tools, Languages) *"
                    value={skill.category}
                    onChange={(e) => handleSkillsChange(skill.id, 'category', e.target.value)}
                    className="form-input"
                  />
                </div>
                <textarea
                  placeholder="Skills (comma-separated: Python, Java, SQL, etc.)"
                  value={skill.items}
                  onChange={(e) => handleSkillsChange(skill.id, 'items', e.target.value)}
                  className="form-textarea"
                  rows="3"
                />
              </div>
            ))}
          </section>

          {/* CERTIFICATIONS */}
          <section className="form-section">
            <div className="section-header">
              <h2>🏆 Certifications & Achievements</h2>
              <button className="add-btn" onClick={addCertification}>+ Add Certification</button>
            </div>
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} className="sub-section">
                <div className="sub-section-header">
                  <h3>Certification {resumeData.certifications.indexOf(cert) + 1}</h3>
                  {resumeData.certifications.length > 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => removeCertification(cert.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Certification Name"
                    value={cert.certification}
                    onChange={(e) => handleCertificationChange(cert.id, 'certification', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Issuing Organization"
                    value={cert.issuer}
                    onChange={(e) => handleCertificationChange(cert.id, 'issuer', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="month"
                    placeholder="Date Obtained"
                    value={cert.date}
                    onChange={(e) => handleCertificationChange(cert.id, 'date', e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section className="form-section">
            <div className="section-header">
              <h2>🚀 Projects</h2>
              <button className="add-btn" onClick={addProject}>+ Add Project</button>
            </div>
            {resumeData.projects.map((proj) => (
              <div key={proj.id} className="sub-section">
                <div className="sub-section-header">
                  <h3>Project {resumeData.projects.indexOf(proj) + 1}</h3>
                  {resumeData.projects.length > 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => removeProject(proj.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <div className="form-grid">
                  <input
                    type="text"
                    placeholder="Project Title"
                    value={proj.title}
                    onChange={(e) => handleProjectChange(proj.id, 'title', e.target.value)}
                    className="form-input"
                  />
                  <input
                    type="url"
                    placeholder="Project Link (GitHub, Live Link, etc.)"
                    value={proj.link}
                    onChange={(e) => handleProjectChange(proj.id, 'link', e.target.value)}
                    className="form-input"
                  />
                </div>
                <textarea
                  placeholder="Project Description"
                  value={proj.description}
                  onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)}
                  className="form-textarea"
                  rows="3"
                />
              </div>
            ))}
          </section>
        </div>
      ) : (
        <ResumeTemplate data={resumeData} />
      )}
    </div>
  );
};

export default ResumeBuilder;
