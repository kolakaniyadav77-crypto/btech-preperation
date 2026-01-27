import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import { qarTopics } from "../data/qarLinks";
import { qarTheory } from "../data/varcAndQarTheory";
import TopicCard from "./TopicCard";
import "./UniversalSections.css";

export default function QARPreparation() {
  const { currentUser } = useAuth();
  const [selectedTheory, setSelectedTheory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  // Progress updates when user solves QAR questions
  // Not just by visiting the page

  if (selectedTheory && selectedSubtopic) {
    const theory = qarTheory.find(t => t.topic === selectedTheory);
    const subtopic = theory.subtopics.find(s => s.name === selectedSubtopic);

    return (
      <div className="page">
        <button className="back-btn" onClick={() => setSelectedSubtopic(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">📚 {selectedSubtopic}</h2>

        <div className="theory-sections">
          <div className="theory-box">
            <h3>📖 Tutorial</h3>
            <p className="theory-content">{subtopic.tutorial}</p>
          </div>

          <div className="theory-box">
            <h3>🔑 Key Points</h3>
            <ul className="key-points-list">
              {subtopic.keyPoints.map((point, idx) => (
                <li key={idx} className="key-point-item">
                  <span className="point-icon">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (selectedTheory) {
    const theory = qarTheory.find(t => t.topic === selectedTheory);
    return (
      <div className="page">
        <button className="back-btn" onClick={() => setSelectedTheory(null)}>
          ← Back to Topics
        </button>
        <h2 className="page-title">📚 {selectedTheory}</h2>

        <div className="subtopics-grid">
          {theory.subtopics.map((subtopic, idx) => (
            <div
              key={idx}
              className="subtopic-card"
              onClick={() => setSelectedSubtopic(subtopic.name)}
            >
              <h4>{subtopic.name}</h4>
              <p className="subtopic-preview">{subtopic.tutorial.substring(0, 100)}...</p>
              <button className="enter">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">📊 QAR Preparation</h1>

      {/* Theory Section */}
      <div className="theory-intro-box">
        <h2>📚 Learn QAR Concepts</h2>
        <div className="theory-topics-grid">
          {qarTheory.map((theory, idx) => (
            <div
              key={idx}
              className="theory-topic-card"
              onClick={() => setSelectedTheory(theory.topic)}
            >
              <h3>{theory.topic}</h3>
              <p>{theory.subtopics.length} subtopics</p>
              <button className="enter">Explore →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Section */}
      <div className="practice-intro-box">
        <h2>🔗 Practice Resources</h2>
        <div className="topics-grid">
          {qarTopics.map((topic) => (
            <TopicCard
              key={topic.title}
              title={topic.title}
              links={{
                theory: topic.theory,
                practice: topic.practice,
                youtube: topic.youtube,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
