import React, { useState } from "react";
import "../styles/Dashboard.css";

const DevOpsCloud = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const cloudProviders = [
    {
      id: 1,
      name: "AWS (Amazon Web Services)",
      description: "Largest cloud provider with extensive services",
      services: ["EC2 (Compute)", "S3 (Storage)", "RDS (Databases)", "Lambda (Serverless)"],
      useCases: ["Web Apps", "Big Data", "ML", "Enterprise"],
      resources: [
        { title: "AWS Official", url: "https://aws.amazon.com/", icon: "🌐" },
        { title: "AWS Training", url: "https://aws.amazon.com/training/", icon: "🎓" },
        { title: "AWS Documentation", url: "https://docs.aws.amazon.com/", icon: "📖" },
        { title: "AWS Free Tier", url: "https://aws.amazon.com/free/", icon: "💰" }
      ]
    },
    {
      id: 2,
      name: "Google Cloud",
      description: "Google's cloud platform with strong data & ML services",
      services: ["Compute Engine", "Cloud Storage", "BigQuery", "Vertex AI"],
      useCases: ["Data Analytics", "ML/AI", "Container Apps", "Gaming"],
      resources: [
        { title: "Google Cloud", url: "https://cloud.google.com/", icon: "🌐" },
        { title: "GCP Training", url: "https://cloud.google.com/training", icon: "🎓" },
        { title: "Cloud Documentation", url: "https://cloud.google.com/docs", icon: "📖" },
        { title: "GCP Free Trial", url: "https://cloud.google.com/free/", icon: "💰" }
      ]
    },
    {
      id: 3,
      name: "Microsoft Azure",
      description: "Enterprise-focused cloud with Windows integration",
      services: ["VMs", "App Service", "SQL Database", "Cosmos DB"],
      useCases: ["Enterprise", "Hybrid Cloud", "AI", "Gaming"],
      resources: [
        { title: "Microsoft Azure", url: "https://azure.microsoft.com/", icon: "🌐" },
        { title: "Azure Learning", url: "https://learn.microsoft.com/en-us/azure/", icon: "🎓" },
        { title: "Azure Docs", url: "https://learn.microsoft.com/en-us/azure/?product=featured", icon: "📖" },
        { title: "Azure Free Account", url: "https://azure.microsoft.com/en-us/free/", icon: "💰" }
      ]
    },
    {
      id: 4,
      name: "Firebase (Google)",
      description: "Backend-as-a-Service for mobile and web",
      services: ["Real-time DB", "Authentication", "Hosting", "Cloud Functions"],
      useCases: ["Startups", "Mobile Apps", "Rapid Development"],
      resources: [
        { title: "Firebase", url: "https://firebase.google.com/", icon: "🌐" },
        { title: "Firebase Docs", url: "https://firebase.google.com/docs", icon: "📖" },
        { title: "Firebase Console", url: "https://console.firebase.google.com/", icon: "⚙️" },
        { title: "Firebase Tutorials", url: "https://firebase.google.com/codelabs", icon: "🎓" }
      ]
    }
  ];

  const devopsTools = [
    {
      category: "Containerization",
      tools: ["Docker", "Podman", "containerd"],
      desc: "Package applications with dependencies for consistency",
      resources: [
        { title: "Docker Official", url: "https://www.docker.com/", icon: "🌐" },
        { title: "Docker Docs", url: "https://docs.docker.com/", icon: "📖" },
        { title: "Docker Hub", url: "https://hub.docker.com/", icon: "📦" }
      ]
    },
    {
      category: "Orchestration",
      tools: ["Kubernetes", "Docker Swarm", "OpenShift"],
      desc: "Manage containers at scale with auto-scaling and load balancing",
      resources: [
        { title: "Kubernetes", url: "https://kubernetes.io/", icon: "🌐" },
        { title: "Kubernetes Docs", url: "https://kubernetes.io/docs/", icon: "📖" },
        { title: "Kubernetes Training", url: "https://kubernetes.io/training/", icon: "🎓" }
      ]
    },
    {
      category: "CI/CD",
      tools: ["Jenkins", "GitLab CI", "GitHub Actions", "CircleCI"],
      desc: "Automate testing and deployment on code changes",
      resources: [
        { title: "GitHub Actions", url: "https://github.com/features/actions", icon: "🌐" },
        { title: "GitLab CI/CD", url: "https://docs.gitlab.com/ee/ci/", icon: "📖" },
        { title: "Jenkins", url: "https://www.jenkins.io/", icon: "🔧" }
      ]
    },
    {
      category: "Infrastructure as Code",
      tools: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
      desc: "Define infrastructure with code for version control and repeatability",
      resources: [
        { title: "Terraform", url: "https://www.terraform.io/", icon: "🌐" },
        { title: "Terraform Docs", url: "https://www.terraform.io/docs", icon: "📖" },
        { title: "Ansible", url: "https://www.ansible.com/", icon: "🔧" }
      ]
    },
    {
      category: "Monitoring & Logging",
      tools: ["Prometheus", "ELK Stack", "Datadog", "New Relic"],
      desc: "Track application health, performance, and troubleshoot issues",
      resources: [
        { title: "Prometheus", url: "https://prometheus.io/", icon: "🌐" },
        { title: "ELK Stack", url: "https://www.elastic.co/elastic-stack", icon: "📊" },
        { title: "Datadog", url: "https://www.datadoghq.com/", icon: "📈" }
      ]
    },
    {
      category: "Configuration Management",
      tools: ["Ansible", "Chef", "Puppet", "SaltStack"],
      desc: "Automate server configuration and management",
      resources: [
        { title: "Ansible Docs", url: "https://docs.ansible.com/", icon: "📖" },
        { title: "Chef", url: "https://www.chef.io/", icon: "🔧" },
        { title: "Puppet", url: "https://puppet.com/", icon: "⚙️" }
      ]
    }
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>☁️ DevOps & Cloud Platforms</h2>
        <p>Master cloud infrastructure, containerization, CI/CD, and DevOps practices</p>
      </header>

      <div className="dashboard-grid">
        {/* Cloud Providers */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>☁️ Major Cloud Providers</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {cloudProviders.map((provider) => (
              <div
                key={provider.id}
                style={{
                  padding: "18px",
                  border: "2px solid #00d4ff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedSection === provider.id ? "#f5fbff" : "white",
                  boxShadow: expandedSection === provider.id ? "0 4px 12px rgba(0, 212, 255, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => setExpandedSection(expandedSection === provider.id ? null : provider.id)}
              >
                <h4 style={{ margin: "0 0 8px 0", color: "#003d7a", fontSize: "15px", fontWeight: "700" }}>{provider.name}</h4>
                <p style={{ fontSize: "13px", color: "#003d7a", margin: "10px 0", fontWeight: "500" }}>
                  {provider.description}
                </p>

                {expandedSection === provider.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #00d4ff", paddingTop: "15px", backgroundColor: "#f5fbff", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#003d7a", fontSize: "13px", fontWeight: "700" }}>🔧 Key Services:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {provider.services.map((service, i) => (
                        <div key={i} style={{
                          padding: "12px",
                          background: "white",
                          borderLeft: "4px solid #00d4ff",
                          marginBottom: "10px",
                          fontSize: "13px",
                          color: "#003d7a",
                          fontWeight: "500",
                          borderRadius: "4px",
                          boxShadow: "0 1px 3px rgba(0, 168, 204, 0.15)"
                        }}>
                          → {service}
                        </div>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#003d7a", fontSize: "13px", fontWeight: "700" }}>✓ Best For:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {provider.useCases.map((useCase, i) => (
                        <span key={i} style={{
                          display: "inline-block",
                          margin: "5px 5px 5px 0",
                          padding: "8px 14px",
                          background: "linear-gradient(135deg, #00a8cc 0%, #00d4ff 100%)",
                          color: "white",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          boxShadow: "0 2px 4px rgba(0, 168, 204, 0.3)"
                        }}>
                          {useCase}
                        </span>
                      ))}
                    </div>
                    {provider.resources && (
                      <div>
                        <h5 style={{ marginBottom: "10px" }}>📚 Learning Resources:</h5>
                        {provider.resources.map((resource, r) => (
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
                              background: "#d0f0ff",
                              borderRadius: "6px",
                              textDecoration: "none",
                              color: "#0088cc",
                              transition: "all 0.2s",
                              fontSize: "12px",
                              border: "1px solid #00d4ff"
                            }}
                            onMouseOver={(e) => {
                              e.target.style.background = "#a8e0ff";
                            }}
                            onMouseOut={(e) => {
                              e.target.style.background = "#d0f0ff";
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

        {/* DevOps Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ DevOps Tools & Technologies</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {devopsTools.map((tool, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{tool.category}</h5>
                <p style={{ fontSize: "12px", marginBottom: "12px", opacity: 0.9 }}>
                  {tool.desc}
                </p>
                <div style={{ fontSize: "11px", marginBottom: "12px" }}>
                  {tool.tools.map((t, j) => (
                    <span key={j} style={{
                      display: "inline-block",
                      margin: "4px 4px 4px 0",
                      padding: "4px 10px",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "12px"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
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

        {/* Core Concepts */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>📚 Core DevOps Concepts</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                icon: "🐳",
                title: "Docker Containers",
                desc: "Lightweight, portable application packages with all dependencies"
              },
              {
                icon: "🎛️",
                title: "Kubernetes (K8s)",
                desc: "Container orchestration for deployment, scaling, and management"
              },
              {
                icon: "♻️",
                title: "CI/CD Pipeline",
                desc: "Automated testing and deployment on every code change"
              },
              {
                icon: "🏗️",
                title: "Infrastructure as Code",
                desc: "Manage infrastructure through code and version control"
              },
              {
                icon: "📊",
                title: "Monitoring & Alerting",
                desc: "Track performance, errors, and security threats in real-time"
              },
              {
                icon: "📝",
                title: "Logging & Tracing",
                desc: "Centralized logging and distributed tracing for debugging"
              },
              {
                icon: "🔄",
                title: "GitOps",
                desc: "Use Git as source of truth for infrastructure and deployments"
              },
              {
                icon: "🚀",
                title: "Blue-Green Deploy",
                desc: "Zero-downtime deployments by switching between environments"
              }
            ].map((concept, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "#f5f5f5",
                borderRadius: "8px"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{concept.icon}</div>
                <h5 style={{ margin: "0 0 6px 0" }}>{concept.title}</h5>
                <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>{concept.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🎓 DevOps & Cloud Learning Roadmap</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                phase: "Linux Basics",
                duration: "3-4 weeks",
                topics: ["Command Line", "File System", "Users & Permissions", "Networking"]
              },
              {
                phase: "Containerization",
                duration: "4-6 weeks",
                topics: ["Docker Basics", "Images & Containers", "Docker Compose", "Registries"]
              },
              {
                phase: "Orchestration",
                duration: "6-8 weeks",
                topics: ["Kubernetes Basics", "Pods", "Services", "Deployments"]
              },
              {
                phase: "CI/CD",
                duration: "4-6 weeks",
                topics: ["Jenkins/GitHub Actions", "Pipelines", "Testing", "Deployment"]
              },
              {
                phase: "Cloud Platforms",
                duration: "6-8 weeks",
                topics: ["AWS/GCP/Azure", "Services", "Pricing", "Best Practices"]
              },
              {
                phase: "Advanced",
                duration: "Ongoing",
                topics: ["Monitoring", "Security", "Performance", "Cost Optimization"]
              }
            ].map((phase, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Phase {i + 1}: {phase.phase}</h4>
                <p style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px" }}>
                  ⏱️ {phase.duration}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.8", margin: 0, paddingLeft: "15px" }}>
                  {phase.topics.map((topic, j) => (
                    <li key={j}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>✨ DevOps Best Practices</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { icon: "🔄", title: "Automation", desc: "Automate everything repeatedly" },
              { icon: "📈", title: "Scalability", desc: "Design systems to scale horizontally" },
              { icon: "🔍", title: "Observability", desc: "Monitor, log, trace all systems" },
              { icon: "🔐", title: "Security", desc: "Security from development to production" },
              { icon: "📊", title: "Data-Driven", desc: "Make decisions based on metrics" },
              { icon: "👥", title: "Collaboration", desc: "Break silos between teams" },
              { icon: "⚡", title: "Speed", desc: "Rapid iteration and continuous delivery" },
              { icon: "♻️", title: "Reliability", desc: "Build resilient, self-healing systems" }
            ].map((practice, i) => (
              <div key={i} style={{
                padding: "15px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "8px",
                color: "white",
                textAlign: "center"
              }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{practice.icon}</div>
                <h5 style={{ margin: "0 0 6px 0", fontSize: "13px" }}>{practice.title}</h5>
                <p style={{ fontSize: "11px", margin: 0 }}>{practice.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DevOpsCloud;
