import React, { useState } from "react";
import "../styles/Dashboard.css";

const MobileDevelopment = () => {
  const [expandedPlatform, setExpandedPlatform] = useState(null);

  const platforms = [
    {
      id: 1,
      name: "React Native",
      os: "iOS & Android",
      description: "Build native apps with React and JavaScript",
      features: ["Code Sharing", "Hot Reload", "Native Components", "Large Community"],
      learnPath: ["JavaScript/React", "Native APIs", "Navigation", "State Management"],
      resources: [
        { title: "React Native Official", url: "https://reactnative.dev/", icon: "🌐" },
        { title: "Documentation", url: "https://reactnative.dev/docs/getting-started", icon: "📖" },
        { title: "React Native Tutorials", url: "https://reactnative.dev/docs/tutorial", icon: "🎓" },
        { title: "Expo CLI", url: "https://docs.expo.dev/", icon: "⚡" }
      ]
    },
    {
      id: 2,
      name: "Flutter",
      os: "iOS & Android",
      description: "High-performance apps with Dart language",
      features: ["Hot Reload", "Rich Widgets", "Fast Performance", "Beautiful UI"],
      learnPath: ["Dart Language", "Widgets", "State Management", "Firebase"],
      resources: [
        { title: "Flutter Official", url: "https://flutter.dev/", icon: "🌐" },
        { title: "Flutter Docs", url: "https://docs.flutter.dev/", icon: "📖" },
        { title: "Flutter Codelabs", url: "https://codelabs.developers.google.com/?product=flutter", icon: "🎓" },
        { title: "Pub.dev Packages", url: "https://pub.dev/", icon: "📦" }
      ]
    },
    {
      id: 3,
      name: "Swift",
      os: "iOS Only",
      description: "Apple's modern language for iOS development",
      features: ["Type Safety", "Modern Syntax", "Performance", "SwiftUI"],
      learnPath: ["Swift Basics", "UIKit/SwiftUI", "Networking", "CoreData"],
      resources: [
        { title: "Swift Official", url: "https://www.swift.org/", icon: "🌐" },
        { title: "Swift Documentation", url: "https://docs.swift.org/", icon: "📖" },
        { title: "Apple Developer", url: "https://developer.apple.com/swift/", icon: "🎓" },
        { title: "SwiftUI Tutorials", url: "https://developer.apple.com/tutorials/swiftui/", icon: "🎬" }
      ]
    },
    {
      id: 4,
      name: "Kotlin",
      os: "Android Only",
      description: "Modern language for Android development",
      features: ["Null Safety", "Concise Syntax", "Coroutines", "Android Studio"],
      learnPath: ["Kotlin Basics", "Android Framework", "Jetpack", "Coroutines"],
      resources: [
        { title: "Kotlin Official", url: "https://kotlinlang.org/", icon: "🌐" },
        { title: "Kotlin Docs", url: "https://kotlinlang.org/docs/getting-started.html", icon: "📖" },
        { title: "Google Developers", url: "https://developer.android.com/kotlin", icon: "🎓" },
        { title: "Android Studio Tutorials", url: "https://developer.android.com/studio", icon: "🛠️" }
      ]
    }
  ];

  const crossPlatformTools = [
    {
      name: "Expo",
      desc: "Development platform for React Native apps",
      features: ["Quick Setup", "Cloud Build", "EAS Updates"],
      resources: [
        { title: "Expo Official", url: "https://expo.dev/", icon: "🌐" },
        { title: "Expo Docs", url: "https://docs.expo.dev/", icon: "📖" }
      ]
    },
    {
      name: "NativeScript",
      desc: "Full access to native APIs with JavaScript/TypeScript",
      features: ["Angular/Vue Compatible", "Direct Native Access"],
      resources: [
        { title: "NativeScript", url: "https://nativescript.org/", icon: "🌐" },
        { title: "Docs", url: "https://docs.nativescript.org/", icon: "📖" }
      ]
    },
    {
      name: "Capacitor",
      desc: "Bridge web apps to native apps",
      features: ["Web Stack", "Native Plugins", "PWA Support"],
      resources: [
        { title: "Capacitor", url: "https://capacitorjs.com/", icon: "🌐" },
        { title: "Documentation", url: "https://capacitorjs.com/docs", icon: "📖" }
      ]
    },
    {
      name: "Cordova",
      desc: "Classic cross-platform mobile framework",
      features: ["Plugin Ecosystem", "Web Technologies"],
      resources: [
        { title: "Cordova", url: "https://cordova.apache.org/", icon: "🌐" },
        { title: "Docs", url: "https://cordova.apache.org/docs/en/latest/", icon: "📖" }
      ]
    }
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>📱 Mobile Development</h2>
        <p>Build iOS, Android, and cross-platform mobile applications</p>
      </header>

      <div className="dashboard-grid">
        {/* Platform Overview */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>📲 Mobile Development Platforms</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {platforms.map((platform) => (
              <div
                key={platform.id}
                style={{
                  padding: "18px",
                  border: "2px solid #667eea",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedPlatform === platform.id ? "#f0f4ff" : "white"
                }}
                onClick={() => setExpandedPlatform(expandedPlatform === platform.id ? null : platform.id)}
              >
                <div style={{ marginBottom: "10px" }}>
                  <h4 style={{ margin: "0 0 5px 0" }}>{platform.name}</h4>
                  <span style={{
                    display: "inline-block",
                    fontSize: "11px",
                    background: "#667eea",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "15px"
                  }}>
                    {platform.os}
                  </span>
                </div>

                <p style={{ fontSize: "13px", color: "#666", margin: "10px 0" }}>
                  {platform.description}
                </p>

                {expandedPlatform === platform.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #667eea", paddingTop: "15px", backgroundColor: "#f5fbff", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>✨ Key Features:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {platform.features.map((feature, i) => (
                        <div key={i} style={{
                          padding: "12px",
                          background: "white",
                          borderLeft: "4px solid #667eea",
                          marginBottom: "10px",
                          fontSize: "13px",
                          color: "#2d3561",
                          fontWeight: "500",
                          borderRadius: "4px",
                          boxShadow: "0 1px 3px rgba(102, 126, 234, 0.15)"
                        }}>
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>🎓 Learning Path:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {platform.learnPath.map((item, i) => (
                        <span key={i} style={{
                          display: "inline-block",
                          margin: "5px 5px 5px 0",
                          padding: "8px 14px",
                          background: "linear-gradient(135deg, #5568d3 0%, #667eea 100%)",
                          color: "white",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          boxShadow: "0 2px 4px rgba(102, 126, 234, 0.3)"
                        }}>
                          {item}
                        </span>
                      ))}
                    </div>
                    {platform.resources && (
                      <div>
                        <h5 style={{ marginBottom: "10px" }}>📚 Learning Resources:</h5>
                        {platform.resources.map((resource, r) => (
                          <a
                            key={r}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              padding: "10px",
                              margin: "8px 0",
                              background: "#e8ebff",
                              borderRadius: "6px",
                              textDecoration: "none",
                              color: "#667eea",
                              transition: "all 0.2s",
                              fontSize: "12px",
                              border: "1px solid #667eea"
                            }}
                            onMouseOver={(e) => {
                              e.target.style.background = "#d8deff";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.background = "#e8ebff";
                            }}
                          >
                            <span style={{ marginRight: "10px", fontSize: "16px" }}>{resource.icon}</span>
                            <span>{resource.title} →</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Cross-Platform Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🔄 Cross-Platform Frameworks</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {crossPlatformTools.map((tool, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{tool.name}</h5>
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

        {/* Mobile Dev Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ Essential Mobile Development Tools</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { icon: "🚀", title: "Xcode", desc: "iOS development IDE" },
              { icon: "🔧", title: "Android Studio", desc: "Android development IDE" },
              { icon: "🧪", title: "Firebase", desc: "Backend & Analytics" },
              { icon: "📊", title: "App Center", desc: "Build & Distribution" },
              { icon: "🐛", title: "Sentry", desc: "Error Tracking" },
              { icon: "⚡", title: "Redux/Provider", desc: "State Management" },
              { icon: "🌐", title: "REST APIs", desc: "Backend Communication" },
              { icon: "📸", title: "Camera/Gallery", desc: "Native API Access" }
            ].map((tool, i) => (
              <div key={i} style={{
                padding: "15px",
                background: "#f5f5f5",
                borderRadius: "8px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{tool.icon}</div>
                <h5 style={{ margin: "0 0 6px 0" }}>{tool.title}</h5>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>📚 Mobile Developer Roadmap</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                phase: "Fundamentals",
                duration: "4-6 weeks",
                topics: ["Language Basics", "OOP", "APIs", "JSON"]
              },
              {
                phase: "Platform Basics",
                duration: "4-6 weeks",
                topics: ["UI Components", "Navigation", "Lifecycle", "Storage"]
              },
              {
                phase: "Intermediate",
                duration: "6-8 weeks",
                topics: ["Networking", "Authentication", "State Management", "Testing"]
              },
              {
                phase: "Advanced",
                duration: "8-12 weeks",
                topics: ["Performance", "Security", "Publishing", "Analytics"]
              },
              {
                phase: "Specialized",
                duration: "Ongoing",
                topics: ["AR/VR", "ML Integration", "IoT", "Advanced Graphics"]
              }
            ].map((phase, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>{phase.phase}</h4>
                <p style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px" }}>
                  ⏱️ {phase.duration}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.9", margin: 0, paddingLeft: "15px" }}>
                  {phase.topics.map((topic, j) => (
                    <li key={j}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Design Guidelines */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🎨 Mobile Design Guidelines</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                name: "Apple HIG",
                desc: "Human Interface Guidelines for iOS/macOS",
                includes: ["Design Principles", "Components", "Patterns", "Best Practices"]
              },
              {
                name: "Material Design",
                desc: "Google's design system for Android and beyond",
                includes: ["Visual Language", "Components", "Layouts", "Accessibility"]
              },
              {
                name: "UX Best Practices",
                desc: "Cross-platform mobile UX principles",
                includes: ["Navigation", "Performance", "Accessibility", "Battery Life"]
              }
            ].map((guideline, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{guideline.name}</h5>
                <p style={{ fontSize: "12px", marginBottom: "12px", opacity: 0.9 }}>
                  {guideline.desc}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.9", margin: 0, paddingLeft: "15px" }}>
                  {guideline.includes.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MobileDevelopment;
