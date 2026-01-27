import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./UniversalSections.css";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Placement Preparation", path: "/placement" },
  { name: "Tech Certifications", path: "/certifications" },
  { name: "QAR Preparation", path: "/qar" },
  { name: "VACR Preparation", path: "/varc" },
  { name: "DSA Practice", path: "/dsa" },
  { name: "Programming Language Preperation", path: "/programming" },
  { name: "BTECH GUIDENCE", path: "/blueprint" },
  { name: "Career Paths", path: "/careers" },
  { name: "Resume Builder", path: "/resume" },
  { name: "Job Search", path: "/jobsearch" },
  { name: "Company Specific", path: "/company" },
  { name: "Entrance Exams", path: "/exams" },
  { name: "AI & ML Tools", path: "/aiml" },
  { name: "Power BI & Analytics", path: "/powerbi" },
  { name: "Data Engineering", path: "/dataeng" },
  { name: "Web Frameworks", path: "/webframes" },
  { name: "Mobile Development", path: "/mobile" },
  { name: "DevOps & Cloud", path: "/devops" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        ⚡ <span style={{ fontFamily: 'Arial', fontSize: '18px', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase' }}>EDUCATION PATHWAY</span>
      </div>

      {currentUser && (
        <div className="user-profile">
          <p className="user-name">{currentUser.fullName || currentUser.email}</p>
          <span className="user-email">{currentUser.email}</span>
        </div>
      )}

      <nav>
        {menu.map((item, i) => (
          <a
            key={i}
            className={location.pathname === item.path ? "active" : ""}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          👋 Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
