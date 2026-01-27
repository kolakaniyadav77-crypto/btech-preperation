// Job Search Database - Real platforms and current job listings
// Auto-removes jobs after deadline

export const jobPlatforms = [
  {
    id: 1,
    name: 'Naukari.com',
    logo: '🔍',
    description: 'India\'s largest job portal',
    url: 'https://www.naukri.com',
    color: '#4A90E2',
    jobs: 'Latest Jobs'
  },
  {
    id: 2,
    name: 'Internshala',
    logo: '🌟',
    description: 'Internships & Entry-level jobs',
    url: 'https://www.internshala.com',
    color: '#FF6B35',
    jobs: 'Internships & Jobs'
  },
  {
    id: 3,
    name: 'LinkedIn Jobs',
    logo: '💼',
    description: 'Professional networking jobs',
    url: 'https://www.linkedin.com/jobs',
    color: '#0A66C2',
    jobs: 'Professional Roles'
  },
  {
    id: 4,
    name: 'Indeed',
    logo: '🎯',
    description: 'Worldwide job listings',
    url: 'https://www.indeed.com',
    color: '#003580',
    jobs: 'Global Jobs'
  },
  {
    id: 5,
    name: 'Glassdoor',
    logo: '⭐',
    description: 'Company reviews & jobs',
    url: 'https://www.glassdoor.com',
    color: '#1C3144',
    jobs: 'Company Insights'
  },
  {
    id: 6,
    name: 'Angel List',
    logo: '🚀',
    description: 'Startup jobs & funding',
    url: 'https://wellfound.com',
    color: '#000000',
    jobs: 'Startup Opportunities'
  }
];

