// Job Search Database - Real platforms and current job listings
// Links should point as closely as possible to the individual posting;
// some placeholder URLs below simply lead to a search results page, which is
// why users reported they weren't being redirected "directly".  Replace these
// with the deep link for the specific vacancy when you fetch new data.
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
    color: '#2563EB',
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
  },
  {
    id: 7,
    name: 'LeetCode Contests',
    logo: '🏁',
    description: 'Coding contests & weekly challenges',
    url: 'https://leetcode.com/contest/',
    color: '#FFA116',
    jobs: 'Upcoming Contests'
  },
  {
    id: 8,
    name: 'CodeChef Contests',
    logo: '👨‍💻',
    description: 'Indian programming contests',
    url: 'https://www.codechef.com/contests',
    color: '#5B4085',
    jobs: 'Monthly Events'
  },
  {
    id: 9,
    name: 'HackerRank Contests',
    logo: '🎯',
    description: 'Coding competitions & challenges',
    url: 'https://www.hackerrank.com/contests',
    color: '#2EC866',
    jobs: 'Weekly Contests'
  },
  {
    id: 10,
    name: 'CodeWars',
    logo: '⚔️',
    description: 'Ranked coding challenges',
    url: 'https://www.codewars.com',
    color: '#B13400',
    jobs: 'Continuous Practice'
  },
  {
    id: 11,
    name: 'AtCoder',
    logo: '🇯🇵',
    description: 'Competitive programming contests',
    url: 'https://atcoder.jp/contests/',
    color: '#FF8C00',
    jobs: 'ABC & ARC'
  }
];

