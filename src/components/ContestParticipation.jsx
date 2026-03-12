import React, { useState, useEffect } from 'react';
import { contestPlatforms, getActiveContests, getContestLink, updateContestUrl } from '../data/contestParticipation';
import '../styles/JobSearch.css'; // reuse job-search styling for cards

export default function ContestParticipation() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const refresh = () => setContests(getActiveContests());
    refresh();
    const interval = setInterval(refresh, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdate = (id) => {
    const newLink = prompt('Enter updated contest URL:');
    if (newLink) {
      updateContestUrl(id, newLink);
      setContests(getActiveContests());
    }
  };

  return (
    <div className="job-search-container">
      <div className="job-search-header">
        <div className="header-content">
          <h1>Contest Participation</h1>
          <p>Keep track of ongoing coding contests and update links as they change</p>
        </div>
      </div>

      {contests.length === 0 && (
        <div className="no-jobs">
          <p>🎯 No contests currently active.</p>
        </div>
      )}

      <div className="jobs-container">
        {contests.map(c => {
          const now = new Date();
          const daysLeft = Math.floor((c.deadline - now) / (1000 * 60 * 60 * 24));
          const expired = daysLeft < 0;
          const link = getContestLink(c);
          return (
            <div key={c.id} className={`job-card ${expired ? 'urgent' : ''}`}>
              <div className="job-header">
                <h3 className="job-title">{c.name}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`apply-btn ${expired && !c.replacementUrl ? 'disabled' : ''}`}
                >
                  Visit →
                </a>
              </div>
              <p className="job-description">{c.description}</p>
              <div className="job-footer">
                <span className={`deadline ${expired ? 'urgent-deadline' : ''}`}>
                  {expired ? '❌ Ended' : `⏰ ${daysLeft} days left`}
                </span>
                {expired && (
                  <button className="apply-btn" onClick={() => handleUpdate(c.id)}>
                    Update Link
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}