import React, { useState } from "react";
import { Database, Zap, GitBranch } from "lucide-react";
import "../styles/Dashboard.css";

const DataEngineering = () => {
  const [expandedTool, setExpandedTool] = useState(null);

  const tools = [
    {
      id: 1,
      name: "Apache Spark",
      category: "Big Data Processing",
      description: "Distributed computing for large-scale data processing",
      skills: ["RDD", "DataFrames", "SQL", "ML Libraries"],
      useCases: ["ETL Pipelines", "Real-time Processing", "Machine Learning at Scale"],
      resources: [
        { title: "Apache Spark Official", url: "https://spark.apache.org/", icon: "🌐" },
        { title: "Spark Documentation", url: "https://spark.apache.org/docs/latest/", icon: "📖" },
        { title: "Spark SQL Guide", url: "https://spark.apache.org/docs/latest/sql-programming-guide.html", icon: "📚" },
        { title: "Databricks Academy", url: "https://academy.databricks.com/", icon: "🎓" }
      ]
    },
    {
      id: 2,
      name: "Apache Kafka",
      category: "Stream Processing",
      description: "Real-time event streaming platform for data pipelines",
      skills: ["Topics", "Producers", "Consumers", "Stream Processing"],
      useCases: ["Event Streaming", "Log Aggregation", "Real-time Analytics"],
      resources: [
        { title: "Apache Kafka", url: "https://kafka.apache.org/", icon: "🌐" },
        { title: "Kafka Documentation", url: "https://kafka.apache.org/documentation/", icon: "📖" },
        { title: "Kafka Tutorials", url: "https://kafka.apache.org/quickstart", icon: "🎓" },
        { title: "Confluent Developer", url: "https://developer.confluent.io/", icon: "💻" }
      ]
    },
    {
      id: 3,
      name: "Apache Airflow",
      category: "Workflow Orchestration",
      description: "Workflow orchestration tool for managing data pipelines",
      skills: ["DAGs", "Operators", "Scheduling", "Monitoring"],
      useCases: ["ETL Orchestration", "Data Pipeline Management", "Job Scheduling"],
      resources: [
        { title: "Apache Airflow", url: "https://airflow.apache.org/", icon: "🌐" },
        { title: "Official Docs", url: "https://airflow.apache.org/docs/apache-airflow/stable/", icon: "📖" },
        { title: "Quick Start", url: "https://airflow.apache.org/docs/apache-airflow/stable/start/", icon: "🚀" },
        { title: "Astronomer Training", url: "https://www.astronomer.io/training/", icon: "🎓" }
      ]
    },
    {
      id: 4,
      name: "dbt (Data Build Tool)",
      category: "Transformation",
      description: "Modern data transformation framework for SQL workflows",
      skills: ["SQL Transformation", "Testing", "Documentation", "Version Control"],
      useCases: ["Analytics Engineering", "Data Modeling", "Data Quality"],
      resources: [
        { title: "dbt Official", url: "https://www.getdbt.com/", icon: "🌐" },
        { title: "dbt Documentation", url: "https://docs.getdbt.com/", icon: "📖" },
        { title: "dbt Learn", url: "https://learn.getdbt.com/", icon: "🎓" },
        { title: "dbt Cloud", url: "https://cloud.getdbt.com/", icon: "☁️" }
      ]
    },
    {
      id: 5,
      name: "Data Warehouses",
      category: "Storage & Analytics",
      description: "BigQuery, Snowflake, Redshift for analytics",
      skills: ["SQL", "Partitioning", "Clustering", "Performance Tuning"],
      useCases: ["Data Storage", "Analytics Queries", "Data Lake Integration"],
      resources: [
        { title: "Google BigQuery", url: "https://cloud.google.com/bigquery", icon: "🌐" },
        { title: "Snowflake", url: "https://www.snowflake.com/", icon: "❄️" },
        { title: "AWS Redshift", url: "https://aws.amazon.com/redshift/", icon: "🔧" },
        { title: "DW Comparison Guide", url: "https://cloud.google.com/bigquery/docs/reference/standard-sql/", icon: "📊" }
      ]
    },
    {
      id: 6,
      name: "AWS Lambda & EMR",
      category: "Cloud Data Services",
      description: "Serverless and managed Hadoop for data processing",
      skills: ["Lambda Functions", "EMR Clusters", "S3 Data Lakes", "Cost Optimization"],
      useCases: ["Serverless ETL", "Big Data Processing", "Event-driven Workflows"],
      resources: [
        { title: "AWS Lambda", url: "https://aws.amazon.com/lambda/", icon: "🌐" },
        { title: "AWS EMR", url: "https://aws.amazon.com/emr/", icon: "📊" },
        { title: "AWS S3", url: "https://aws.amazon.com/s3/", icon: "💾" },
        { title: "AWS Training", url: "https://aws.amazon.com/training/", icon: "🎓" }
      ]
    }
  ];

  const roadmap = [
    {
      phase: "Foundations",
      duration: "3-4 weeks",
      items: ["SQL Mastery", "Python for Data", "Data Fundamentals", "Database Design"]
    },
    {
      phase: "ETL & Pipelines",
      duration: "4-6 weeks",
      items: ["ETL Concepts", "Python Scripts", "Scheduling Jobs", "Error Handling"]
    },
    {
      phase: "Big Data",
      duration: "6-8 weeks",
      items: ["Spark Fundamentals", "Distributed Computing", "Partitioning", "Performance"]
    },
    {
      phase: "Streaming",
      duration: "4-6 weeks",
      items: ["Kafka Concepts", "Stream Processing", "Real-time Pipelines", "Monitoring"]
    },
    {
      phase: "Cloud & DevOps",
      duration: "4-6 weeks",
      items: ["AWS/GCP Services", "IaC", "Docker", "CI/CD for Data"]
    }
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>🔧 Data Engineering</h2>
        <p>Master data pipelines, ETL, stream processing, and big data technologies</p>
      </header>

      <div className="dashboard-grid">
        {/* Roadmap */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🗺️ Learning Roadmap</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {roadmap.map((phase, idx) => (
              <div key={idx} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h4 style={{ margin: "0 0 8px 0" }}>Phase {idx + 1}: {phase.phase}</h4>
                <p style={{ fontSize: "11px", opacity: 0.9, marginBottom: "12px" }}>
                  ⏱️ {phase.duration}
                </p>
                <ul style={{ fontSize: "11px", lineHeight: "1.9", margin: 0, paddingLeft: "15px" }}>
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Engineering Tools */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ Core Data Engineering Tools</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {tools.map((tool) => (
              <div
                key={tool.id}
                style={{
                  padding: "18px",
                  border: "2px solid #00d4ff",
                  borderRadius: "10px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedTool === tool.id ? "#f5fbff" : "white",
                  boxShadow: expandedTool === tool.id ? "0 4px 12px rgba(0, 212, 255, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => setExpandedTool(expandedTool === tool.id ? null : tool.id)}
              >
                <div style={{ marginBottom: "10px" }}>
                  <h4 style={{ margin: "0 0 5px 0", color: "#003d7a", fontSize: "15px", fontWeight: "700" }}>{tool.name}</h4>
                  <span style={{
                    display: "inline-block",
                    fontSize: "11px",
                    background: "linear-gradient(135deg, #00a8cc 0%, #00d4ff 100%)",
                    color: "white",
                    padding: "5px 14px",
                    borderRadius: "15px",
                    fontWeight: "600"
                  }}>
                    {tool.category}
                  </span>
                </div>

                <p style={{ fontSize: "13px", color: "#003d7a", margin: "10px 0", fontWeight: "500" }}>
                  {tool.description}
                </p>

                {expandedTool === tool.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #00d4ff", paddingTop: "15px", backgroundColor: "#f5fbff", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#003d7a", fontSize: "13px", fontWeight: "700" }}>🎯 Key Skills:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {tool.skills.map((skill, i) => (
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
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#003d7a", fontSize: "13px", fontWeight: "700" }}>💡 Use Cases:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {tool.useCases.map((useCase, i) => (
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
                          → {useCase}
                        </div>
                      ))}
                    </div>
                    {tool.resources && (
                      <div style={{ marginTop: "15px" }}>
                        <h5 style={{ marginBottom: "12px", color: "#0066aa", fontSize: "13px", fontWeight: "600" }}>📚 Learning Resources:</h5>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                          {tool.resources.map((resource, i) => (
                            <a
                              key={i}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "12px",
                                background: "#b3e5fc",
                                borderRadius: "6px",
                                textDecoration: "none",
                                color: "#0066aa",
                                transition: "all 0.2s ease",
                                fontSize: "12px",
                                fontWeight: "500",
                                border: "1px solid #80deea",
                                cursor: "pointer"
                              }}
                              onMouseOver={(e) => {
                                e.currentTarget.style.background = "#81d4fa";
                                e.currentTarget.style.transform = "translateX(5px)";
                              }}
                              onMouseOut={(e) => {
                                e.currentTarget.style.background = "#b3e5fc";
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

        {/* Architecture Patterns */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🏗️ Data Pipeline Architectures</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              {
                name: "Batch ETL",
                desc: "Process data in scheduled batches. Best for large datasets.",
                tools: "Spark, Airflow, Python"
              },
              {
                name: "Real-time Streaming",
                desc: "Continuous data processing. Best for event-driven systems.",
                tools: "Kafka, Spark Streaming, Flink"
              },
              {
                name: "Lambda Architecture",
                desc: "Combines batch and real-time processing for accuracy and speed.",
                tools: "HDFS, Spark, Storm/Kafka"
              },
              {
                name: "Kappa Architecture",
                desc: "Stream-first approach using only streaming systems.",
                tools: "Kafka, Spark Streaming"
              },
              {
                name: "Data Lake",
                desc: "Centralized raw data repository for analytics.",
                tools: "S3/GCS, Delta Lake, Iceberg"
              },
              {
                name: "Data Lakehouse",
                desc: "Combines data lake flexibility with data warehouse structure.",
                tools: "Delta Lake, Iceberg, Hudi"
              }
            ].map((arch, i) => (
              <div key={i} style={{
                padding: "18px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "10px",
                color: "white"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{arch.name}</h5>
                <p style={{ fontSize: "12px", marginBottom: "10px", opacity: 0.95 }}>
                  {arch.desc}
                </p>
                <div style={{ fontSize: "11px", opacity: 0.85 }}>
                  <strong>Tools:</strong> {arch.tools}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>✨ Data Engineering Best Practices</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { icon: "⚡", title: "Scalability", desc: "Design for growth from day one" },
              { icon: "🛡️", title: "Reliability", desc: "Handle failures gracefully" },
              { icon: "📊", title: "Data Quality", desc: "Validate and monitor data" },
              { icon: "🔍", title: "Observability", desc: "Log, monitor, and alert" },
              { icon: "🔐", title: "Security", desc: "Encrypt and control access" },
              { icon: "⚙️", title: "Automation", desc: "IaC and deployment pipelines" }
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

export default DataEngineering;
