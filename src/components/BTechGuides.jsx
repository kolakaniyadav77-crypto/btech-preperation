import React from 'react';
import { useAuth } from '../context/AuthContext';
import progressTracker from '../utils/progressTracker';
import { Compass, BookOpen, Users, Rocket, Target, Star, ShieldCheck, Sparkles, Zap, Cpu, GraduationCap } from 'lucide-react';
import "./BTechGuides.css";

const BTechGuide = () => {
  const { currentUser } = useAuth();

  // Progress updates when user follows blueprint recommendations
  // Not just by visiting the page

  const years = [
    {
      year: '1st Year: Foundations',
      description: 'The year of exploration and building core fundamentals.',
      focus: ['Academic CGPA Foundation', 'Social & Professional Networking', 'Basics of Programming (C/Python)', 'Soft Skills Development'],
      tips: [
        'Maintain a high CGPA (8+) - it keeps options open later.',
        'Join 1 technical and 1 cultural club to build soft skills.',
        'Master basic Calculus and Physics - they return in advanced subjects.',
        'Explore different tech stacks (Web, App, AI) briefly.'
      ],
      icon: BookOpen,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10'
    },
    {
      year: '2nd Year: Core Mastery',
      description: 'The deep dive into engineering core subjects.',
      focus: ['Data Structures & Algorithms (DSA)', 'Object Oriented Programming (OOP)', 'Computer Architecture & OS', 'Mini Project Development'],
      tips: [
        'Start competitive programming or consistent DSA on LeetCode.',
        'Build at least 2 mini projects using HTML/CSS/JS or Python.',
        'Focus deeply on OS and DBMS - 60% of interview questions come from here.',
        'Learn Git/GitHub to manage your code professionally.'
      ],
      icon: Cpu,
      color: 'text-fuchsia-400',
      bg: 'bg-fuchsia-500/10'
    },
    {
      year: '3rd Year: Specialization & Internships',
      description: 'The most critical year for professional alignment.',
      focus: ['Advanced Web/App Dev or AI/ML', 'Summer Internships', 'Placement Preparation Starts', 'System Design Basics'],
      tips: [
        'Secure a 2-month summer internship after 6th semester.',
        'Complete all basic modules in the Algo Arena.',
        'Start solving Aptitude and Logical reasoning daily.',
        'Build a professional LinkedIn profile and a strong Resume.'
      ],
      icon: Rocket,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10'
    },
    {
      year: '4th Year: Graduation & Placements',
      description: 'The final push for your dream career.',
      focus: ['Major Project (Industry Level)', 'On-campus & Off-campus Drives', 'Mock Interviews', 'Advanced Tech Certifications'],
      tips: [
        'Your Major project should be high-quality and deployable.',
        'Attend as many mock interviews as possible.',
        'Keep tracking job applications in the Job Search tracker.',
        "Don't stop learning even after the first offer - aim higher!"
      ],
      icon: GraduationCap,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  ];

  return (
    <div className="blueprint-container">
      {/* Header */}
      <div className="blueprint-header">
        <span className="blueprint-badge">🎯 Strategic Hub</span>
        <h2 className="blueprint-title">4-Year Success Blueprint</h2>
        <p className="blueprint-subtitle">Your complete roadmap to dominate B.Tech - from foundations to dream placements. Master each year strategically.</p>
      </div>

      {/* Year-wise cards */}
      <div className="blueprint-years">
        {years.map((year, idx) => (
          <div key={idx} className="year-card">
            <div className="year-content">
              {/* Left column */}
              <div className="year-left">
                <div className="year-icon-box">
                  <year.icon />
                </div>
                <div className="year-info">
                  <h3>{year.year}</h3>
                  <p className="year-description">"{year.description}"</p>
                </div>

                <div className="focus-areas">
                  <p className="focus-label">📌 Key Focus Areas</p>
                  <div className="focus-tags">
                    {year.focus.map(f => (
                      <span key={f} className="focus-tag">{f}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="year-right">
                <h4 className="action-title">
                  <Zap />
                  Strategic Action Points
                </h4>
                <ul className="action-list">
                  {year.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="action-item">
                      <div className="action-icon">
                        <ShieldCheck />
                      </div>
                      <p className="action-text">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="blueprint-footer">
        <div className="blueprint-footer-content">
          <h3>Every Year Counts. 🚀</h3>
          <p className="blueprint-footer-text">
            The difference between a "job" and a "career" starts with your decisions in 1st year. Follow this blueprint, dominate DSA practice, and ace every interview round.
          </p>
          <div className="blueprint-buttons">
            <button className="blueprint-btn btn-primary">Start Learning</button>
            <button className="blueprint-btn btn-secondary">View Resources</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTechGuide;
