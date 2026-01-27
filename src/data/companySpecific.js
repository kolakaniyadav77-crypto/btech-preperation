// Company Specific Preparation - All Major Indian Companies
// Each company has multiple job roles with preparation paths

export const indianCompanies = [
  {
    id: 1,
    name: 'TCS',
    logo: '🏢',
    foundedYear: 1968,
    headquarter: 'Mumbai, India',
    about: 'Tata Consultancy Services - India\'s largest IT company',
    website: 'https://www.tcs.com',
    hiringUrl: 'https://www.tcs.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer',
        location: 'Bangalore',
        salary: '₹3.5L - ₹4.5L PA',
        experience: 'Fresher',
        skills: ['Java', 'C++', 'Python', 'SQL'],
        prepPath: [
          { phase: 'Phase 1: Fundamentals (2 weeks)', topics: ['Programming Basics', 'Data Structures', 'OOPS Concepts'] },
          { phase: 'Phase 2: Core Technologies (3 weeks)', topics: ['Java/C++ Mastery', 'SQL Queries', 'Problem Solving'] },
          { phase: 'Phase 3: Mock Tests (2 weeks)', topics: ['TCS Sample Papers', 'Mock Interviews', 'Aptitude Practice'] }
        ],
        resources: [
          { name: 'TCS Ninja - Official', link: 'https://www.tcs.com/careers/ninja' },
          { name: 'GeeksforGeeks DSA', link: 'https://www.geeksforgeeks.org' },
          { name: 'HackerRank Challenges', link: 'https://www.hackerrank.com' }
        ]
      },
      {
        jobId: 2,
        title: 'System Administrator',
        location: 'Chennai',
        salary: '₹2.8L - ₹3.8L PA',
        experience: 'Fresher/1 Year',
        skills: ['Linux', 'Windows Server', 'Networking', 'Cloud'],
        prepPath: [
          { phase: 'Phase 1: OS Fundamentals', topics: ['Linux Basics', 'Windows Server', 'Shell Scripting'] },
          { phase: 'Phase 2: Networking & Cloud', topics: ['TCP/IP', 'Cloud Services', 'Security'] },
          { phase: 'Phase 3: Practical Labs', topics: ['Hands-on Setup', 'Troubleshooting', 'Case Studies'] }
        ],
        resources: [
          { name: 'Linux Academy', link: 'https://linuxacademy.com' },
          { name: 'AWS Training', link: 'https://aws.amazon.com/training' },
          { name: 'CompTIA A+', link: 'https://www.comptia.org' }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Infosys',
    logo: '💼',
    foundedYear: 1981,
    headquarter: 'Bangalore, India',
    about: 'Infosys - Global IT consulting and services company',
    website: 'https://www.infosys.com',
    hiringUrl: 'https://www.infosys.com/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Infosys Certified Associate - Java',
        location: 'Multiple Cities',
        salary: '₹3.2L - ₹4.2L PA',
        experience: 'Fresher',
        skills: ['Java', 'Spring Boot', 'Microservices', 'Database'],
        prepPath: [
          { phase: 'Phase 1: Java Foundations', topics: ['Core Java', 'OOP', 'Collections Framework'] },
          { phase: 'Phase 2: Enterprise Java', topics: ['Spring Framework', 'REST APIs', 'Microservices'] },
          { phase: 'Phase 3: Project Work', topics: ['Real-world Projects', 'Design Patterns', 'Best Practices'] }
        ],
        resources: [
          { name: 'Infosys Springboard', link: 'https://www.infosys.com/springboard' },
          { name: 'Spring.io Documentation', link: 'https://spring.io' },
          { name: 'Udemy Spring Courses', link: 'https://www.udemy.com' }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Wipro',
    logo: '🌐',
    foundedYear: 1980,
    headquarter: 'Bangalore, India',
    about: 'Wipro - IT services, consulting, and business process services',
    website: 'https://www.wipro.com',
    hiringUrl: 'https://careers.wipro.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Full Stack',
        location: 'Bangalore, Hyderabad',
        salary: '₹3.5L - ₹5L PA',
        experience: 'Fresher/1-2 Years',
        skills: ['Java', 'Spring Boot', 'Microservices', 'Database', 'React'],
        prepPath: [
          { phase: 'Phase 1: Frontend Basics', topics: ['HTML/CSS', 'JavaScript', 'React Fundamentals'] },
          { phase: 'Phase 2: Backend Development', topics: ['Node.js', 'Express', 'RESTful APIs'] },
          { phase: 'Phase 3: Full Stack Integration', topics: ['Full Stack Projects', 'Deployment', 'DevOps Basics'] }
        ],
        resources: [
          { name: 'Wipro WILP', link: 'https://www.wipro.com/wilp' },
          { name: 'Frontend Masters', link: 'https://frontendmasters.com' },
          { name: 'Node.js Official Docs', link: 'https://nodejs.org' }
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Accenture',
    logo: '🚀',
    foundedYear: 1989,
    headquarter: 'Delhi, India',
    about: 'Accenture - Global management consulting and professional services',
    website: 'https://www.accenture.com',
    hiringUrl: 'https://www.accenture.com/in-en/careers',
    jobs: [
      {
        jobId: 1,
        title: 'Analyst - Management Consulting',
        location: 'Bangalore, Delhi, Mumbai',
        salary: '₹4.5L - ₹6L PA',
        experience: 'Fresher',
        skills: ['Business Analysis', 'Excel', 'Communication', 'Problem Solving'],
        prepPath: [
          { phase: 'Phase 1: Business Fundamentals', topics: ['Management Basics', 'Business Models', 'Case Studies'] },
          { phase: 'Phase 2: Analytics & Data', topics: ['Excel Mastery', 'Data Analysis', 'Visualization'] },
          { phase: 'Phase 3: Consulting Skills', topics: ['Client Interaction', 'Presentation', 'Leadership'] }
        ],
        resources: [
          { name: 'Accenture Learning Hub', link: 'https://www.accenture.com/careers' },
          { name: 'Management Consulting Prep', link: 'https://www.myconsultingcoach.com' },
          { name: 'Excel Advanced', link: 'https://www.edx.org' }
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'HCL Technologies',
    logo: '⚡',
    foundedYear: 1976,
    headquarter: 'Noida, India',
    about: 'HCL - IT and business services company',
    website: 'https://www.hcltech.com',
    hiringUrl: 'https://careers.hcltech.com',
    jobs: [
      {
        jobId: 1,
        title: 'Junior Software Engineer',
        location: 'Noida, Bangalore, Chennai',
        salary: '₹3.2L - ₹4.5L PA',
        experience: 'Fresher/1 Year',
        skills: ['Python', 'Java', 'Databases', 'Linux'],
        prepPath: [
          { phase: 'Phase 1: Programming Basics', topics: ['Python/Java Fundamentals', 'Data Structures'] },
          { phase: 'Phase 2: Advanced Concepts', topics: ['Databases', 'APIs', 'Software Design Patterns'] },
          { phase: 'Phase 3: Interview Prep', topics: ['Technical Interview', 'Coding Problems', 'System Design'] }
        ],
        resources: [
          { name: 'HCL CodeVita', link: 'https://www.codevita.io' },
          { name: 'LeetCode', link: 'https://leetcode.com' },
          { name: 'Interview Bit', link: 'https://www.interviewbit.com' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Cognizant',
    logo: '🎯',
    foundedYear: 1994,
    headquarter: 'Bangalore, India',
    about: 'Cognizant - IT services, consulting, and technology solutions',
    website: 'https://www.cognizant.com',
    hiringUrl: 'https://careers.cognizant.com',
    jobs: [
      {
        jobId: 1,
        title: 'Programmer - Graduate Trainee',
        location: 'Bangalore, Pune, Mumbai',
        salary: '₹3.5L - ₹4.8L PA',
        experience: 'Fresher',
        skills: ['C++', 'Java', 'SQL', 'Testing'],
        prepPath: [
          { phase: 'Phase 1: Core Programming', topics: ['C++/Java Basics', 'OOPS', 'Problem Solving'] },
          { phase: 'Phase 2: Development Tools', topics: ['Debugging', 'Version Control', 'Testing Methods'] },
          { phase: 'Phase 3: Production Ready', topics: ['Code Quality', 'Performance', 'Documentation'] }
        ],
        resources: [
          { name: 'Cognizant Developer Programs', link: 'https://www.cognizant.com/careers' },
          { name: 'CPlusPlus.com Tutorial', link: 'https://cplusplus.com' },
          { name: 'Selenium & Testing', link: 'https://www.seleniumhq.org' }
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Flipkart',
    logo: '🛍️',
    foundedYear: 2007,
    headquarter: 'Bangalore, India',
    about: 'Flipkart - India\'s leading e-commerce platform',
    website: 'https://www.flipkart.com',
    hiringUrl: 'https://www.flipkart.careers',
    jobs: [
      {
        jobId: 1,
        title: 'Software Development Engineer - Backend',
        location: 'Bangalore',
        salary: '₹6L - ₹10L PA',
        experience: '0-2 Years',
        skills: ['Java', 'Distributed Systems', 'Databases', 'AWS'],
        prepPath: [
          { phase: 'Phase 1: Strong Foundations', topics: ['Advanced Java', 'Data Structures & Algorithms'] },
          { phase: 'Phase 2: System Design', topics: ['Scalable Architecture', 'Microservices', 'Databases'] },
          { phase: 'Phase 3: Production Systems', topics: ['Monitoring', 'CI/CD', 'Performance Optimization'] }
        ],
        resources: [
          { name: 'Flipkart Tech', link: 'https://tech.flipkart.com' },
          { name: 'System Design Primer', link: 'https://github.com/donnemartin/system-design-primer' },
          { name: 'Grokking System Design', link: 'https://www.educative.io' }
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Amazon India',
    logo: '📦',
    foundedYear: 1994,
    headquarter: 'Bangalore, India',
    about: 'Amazon - Global e-commerce and cloud services',
    website: 'https://www.amazon.in',
    hiringUrl: 'https://www.amazon.jobs',
    jobs: [
      {
        jobId: 1,
        title: 'Software Development Engineer 1',
        location: 'Bangalore, Hyderabad',
        salary: '₹10L - ₹15L PA',
        experience: '0-1 Years',
        skills: ['Java', 'Python', 'AWS', 'System Design'],
        prepPath: [
          { phase: 'Phase 1: DSA Mastery', topics: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming'] },
          { phase: 'Phase 2: System Design', topics: ['Scalability', 'Load Balancing', 'Caching', 'Databases'] },
          { phase: 'Phase 3: Behavioral & AWS', topics: ['Leadership Principles', 'AWS Services', 'Mock Interviews'] }
        ],
        resources: [
          { name: 'Amazon Interview Guide', link: 'https://www.amazon.jobs' },
          { name: 'LeetCode Premium', link: 'https://leetcode.com/premium' },
          { name: 'AWS Training', link: 'https://aws.amazon.com/training' }
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Google India',
    logo: '🔍',
    foundedYear: 1998,
    headquarter: 'Mountain View, USA (India Office in Bangalore)',
    about: 'Google - Search, advertising, and cloud services leader',
    website: 'https://www.google.com',
    hiringUrl: 'https://careers.google.com',
    jobs: [
      {
        jobId: 1,
        title: 'Associate Software Engineer',
        location: 'Bangalore',
        salary: '₹15L - ₹25L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['C++', 'Python', 'JavaScript', 'System Design'],
        prepPath: [
          { phase: 'Phase 1: Algorithm Excellence', topics: ['Competitive Programming', 'Advanced DSA', 'Problem Patterns'] },
          { phase: 'Phase 2: System Design', topics: ['Distributed Systems', 'Database Design', 'Cloud Architecture'] },
          { phase: 'Phase 3: Google Interview', topics: ['Mock Interviews', 'Behavioral Questions', 'Technical Deep Dives'] }
        ],
        resources: [
          { name: 'Google Interviews', link: 'https://www.google.com/careers/how-we-hire' },
          { name: 'Codeforces', link: 'https://codeforces.com' },
          { name: 'Google Tech Dev Guide', link: 'https://techdevguide.withgoogle.com' }
        ]
      }
    ]
  },
  {
    id: 10,
    name: 'Microsoft India',
    logo: '🪟',
    foundedYear: 1975,
    headquarter: 'Redmond, USA (India Office in Bangalore)',
    about: 'Microsoft - Software, cloud computing, and services',
    website: 'https://www.microsoft.com',
    hiringUrl: 'https://careers.microsoft.com',
    jobs: [
      {
        jobId: 1,
        title: 'Software Engineer - Early Career',
        location: 'Bangalore, Hyderabad',
        salary: '₹12L - ₹20L PA',
        experience: 'Fresher/0-1 Years',
        skills: ['C#', 'Python', 'Azure', 'SQL'],
        prepPath: [
          { phase: 'Phase 1: Programming Skills', topics: ['C# Mastery', 'OOPS', 'Data Structures'] },
          { phase: 'Phase 2: Microsoft Stack', topics: ['Azure Services', '.NET Framework', 'Cloud Development'] },
          { phase: 'Phase 3: Interview Prep', topics: ['Coding Challenges', 'System Design', 'Microsoft Culture'] }
        ],
        resources: [
          { name: 'Microsoft Learn', link: 'https://learn.microsoft.com' },
          { name: 'Microsoft Interview Prep', link: 'https://careers.microsoft.com' },
          { name: 'Azure Academy', link: 'https://azure.microsoft.com/en-in/training' }
        ]
      }
    ]
  }
];

// Function to get company by id
export const getCompanyById = (id) => {
  return indianCompanies.find(company => company.id === id);
};

// Function to get all company names
export const getCompanyNames = () => {
  return indianCompanies.map(company => ({
    id: company.id,
    name: company.name,
    logo: company.logo
  }));
};

// Function to get jobs by company
export const getJobsByCompany = (companyId) => {
  const company = getCompanyById(companyId);
  return company ? company.jobs : [];
};

// Function to get job details
export const getJobDetails = (companyId, jobId) => {
  const company = getCompanyById(companyId);
  if (!company) return null;
  return company.jobs.find(job => job.jobId === jobId);
};

// Function to get company by name
export const getCompanyJobs = (companyName) => {
  const company = indianCompanies.find(c => c.name === companyName);
  return company || null;
};

// Function to get all companies with jobs
export const getAllCompaniesWithJobs = () => {
  return indianCompanies.map(company => ({
    id: company.id,
    name: company.name,
    logo: company.logo,
    jobCount: company.jobs.length,
    jobs: company.jobs
  }));
};
