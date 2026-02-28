import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Placement from "./components/Placement";
import PlacementEnhanced from "./components/PlacementEnhanced";
import QARPreparation from "./components/QARPreparation";
import VARCPreparation from "./components/VARCPreparation";
import DSAPractice from "./components/DSAPractice";
import BTechGuide from "./components/BTechGuides";
import ProgrammingLanguages from "./components/ProgrammingLanguages";
import CareerPath from "./components/CareerPath";
import ResumeBuilder from "./components/ResumeBuilder";
import JobSearch from "./components/JobSearch";
import CompanySpecific from "./components/CompanySpecific";
import EntranceExams from "./components/EntranceExams";
import Welcome from "./components/Welcome";
import AdminPanel from "./components/AdminPanel";
import AIChatbot from "./components/AIChatbot";
import AIMLTools from "./components/AIMLTools";
import PowerBIAnalytics from "./components/PowerBIAnalytics";
import DataEngineering from "./components/DataEngineering";
import WebFrameworks from "./components/WebFrameworks";
import MobileDevelopment from "./components/MobileDevelopment";
import DevOpsCloud from "./components/DevOpsCloud";
import Certifications from "./components/Certifications";

import "./index.css";


function App() {
  const [hasSeenWelcome, setHasSeenWelcome] = useState(
    localStorage.getItem('education_path_welcome_seen') === 'true'
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Router is always rendered so that useNavigate (and other hooks)
  // inside child components work even on the welcome page.
  return (
    <Router>
      {!hasSeenWelcome ? (
        <Welcome
          onGetStarted={() => {
            localStorage.setItem('education_path_welcome_seen', 'true');
            setHasSeenWelcome(true);
          }}
        />
      ) : (
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route
            path="*"
            element={
              <div className="app">
                <button
                  className="sidebar-toggle"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  title={sidebarOpen ? "Close Menu" : "Open Menu"}
                >
                  {sidebarOpen ? '✕' : '☰'}
                </button>
                <div className={`sidebar ${sidebarOpen ? 'active' : ''}`}>
                  <Sidebar onNavigate={() => setSidebarOpen(false)} />
                </div>
                <div
                  className="main-content"
                  onClick={() => sidebarOpen && setSidebarOpen(false)}
                >
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/placement" element={<Placement />} />
                    <Route
                      path="/placement-enhanced"
                      element={<PlacementEnhanced />}
                    />
                    <Route path="/qar" element={<QARPreparation />} />
                    <Route path="/vacr" element={<VARCPreparation />} />
                    <Route path="/dsa" element={<DSAPractice />} />
                    <Route path="/btech-guides" element={<BTechGuide />} />
                    <Route
                      path="/programming-languages"
                      element={<ProgrammingLanguages />}
                    />
                    <Route path="/career-path" element={<CareerPath />} />
                    <Route path="/resume-builder" element={<ResumeBuilder />} />
                    <Route path="/job-search" element={<JobSearch />} />
                    <Route
                      path="/company-specific"
                      element={<CompanySpecific />}
                    />
                    <Route path="/entrance-exams" element={<EntranceExams />} />
                    <Route path="/ai-chatbot" element={<AIChatbot />} />
                    <Route path="/ai-tools" element={<AIMLTools />} />
                    <Route
                      path="/power-bi"
                      element={<PowerBIAnalytics />}
                    />
                    <Route
                      path="/data-engineering"
                      element={<DataEngineering />}
                    />
                    <Route
                      path="/web-frameworks"
                      element={<WebFrameworks />}
                    />
                    <Route
                      path="/mobile-development"
                      element={<MobileDevelopment />}
                    />
                    <Route path="/devops-cloud" element={<DevOpsCloud />} />
                    <Route
                      path="/certifications"
                      element={<Certifications />}
                    />
                    <Route
                      path="*"
                      element={<Navigate to="/dashboard" replace />}
                    />
                  </Routes>
                  <AIChatbot context="main-dashboard" />
                </div>
              </div>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;