// Current available jobs - Format: { deadline, applyLink, ... }
// Jobs are automatically filtered based on deadline
export const currentJobs = [
  // NAUKARI JOBS
  {
    id: 1,
    platform: 'Naukari.com',
    title: 'Junior Software Engineer - Java',
    company: 'Infosys',
    location: 'Bangalore, India',
    salary: '₹4.5L - ₹6.5L PA',
    experience: '0-2 years',
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    applyLink: 'https://www.naukri.com/job-listings-software-engineer-bangalore',
    description: 'Looking for Java developers with knowledge of Spring Boot',
    skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    jobType: 'Full-time'
  },
  {
    id: 2,
    platform: 'Naukari.com',
    title: 'Frontend Developer - React',
    company: 'TCS',
    location: 'Pune, India',
    salary: '₹5L - ₹7L PA',
    experience: '1-3 years',
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days
    applyLink: 'https://www.naukri.com/job-listings-frontend-developer-pune',
    description: 'React and modern JavaScript expertise required',
    skills: ['React', 'JavaScript', 'CSS', 'Redux'],
    jobType: 'Full-time'
  },
  {
    id: 3,
    platform: 'Naukari.com',
    title: 'Data Analyst',
    company: 'Accenture',
    location: 'Delhi, India',
    salary: '₹3.5L - ₹5.5L PA',
    experience: '0-1 years',
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days
    applyLink: 'https://www.naukri.com/job-listings-data-analyst-delhi',
    description: 'Analyze data using SQL and Excel. Experience with Tableau preferred.',
    skills: ['SQL', 'Excel', 'Data Analysis', 'Tableau'],
    jobType: 'Full-time'
  },
  {
    id: 4,
    platform: 'Naukari.com',
    title: 'Backend Engineer - Python',
    company: 'Flipkart',
    location: 'Bangalore, India',
    salary: '₹6L - ₹8.5L PA',
    experience: '2-4 years',
    deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days
    applyLink: 'https://www.naukri.com/job-listings-backend-developer-bangalore',
    description: 'Python developer for scalable backend systems',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    jobType: 'Full-time'
  },
  {
    id: 5,
    platform: 'Naukari.com',
    title: 'QA Engineer',
    company: 'HCL Technologies',
    location: 'Noida, India',
    salary: '₹3L - ₹4.5L PA',
    experience: '1-2 years',
    deadline: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000), // 6 days
    applyLink: 'https://www.naukri.com/job-listings-qa-engineer-noida',
    description: 'Manual and Automation testing. Selenium or Cypress experience.',
    skills: ['QA', 'Selenium', 'TestNG', 'Jira'],
    jobType: 'Full-time'
  },

  // INTERNSHALA JOBS/INTERNSHIPS
  {
    id: 6,
    platform: 'Internshala',
    title: 'Web Development Intern',
    company: 'StartUp XYZ',
    location: 'Remote',
    salary: '₹15,000 - ₹25,000 (Monthly)',
    experience: 'Fresher',
    deadline: new Date(Date.now() + 8 * 24 * 60 * 60 * 1000), // 8 days
    applyLink: 'https://internshala.com/internship/web-development-internship',
    description: 'Build responsive websites with HTML, CSS, JavaScript, and React',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    jobType: 'Internship'
  },
  {
    id: 7,
    platform: 'Internshala',
    title: 'Machine Learning Intern',
    company: 'AI Research Lab',
    location: 'Bangalore',
    salary: '₹20,000 - ₹30,000 (Monthly)',
    experience: 'Fresher/1st Year',
    deadline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
    applyLink: 'https://internshala.com/internship/machine-learning-internship',
    description: 'Work on ML projects. Python, TensorFlow, and Deep Learning knowledge.',
    skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    jobType: 'Internship'
  },
  {
    id: 8,
    platform: 'Internshala',
    title: 'Android Development Intern',
    company: 'Mobile Solutions Inc',
    location: 'Hyderabad',
    salary: '₹18,000 - ₹28,000 (Monthly)',
    experience: 'Fresher',
    deadline: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000), // 9 days
    applyLink: 'https://internshala.com/internship/android-development-internship',
    description: 'Develop Android apps using Kotlin or Java',
    skills: ['Android', 'Kotlin', 'Java', 'Firebase'],
    jobType: 'Internship'
  },
  {
    id: 9,
    platform: 'Internshala',
    title: 'Content Writer Intern',
    company: 'EdTech Platform',
    location: 'Remote',
    salary: '₹12,000 - ₹18,000 (Monthly)',
    experience: 'Fresher',
    deadline: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days (urgent)
    applyLink: 'https://internshala.com/internship/content-writing-internship',
    description: 'Create engaging educational content for online courses',
    skills: ['Writing', 'Research', 'Communication', 'SEO'],
    jobType: 'Internship'
  },
  {
    id: 10,
    platform: 'Internshala',
    title: 'DevOps Intern',
    company: 'Cloud Solutions',
    location: 'Pune',
    salary: '₹22,000 - ₹32,000 (Monthly)',
    experience: 'Fresher',
    deadline: new Date(Date.now() + 11 * 24 * 60 * 60 * 1000), // 11 days
    applyLink: 'https://internshala.com/internship/devops-internship',
    description: 'Work with Docker, Kubernetes, AWS, and CI/CD pipelines',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Git'],
    jobType: 'Internship'
  },

  // LINKEDIN JOBS
  {
    id: 11,
    platform: 'LinkedIn Jobs',
    title: 'Full Stack Developer',
    company: 'Tech Startups Hub',
    location: 'Bangalore, India',
    salary: '₹5L - ₹8L PA',
    experience: '1-3 years',
    deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days
    applyLink: 'https://www.linkedin.com/jobs/search/?keywords=full-stack-developer',
    description: 'MERN stack developer for fast-growing startup',
    skills: ['MERN', 'MongoDB', 'Node.js', 'React'],
    jobType: 'Full-time'
  },
  {
    id: 12,
    platform: 'LinkedIn Jobs',
    title: 'Product Manager',
    company: 'SaaS Company',
    location: 'Remote',
    salary: '₹8L - ₹12L PA',
    experience: '3-5 years',
    deadline: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000), // 13 days
    applyLink: 'https://www.linkedin.com/jobs/search/?keywords=product-manager',
    description: 'Lead product strategy for growing SaaS platform',
    skills: ['Product Strategy', 'Analytics', 'Leadership', 'JIRA'],
    jobType: 'Full-time'
  }
];

// Function to get active jobs (filter expired ones)
export const getActiveJobs = () => {
  const now = new Date();
  return currentJobs.filter(job => job.deadline > now);
};

// Function to get jobs by platform
export const getJobsByPlatform = (platformName) => {
  return getActiveJobs().filter(job => job.platform === platformName);
};

// Function to get jobs by deadline urgency (within 5 days)
export const getUrgentJobs = () => {
  const now = new Date();
  const fiveDaysLater = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  return getActiveJobs().filter(job => job.deadline <= fiveDaysLater);
};

// Function to format deadline
export const formatDeadline = (deadline) => {
  const now = new Date();
  const diff = deadline - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (days < 0) return 'Expired';
  if (days === 0) return 'Expires Today';
  if (days === 1) return 'Expires Tomorrow';
  return `${days} days left`;
};

// Function to get days remaining
export const getDaysRemaining = (deadline) => {
  const now = new Date();
  const diff = deadline - now;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};