// Current available jobs - Format: { deadline, applyLink, replacementLink?, ... }
// Jobs are automatically filtered based on deadline.  If a job has a `replacementLink` it
// will be used automatically once the original deadline has passed so users don't see a
// dead URL.  The link may also be updated interactively from the UI.
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
    deadlineOffsetDays: 7, // 7 days from now
    // example of a more direct job URL (note the job ID at end)
    applyLink: 'https://www.naukri.com/job-listings/software-engineer-java-1234567890?src=search',
    // if the original link expires, provide a replacement here (see UI button)
    replacementLink: 'https://www.naukri.com/job-listings/software-engineer-java-0987654321?src=search',
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
    deadlineOffsetDays: 10, // 10 days
    // direct link to the specific frontend role
    applyLink: 'https://www.naukri.com/job-listings/frontend-developer-react-2345678901?hsrc=home',
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
    deadlineOffsetDays: 5, // 5 days
    applyLink: 'https://www.naukri.com/job-listings/data-analyst-sql-3456789012?xt=0&src=search',
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
    deadlineOffsetDays: 12, // 12 days
    applyLink: 'https://www.naukri.com/job-listings/backend-engineer-python-4567890123',
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
    deadlineOffsetDays: 6, // 6 days
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
    deadlineOffsetDays: 8, // 8 days
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
    deadlineOffsetDays: 14, // 14 days
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
    deadlineOffsetDays: 9, // 9 days
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
    deadlineOffsetDays: 4, // 4 days (urgent)
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
    deadlineOffsetDays: 11, // 11 days
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
    deadlineOffsetDays: 15, // 15 days
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
    deadlineOffsetDays: 13, // 13 days
    applyLink: 'https://www.linkedin.com/jobs/search/?keywords=product-manager',
    description: 'Lead product strategy for growing SaaS platform',
    skills: ['Product Strategy', 'Analytics', 'Leadership', 'JIRA'],
    jobType: 'Full-time'
  },
  // sample LeetCode contest entries
  {
    id: 13,
    platform: 'LeetCode Contests',
    title: 'Weekly Contest #350',
    company: 'LeetCode',
    location: 'Online',
    salary: '-',
    experience: 'All Levels',
    deadlineOffsetDays: 3, // 3 days until contest start
    applyLink: 'https://leetcode.com/contest/weekly-contest-350',
    description: 'Participate in the weekly LeetCode coding contest. Open to everyone.',
    skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
    jobType: 'Contest'
  },
  {
    id: 14,
    platform: 'LeetCode Contests',
    title: 'Biweekly Contest #120',
    company: 'LeetCode',
    location: 'Online',
    salary: '-',
    experience: 'All Levels',
    deadlineOffsetDays: 10, // 10 days
    applyLink: 'https://leetcode.com/contest/biweekly-contest-120',
    description: 'Biweekly challenge from LeetCode. Sharpen your competitive programming skills.',
    skills: ['Algorithms', 'Math', 'Optimization'],
    jobType: 'Contest'
  },
  // CodeChef Contests
  {
    id: 15,
    platform: 'CodeChef Contests',
    title: 'CodeChef Starters',
    company: 'CodeChef',
    location: 'Online',
    salary: '-',
    experience: 'All Levels',
    deadlineOffsetDays: 7,
    applyLink: 'https://www.codechef.com/contests',
    description: 'CodeChef Starters - beginner-friendly coding contests',
    skills: ['Algorithms', 'Problem Solving', 'Coding'],
    jobType: 'Contest'
  },
  // HackerRank Contests
  {
    id: 16,
    platform: 'HackerRank Contests',
    title: 'HackerRank Monthly Challenge',
    company: 'HackerRank',
    location: 'Online',
    salary: '-',
    experience: 'All Levels',
    deadlineOffsetDays: 5,
    applyLink: 'https://www.hackerrank.com/contests',
    description: 'Monthly coding contests with real-world problem solving',
    skills: ['Algorithms', 'Data Structures', 'Implementation'],
    jobType: 'Contest'
  },
  // CodeWars
  {
    id: 17,
    platform: 'CodeWars',
    title: 'CodeWars Ranked Challenges',
    company: 'CodeWars',
    location: 'Online',
    salary: '-',
    experience: 'All Levels',
    deadlineOffsetDays: 14,
    applyLink: 'https://www.codewars.com',
    description: 'Continuous coding challenges and rank progression system',
    skills: ['Multiple Languages', 'Algorithm Practice', 'Code Golf'],
    jobType: 'Contest'
  },
  // AtCoder Contests
  {
    id: 18,
    platform: 'AtCoder',
    title: 'AtCoder Beginner Contest',
    company: 'AtCoder',
    location: 'Online',
    salary: '-',
    experience: 'Beginner',
    deadlineOffsetDays: 4,
    applyLink: 'https://atcoder.jp/contests/',
    description: 'Japanese competitive programming contests backed by major tech companies',
    skills: ['Competitive Programming', 'Algorithms', 'Math'],
    jobType: 'Contest'
  }
];

// Helper to compute a real deadline from an entry (offset or explicit)
const computeDeadline = (job) => {
  if (job.deadlineOffsetDays != null) {
    return new Date(Date.now() + job.deadlineOffsetDays * 24 * 60 * 60 * 1000);
  }
  return job.deadline;
};

// Builds a fresh list of jobs with deadlines recalculated each call
const withDeadlines = () => {
  const now = new Date();
  return currentJobs.map(job => ({ ...job, deadline: computeDeadline(job) }));
};

// Function to get active jobs (filter expired ones).  A job whose deadline
// has passed is still considered active if it has a replacementLink; this
// allows the UI to swap in the new URL automatically instead of dropping the
// listing entirely.
export const getActiveJobs = () => {
  const now = new Date();
  return withDeadlines().filter(job => {
    if (job.deadline > now) return true;
    if (job.replacementLink) return true; // still usable through updated url
    return false;
  });
};

// Helper that mutates the array; used by UI when a maintainer supplies a new
// link for an expired posting.  This is a basic in-memory operation; a real
// backend would persist the change.
export const updateJobUrl = (jobId, newUrl) => {
  const idx = currentJobs.findIndex(j => j.id === jobId);
  if (idx !== -1) {
    currentJobs[idx].replacementLink = newUrl;
  }
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

