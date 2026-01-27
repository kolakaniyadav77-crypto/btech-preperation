import React from "react";

export default function TopicCard({ title, links }) {
  return (
    <div className="topic-card">
      <h3>{title}</h3>

      <div className="prep-links">
        <a href={links.theory} target="_blank" rel="noopener noreferrer">
          Theory
        </a>
        <a href={links.practice} target="_blank" rel="noopener noreferrer">
          Practice
        </a>
        <a href={links.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </div>
  );
}
