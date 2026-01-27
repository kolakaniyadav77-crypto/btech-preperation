import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { programmingLanguages } from '../data/programmingLanguages';
import CodeEditor from './CodeEditor';
import './ProgrammingLanguages.css';

const ProgrammingLanguages = () => {
  const { currentUser } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedMCQ, setSelectedMCQ] = useState(null);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [practiceCode, setPracticeCode] = useState('');

  // Progress updates when user completes programming tasks
  // Not just by visiting the page

  if (selectedLanguage && selectedTopic) {
    const language = programmingLanguages.find(l => l.id === selectedLanguage);
    const topic = language.topics.find(t => t.level === selectedTopic);

    return (
      <div className="programming-container">
        <button className="back-btn" onClick={() => setSelectedTopic(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">
          {language.icon} {language.name} - {topic.level}
        </h2>

        {/* Content Sections */}
        <div className="content-sections">
          {/* Learning Content */}
          <div className="section-box">
            <h3>📚 Learning Content</h3>
            <div className="content-list">
              {topic.content.map((item, idx) => (
                <div key={idx} className="content-item">
                  <div className="content-icon">✓</div>
                  <span className="content-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MCQs */}
          <div className="section-box">
            <h3>❓ Practice MCQs</h3>
            <div className="mcqs-container">
              {topic.mcqs.map((mcq, idx) => (
                <div key={idx} className="mcq-card">
                  <div className="mcq-question">{idx + 1}. {mcq.question}</div>
                  <div className="mcq-options">
                    {mcq.options.map((opt, optIdx) => (
                      <button
                        key={optIdx}
                        className={`mcq-option ${
                          selectedMCQ === `${idx}-${optIdx}`
                            ? optIdx === mcq.answer ? 'correct' : 'incorrect'
                            : ''
                        }`}
                        onClick={() => setSelectedMCQ(`${idx}-${optIdx}`)}
                      >
                        {String.fromCharCode(65 + optIdx)}) {opt}
                      </button>
                    ))}
                  </div>
                  {selectedMCQ === `${idx}-${parseInt(selectedMCQ?.split('-')[1]) || -1}` && (
                    <div className="mcq-explanation">
                      💡 {mcq.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Problems */}
          <div className="section-box">
            <h3>🔧 Practice Problems</h3>
            <div className="problems-list">
              {topic.problems.map((problem, idx) => (
                <div key={idx} className="problem-card">
                  <div className="problem-number">{idx + 1}</div>
                  <div className="problem-text">{problem}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Editor */}
          <div className="section-box">
            <h3>💻 Try It Out</h3>
            <button
              className="code-editor-toggle"
              onClick={() => setShowCodeEditor(!showCodeEditor)}
            >
              {showCodeEditor ? '▼ Hide Code Editor' : '▶ Open Code Editor'}
            </button>
            {showCodeEditor && (
              <div className="code-editor-container">
                <CodeEditor
                  initialCode={practiceCode}
                  language={programmingLanguages.find(l => l.id === selectedLanguage)?.name || 'Python'}
                  onCodeChange={setPracticeCode}
                  showCompiler={true}
                  allowLanguageChange={false}
                />
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="section-box">
            <h3>🔗 Practice Resources</h3>
            <div className="resources-box">
              <a href={language.resources.documentation} target="_blank" rel="noopener noreferrer" className="resource-link">
                📖 Official Documentation
              </a>
              {language.resources.practiceLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                  🌐 {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLanguage) {
    const language = programmingLanguages.find(l => l.id === selectedLanguage);
    return (
      <div className="programming-container">
        <button className="back-btn" onClick={() => setSelectedLanguage(null)}>
          ← Back to Languages
        </button>
        <h2 className="page-title">{language.icon} {language.name}</h2>

        <div className="topics-grid">
          {language.topics.map((topic, idx) => (
            <div
              key={idx}
              className="topic-card"
              onClick={() => setSelectedTopic(topic.level)}
            >
              <div className="topic-level">{topic.level}</div>
              <div className="topic-content-count">
                📚 {topic.content.length} Topics • ❓ {topic.mcqs.length} MCQs • 🔧 {topic.problems.length} Problems
              </div>
              <button className="enter">Enter →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="programming-container">
      <h2 className="page-title">💻 Programming Languages & Web Development</h2>

      <div className="languages-grid">
        {programmingLanguages.map((lang, idx) => (
          <div
            key={idx}
            className="language-card"
            onClick={() => setSelectedLanguage(lang.id)}
          >
            <div className="lang-icon">{lang.icon}</div>
            <h3>{lang.name}</h3>
            <p className="lang-difficulty">{lang.difficulty}</p>
            <p className="lang-description">{lang.description}</p>
            <div className="lang-levels">
              {lang.topics.map((t, i) => (
                <span key={i} className="level-badge">{t.level}</span>
              ))}
            </div>
            <button className="enter">Explore →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
