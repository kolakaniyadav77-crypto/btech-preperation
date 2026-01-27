import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { dsaData, dsaTopics } from "../data/dsaProblems";
import CodeEditor from "./CodeEditor";
import "./DSAPractice.css";

export default function DSAPractice() {
  const { currentUser } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [problemCode, setProblemCode] = useState('');

  // Track when user enters DSA Practice section
  useEffect(() => {
    if (currentUser?.id) {
      progressTracker.trackModuleAccess(currentUser.id, 'dsa');
    }
  }, [currentUser]);

  const languages = ["Python", "JavaScript", "Java", "C++", "Go", "Rust", "TypeScript", "C#"];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filterProblems = (problems) => {
    return problems.filter(
      (problem) =>
        selectedDifficulty === "All" || problem.difficulty === selectedDifficulty
    );
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "#52c41a";
      case "Medium":
        return "#faad14";
      case "Hard":
        return "#ff4d4f";
      default:
        return "#1890ff";
    }
  };

  return (
    <div className="dsa-container">
      <h1 className="page-title">DSA Practice</h1>

      {/* Language and Difficulty Selection */}
      <div className="controls-section">
        <div className="control-group">
          <label>Select Language:</label>
          <div className="button-group">
            {languages.map((lang) => (
              <button
                key={lang}
                className={`control-btn ${selectedLanguage === lang ? "active" : ""}`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="control-group">
          <label>Select Difficulty:</label>
          <div className="button-group">
            {difficulties.map((diff) => (
              <button
                key={diff}
                className={`control-btn ${selectedDifficulty === diff ? "active" : ""}`}
                onClick={() => setSelectedDifficulty(diff)}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics Grid - 2 per row */}
      <div className="topics-grid">
        {dsaTopics.map((topic, index) => {
          const topicProblems = dsaData[topic];
          const filteredProblems = filterProblems(topicProblems);
          const isExpanded = expandedTopic === topic;

          return (
            <div key={topic} className="topic-card-wrapper">
              <div className="topic-card">
                <div className="topic-header-card">
                  <h3>{topic}</h3>
                  <span className="problem-badge">{topicProblems.length} Problems</span>
                </div>

                <button
                  className={`topic-expand-btn ${isExpanded ? "expanded" : ""}`}
                  onClick={() => setExpandedTopic(isExpanded ? null : topic)}
                >
                  {isExpanded ? "▼ Collapse" : "▶ Expand"}
                </button>

                {isExpanded && (
                  <div className="problems-grid-inline">
                    {filteredProblems.map((problem, idx) => (
                      <div key={idx} className="problem-card">
                        <div className="problem-header">
                          <span
                            className="difficulty-badge"
                            style={{
                              backgroundColor: getDifficultyColor(problem.difficulty),
                            }}
                          >
                            {problem.difficulty}
                          </span>
                        </div>
                        <a
                          href={problem.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="problem-name"
                        >
                          {problem.name}
                        </a>
                        <button
                          className="platforms-btn"
                          onClick={() => setSelectedProblem(problem)}
                        >
                          🔗 Platforms
                        </button>
                      </div>
                    ))}
                    {filteredProblems.length === 0 && (
                      <p className="no-problems">No problems for {selectedDifficulty}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Problem Platforms Modal */}
      {selectedProblem && (
        <div className="modal-overlay" onClick={() => setSelectedProblem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProblem.name}</h2>
              <button
                className="modal-close"
                onClick={() => setSelectedProblem(null)}
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="difficulty-info">
                <span
                  className="difficulty-badge-modal"
                  style={{
                    backgroundColor: getDifficultyColor(selectedProblem.difficulty),
                  }}
                >
                  {selectedProblem.difficulty}
                </span>
              </div>

              <p className="modal-label">🎥 Video Tutorial:</p>
              <a
                href={selectedProblem.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                Watch Solution on YouTube
              </a>

              <button
                className="code-editor-toggle"
                onClick={() => setShowCodeEditor(!showCodeEditor)}
              >
                {showCodeEditor ? '▼ Hide Code Editor' : '▶ Open Code Editor'}
              </button>

              {showCodeEditor && (
                <div className="code-editor-section">
                  <p className="modal-label">💻 Write & Test Solution:</p>
                  <CodeEditor
                    initialCode={problemCode}
                    language={selectedLanguage}
                    onCodeChange={setProblemCode}
                    showCompiler={true}
                    allowLanguageChange={true}
                    onLanguageChange={setSelectedLanguage}
                  />
                </div>
              )}

              <p className="modal-label">🔗 Practice on Platforms:</p>
              <div className="platforms-list">
                {selectedProblem.platforms && (
                  <>
                    {selectedProblem.platforms.leetcode && (
                      <a
                        href={selectedProblem.platforms.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-link leetcode"
                      >
                        <span className="platform-icon">💻</span> LeetCode
                      </a>
                    )}
                    {selectedProblem.platforms.geeksforgeeks && (
                      <a
                        href={selectedProblem.platforms.geeksforgeeks}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-link geeksforgeeks"
                      >
                        <span className="platform-icon">🧠</span> GeeksforGeeks
                      </a>
                    )}
                    {selectedProblem.platforms.codechef && (
                      <a
                        href={selectedProblem.platforms.codechef}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-link codechef"
                      >
                        <span className="platform-icon">👨‍💻</span> CodeChef
                      </a>
                    )}
                  </>
                )}
              </div>

              <p className="modal-label">💻 Code This in {selectedLanguage}:</p>
              <p className="language-note">
                Open the platforms above and write your solution in {selectedLanguage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Language Tips */}
      <div className="tips-section">
        <h3>💡 Language Tips for {selectedLanguage}</h3>
        <div className="tips-content">
          {selectedLanguage === "Python" && (
            <ul>
              <li>Use list comprehensions for concise array operations</li>
              <li>Dictionary for O(1) lookups - great for hashing</li>
              <li>Decorators like @lru_cache for memoization in DP</li>
              <li>String slicing is O(n) - be careful in loops</li>
            </ul>
          )}
          {selectedLanguage === "JavaScript" && (
            <ul>
              <li>Use Map and Set for better performance with larger datasets</li>
              <li>Array methods like filter, reduce, map are powerful tools</li>
              <li>Avoid modifying arrays during iteration</li>
              <li>Remember string immutability - split into array to manipulate</li>
            </ul>
          )}
          {selectedLanguage === "Java" && (
            <ul>
              <li>Use ArrayList instead of Array for dynamic sizing</li>
              <li>HashMap provides O(1) average-case lookup</li>
              <li>StringBuilder for efficient string concatenation</li>
              <li>Remember: arrays are 0-indexed and fixed size</li>
            </ul>
          )}
          {selectedLanguage === "C++" && (
            <ul>
              <li>Use unordered_map for O(1) average-case lookups</li>
              <li>vector is dynamic array - use push_back to add elements</li>
              <li>pair and tuple for storing multiple values</li>
              <li>STL algorithms like sort, find are highly optimized</li>
            </ul>
          )}
          {selectedLanguage === "Go" && (
            <ul>
              <li>Use slices instead of arrays for flexibility</li>
              <li>Make maps for O(1) lookups with sync.Map for concurrency</li>
              <li>Goroutines for lightweight concurrent programming</li>
              <li>Defer for cleanup operations like closing files</li>
            </ul>
          )}
          {selectedLanguage === "Rust" && (
            <ul>
              <li>Ownership model prevents memory errors at compile time</li>
              <li>Use Vec for dynamic arrays with automatic memory management</li>
              <li>HashMap from std::collections for key-value operations</li>
              <li>Pattern matching with match expressions is powerful</li>
            </ul>
          )}
          {selectedLanguage === "TypeScript" && (
            <ul>
              <li>Type annotations help catch errors at compile time</li>
              <li>Use generics for reusable and type-safe code</li>
              <li>Interfaces for defining object shapes and contracts</li>
              <li>Leverage union types for flexible type definitions</li>
            </ul>
          )}
          {selectedLanguage === "C#" && (
            <ul>
              <li>LINQ provides elegant syntax for data manipulation</li>
              <li>Dictionary and HashSet for fast lookups</li>
              <li>Async/await for non-blocking operations</li>
              <li>Object-oriented features like inheritance and polymorphism</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
