// Certifications Data - All tech certifications for B.Tech career
export const allCertifications = [
  // AWS Certifications
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    category: 'Cloud',
    provider: 'Amazon AWS',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    level: 'Beginner',
    estimatedHours: 20,
    companies: ['Amazon', 'Accenture', 'Capgemini', 'Cognizant', 'Tech Mahindra']
  },
  {
    id: 'aws-solutions',
    name: 'AWS Solutions Architect Associate',
    category: 'Cloud',
    provider: 'Amazon AWS',
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    level: 'Intermediate',
    estimatedHours: 40,
    companies: ['Amazon', 'Accenture', 'IBM', 'Deloitte', 'Tech Mahindra']
  },
  
  // Azure Certifications
  {
    id: 'azure-fundamentals',
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    category: 'Cloud',
    provider: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/certifications/azure-fundamentals/',
    level: 'Beginner',
    estimatedHours: 15,
    companies: ['Microsoft', 'Accenture', 'Capgemini', 'Cognizant', 'Deloitte']
  },
  {
    id: 'azure-admin',
    name: 'Microsoft Azure Administrator (AZ-104)',
    category: 'Cloud',
    provider: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/certifications/azure-administrator/',
    level: 'Intermediate',
    estimatedHours: 50,
    companies: ['Microsoft', 'Accenture', 'Cognizant', 'Capgemini', 'IBM']
  },
  
  // Google Cloud
  {
    id: 'gcp-associate',
    name: 'Google Cloud Associate Cloud Engineer',
    category: 'Cloud',
    provider: 'Google Cloud',
    link: 'https://cloud.google.com/certification/cloud-engineer',
    level: 'Intermediate',
    estimatedHours: 40,
    companies: ['Google', 'Accenture', 'Capgemini', 'Tech Mahindra']
  },
  
  // Java/Programming
  {
    id: 'java-associate',
    name: 'Oracle Java Associate Programmer',
    category: 'Programming',
    provider: 'Oracle',
    link: 'https://education.oracle.com/java-programmer-associate-1z0-811-exam/pexam_1z0811',
    level: 'Intermediate',
    estimatedHours: 40,
    companies: ['Oracle', 'IBM', 'TCS', 'Infosys', 'Wipro', 'Tech Mahindra']
  },
  
  // DevOps
  {
    id: 'kubernetes-ckad',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    category: 'DevOps',
    provider: 'Linux Foundation',
    link: 'https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/',
    level: 'Advanced',
    estimatedHours: 60,
    companies: ['Google', 'Amazon', 'Microsoft', 'Accenture', 'Cognizant']
  },
  {
    id: 'docker-dca',
    name: 'Docker Certified Associate',
    category: 'DevOps',
    provider: 'Docker',
    link: 'https://training.mirantis.com/certification/docker-certified-associate-dca/',
    level: 'Intermediate',
    estimatedHours: 45,
    companies: ['Docker', 'Accenture', 'Capgemini', 'Tech Mahindra', 'IBM']
  },
  
  // Salesforce
  {
    id: 'salesforce-admin',
    name: 'Salesforce Administrator',
    category: 'CRM',
    provider: 'Salesforce',
    link: 'https://www.salesforce.com/certification/administrator-admin/',
    level: 'Intermediate',
    estimatedHours: 35,
    companies: ['Salesforce', 'Accenture', 'Deloitte', 'IBM', 'Capgemini']
  },
  {
    id: 'salesforce-developer',
    name: 'Salesforce Platform Developer',
    category: 'CRM',
    provider: 'Salesforce',
    link: 'https://www.salesforce.com/certification/platform-developer-1-pd1/',
    level: 'Advanced',
    estimatedHours: 50,
    companies: ['Salesforce', 'Accenture', 'Deloitte', 'Cognizant']
  },
  
  // Data & Analytics
  {
    id: 'databricks-lakehouse',
    name: 'Databricks Lakehouse Fundamentals',
    category: 'Data',
    provider: 'Databricks',
    link: 'https://www.databricks.com/learn/certifications/data-engineer-associate',
    level: 'Intermediate',
    estimatedHours: 30,
    companies: ['Databricks', 'Accenture', 'Tech Mahindra', 'Cognizant']
  },
  {
    id: 'tableau-analyst',
    name: 'Tableau Desktop Specialist',
    category: 'BI/Analytics',
    provider: 'Salesforce Tableau',
    link: 'https://www.salesforce.com/certification/tableau-desktop-specialist/',
    level: 'Intermediate',
    estimatedHours: 25,
    companies: ['Salesforce', 'Accenture', 'Deloitte', 'Goldman Sachs', 'JPMorgan Chase']
  },
  {
    id: 'powerbi-analyst',
    name: 'Microsoft Power BI Data Analyst',
    category: 'BI/Analytics',
    provider: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/certifications/data-analyst-associate/',
    level: 'Intermediate',
    estimatedHours: 40,
    companies: ['Microsoft', 'Accenture', 'Deloitte', 'Cognizant', 'Tech Mahindra']
  },
  
  // Cybersecurity
  {
    id: 'ccna-security',
    name: 'Cisco CCNA Security',
    category: 'Security',
    provider: 'Cisco',
    link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/security.html',
    level: 'Intermediate',
    estimatedHours: 50,
    companies: ['Cisco', 'Accenture', 'IBM', 'Capgemini', 'Tech Mahindra']
  },
  {
    id: 'comptia-security',
    name: 'CompTIA Security+ (SY0-601)',
    category: 'Security',
    provider: 'CompTIA',
    link: 'https://www.comptia.org/certifications/security',
    level: 'Intermediate',
    estimatedHours: 40,
    companies: ['IBM', 'Accenture', 'Deloitte', 'Cognizant', 'Tech Mahindra']
  },
  
  // Full Stack Development
  {
    id: 'aws-fullstack',
    name: 'AWS Full Stack Development',
    category: 'Web Development',
    provider: 'AWS',
    link: 'https://aws.amazon.com/training/digital/',
    level: 'Intermediate',
    estimatedHours: 60,
    companies: ['Amazon', 'Accenture', 'Tech Mahindra']
  },
  {
    id: 'gcp-flutter',
    name: 'Google Flutter Certification',
    category: 'Mobile',
    provider: 'Google',
    link: 'https://cloud.google.com/certification',
    level: 'Intermediate',
    estimatedHours: 50,
    companies: ['Google', 'Accenture', 'Tech Mahindra']
  },
  
  // AI/ML
  {
    id: 'aws-ml',
    name: 'AWS Machine Learning Specialty',
    category: 'AI/ML',
    provider: 'Amazon AWS',
    link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    level: 'Advanced',
    estimatedHours: 70,
    companies: ['Amazon', 'Google', 'Microsoft', 'Accenture', 'Tech Mahindra']
  },
  {
    id: 'gcp-ml-engineer',
    name: 'Google Cloud Professional Machine Learning Engineer',
    category: 'AI/ML',
    provider: 'Google Cloud',
    link: 'https://cloud.google.com/certification/machine-learning-engineer',
    level: 'Advanced',
    estimatedHours: 80,
    companies: ['Google', 'Accenture', 'Tech Mahindra']
  },
  {
    id: 'azure-ml',
    name: 'Microsoft Azure Data Scientist Associate',
    category: 'AI/ML',
    provider: 'Microsoft',
    link: 'https://learn.microsoft.com/en-us/certifications/data-scientist/',
    level: 'Advanced',
    estimatedHours: 70,
    companies: ['Microsoft', 'Accenture', 'Cognizant']
  },
];

