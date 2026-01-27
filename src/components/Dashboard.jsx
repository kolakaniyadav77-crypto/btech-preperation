import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import progressTracker from "../utils/progressTracker";
import activityStore from "../data/activityStore";
import { calculateDashboardMetrics } from "../utils/progressCalculator";
import { getOverallProgress, getTotalTimeSpent, getTopSections, getNeedsFocusSections, getMilestones, getAchievements, sectionsInfo, userPerformance } from "../data/userPerformance";
import "./DSAPractice.css";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [userStats, setUserStats] = useState({
    totalProgress: 0,
    sectionsProgress: {},
    completedSections: 0,
    startedSections: 0
  });

  // Load user progress on component mount and track access
  useEffect(() => {
    if (currentUser?.id) {
      // Track that user accessed dashboard
      progressTracker.trackModuleAccess(currentUser.id, 'dashboard');
      
      const stats = progressTracker.getAllStats(currentUser.id);
      if (stats) {
        setUserStats(stats);
      }
    }
  }, [currentUser]);

  const metrics = calculateDashboardMetrics(activityStore);
  const overallProgress = userStats.totalProgress || 0;
  const totalTimeSpent = getTotalTimeSpent();
  const topSections = getTopSections();
  const needsFocus = getNeedsFocusSections();
  const milestones = getMilestones();
  const achievements = getAchievements();

  const tier =
    overallProgress >= 75
      ? "Tier-1 Qualified"
      : overallProgress >= 50
      ? "Tier-2 Ready"
      : "Foundation Stage";

  return (
    <main className="main dashboard-main">
      {/* Topbar */}
      <header className="topbar">
        <h2>Dashboard</h2>
        <div className="bot">🤖</div>
      </header>

      {/* Header with Overall Progress */}
      <section className="hero">
        <div>
          <h1>Your Learning Dashboard</h1>
          <p>Track your progress across all learning sections</p>
        </div>

        <div className="readiness">
          <div className="circle">{overallProgress}%</div>
          <div>
            <span>OVERALL PROGRESS</span>
            <h3>{tier}</h3>
            <p className="time-spent">📚 {totalTimeSpent}+ hours invested</p>
          </div>
        </div>
      </section>

      {/* Main Cards */}
      <section className="cards">
        <div className="card purple">
          <div className="icon">🎯</div>
          <h4>SECTIONS</h4>
          <span>{sectionsInfo.length}</span>
          <p>Total learning paths</p>
        </div>

        <div className="card cyan">
          <div className="icon">📈</div>
          <h4>PROGRESS</h4>
          <span>{overallProgress}%</span>
          <p>Overall completion</p>
        </div>

        <div className="card gold">
          <div className="icon">⏰</div>
          <h4>TIME INVESTED</h4>
          <span>{totalTimeSpent}h</span>
          <p>Total study hours</p>
        </div>
      </section>

      {/* Section Progress */}
      <section className="section-progress">
        <h2>📊 Progress by Section</h2>
        <div className="sections-grid">
          {sectionsInfo.map(section => {
            const perf = userPerformance[section.id];
            return (
              <div 
                key={section.id}
                className="section-card"
                style={{ borderLeftColor: section.color }}
                onClick={() => navigate(section.path)}
              >
                <div className="section-header">
                  <span className="section-icon">{section.icon}</span>
                  <h4>{section.name}</h4>
                </div>
                <div className="section-stats">
                  <div className="stat">
                    <span className="stat-value">{perf.percentage}%</span>
                    <span className="stat-label">Complete</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{perf.completed}/{perf.total}</span>
                    <span className="stat-label">Items</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${perf.percentage}%`, backgroundColor: section.color }}></div>
                </div>
                <p className="last-accessed">Last: {perf.lastAccessed}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top Performing Sections */}
      <section className="performance-section">
        <div className="perf-grid">
          <div className="perf-card">
            <h3>⭐ Top Performing</h3>
            <div className="perf-list">
              {topSections.map(section => (
                <div key={section.id} className="perf-item">
                  <span className="perf-icon">{section.icon}</span>
                  <div className="perf-info">
                    <p className="perf-name">{section.name}</p>
                    <div className="rating">
                      {'⭐'.repeat(Math.round(section.performance.rating / 2))}
                      <span className="rating-value">{section.performance.rating}/10</span>
                    </div>
                  </div>
                  <span className="perf-percent">{section.performance.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="perf-card">
            <h3>🎯 Needs Focus</h3>
            <div className="perf-list">
              {needsFocus.map(section => (
                <div key={section.id} className="perf-item needs-focus">
                  <span className="perf-icon">{section.icon}</span>
                  <div className="perf-info">
                    <p className="perf-name">{section.name}</p>
                    <p className="perf-progress">{section.performance.completed}/{section.performance.total} completed</p>
                  </div>
                  <span className="perf-percent">{section.performance.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="milestones-section">
        <h2>🏆 Milestones</h2>
        <div className="milestones-grid">
          {milestones.map((milestone, idx) => (
            <div key={idx} className={`milestone ${milestone.achieved ? 'achieved' : 'locked'}`}>
              <div className="milestone-icon">{milestone.title.split(' ')[0]}</div>
              <h4>{milestone.title}</h4>
              <p>{milestone.description}</p>
              <div className="milestone-progress">
                <span>{milestone.threshold}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <h2>🎖️ Achievements</h2>
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className={`achievement ${achievement.achieved ? 'unlocked' : 'locked'}`}>
              <div className="achievement-icon">{achievement.icon}</div>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
              {achievement.achieved && achievement.date && (
                <span className="unlock-date">{achievement.date}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Velocity */}
      <section className="skill-velocity">
        <h2>⚡ Skill Velocity</h2>

        <div className="velocity-item">
          <label>Technical Core Foundations</label>
          <span>{metrics.dsa}% complete</span>
          <div className="velocity-bar">
            <div style={{ width: `${metrics.dsa}%` }}></div>
          </div>
        </div>

        <div className="velocity-item">
          <label>Algorithmic Optimization</label>
          <span>{metrics.jobPrep}% complete</span>
          <div className="velocity-bar">
            <div style={{ width: `${metrics.jobPrep}%` }}></div>
          </div>
        </div>

        <div className="velocity-item">
          <label>Industry Alignment</label>
          <span>{metrics.companyPrep}% complete</span>
          <div className="velocity-bar">
            <div style={{ width: `${metrics.companyPrep}%` }}></div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access">
        <h2>🚀 Quick Access</h2>
        <div className="quick-access-grid">
          {sectionsInfo.map(section => (
            <button
              key={section.id}
              className="quick-btn"
              style={{ borderLeftColor: section.color }}
              onClick={() => navigate(section.path)}
            >
              <span className="quick-icon">{section.icon}</span>
              <span className="quick-name">{section.name}</span>
              <span className="quick-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
