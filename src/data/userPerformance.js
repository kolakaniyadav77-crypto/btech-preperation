// User Performance Data - Track progress across all sections
// This stores user's progress in different sections

export const userPerformance = {
  // DSA Performance
  dsa: {
    completed: 0,
    total: 50,
    percentage: 0,
    timeSpent: 0, // hours
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Placement Preparation
  placement: {
    completed: 0,
    total: 25,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // QAR Preparation
  qar: {
    completed: 0,
    total: 15,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // VARC Preparation
  varc: {
    completed: 0,
    total: 30,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Programming Languages
  programming: {
    completed: 0,
    total: 18,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Today',
    rating: 8.9
  },
  
  // Career Paths
  careers: {
    completed: 0,
    total: 8,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Resume Builder
  resume: {
    completed: 0,
    total: 1,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Job Search
  jobSearch: {
    completed: 0,
    total: 12,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Certifications
  certifications: {
    completed: 0,
    total: 20,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Company Specific
  companySpecific: {
    completed: 0,
    total: 10,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  },
  
  // Entrance Exams
  entranceExams: {
    completed: 0,
    total: 22,
    percentage: 0,
    timeSpent: 0,
    lastAccessed: 'Never',
    rating: 0
  }
};

// Section info for dashboard
export const sectionsInfo = [
  {
    id: 'dsa',
    name: 'DSA Practice',
    icon: '💻',
    color: '#667eea',
    path: '/dsa'
  },
  {
    id: 'placement',
    name: 'Placement Prep',
    icon: '🏢',
    color: '#764ba2',
    path: '/placement'
  },
  {
    id: 'qar',
    name: 'QAR',
    icon: '📊',
    color: '#34d399',
    path: '/qar'
  },
  {
    id: 'varc',
    name: 'VARC',
    icon: '📚',
    color: '#f59e0b',
    path: '/varc'
  },
  {
    id: 'programming',
    name: 'Programming',
    icon: '🚀',
    color: '#60a5fa',
    path: '/programming'
  },
  {
    id: 'certifications',
    name: 'Tech Certifications',
    icon: '📜',
    color: '#a78bfa',
    path: '/certifications'
  },
  {
    id: 'careers',
    name: 'Career Paths',
    icon: '🎯',
    color: '#10b981',
    path: '/careers'
  },
  {
    id: 'resume',
    name: 'Resume Builder',
    icon: '📄',
    color: '#ec4899',
    path: '/resume'
  },
  {
    id: 'jobSearch',
    name: 'Job Search',
    icon: '💼',
    color: '#8b5cf6',
    path: '/jobsearch'
  },
  {
    id: 'companySpecific',
    name: 'Company Prep',
    icon: '🏛️',
    color: '#06b6d4',
    path: '/company'
  },
  {
    id: 'entranceExams',
    name: 'Entrance Exams',
    icon: '🎓',
    color: '#f97316',
    path: '/exams'
  }
];

// Function to get overall progress
export const getOverallProgress = () => {
  let totalCompleted = 0;
  let totalItems = 0;
  
  Object.values(userPerformance).forEach(section => {
    totalCompleted += section.completed;
    totalItems += section.total;
  });
  
  return Math.round((totalCompleted / totalItems) * 100);
};

// Function to get total time spent
export const getTotalTimeSpent = () => {
  return Object.values(userPerformance).reduce((sum, section) => sum + section.timeSpent, 0);
};

// Function to get section by id
export const getSectionPerformance = (sectionId) => {
  return userPerformance[sectionId];
};

// Function to get section info by id
export const getSectionInfo = (sectionId) => {
  return sectionsInfo.find(s => s.id === sectionId);
};

// Function to get top 5 performing sections
export const getTopSections = () => {
  return sectionsInfo
    .map(section => ({
      ...section,
      performance: userPerformance[section.id]
    }))
    .sort((a, b) => b.performance.rating - a.performance.rating)
    .slice(0, 5);
};

// Function to get sections needing focus
export const getNeedsFocusSections = () => {
  return sectionsInfo
    .map(section => ({
      ...section,
      performance: userPerformance[section.id]
    }))
    .sort((a, b) => a.performance.percentage - b.performance.percentage)
    .slice(0, 3);
};

// Function to update section progress
export const updateSectionProgress = (sectionId, completed, total, timeSpent) => {
  if (userPerformance[sectionId]) {
    userPerformance[sectionId].completed = completed;
    userPerformance[sectionId].total = total;
    userPerformance[sectionId].percentage = Math.round((completed / total) * 100);
    userPerformance[sectionId].timeSpent = timeSpent;
    userPerformance[sectionId].lastAccessed = 'Today';
  }
};

// Milestone data
export const getMilestones = () => {
  const overallProgress = getOverallProgress();
  const totalTime = getTotalTimeSpent();
  
  return [
    {
      title: '🎯 Beginner',
      description: 'Start your learning journey',
      threshold: 10,
      achieved: overallProgress >= 10
    },
    {
      title: '📈 Progressing',
      description: 'Completing more topics',
      threshold: 25,
      achieved: overallProgress >= 25
    },
    {
      title: '⭐ Intermediate',
      description: 'Solid progress across sections',
      threshold: 50,
      achieved: overallProgress >= 50
    },
    {
      title: '🔥 Advanced',
      description: 'Mastering multiple domains',
      threshold: 75,
      achieved: overallProgress >= 75
    },
    {
      title: '👑 Expert',
      description: 'Completed comprehensive learning',
      threshold: 90,
      achieved: overallProgress >= 90
    }
  ];
};

// Achievements
export const getAchievements = () => {
  const overallProgress = getOverallProgress();
  const totalTime = getTotalTimeSpent();
  
  return [
    {
      id: 1,
      title: 'First Step',
      description: 'Started your first learning section',
      icon: '🚀',
      achieved: true,
      date: '1 week ago'
    },
    {
      id: 2,
      title: 'Consistency',
      description: 'Studied for 50+ hours',
      icon: '⏰',
      achieved: totalTime >= 50
    },
    {
      id: 3,
      title: 'Quarter Complete',
      description: 'Completed 25% of available content',
      icon: '🎯',
      achieved: overallProgress >= 25
    },
    {
      id: 4,
      title: 'DSA Master',
      description: 'Completed 50% of DSA section',
      icon: '💻',
      achieved: userPerformance.dsa.percentage >= 50
    },
    {
      id: 5,
      title: 'Resume Ready',
      description: 'Built and finalized your resume',
      icon: '📄',
      achieved: userPerformance.resume.percentage === 100
    },
    {
      id: 6,
      title: 'Career Planner',
      description: 'Explored 5+ company paths',
      icon: '🏢',
      achieved: userPerformance.companySpecific.percentage >= 50
    }
  ];
};