// Company-specific certifications (Required for each company)
export const companyCertifications = {
  'Amazon': [
    { certId: 'aws-ccp', priority: 'Must Have' },
    { certId: 'aws-solutions', priority: 'Important' },
    { certId: 'aws-ml', priority: 'Optional' }
  ],
  'Microsoft': [
    { certId: 'azure-fundamentals', priority: 'Must Have' },
    { certId: 'azure-admin', priority: 'Important' },
    { certId: 'powerbi-analyst', priority: 'Optional' }
  ],
  'Google': [
    { certId: 'gcp-associate', priority: 'Must Have' },
    { certId: 'gcp-ml-engineer', priority: 'Important' }
  ],
  'Salesforce': [
    { certId: 'salesforce-admin', priority: 'Must Have' },
    { certId: 'salesforce-developer', priority: 'Important' }
  ],
  'Accenture': [
    { certId: 'aws-ccp', priority: 'Important' },
    { certId: 'azure-fundamentals', priority: 'Important' },
    { certId: 'gcp-associate', priority: 'Optional' }
  ],
  'Cisco': [
    { certId: 'ccna-security', priority: 'Must Have' }
  ],
  'IBM': [
    { certId: 'java-associate', priority: 'Must Have' },
    { certId: 'comptia-security', priority: 'Important' }
  ],
  'TCS': [
    { certId: 'java-associate', priority: 'Important' },
    { certId: 'aws-ccp', priority: 'Optional' }
  ],
  'Infosys': [
    { certId: 'aws-ccp', priority: 'Optional' },
    { certId: 'java-associate', priority: 'Optional' }
  ],
  'Wipro': [
    { certId: 'aws-ccp', priority: 'Optional' },
    { certId: 'azure-fundamentals', priority: 'Optional' }
  ],
  'Capgemini': [
    { certId: 'aws-ccp', priority: 'Important' },
    { certId: 'azure-fundamentals', priority: 'Important' }
  ],
  'Cognizant': [
    { certId: 'aws-ccp', priority: 'Important' },
    { certId: 'gcp-associate', priority: 'Optional' }
  ],
  'Tech Mahindra': [
    { certId: 'aws-ccp', priority: 'Important' },
    { certId: 'java-associate', priority: 'Important' }
  ],
  'Deloitte': [
    { certId: 'tableau-analyst', priority: 'Must Have' },
    { certId: 'salesforce-admin', priority: 'Important' }
  ],
};

// Helper functions
export const getCertificationsByCompany = (companyName) => {
  const certs = companyCertifications[companyName] || [];
  return certs.map(cert => {
    const details = allCertifications.find(c => c.id === cert.certId);
    return { ...details, priority: cert.priority };
  });
};

export const getCertificationDetails = (certId) => {
  return allCertifications.find(c => c.id === certId);
};

export const getCertificationsByCategory = (category) => {
  return allCertifications.filter(c => c.category === category);
};
