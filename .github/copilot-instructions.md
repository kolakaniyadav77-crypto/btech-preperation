# Copilot Instructions - PerfectTejas Project

## Project Overview
PerfectTejas is a comprehensive online learning platform for undergraduate students aspiring for placements, focusing on placement preparation, competitive exams, and technical skill development.

**Tech Stack:** React 19 + Vite, React Router v7, localStorage-based authentication, modular component architecture

---

## Light Theme Specifications

### Color Palette
**Background Gradients:**
- Primary: `linear-gradient(135deg, #f8f9ff 0%, #f0e8ff 50%, #fff5f0 100%)`
- Secondary: `#ffffff` (cards, containers)

**Text Colors:**
- Primary text: `#1f2937` (dark gray, headers)
- Secondary text: `#6b7280` (medium gray, descriptions)
- Accent text: `#8b5cf6` (purple, important info)

**Accent Colors:**
- Purple: `#8b5cf6` (primary accent)
- Magenta: `#d946ef` (secondary accent)
- Blue: `#3b82f6` (interactive elements)

**Borders & Shadows:**
- Card borders: `1.5px solid rgba(139, 92, 246, 0.2)` (light purple)
- Shadows: `0 4px 12px rgba(139, 92, 246, 0.1)` (subtle, purple-tinted)

### CSS Architecture
- **index.css:** Global theme, body/sidebar/topbar styling, utility classes
- **UniversalSections.css:** Component-level styling for theory sections, cards, grids
- **Component-specific CSS:** Individual component files (DSAPractice.css, CareerPath.css, etc.)

