import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
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
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
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

// Protected Route Component
function ProtectedRoute({ element }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: '#ffffff',
        color: '#1f2937',
        fontSize: '18px',
        margin: 0,
        padding: 0,
        fontWeight: '600'
      }}>
        Loading...
      </div>
    );
  }

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

function App() {
  const { isAuthenticated, loading } = useAuth();
  const [hasSeenWelcome, setHasSeenWelcome] = React.useState(false);

  React.useEffect(() => {
    // Check if user has already seen the welcome page
    // This effect runs whenever isAuthenticated changes (after login/signup)
    const welcomeSeen = localStorage.getItem('education_path_welcome_seen');
    if (welcomeSeen === 'true') {
      setHasSeenWelcome(true);
    } else {
      setHasSeenWelcome(false); // Reset to show welcome page on new login
    }
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        background: '#ffffff',
        color: '#1f2937',
        fontSize: '18px'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <Router>
      {isAuthenticated ? (
        // Check if user needs to see welcome page
        !hasSeenWelcome ? (
          // Show only welcome page if not yet seen
          <Routes>
            <Route path="/*" element={<Welcome onGetStarted={() => {
              localStorage.setItem('education_path_welcome_seen', 'true');
              setHasSeenWelcome(true);
            }} />} />
          </Routes>
        ) : (
          // Authenticated Layout - Show after welcome
          <div className="app">
            <Sidebar />
            <div className="main-content">
              <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/welcome" element={<Navigate to="/dashboard" replace />} />
              <Route path="/placement" element={<PlacementEnhanced />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/qar" element={<QARPreparation />} />
              <Route path="/varc" element={<VARCPreparation />} />
              <Route path="/dsa" element={<DSAPractice />} />
              <Route path="/blueprint" element={<BTechGuide />} />
              <Route path="/programming" element={<ProgrammingLanguages />} />
              <Route path="/careers" element={<CareerPath />} />
              <Route path="/resume" element={<ResumeBuilder />} />
              <Route path="/jobsearch" element={<JobSearch />} />
              <Route path="/company" element={<CompanySpecific />} />
              <Route path="/exams" element={<EntranceExams />} />
              <Route path="/aiml" element={<AIMLTools />} />
              <Route path="/powerbi" element={<PowerBIAnalytics />} />
              <Route path="/dataeng" element={<DataEngineering />} />
              <Route path="/webframes" element={<WebFrameworks />} />
              <Route path="/mobile" element={<MobileDevelopment />} />
              <Route path="/devops" element={<DevOpsCloud />} />
              <Route path="/login" element={<Navigate to="/" replace />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </div>
            <AIChatbot context="main-dashboard" />
          </div>
        )
      ) : (
        // Public Routes - Show login/registration when not authenticated
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
