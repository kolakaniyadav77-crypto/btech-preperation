import React, { useState } from "react";
import "../styles/Dashboard.css";

const WebFrameworks = () => {
  const [expandedFramework, setExpandedFramework] = useState(null);

  const frameworks = [
    {
      id: 1,
      name: "React",
      type: "JavaScript Library",
      description: "Component-based UI library with virtual DOM and hooks",
      features: ["JSX", "Hooks", "State Management", "Virtual DOM"],
      ecosystem: ["Next.js", "React Router", "Redux", "Context API"],
      resources: [
        { title: "React Official", url: "https://react.dev/", icon: "🌐" },
        { title: "React Docs", url: "https://react.dev/learn", icon: "📖" },
        { title: "React Tutorials", url: "https://react.dev/learn/tutorial-tic-tac-toe", icon: "🎓" },
        { title: "React GitHub", url: "https://github.com/facebook/react", icon: "⭐" }
      ]
    },
    {
      id: 2,
      name: "Vue.js",
      type: "Progressive Framework",
      description: "Flexible framework with great documentation and gradual adoption",
      features: ["Templates", "Reactivity", "Components", "Directives"],
      ecosystem: ["Nuxt.js", "Vue Router", "Pinia", "Vite"],
      resources: [
        { title: "Vue.js Official", url: "https://vuejs.org/", icon: "🌐" },
        { title: "Vue Documentation", url: "https://vuejs.org/guide/introduction.html", icon: "📖" },
        { title: "Interactive Tutorial", url: "https://vuejs.org/tutorial/", icon: "🎓" },
        { title: "Vue Awesome", url: "https://github.com/vuejs/awesome-vue", icon: "⭐" }
      ]
    },
    {
      id: 3,
      name: "Angular",
      type: "Full Framework",
      description: "Enterprise-grade framework with TypeScript and RxJS",
      features: ["TypeScript", "RxJS", "Dependency Injection", "Modules"],
      ecosystem: ["Angular CLI", "Material", "RxJS", "NgRx"],
      resources: [
        { title: "Angular Official", url: "https://angular.io/", icon: "🌐" },
        { title: "Angular Docs", url: "https://angular.io/docs", icon: "📖" },
        { title: "Getting Started", url: "https://angular.io/start", icon: "🚀" },
        { title: "Angular University", url: "https://angular-university.io/", icon: "🎓" }
      ]
    },
    {
      id: 4,
      name: "Next.js",
      type: "React Meta-framework",
      description: "React framework with server-side rendering and static generation",
      features: ["SSR", "SSG", "API Routes", "File-based Routing"],
      ecosystem: ["Vercel Hosting", "Next.js Image", "Next.js Font", "Middleware"],
      resources: [
        { title: "Next.js Official", url: "https://nextjs.org/", icon: "🌐" },
        { title: "Next.js Docs", url: "https://nextjs.org/docs", icon: "📖" },
        { title: "Learn Next.js", url: "https://nextjs.org/learn", icon: "🎓" },
        { title: "Next.js Examples", url: "https://github.com/vercel/next.js/tree/canary/examples", icon: "💻" }
      ]
    },
    {
      id: 5,
      name: "Svelte",
      type: "Compiler Framework",
      description: "Framework that compiles to vanilla JavaScript",
      features: ["Reactive Variables", "No Virtual DOM", "Animations", "Stores"],
      ecosystem: ["SvelteKit", "Sapper", "Svelte Native", "Sveltestrap"],
      resources: [
        { title: "Svelte Official", url: "https://svelte.dev/", icon: "🌐" },
        { title: "Svelte Tutorial", url: "https://svelte.dev/tutorial", icon: "🎓" },
        { title: "SvelteKit", url: "https://kit.svelte.dev/", icon: "🚀" },
        { title: "Svelte GitHub", url: "https://github.com/sveltejs/svelte", icon: "⭐" }
      ]
    },
    {
      id: 6,
      name: "Remix",
      type: "Full-stack Framework",
      description: "Modern web framework built on web fundamentals",
      features: ["Server-side Rendering", "Data Loading", "Form Handling", "Error Boundaries"],
      ecosystem: ["Vercel", "Netlify", "Fly.io", "Remix UI"],
      resources: [
        { title: "Remix Official", url: "https://remix.run/", icon: "🌐" },
        { title: "Remix Docs", url: "https://remix.run/docs/", icon: "📖" },
        { title: "Remix Tutorials", url: "https://remix.run/docs/en/main/start/quickstart", icon: "🎓" },
        { title: "Remix GitHub", url: "https://github.com/remix-run/remix", icon: "⭐" }
      ]
    }
  ];

  const backendFrameworks = [
    { name: "Express.js", desc: "Minimal Node.js web framework", skills: ["Routing", "Middleware", "Error Handling"], resources: [
      { title: "Express.js", url: "https://expressjs.com/", icon: "🌐" },
      { title: "Express Guide", url: "https://expressjs.com/en/guide/routing.html", icon: "📖" },
      { title: "GitHub", url: "https://github.com/expressjs/express", icon: "⭐" }
    ]},
    { name: "Django", desc: "Full-featured Python web framework", skills: ["ORM", "Admin Panel", "Auth"], resources: [
      { title: "Django Official", url: "https://www.djangoproject.com/", icon: "🌐" },
      { title: "Django Docs", url: "https://docs.djangoproject.com/", icon: "📖" },
      { title: "Django Girls", url: "https://tutorial.djangogirls.org/", icon: "🎓" }
    ]},
    { name: "Flask", desc: "Lightweight Python microframework", skills: ["Routing", "Templates", "Blueprints"], resources: [
      { title: "Flask Official", url: "https://flask.palletsprojects.com/", icon: "🌐" },
      { title: "Flask Documentation", url: "https://flask.palletsprojects.com/quickstart/", icon: "📖" },
      { title: "Flask by Example", url: "https://github.com/realpython/flask-by-example", icon: "💻" }
    ]},
    { name: "FastAPI", desc: "Modern async Python framework", skills: ["Type Hints", "Validation", "Auto Docs"], resources: [
      { title: "FastAPI Official", url: "https://fastapi.tiangolo.com/", icon: "🌐" },
      { title: "FastAPI Docs", url: "https://fastapi.tiangolo.com/tutorial/", icon: "📖" },
      { title: "GitHub", url: "https://github.com/tiangolo/fastapi", icon: "⭐" }
    ]},
    { name: "Spring Boot", desc: "Java enterprise framework", skills: ["Dependency Injection", "Actuator", "Security"], resources: [
      { title: "Spring Boot", url: "https://spring.io/projects/spring-boot", icon: "🌐" },
      { title: "Spring Docs", url: "https://spring.io/guides", icon: "📖" },
      { title: "Spring Academy", url: "https://spring.academy/", icon: "🎓" }
    ]},
    { name: "Ruby on Rails", desc: "Full-stack Ruby framework", skills: ["Convention over Config", "ActiveRecord"], resources: [
      { title: "Ruby on Rails", url: "https://rubyonrails.org/", icon: "🌐" },
      { title: "Rails Guides", url: "https://guides.rubyonrails.org/", icon: "📖" },
      { title: "Rails Community", url: "https://rubyonrails.org/community", icon: "💬" }
    ]}
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>🌐 Web Frameworks & Full-Stack Development</h2>
        <p>Master modern web frameworks, tools, and development practices</p>
      </header>

      <div className="dashboard-grid">
        {/* Frontend Comparison */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>⚛️ Frontend Frameworks</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {frameworks.map((fw) => (
              <div
                key={fw.id}
                style={{
                  padding: "18px",
                  border: "2px solid #667eea",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedFramework === fw.id ? "#f5fbff" : "white",
                  boxShadow: expandedFramework === fw.id ? "0 4px 12px rgba(102, 126, 234, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => setExpandedFramework(expandedFramework === fw.id ? null : fw.id)}
              >
                <div style={{ marginBottom: "10px" }}>
                  <h4 style={{ margin: "0 0 5px 0", color: "#2d3561", fontSize: "15px", fontWeight: "700" }}>{fw.name}</h4>
                  <span style={{
                    display: "inline-block",
                    fontSize: "11px",
                    background: "linear-gradient(135deg, #5568d3 0%, #667eea 100%)",
                    color: "white",
                    padding: "5px 14px",
                    borderRadius: "15px",
                    fontWeight: "600"
                  }}>
                    {fw.type}
                  </span>
                </div>

                <p style={{ fontSize: "13px", color: "#2d3561", margin: "10px 0", fontWeight: "500" }}>
                  {fw.description}
                </p>

                {expandedFramework === fw.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #667eea", paddingTop: "15px", backgroundColor: "#f5fbff", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>✨ Core Features:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {fw.features.map((feature, i) => (
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
                          {feature}
                        </span>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>🔧 Ecosystem:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {fw.ecosystem.map((tool, i) => (
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
                          → {tool}
                        </div>
                      ))}
                    </div>
                    {fw.resources && (
                      <div style={{ marginTop: "15px" }}>
                        <h5 style={{ marginBottom: "12px", color: "#4d5a9e", fontSize: "13px", fontWeight: "600" }}>📚 Learning Resources:</h5>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {fw.resources.map((resource, r) => (
                            <a
                              key={r}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "12px",
                                background: "#d8deff",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#3d4a7f",
                                transition: "all 0.2s ease",
                                fontSize: "12px",
                                fontWeight: "500",
                                border: "1px solid #c4caff",
                                cursor: "pointer"
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.background = "#c4caff";
                                e.currentTarget.style.transform = "translateX(5px)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.background = "#d8deff";
                                e.currentTarget.style.transform = "translateX(0)";
                              }}
                            >
                              <span style={{ marginRight: "12px", fontSize: "18px" }}>{resource.icon}</span>
                              <span>{resource.title}</span>
                              <span style={{ marginLeft: "auto" }}>→</span>
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

        {/* Backend Frameworks */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🖥️ Backend Frameworks</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {backendFrameworks.map((fw, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{fw.name}</h5>
                <p style={{ fontSize: "12px", marginBottom: "12px", opacity: 0.9 }}>
                  {fw.desc}
                </p>
                <div style={{ fontSize: "11px", opacity: 0.85, marginBottom: "12px" }}>
                  {fw.skills.map((skill, s) => (
                    <div key={s}>✓ {skill}</div>
                  ))}
                </div>
                {fw.resources && (
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: "12px" }}>
                    {fw.resources.map((resource, r) => (
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

        {/* Full-Stack Path */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🚀 Full-Stack Development Path</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                level: "Fundamentals",
                time: "4-6 weeks",
                items: ["HTML/CSS/JS", "DOM Manipulation", "Async Programming", "HTTP Basics"]
              },
              {
                level: "Frontend",
                time: "6-8 weeks",
                items: ["React/Vue/Angular", "State Management", "Routing", "Styling"]
              },
              {
                level: "Backend",
                time: "6-8 weeks",
                items: ["Node.js/Python", "Databases", "APIs", "Authentication"]
              },
              {
                level: "DevOps",
                time: "4-6 weeks",
                items: ["Docker", "Deployment", "CI/CD", "Monitoring"]
              },
              {
                level: "Advanced",
                time: "Ongoing",
                items: ["Optimization", "Testing", "Security", "Scaling"]
              }
            ].map((path, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>{path.level}</h4>
                <p style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px" }}>
                  ⏱️ {path.time}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.9", margin: 0, paddingLeft: "15px" }}>
                  {path.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Web Development Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ Essential Tools & Libraries</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { icon: "📦", title: "npm/yarn", desc: "Package managers" },
              { icon: "⚙️", title: "Webpack", desc: "Module bundler" },
              { icon: "⚡", title: "Vite", desc: "Fast build tool" },
              { icon: "🧪", title: "Jest", desc: "Testing framework" },
              { icon: "🎨", title: "Tailwind", desc: "Utility CSS" },
              { icon: "🔍", title: "ESLint", desc: "Code quality" },
              { icon: "🌈", title: "Storybook", desc: "Component library" },
              { icon: "📚", title: "Postman", desc: "API testing" }
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
      </div>
    </main>
  );
};

export default WebFrameworks;
