import React, { useState } from "react";
import { BarChart3, TrendingUp, Database } from "lucide-react";
import "../styles/Dashboard.css";

const PowerBIAnalytics = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const powerBiTools = [
    {
      id: 1,
      name: "Power BI Desktop",
      type: "Design Tool",
      description: "Create and design reports locally on your computer",
      features: ["Data Modeling", "DAX Writing", "Report Design", "Publish to Cloud"],
      learnTopics: ["Data Connections", "Relationships", "Measures", "Custom Visuals"],
      resources: [
        { title: "Power BI Desktop Download", url: "https://powerbi.microsoft.com/en-us/downloads/", icon: "📥" },
        { title: "Official Documentation", url: "https://docs.microsoft.com/en-us/power-bi/desktop-what-is-desktop", icon: "📖" },
        { title: "Tutorials & Guides", url: "https://docs.microsoft.com/en-us/power-bi/guided-learning/", icon: "🎓" },
        { title: "YouTube Learning", url: "https://www.youtube.com/powerbi", icon: "📹" }
      ]
    },
    {
      id: 2,
      name: "Power BI Service",
      type: "Cloud Platform",
      description: "Publish and share dashboards with teams in the cloud",
      features: ["Report Sharing", "Real-time Refresh", "Collaboration", "Security"],
      learnTopics: ["Workspaces", "Sharing & Permissions", "Scheduled Refresh", "RLS"],
      resources: [
        { title: "Power BI Service Online", url: "https://app.powerbi.com/", icon: "☁️" },
        { title: "Service Documentation", url: "https://docs.microsoft.com/en-us/power-bi/service-admin-index", icon: "📖" },
        { title: "Sharing & Security", url: "https://docs.microsoft.com/en-us/power-bi/service-share-dashboards", icon: "🔒" },
        { title: "Premium Features", url: "https://docs.microsoft.com/en-us/power-bi/service-premium", icon: "⭐" }
      ]
    },
    {
      id: 3,
      name: "Power Query",
      type: "Data Transformation",
      description: "Clean, transform, and combine data from various sources",
      features: ["Data Cleaning", "Source Merging", "Column Transformation", "Pivoting"],
      learnTopics: ["M Language", "Query Folding", "Custom Functions", "Error Handling"],
      resources: [
        { title: "Power Query Docs", url: "https://docs.microsoft.com/en-us/powerquery-m/power-query-m-reference", icon: "📖" },
        { title: "M Language Tutorial", url: "https://docs.microsoft.com/en-us/powerquery-m/", icon: "💻" },
        { title: "Data Cleaning Guide", url: "https://docs.microsoft.com/en-us/power-bi/desktop-query-overview", icon: "🧹" },
        { title: "Advanced Functions", url: "https://docs.microsoft.com/en-us/powerquery-m/power-query-m-function-reference", icon: "🔧" }
      ]
    },
    {
      id: 4,
      name: "DAX (Data Analysis Expressions)",
      type: "Calculation Language",
      description: "Write powerful calculations and measures in Power BI",
      features: ["Measures", "Calculated Columns", "Dynamic Logic", "Performance"],
      learnTopics: ["Context Transition", "Implicit Measures", "Iterator Functions", "Time Intelligence"],
      resources: [
        { title: "DAX Function Reference", url: "https://dax.guide/", icon: "📚" },
        { title: "Official DAX Docs", url: "https://docs.microsoft.com/en-us/dax/dax-function-reference", icon: "📖" },
        { title: "DAX Patterns", url: "https://www.daxpatterns.com/", icon: "🎯" },
        { title: "Time Intelligence Patterns", url: "https://docs.microsoft.com/en-us/dax/time-intelligence-functions-dax", icon: "⏰" }
      ]
    }
  ];

  const otherAnalyticsTools = [
    {
      name: "Tableau",
      desc: "Advanced data visualization and business intelligence",
      features: ["Interactive Dashboards", "Real-time Analytics", "Server Features"],
      resources: [
        { title: "Tableau Official", url: "https://www.tableau.com/", icon: "🌐" },
        { title: "Learning Resources", url: "https://www.tableau.com/learn", icon: "🎓" },
        { title: "Online Academy", url: "https://www.tableau.com/en-us/learn/training", icon: "📚" }
      ]
    },
    {
      name: "Google Data Studio",
      desc: "Free data visualization and reporting tool by Google",
      features: ["Report Building", "Data Integration", "Sharing & Collaboration"],
      resources: [
        { title: "Google Data Studio", url: "https://datastudio.google.com/", icon: "🌐" },
        { title: "Getting Started", url: "https://support.google.com/datastudio/answer/6283323", icon: "📖" },
        { title: "Community Gallery", url: "https://datastudio.google.com/gallery", icon: "🎨" }
      ]
    },
    {
      name: "Looker Studio",
      desc: "Business intelligence platform with flexible reporting",
      features: ["Data Blending", "Custom Charts", "Enterprise Solutions"],
      resources: [
        { title: "Looker Official", url: "https://www.looker.com/", icon: "🌐" },
        { title: "Documentation", url: "https://docs.looker.com/", icon: "📖" },
        { title: "Community Forum", url: "https://community.looker.com/", icon: "💬" }
      ]
    },
    {
      name: "Qlik Sense",
      desc: "Associative analytics and visualization platform",
      features: ["Associative Engine", "AI Insights", "Self-service Analytics"],
      resources: [
        { title: "Qlik Sense Home", url: "https://www.qlik.com/us/products/qlik-sense", icon: "🌐" },
        { title: "Learning Hub", url: "https://learning.qlik.com/", icon: "🎓" },
        { title: "Tutorials", url: "https://www.qlik.com/us/videos", icon: "📹" }
      ]
    }
  ];

  const learningPath = [
    {
      level: "Beginner",
      duration: "4-6 weeks",
      topics: ["Power BI Basics", "Data Import", "Basic Charts", "Simple Reports"]
    },
    {
      level: "Intermediate",
      duration: "6-8 weeks",
      topics: ["DAX Fundamentals", "Relationships", "Measures", "KPIs"]
    },
    {
      level: "Advanced",
      duration: "8-12 weeks",
      topics: ["Complex DAX", "Performance Tuning", "RLS", "Custom Solutions"]
    },
    {
      level: "Expert",
      duration: "Ongoing",
      topics: ["Architecture", "Optimization", "Azure Integration", "Industry Solutions"]
    }
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>📊 Power BI & Data Analytics</h2>
        <p>Master business intelligence, dashboards, and data visualization</p>
      </header>

      <div className="dashboard-grid">
        {/* Learning Path */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🎓 Learning Path</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {learningPath.map((path, idx) => (
              <div key={idx} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #ffa400 0%, #ff6b00 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>{path.level}</h4>
                <p style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px" }}>
                  ⏱️ {path.duration}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.8", margin: 0, paddingLeft: "15px" }}>
                  {path.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Power BI Components */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ Core Power BI Components</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {powerBiTools.map((tool) => (
              <div
                key={tool.id}
                style={{
                  padding: "18px",
                  border: "2px solid #ffa400",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedSection === tool.id ? "#fff8f0" : "white"
                }}
                onClick={() => setExpandedSection(expandedSection === tool.id ? null : tool.id)}
              >
                <div style={{ marginBottom: "10px" }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{tool.name}</h4>
                  <span style={{
                    display: "inline-block",
                    fontSize: "11px",
                    background: "#ffa400",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "15px"
                  }}>
                    {tool.type}
                  </span>
                </div>

                <p style={{ fontSize: "13px", color: "#666", margin: "10px 0" }}>
                  {tool.description}
                </p>

                {expandedSection === tool.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #ffa400", paddingTop: "15px", backgroundColor: "#fffaf5", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#8B5A00", fontSize: "13px", fontWeight: "700" }}>✨ Key Features:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {tool.features.map((feature, i) => (
                        <div key={i} style={{
                          padding: "12px",
                          background: "white",
                          borderLeft: "4px solid #ffa400",
                          marginBottom: "10px",
                          fontSize: "13px",
                          color: "#8B5A00",
                          fontWeight: "500",
                          borderRadius: "4px",
                          boxShadow: "0 1px 3px rgba(255, 164, 0, 0.15)"
                        }}>
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#8B5A00", fontSize: "13px", fontWeight: "700" }}>🎓 Learn:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {tool.learnTopics.map((topic, i) => (
                        <span key={i} style={{
                          display: "inline-block",
                          margin: "5px 5px 5px 0",
                          padding: "8px 14px",
                          background: "linear-gradient(135deg, #ff8c00 0%, #ffa400 100%)",
                          color: "white",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          boxShadow: "0 2px 4px rgba(255, 164, 0, 0.3)"
                        }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                    {tool.resources && (
                      <div>
                        <h5 style={{ marginBottom: "10px" }}>📚 Learning Resources:</h5>
                        <div style={{ marginTop: "10px" }}>
                          {tool.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                margin: "8px 0",
                                background: "#ffe8cc",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#333",
                                transition: "all 0.2s",
                                fontSize: "12px",
                                border: "1px solid #ffb366"
                              }}
                              onMouseOver={(e) => {
                                e.target.style.background = "#ffd699";
                                e.target.style.borderColor = "#ff9933";
                              }}
                              onMouseOut={(e) => {
                                e.target.style.background = "#ffe8cc";
                                e.target.style.borderColor = "#ffb366";
                              }}
                            >
                              <span style={{ marginRight: "10px", fontSize: "16px" }}>{resource.icon}</span>
                              <span>{resource.title} →</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Other Analytics Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🔍 Alternative Analytics Platforms</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {otherAnalyticsTools.map((tool, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>{tool.name}</h4>
                <p style={{ fontSize: "12px", marginBottom: "12px", opacity: 0.9 }}>
                  {tool.desc}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "2", margin: "0 0 12px 0", paddingLeft: "15px" }}>
                  {tool.features.map((feature, f) => (
                    <li key={f}>{feature}</li>
                  ))}
                </ul>
                {tool.resources && (
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "12px" }}>
                    {tool.resources.map((resource, r) => (
                      <a
                        key={r}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "block",
                          padding: "6px 0",
                          color: "white",
                          textDecoration: "none",
                          fontSize: "11px",
                          transition: "all 0.2s"
                        }}
                        onMouseOver={(e) => {
                          e.target.style.paddingLeft = "8px";
                          e.target.style.opacity = "1";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.paddingLeft = "0";
                          e.target.style.opacity = "0.9";
                        }}
                      >
                        {resource.icon} {resource.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Metrics & KPIs */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>📈 Dashboard Best Practices</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { icon: "🎯", title: "Clear KPIs", desc: "Define key performance indicators upfront" },
              { icon: "📊", title: "Right Visuals", desc: "Choose charts matching data type" },
              { icon: "🎨", title: "Design", desc: "Consistent colors, fonts, and layout" },
              { icon: "⚡", title: "Performance", desc: "Optimize queries and refresh rates" },
              { icon: "👥", title: "Interactivity", desc: "Slicers, filters for exploration" },
              { icon: "🔒", title: "Security", desc: "Row-level security and data access control" }
            ].map((practice, i) => (
              <div key={i} style={{
                padding: "15px",
                background: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{practice.icon}</div>
                <h5 style={{ margin: "0 0 6px 0" }}>{practice.title}</h5>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{practice.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PowerBIAnalytics;
