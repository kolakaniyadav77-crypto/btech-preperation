import React, { useRef } from 'react';
import './ResumeBuilder.css';

const ResumeTemplate = ({ data }) => {
  const resumeRef = useRef();

  // Export as PDF using html2canvas and jspdf
  const exportPDF = async () => {
    try {
      const script1 = document.createElement('script');
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      document.head.appendChild(script1);

      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        document.head.appendChild(script2);

        script2.onload = () => {
          const { jsPDF } = window.jspdf;
          const html2canvas = window.html2canvas;

          html2canvas(resumeRef.current, {
            scale: 2,
            backgroundColor: '#ffffff'
          }).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= 297;

            while (heightLeft >= 0) {
              position = heightLeft - imgHeight;
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
              heightLeft -= 297;
            }

            pdf.save(`${data.personal.fullName || 'Resume'}.pdf`);
          });
        };
      };
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  // Export as Word (DOCX)
  const exportWord = () => {
    const filename = `${data.personal.fullName || 'Resume'}.doc`;
    const element = resumeRef.current;

    let docContent = `
    <html xmlns:x="urn:schemas-microsoft-com:office:excel"
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 1in; }
        h1 { font-size: 18pt; font-weight: bold; margin: 0; }
        h2 { font-size: 12pt; font-weight: bold; color: #333; margin-top: 12pt; margin-bottom: 6pt; border-bottom: 1px solid #000; }
        h3 { font-size: 11pt; font-weight: bold; margin: 6pt 0 3pt 0; }
        p { margin: 3pt 0; font-size: 11pt; }
        .section { margin-bottom: 12pt; }
        .contact { text-align: center; font-size: 10pt; }
        .experience-item, .education-item, .skill-category, .cert-item { margin-bottom: 8pt; }
        .date { color: #666; font-size: 10pt; }
        ul { margin: 3pt 0 3pt 20pt; }
        li { margin: 2pt 0; }
      </style>
    </head>
    <body>
    `;

    // Personal Info
    docContent += `<h1>${data.personal.fullName}</h1>`;
    docContent += `<div class="contact">`;
    if (data.personal.email) docContent += `${data.personal.email} | `;
    if (data.personal.phone) docContent += `${data.personal.phone} | `;
    if (data.personal.location) docContent += `${data.personal.location}`;
    if (data.personal.linkedin) docContent += ` | <a href="${data.personal.linkedin}">LinkedIn</a>`;
    if (data.personal.portfolio) docContent += ` | <a href="${data.personal.portfolio}">Portfolio</a>`;
    docContent += `</div><hr>`;

    // Professional Summary
    if (data.professional.summary) {
      docContent += `<div class="section">
        <h2>Professional Summary</h2>
        <p>${data.professional.summary}</p>
      </div>`;
    }

    // Experience
    if (data.experience.some(e => e.company)) {
      docContent += `<div class="section"><h2>Work Experience</h2>`;
      data.experience.forEach(exp => {
        if (exp.company) {
          docContent += `<div class="experience-item">
            <h3>${exp.position}${exp.company ? ` - ${exp.company}` : ''}</h3>
            <p class="date">${exp.startDate}${exp.currentlyWorking ? ' - Present' : (exp.endDate ? ` - ${exp.endDate}` : '')}</p>
            ${exp.description ? `<p>${exp.description.split('\n').join('</p><p>')}</p>` : ''}
          </div>`;
        }
      });
      docContent += `</div>`;
    }

    // Education
    if (data.education.some(e => e.institution)) {
      docContent += `<div class="section"><h2>Education</h2>`;
      data.education.forEach(edu => {
        if (edu.institution) {
          docContent += `<div class="education-item">
            <h3>${edu.degree}${edu.field ? ` in ${edu.field}` : ''}</h3>
            <p><strong>${edu.institution}</strong></p>
            <p class="date">${edu.graduationDate}${edu.percentage ? ` | CGPA: ${edu.percentage}` : ''}</p>
          </div>`;
        }
      });
      docContent += `</div>`;
    }

    // Skills
    if (data.skills.some(s => s.items)) {
      docContent += `<div class="section"><h2>Skills</h2>`;
      data.skills.forEach(skill => {
        if (skill.category && skill.items) {
          docContent += `<div class="skill-category">
            <h3>${skill.category}</h3>
            <p>${skill.items}</p>
          </div>`;
        }
      });
      docContent += `</div>`;
    }

    // Certifications
    if (data.certifications.some(c => c.certification)) {
      docContent += `<div class="section"><h2>Certifications &amp; Achievements</h2>`;
      data.certifications.forEach(cert => {
        if (cert.certification) {
          docContent += `<div class="cert-item">
            <p><strong>${cert.certification}</strong></p>
            <p class="date">${cert.issuer}${cert.date ? ` | ${cert.date}` : ''}</p>
          </div>`;
        }
      });
      docContent += `</div>`;
    }

    // Projects
    if (data.projects.some(p => p.title)) {
      docContent += `<div class="section"><h2>Projects</h2>`;
      data.projects.forEach(proj => {
        if (proj.title) {
          docContent += `<div class="project-item">
            <h3>${proj.title}</h3>
            ${proj.link ? `<p><a href="${proj.link}">Link</a></p>` : ''}
            ${proj.description ? `<p>${proj.description}</p>` : ''}
          </div>`;
        }
      });
      docContent += `</div>`;
    }

    docContent += `</body></html>`;

    const blob = new Blob([docContent], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-preview-container">
      <div className="export-controls">
        <button className="export-btn pdf-btn" onClick={exportPDF}>
          📥 Download as PDF
        </button>
        <button className="export-btn word-btn" onClick={exportWord}>
          📥 Download as Word
        </button>
      </div>

      <div className="resume-template" ref={resumeRef}>
        {/* Header */}
        <div className="resume-header-section">
          <h1 className="resume-name">{data.personal.fullName || 'Your Name'}</h1>
          <div className="resume-contact">
            {data.personal.email && <span>{data.personal.email}</span>}
            {data.personal.phone && <span>•</span>}
            {data.personal.phone && <span>{data.personal.phone}</span>}
            {data.personal.location && <span>•</span>}
            {data.personal.location && <span>{data.personal.location}</span>}
            {data.personal.linkedin && (
              <>
                <span>•</span>
                <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </>
            )}
            {data.personal.portfolio && (
              <>
                <span>•</span>
                <a href={data.personal.portfolio} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              </>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {data.professional.summary && (
          <div className="resume-section">
            <h2 className="resume-section-title">Professional Summary</h2>
            <p className="resume-text">{data.professional.summary}</p>
          </div>
        )}

        {/* Work Experience */}
        {data.experience.some(e => e.company) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Work Experience</h2>
            {data.experience.map((exp, idx) => (
              exp.company && (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">{exp.position}</h3>
                    <span className="resume-date">
                      {exp.startDate}
                      {exp.currentlyWorking ? ' - Present' : (exp.endDate ? ` - ${exp.endDate}` : '')}
                    </span>
                  </div>
                  <p className="resume-company">{exp.company}</p>
                  {exp.description && (
                    <div className="resume-description">
                      {exp.description.split('\n').map((line, i) => (
                        line.trim() && <p key={i}>• {line.trim()}</p>
                      ))}
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        )}

        {/* Education */}
        {data.education.some(e => e.institution) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Education</h2>
            {data.education.map((edu, idx) => (
              edu.institution && (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">
                      {edu.degree}{edu.field ? ` in ${edu.field}` : ''}
                    </h3>
                    {edu.graduationDate && (
                      <span className="resume-date">{edu.graduationDate}</span>
                    )}
                  </div>
                  <p className="resume-company">{edu.institution}</p>
                  {edu.percentage && <p className="resume-text">CGPA: {edu.percentage}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills.some(s => s.items) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Skills</h2>
            {data.skills.map((skill, idx) => (
              skill.category && skill.items && (
                <div key={idx} className="resume-skill-category">
                  <span className="resume-skill-label">{skill.category}:</span>
                  <span className="resume-skill-items">{skill.items}</span>
                </div>
              )
            ))}
          </div>
        )}

        {/* Certifications */}
        {data.certifications.some(c => c.certification) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Certifications & Achievements</h2>
            {data.certifications.map((cert, idx) => (
              cert.certification && (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">{cert.certification}</h3>
                    {cert.date && <span className="resume-date">{cert.date}</span>}
                  </div>
                  {cert.issuer && <p className="resume-company">{cert.issuer}</p>}
                </div>
              )
            ))}
          </div>
        )}

        {/* Projects */}
        {data.projects.some(p => p.title) && (
          <div className="resume-section">
            <h2 className="resume-section-title">Projects</h2>
            {data.projects.map((proj, idx) => (
              proj.title && (
                <div key={idx} className="resume-item">
                  <div className="resume-item-header">
                    <h3 className="resume-item-title">{proj.title}</h3>
                  </div>
                  {proj.link && (
                    <p className="resume-link">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer">
                        {proj.link}
                      </a>
                    </p>
                  )}
                  {proj.description && <p className="resume-text">{proj.description}</p>}
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeTemplate;
