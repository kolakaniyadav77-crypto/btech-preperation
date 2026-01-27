import React, { useState } from "react";
import { ChevronDown, Code2, Brain, Zap } from "lucide-react";
import "../styles/Dashboard.css";

const AIMLTools = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const aimlTools = [
    {
      id: 1,
      name: "TensorFlow",
      category: "Deep Learning",
      description: "Google's machine learning library for neural networks and deep learning",
      skills: ["Neural Networks", "Computer Vision", "NLP", "Time Series"],
      resources: [
        { title: "Official Documentation", url: "https://www.tensorflow.org/", icon: "📖" },
        { title: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials", icon: "🎓" },
        { title: "TensorFlow Hub (Pre-trained Models)", url: "https://tfhub.dev/", icon: "🎁" },
        { title: "Keras API Guide", url: "https://keras.io/", icon: "⚙️" },
        { title: "YouTube Playlist", url: "https://www.youtube.com/results?search_query=tensorflow", icon: "📺" }
      ],
      icon: "🧠"
    },
    {
      id: 2,
      name: "PyTorch",
      category: "Deep Learning",
      description: "Facebook's flexible ML framework with dynamic computation graphs",
      skills: ["Dynamic Graphs", "Research", "Production Deployment", "Customization"],
      resources: [
        { title: "PyTorch Official", url: "https://pytorch.org/", icon: "📖" },
        { title: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html", icon: "📚" },
        { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", icon: "🎓" },
        { title: "Awesome PyTorch (GitHub)", url: "https://github.com/bharathgs/Awesome-pytorch-list", icon: "⭐" },
        { title: "Fast.ai Courses", url: "https://www.fast.ai/", icon: "🎬" }
      ],
      icon: "🔥"
    },
    {
      id: 3,
      name: "Scikit-learn",
      category: "ML Libraries",
      description: "Simple and efficient tools for data analysis and modeling",
      skills: ["Classification", "Regression", "Clustering", "Preprocessing"],
      resources: [
        { title: "Scikit-learn Official", url: "https://scikit-learn.org/", icon: "📖" },
        { title: "User Guide & API", url: "https://scikit-learn.org/stable/documentation.html", icon: "📚" },
        { title: "Scikit-learn Examples", url: "https://scikit-learn.org/stable/auto_examples/index.html", icon: "💡" },
        { title: "DataCamp Course", url: "https://www.datacamp.com/courses/supervised-learning-with-scikit-learn", icon: "🎓" }
      ],
      icon: "📊"
    },
    {
      id: 4,
      name: "Hugging Face",
      category: "NLP & Transformers",
      description: "Pre-trained models and transformers for NLP tasks",
      skills: ["BERT", "GPT Models", "Fine-tuning", "Text Classification"],
      resources: [
        { title: "Hugging Face Hub", url: "https://huggingface.co/", icon: "🤗" },
        { title: "Transformers Library", url: "https://huggingface.co/docs/transformers/", icon: "📚" },
        { title: "Model Cards & Datasets", url: "https://huggingface.co/models", icon: "🎁" },
        { title: "Hugging Face Course", url: "https://huggingface.co/course/", icon: "🎓" },
        { title: "Community Forum", url: "https://discuss.huggingface.co/", icon: "💬" }
      ],
      icon: "🤗"
    },
    {
      id: 5,
      name: "LangChain",
      category: "LLM Applications",
      description: "Framework for building LLM-powered applications",
      skills: ["Chains", "Agents", "Memory", "LLM Integration"],
      resources: [
        { title: "LangChain Documentation", url: "https://python.langchain.com/", icon: "📖" },
        { title: "GitHub Repository", url: "https://github.com/hwchase17/langchain", icon: "⭐" },
        { title: "LangChain Examples", url: "https://github.com/hwchase17/langchain/tree/master/docs/docs/modules", icon: "💡" },
        { title: "Courses & Tutorials", url: "https://www.deeplearning.ai/short-courses/", icon: "🎓" },
        { title: "Community Discord", url: "https://discord.gg/6adMQxSpJS", icon: "💬" }
      ],
      icon: "⛓️"
    },
    {
      id: 6,
      name: "OpenAI API",
      category: "LLM Services",
      description: "Access to GPT-3.5 and GPT-4 models via API",
      skills: ["Chat Completion", "Text Generation", "Embeddings", "Fine-tuning"],
      resources: [
        { title: "OpenAI API Documentation", url: "https://platform.openai.com/docs/", icon: "📖" },
        { title: "API Playground", url: "https://platform.openai.com/playground", icon: "🎮" },
        { title: "Model Overview", url: "https://platform.openai.com/docs/models/", icon: "🤖" },
        { title: "Code Examples", url: "https://platform.openai.com/examples", icon: "💻" },
        { title: "Pricing & Billing", url: "https://platform.openai.com/account/billing/overview", icon: "💰" }
      ],
      icon: "🚀"
    }
  ];

  const learningPath = [
    {
      phase: "Foundations",
      topics: ["Python fundamentals", "NumPy & Pandas", "Data preprocessing", "Statistics"],
      duration: "4-6 weeks"
    },
    {
      phase: "Machine Learning",
      topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
      duration: "8-12 weeks"
    },
    {
      phase: "Deep Learning",
      topics: ["Neural Networks", "CNNs for Vision", "RNNs for Sequences", "Transformers"],
      duration: "8-12 weeks"
    },
    {
      phase: "NLP & LLMs",
      topics: ["Text Processing", "Word Embeddings", "Transformer Models", "Prompt Engineering"],
      duration: "6-8 weeks"
    },
    {
      phase: "Production Deployment",
      topics: ["Model Serving", "Docker Containerization", "Cloud Deployment", "Monitoring"],
      duration: "4-6 weeks"
    }
  ];

  return (
    <main className="main">
      <header className="topbar">
        <h2>🤖 AI & Machine Learning Tools</h2>
        <p>Master AI/ML frameworks, models, and deployment strategies</p>
      </header>

      <div className="dashboard-grid">
        {/* Learning Path Section */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>📚 Learning Path</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {learningPath.map((phase, idx) => (
              <div key={idx} style={{
                padding: "20px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "12px",
                color: "white"
              }}>
                <h4 style={{ marginBottom: "10px" }}>{phase.phase}</h4>
                <p style={{ fontSize: "12px", opacity: 0.9, marginBottom: "15px" }}>
                  Duration: {phase.duration}
                </p>
                <ul style={{ fontSize: "12px", lineHeight: "1.8" }}>
                  {phase.topics.map((topic, i) => (
                    <li key={i}>✓ {topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* AI/ML Tools Section */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🛠️ Popular AI/ML Tools & Frameworks</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}>
            {aimlTools.map((tool) => (
              <div
                key={tool.id}
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: expandedSection === tool.id ? "#f0f4ff" : "white"
                }}
                onClick={() => setExpandedSection(expandedSection === tool.id ? null : tool.id)}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "10px"
                }}>
                  <div>
                    <h4 style={{ margin: "0 0 5px 0" }}>
                      {tool.icon} {tool.name}
                    </h4>
                    <span style={{
                      fontSize: "12px",
                      color: "#667eea",
                      fontWeight: "bold"
                    }}>
                      {tool.category}
                    </span>
                  </div>
                  <ChevronDown size={20} style={{
                    transform: expandedSection === tool.id ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease"
                  }} />
                </div>

                <p style={{ fontSize: "13px", color: "#666", margin: "10px 0" }}>
                  {tool.description}
                </p>

                {expandedSection === tool.id && (
                  <div style={{ marginTop: "15px", borderTop: "2px solid #667eea", paddingTop: "15px", backgroundColor: "#f5fbff", padding: "15px", borderRadius: "8px" }}>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>🎯 Key Skills:</h5>
                    <div style={{ marginBottom: "15px" }}>
                      {tool.skills.map((skill, i) => (
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
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h5 style={{ marginBottom: "12px", color: "#2d3561", fontSize: "13px", fontWeight: "700" }}>📚 Resources:</h5>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {tool.resources.map((res, i) => (
                        <a
                          key={i}
                          href={res.url}
                          style={{
                            padding: "12px",
                            background: "#d8deff",
                            borderRadius: "6px",
                            textDecoration: "none",
                            color: "#3d4a7f",
                            transition: "all 0.2s ease",
                            fontSize: "12px",
                            fontWeight: "500",
                            border: "1px solid #c4caff",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center"
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
                          <span style={{ marginRight: "10px", fontSize: "16px" }}>{res.icon}</span>
                          <span>{res.title}</span>
                          <span style={{ marginLeft: "auto" }}>→</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Practice Projects */}
        <section className="dashboard-card" style={{ gridColumn: "1 / -1" }}>
          <h3>🚀 Hands-On Projects</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "15px"
          }}>
            {[
              { title: "Image Classification", desc: "MNIST, CIFAR-10 using CNNs" },
              { title: "Sentiment Analysis", desc: "NLP text classification with transformers" },
              { title: "Recommendation System", desc: "Build ML-based recommendation engine" },
              { title: "Time Series Forecasting", desc: "Stock price prediction with LSTMs" },
              { title: "ChatBot Development", desc: "LLM-powered conversational AI" },
              { title: "Object Detection", desc: "YOLO, Faster R-CNN on custom datasets" }
            ].map((project, i) => (
              <div key={i} style={{
                padding: "15px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                borderRadius: "8px",
                color: "white",
                textAlign: "center"
              }}>
                <h5 style={{ margin: "0 0 8px 0" }}>{project.title}</h5>
                <p style={{ fontSize: "12px", margin: 0 }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AIMLTools;