**Color Update Convention:** All dark theme colors (#0f172a, #1e1b4b, #e0e7ff, rgba(30,41,59,0.7)) have been replaced with light equivalents (white, #f8f9ff, #1f2937, white with purple borders).

---

## Data Schema Documentation

### VARC/QAR Theory to Tutorial Migration

**File:** `src/data/varcAndQarTheory.js`

**Old Schema:**
```javascript
{ name: "Topic", theory: "content...", keyPoints: [...] }
```

**New Schema:**
```javascript
{
  name: "Topic",
  tutorial: "content...",           // renamed from "theory"
  keyPoints: [...],
  subtopics: [
    {
      name: "Subtopic",
      tutorial: "detailed content...",
      keyPoints: [...],
      practiceQuestions: [          // NEW: 12+ Q&A pairs
        { q: "Question text?", ans: "Answer explanation" },
        { q: "Question text?", ans: "Answer explanation" }
      ]
    }
  ]
}
```

**Practice Questions Content:**
- **VARC Sections:** 4 main topics × 4 subtopics = 192+ questions total
- **QAR Sections:** 4 main topics × multiple subtopics = 50+ questions per topic section
- **Q&A Format:** Each question includes query (q) and comprehensive answer (ans) with explanation

**Component Usage:**
- `src/components/VARCPreparation.jsx` - Maps over tutorial field and practiceQuestions array
- `src/components/QARPreparation.jsx` - Same structure for QAR content
- Both components render tutorial as primary content, practiceQuestions as expandable practice section

---

## Placement Data Structure

### File: `src/data/placementData.js`

**Anurag University Entry (Enhanced):**
```javascript
{
  collegeId: "anurag",
  name: "Anurag University",
  city: "Hyderabad, Telangana",
  placementStats: {
    year: "2026",
    totalStudents: 246,
    placementRate: "100%",
    avgPackage: "5.5 LPA",
    highestPackage: "6.75 LPA"
  },
  topRecruiters: [
    {
      name: "LTIMindtree",
      studentsPlaced: 282,
      packageRange: "4.5-6.5 LPA",
      jobRoles: ["Software Engineer", "Data Engineer", "DevOps Engineer"]
    },
    {
      name: "Accenture",
      studentsPlaced: 246,
      packageRange: "5-6.5 LPA",
      jobRoles: ["Associate Developer", "Software Engineer", "QA Engineer"]
    },
    {
      name: "Cognizant",
      studentsPlaced: 126,
      packageRange: "4.5-6 LPA",
      jobRoles: ["Software Developer", "IT Analyst"]
    },
    // ... additional recruiters
  ],
  description: "Class of 2026: 246 students with 100% placement rate..."
}
```

**topRecruiters Structure:**
- `name` - Company name
- `studentsPlaced` - Number of students placed at company
- `packageRange` - Salary range (LPA)
- `jobRoles` - Array of job titles offered

**Component Usage:**
- `src/components/Placement.jsx` - Displays general placement stats
- `src/components/PlacementEnhanced.jsx` - Shows topRecruiters with company-specific details

---

## Key Component Patterns

### Protected Routes
**File:** `src/App.jsx`

```javascript
<ProtectedRoute>
  <ComponentPage />
</ProtectedRoute>
```
- Redirects unauthenticated users to login
- Shows light-theme gradient loading screen during auth check

### Progress Tracking
**File:** `src/utils/progressTracker.js`

```javascript
trackModuleAccess(userId, moduleName);        // Auto-increments access count
updateSectionProgress(userId, section, score); // Updates module score
getProgress(userId, moduleName);              // Retrieves progress data
```

**localStorage Keys:**
- `education_path_current_user` - Current logged-in user ID
- `education_path_users` - All user accounts
- `education_path_progress_{userId}` - User's progress data

### Component Template
```javascript
import styles from './ComponentName.css';
import UniversalSections from './UniversalSections.css';

export default function ComponentName() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  
  useEffect(() => {
    progressTracker.trackModuleAccess(currentUser.id, 'moduleName');
  }, []);

  return (
    <div className={styles.container}>
      {/* Light theme: white cards with purple accents */}
    </div>
  );
}
```

---

## Development Workflow

### Running Development Server
```bash
npm run dev
```
Starts Vite dev server at `http://localhost:5173` with HMR enabled.

### CSS Theme Updates
1. Update color values in `src/index.css` for global theme changes
2. Update component-specific CSS files individually
3. Use UniversalSections.css for shared component patterns
4. Light theme colors: Refer to Color Palette section above

### Adding New Tutorial Content
1. Update `src/data/varcAndQarTheory.js` with new topic structure
2. Ensure "tutorial" field contains main content (not "theory")
3. Add practiceQuestions array with 12+ Q&A pairs
4. Update corresponding component (VARCPreparation.jsx or QARPreparation.jsx)

### Adding College Placement Data
1. Update `src/data/placementData.js` with new college entry
2. Include placementStats with: year, totalStudents, placementRate, avgPackage, highestPackage
3. Add topRecruiters array with company-specific placement data
4. Add description field with placement highlights

---

## File Organization

```
src/
├── components/           # React components (all use light theme)
│   ├── VARC/QAR sections - Display tutorial + practiceQuestions
│   ├── Placement.jsx    - Shows topRecruiters from placementData
│   └── ...
├── data/
│   ├── varcAndQarTheory.js    - Tutorial content + practice questions
│   ├── placementData.js       - College & recruiter statistics
│   └── ...
├── context/             # React context (AuthContext)
├── styles/              # Utility CSS files
├── utils/
│   └── progressTracker.js     - Progress tracking functions
├── App.jsx              # Main app + routes
├── index.css            # Global light theme styles
└── main.jsx             # Entry point
```

---

## Common Tasks

### Update a Color Scheme
1. Locate the old color value across CSS files (grep search)
2. Replace with new light theme equivalent
3. Test in dev server to verify visibility and contrast

### Add Practice Questions to VARC/QAR
1. Open `src/data/varcAndQarTheory.js`
2. Find target topic → subtopic
3. Add new object to `practiceQuestions` array: `{ q: "...", ans: "..." }`
4. Verify component renders Q&A section

### Add New College Placement Data
1. Open `src/data/placementData.js`
2. Add new college object with structure matching Anurag University entry
3. Include: collegeId, name, city, placementStats, topRecruiters, description
4. Ensure topRecruiters follows company data structure

---

## Current State Summary

**Last Update:** Light theme conversion + VARC/QAR content enhancement + Anurag placement data
- ✅ All CSS files updated to light theme (#f8f9ff backgrounds, white cards, purple accents)
- ✅ VARC/QAR sections: "theory" renamed to "tutorial", 50+ practice questions added per topic
- ✅ Anurag University: 246 students placed (100%), topRecruiters with company-specific data
- ✅ Global theme foundation established for future components

**Known Limitations:**
- Other college placement images sourced externally (not integrated into data yet)
- Practice questions render format depends on component implementation in VARCPreparation.jsx/QARPreparation.jsx

---

## Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

*Last Updated: Post-Light Theme Conversion*
*Document Version: 2.0 (Includes tutorial field documentation, light theme specifications, and enhanced data schema)*
