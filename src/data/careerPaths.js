export const departments = [
  {
    id: 'cse',
    name: 'Computer Science & Engineering',
    description: 'Software development, web, mobile, cloud technologies',
    icon: '💻',
    jobs: [
      {
        id: 'sde',
        title: 'Software Development Engineer',
        salary: '₹8-15 LPA',
        companies: 'Google, Amazon, Microsoft, Apple',
        skills: ['Data Structures', 'Algorithms', 'System Design', 'OOP', 'Database Design'],
        learningPath: [
          { phase: 'Foundation (3 months)', topics: ['DSA Basics', 'OOPS Concepts', 'Database Fundamentals'], resources: ['LeetCode', 'GeeksforGeeks', 'Udemy'] },
          { phase: 'Intermediate (3 months)', topics: ['Advanced DSA', 'System Design Basics', 'Web Technologies'], resources: ['InterviewBit', 'Educative', 'Scaler'] },
          { phase: 'Advanced (2 months)', topics: ['System Design', 'Microservices', 'Scalability'], resources: ['DesignGurus', 'ByteByteGo', 'System Design Interview'] }
        ],
        timeline: '8-10 months',
        links: ['https://leetcode.com', 'https://www.geeksforgeeks.org', 'https://www.educative.io']
      },
      {
        id: 'frontend',
        title: 'Frontend Engineer',
        salary: '₹7-14 LPA',
        companies: 'Meta, Netflix, Flipkart, Swiggy',
        skills: ['React/Vue/Angular', 'JavaScript', 'CSS', 'UI/UX', 'Web Performance'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['HTML/CSS Fundamentals', 'JavaScript ES6+', 'DOM Manipulation'], resources: ['FreeCodeCamp', 'MDN Web Docs', 'Codecademy'] },
          { phase: 'Intermediate (2 months)', topics: ['React Basics', 'State Management', 'REST APIs'], resources: ['React Official Docs', 'Scrimba', 'Frontend Masters'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced React', 'Performance Optimization', 'Testing'], resources: ['Kent C. Dodds', 'Egghead.io', 'Testing Library'] }
        ],
        timeline: '6-8 months',
        links: ['https://react.dev', 'https://developer.mozilla.org', 'https://www.freecodecamp.org']
      },
      {
        id: 'backend',
        title: 'Backend Engineer',
        salary: '₹8-15 LPA',
        companies: 'Amazon, Uber, LinkedIn, Airbnb',
        skills: ['Node.js/Python/Java', 'Databases', 'APIs', 'System Design', 'Cloud'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Programming Fundamentals', 'Databases SQL/NoSQL', 'REST API Design'], resources: ['Udemy', 'Coursera', 'DataCamp'] },
          { phase: 'Intermediate (3 months)', topics: ['Backend Frameworks', 'Authentication', 'Scaling'], resources: ['Official Docs', 'Backend Masters', 'Educative'] },
          { phase: 'Advanced (2 months)', topics: ['System Design', 'Microservices', 'DevOps Basics'], resources: ['DesignGurus', 'Docker Docs', 'AWS Training'] }
        ],
        timeline: '7-9 months',
        links: ['https://nodejs.org', 'https://www.mongodb.com', 'https://aws.amazon.com']
      },
      {
        id: 'fullstack',
        title: 'Full Stack Developer',
        salary: '₹8-14 LPA',
        companies: 'Stripe, GitHub, GitLab, Atlassian',
        skills: ['Frontend + Backend', 'Databases', 'DevOps', 'System Design'],
        learningPath: [
          { phase: 'Foundation (3 months)', topics: ['Frontend Basics', 'Backend Basics', 'Databases'], resources: ['MERN Stack Course', 'Udemy', 'Codecademy'] },
          { phase: 'Intermediate (3 months)', topics: ['Integration', 'Authentication', 'APIs'], resources: ['Full Stack Development Courses', 'Scaler', 'Educative'] },
          { phase: 'Advanced (2 months)', topics: ['Deployment', 'Scaling', 'Performance'], resources: ['Vercel Docs', 'Heroku', 'AWS'] }
        ],
        timeline: '8-10 months',
        links: ['https://www.mernstack.com', 'https://vercel.com', 'https://www.heroku.com']
      },
      {
        id: 'devops',
        title: 'DevOps Engineer',
        salary: '₹10-18 LPA',
        companies: 'Amazon, Microsoft Azure, Google Cloud',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Cloud Platforms'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Linux Fundamentals', 'Networking', 'Scripting'], resources: ['Linux Academy', 'Udemy', 'Linux Man Pages'] },
          { phase: 'Intermediate (2 months)', topics: ['Docker', 'Git', 'Cloud Basics'], resources: ['Docker Docs', 'Kubernetes.io', 'A Cloud Guru'] },
          { phase: 'Advanced (2 months)', topics: ['Kubernetes', 'CI/CD', 'Infrastructure as Code'], resources: ['Kubernetes Documentation', 'Terraform Docs', 'Jenkins'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.docker.com', 'https://kubernetes.io', 'https://www.terraform.io']
      },
      {
        id: 'qa',
        title: 'QA Automation Engineer',
        salary: '₹6-12 LPA',
        companies: 'Microsoft, Apple, Accenture, TCS',
        skills: ['Selenium', 'Testing Tools', 'Automation', 'SQL', 'API Testing'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Manual Testing', 'Test Cases', 'SQL Basics'], resources: ['Udemy QA Courses', 'Testautomationu.com', 'SQL Tutorial'] },
          { phase: 'Intermediate (2 months)', topics: ['Selenium', 'Java/Python', 'Test Frameworks'], resources: ['Selenium.dev', 'TestNG Docs', 'Scaler'] },
          { phase: 'Advanced (2 months)', topics: ['API Testing', 'Performance Testing', 'CI/CD Integration'], resources: ['Postman', 'JMeter', 'Jenkins'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.selenium.dev', 'https://www.postman.com', 'https://testautomationu.applitools.com']
      },
      {
        id: 'cloudeng',
        title: 'Cloud Engineer',
        salary: '₹12-20 LPA',
        companies: 'AWS, Google Cloud, Microsoft Azure',
        skills: ['AWS/GCP/Azure', 'Cloud Architecture', 'Networking', 'Security'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Cloud Fundamentals', 'Virtual Machines', 'Networking'], resources: ['AWS Training', 'Google Cloud Skills Boost', 'Azure Learn'] },
          { phase: 'Intermediate (2 months)', topics: ['Databases in Cloud', 'Storage Solutions', 'Load Balancing'], resources: ['AWS Documentation', 'Google Cloud Docs', 'Azure Docs'] },
          { phase: 'Advanced (2 months)', topics: ['Architecture Design', 'Security', 'Cost Optimization'], resources: ['AWS Certification Prep', 'Cloud Solutions Architect', 'Linux Academy'] }
        ],
        timeline: '6-8 months',
        links: ['https://aws.amazon.com', 'https://cloud.google.com', 'https://azure.microsoft.com']
      },
      {
        id: 'datascientist',
        title: 'Data Scientist',
        salary: '₹10-18 LPA',
        companies: 'Google, Amazon, Microsoft, JPMorgan',
        skills: ['Python', 'ML', 'Statistics', 'SQL', 'Data Visualization'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python Basics', 'Statistics', 'SQL'], resources: ['DataCamp', 'Coursera', 'Khan Academy'] },
          { phase: 'Intermediate (3 months)', topics: ['ML Algorithms', 'Pandas', 'Scikit-learn'], resources: ['Andrew Ng ML Course', 'Kaggle', 'Fast.ai'] },
          { phase: 'Advanced (2 months)', topics: ['Deep Learning', 'NLP', 'Computer Vision'], resources: ['TensorFlow', 'PyTorch', 'Deeplearning.ai'] }
        ],
        timeline: '7-9 months',
        links: ['https://www.python.org', 'https://scikit-learn.org', 'https://www.tensorflow.org']
      }
    ]
  },
  {
    id: 'it',
    name: 'Information Technology',
    description: 'IT services, consulting, infrastructure management',
    icon: '🔧',
    jobs: [
      {
        id: 'itsupport',
        title: 'IT Support Engineer',
        salary: '₹4-7 LPA',
        companies: 'Dell, Infosys, TCS, HCL',
        skills: ['Windows/Linux', 'Networking', 'Troubleshooting', 'Customer Service'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Operating Systems', 'Hardware Basics', 'Networking'], resources: ['CompTIA A+', 'Udemy', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['Active Directory', 'Group Policy', 'Ticketing Systems'], resources: ['Microsoft Learn', 'Pluralsight', 'Udemy'] },
          { phase: 'Advanced (1 month)', topics: ['Network Troubleshooting', 'Security Basics'], resources: ['CompTIA Network+', 'Cisco Learning'] }
        ],
        timeline: '4-6 months',
        links: ['https://www.comptia.org', 'https://learn.microsoft.com', 'https://www.cisco.com']
      },
      {
        id: 'sysadmin',
        title: 'Systems Administrator',
        salary: '₹6-12 LPA',
        companies: 'Amazon, Google, Microsoft, Accenture',
        skills: ['Linux/Windows', 'Networking', 'Security', 'Virtualization'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['OS Administration', 'Networking', 'User Management'], resources: ['Linux Academy', 'Microsoft Learn', 'Udemy'] },
          { phase: 'Intermediate (2 months)', topics: ['Virtualization', 'Storage', 'Backup & Recovery'], resources: ['VMware', 'Hyper-V', 'Proxmox'] },
          { phase: 'Advanced (2 months)', topics: ['Cloud Infrastructure', 'Security', 'Automation'], resources: ['AWS', 'Azure', 'Terraform'] }
        ],
        timeline: '6-8 months',
        links: ['https://learn.microsoft.com', 'https://www.redhat.com', 'https://www.vmware.com']
      },
      {
        id: 'netsupport',
        title: 'Network Support Engineer',
        salary: '₹5-10 LPA',
        companies: 'Cisco, Juniper, Infosys, Wipro',
        skills: ['Networking', 'Routing', 'Switching', 'Troubleshooting'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Networking Fundamentals', 'TCP/IP', 'Subnetting'], resources: ['CompTIA Network+', 'Cisco Learning', 'Udemy'] },
          { phase: 'Intermediate (2 months)', topics: ['Routing Protocols', 'Switching', 'VLANs'], resources: ['CCNA Prep', 'Cisco Official Courses', 'GNS3'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Routing', 'Network Security', 'BGP'], resources: ['CCNP', 'Advanced Networking', 'Packet Tracer'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.cisco.com', 'https://learningnetwork.cisco.com', 'https://www.gns3.com']
      },
      {
        id: 'infrasec',
        title: 'Infrastructure Security Engineer',
        salary: '₹10-16 LPA',
        companies: 'Deloitte, PwC, EY, Microsoft',
        skills: ['Network Security', 'Firewalls', 'Intrusion Detection', 'Compliance'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Network Security Basics', 'Cryptography', 'Access Control'], resources: ['CompTIA Security+', 'Udemy', 'Cybrary'] },
          { phase: 'Intermediate (2 months)', topics: ['Firewalls', 'VPN', 'IDS/IPS'], resources: ['Palo Alto', 'Cisco Security', 'CheckPoint'] },
          { phase: 'Advanced (2 months)', topics: ['Threat Analysis', 'Compliance', 'Advanced Defense'], resources: ['CEH', 'CISSP', 'Security Courses'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.comptia.org', 'https://www.paloaltonetworks.com', 'https://www.cisco.com']
      },
      {
        id: 'dbadmin',
        title: 'Database Administrator',
        salary: '₹8-14 LPA',
        companies: 'Oracle, Microsoft, Amazon, Google',
        skills: ['SQL', 'Database Design', 'Backup/Recovery', 'Performance Tuning'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['SQL Fundamentals', 'Database Design', 'Normalization'], resources: ['Oracle Academy', 'MySQL Tutorial', 'PostgreSQL Docs'] },
          { phase: 'Intermediate (2 months)', topics: ['Backup & Recovery', 'Replication', 'Performance Tuning'], resources: ['Oracle Training', 'Microsoft Learn', 'Udemy'] },
          { phase: 'Advanced (2 months)', topics: ['High Availability', 'Disaster Recovery', 'Cloud Databases'], resources: ['Oracle Certification', 'AWS RDS', 'Azure SQL'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.oracle.com', 'https://www.mysql.com', 'https://www.postgresql.org']
      },
      {
        id: 'itsoftware',
        title: 'IT Software Engineer',
        salary: '₹7-13 LPA',
        companies: 'SAP, Oracle, Salesforce, Microsoft',
        skills: ['ERP Systems', 'Database', 'Business Logic', 'SQL'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['ERP Fundamentals', 'Business Processes', 'Database Basics'], resources: ['SAP Learning Hub', 'Oracle Academy', 'Udemy'] },
          { phase: 'Intermediate (2 months)', topics: ['ERP Configuration', 'Customization', 'Modules'], resources: ['SAP Training', 'Oracle University', 'LinkedIn Learning'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Customization', 'Performance', 'Integration'], resources: ['SAP Certification', 'Oracle Certification', 'Expert Trainings'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.sap.com', 'https://www.oracle.com', 'https://www.salesforce.com']
      }
    ]
  },
  {
    id: 'ds',
    name: 'Data Science',
    description: 'Data analysis, big data, analytics, business intelligence',
    icon: '📊',
    jobs: [
      {
        id: 'dataanalyst',
        title: 'Data Analyst',
        salary: '₹6-12 LPA',
        companies: 'Amazon, Google, Facebook, Walmart',
        skills: ['SQL', 'Excel', 'Tableau/Power BI', 'Statistics', 'Python'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['SQL Basics', 'Excel Advanced', 'Statistics'], resources: ['DataCamp', 'Khan Academy', 'Mode Analytics'] },
          { phase: 'Intermediate (2 months)', topics: ['Data Visualization', 'Tableau/Power BI', 'Python'], resources: ['Tableau Public', 'Microsoft Learn', 'Python Tutorial'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Analytics', 'Business Intelligence', 'Dashboard Design'], resources: ['Coursera', 'Udemy', 'LinkedIn Learning'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.tableau.com', 'https://powerbi.microsoft.com', 'https://mode.com']
      },
      {
        id: 'dataengineer',
        title: 'Data Engineer',
        salary: '₹10-18 LPA',
        companies: 'Uber, Netflix, LinkedIn, Airbnb',
        skills: ['Python', 'SQL', 'Spark', 'Hadoop', 'ETL'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python', 'SQL', 'Databases'], resources: ['DataCamp', 'Coursera', 'Udemy'] },
          { phase: 'Intermediate (3 months)', topics: ['Spark', 'Hadoop', 'ETL Tools'], resources: ['Apache Spark', 'Databricks', 'Udemy Spark Course'] },
          { phase: 'Advanced (2 months)', topics: ['Streaming', 'Cloud Big Data', 'Pipeline Design'], resources: ['Kafka', 'AWS EMR', 'Google BigQuery'] }
        ],
        timeline: '7-9 months',
        links: ['https://spark.apache.org', 'https://hadoop.apache.org', 'https://kafka.apache.org']
      },
      {
        id: 'bi',
        title: 'Business Intelligence Developer',
        salary: '₹8-14 LPA',
        companies: 'Deloitte, Accenture, IBM, Microsoft',
        skills: ['Power BI', 'Tableau', 'SQL', 'Data Warehouse', 'DAX'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Data Warehouse Concepts', 'SQL', 'Excel'], resources: ['Udemy', 'Microsoft Learn', 'LinkedIn Learning'] },
          { phase: 'Intermediate (2 months)', topics: ['Power BI', 'Tableau', 'Data Models'], resources: ['Power BI Docs', 'Tableau Public', 'Coursera'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Visualizations', 'DAX', 'Performance'], resources: ['Microsoft Certification', 'Tableau Certification', 'Expert Training'] }
        ],
        timeline: '5-7 months',
        links: ['https://powerbi.microsoft.com', 'https://www.tableau.com', 'https://docs.microsoft.com/dax']
      },
      {
        id: 'mleng',
        title: 'Machine Learning Engineer',
        salary: '₹12-20 LPA',
        companies: 'Google, Facebook, Amazon, Tesla',
        skills: ['Python', 'ML', 'TensorFlow', 'PyTorch', 'MLOps'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python', 'Math for ML', 'Statistics'], resources: ['DataCamp', 'Khan Academy', 'Coursera Math'] },
          { phase: 'Intermediate (3 months)', topics: ['ML Algorithms', 'Scikit-learn', 'Feature Engineering'], resources: ['Andrew Ng ML Course', 'Kaggle', 'Udemy ML'] },
          { phase: 'Advanced (2 months)', topics: ['Deep Learning', 'Model Deployment', 'MLOps'], resources: ['TensorFlow', 'PyTorch', 'MLflow'] }
        ],
        timeline: '7-9 months',
        links: ['https://www.tensorflow.org', 'https://pytorch.org', 'https://www.kaggle.com']
      },
      {
        id: 'analytics',
        title: 'Analytics Engineer',
        salary: '₹10-16 LPA',
        companies: 'Stripe, Shopify, Airbnb, Uber',
        skills: ['SQL', 'Python', 'dbt', 'Data Modeling', 'BI Tools'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Advanced SQL', 'Data Modeling', 'Databases'], resources: ['Mode Analytics SQL', 'Coursera', 'Udemy'] },
          { phase: 'Intermediate (2 months)', topics: ['dbt', 'Python', 'BI Tools'], resources: ['dbt Docs', 'Python Tutorial', 'Tableau/Power BI'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced dbt', 'Analytics Architecture', 'Optimization'], resources: ['dbt Best Practices', 'Analytics Engineering Guide', 'Expert Courses'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.getdbt.com', 'https://mode.com', 'https://www.databricks.com']
      }
    ]
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    description: 'AI research, NLP, computer vision, robotics',
    icon: '🤖',
    jobs: [
      {
        id: 'nlpengineer',
        title: 'NLP Engineer',
        salary: '₹15-25 LPA',
        companies: 'Google, OpenAI, Meta, Amazon',
        skills: ['Python', 'NLP', 'Transformers', 'Deep Learning', 'LLMs'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python', 'Linear Algebra', 'Statistics'], resources: ['DataCamp', 'Khan Academy', 'Coursera'] },
          { phase: 'Intermediate (3 months)', topics: ['NLP Basics', 'NLTK', 'Word Embeddings'], resources: ['Hugging Face Course', 'Fast.ai NLP', 'Stanford NLP'] },
          { phase: 'Advanced (2 months)', topics: ['Transformers', 'BERT/GPT', 'Fine-tuning'], resources: ['Hugging Face Transformers', 'OpenAI API', 'Research Papers'] }
        ],
        timeline: '7-9 months',
        links: ['https://huggingface.co', 'https://openai.com', 'https://nlp.stanford.edu']
      },
      {
        id: 'cveng',
        title: 'Computer Vision Engineer',
        salary: '₹14-24 LPA',
        companies: 'Tesla, Apple, Google, Meta',
        skills: ['Python', 'OpenCV', 'Deep Learning', 'PyTorch', 'CNN'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python', 'Image Processing', 'Math'], resources: ['DataCamp', 'OpenCV Tutorial', 'Khan Academy'] },
          { phase: 'Intermediate (3 months)', topics: ['CNN', 'PyTorch', 'Object Detection'], resources: ['Fast.ai', 'PyTorch Docs', 'YOLO'], },
          { phase: 'Advanced (2 months)', topics: ['Advanced CV', 'Video Processing', 'Model Optimization'], resources: ['Research Papers', 'Kaggle Competitions', 'Expert Courses'] }
        ],
        timeline: '7-9 months',
        links: ['https://pytorch.org', 'https://opencv.org', 'https://www.kaggle.com']
      },
      {
        id: 'aigeneral',
        title: 'AI Research Scientist',
        salary: '₹18-35 LPA',
        companies: 'Google Brain, DeepMind, OpenAI, Meta AI',
        skills: ['Deep Learning', 'Research', 'Mathematics', 'Python', 'TensorFlow/PyTorch'],
        learningPath: [
          { phase: 'Foundation (3 months)', topics: ['Advanced Math', 'Deep Learning Theory', 'Python'], resources: ['Fast.ai', 'Coursera Deep Learning', 'Mathematics for ML'] },
          { phase: 'Intermediate (3 months)', topics: ['Research Methodology', 'Paper Reading', 'Implementation'], resources: ['Arxiv', 'GitHub', 'Research Seminars'] },
          { phase: 'Advanced (2 months)', topics: ['Novel Research', 'Model Design', 'Optimization'], resources: ['Top-tier Papers', 'Conferences', 'Collaboration'] }
        ],
        timeline: '8-10 months',
        links: ['https://research.google', 'https://deepmind.com', 'https://openai.com/research']
      },
      {
        id: 'roboticseng',
        title: 'Robotics Engineer',
        salary: '₹12-22 LPA',
        companies: 'Boston Dynamics, ABB, Siemens, Tesla',
        skills: ['C++/Python', 'ROS', 'Control Systems', 'Kinematics', 'Embedded Systems'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['C++', 'Physics & Math', 'Electronics Basics'], resources: ['C++ Tutorial', 'Khan Academy Physics', 'Arduino Guide'] },
          { phase: 'Intermediate (3 months)', topics: ['ROS', 'Control Systems', 'Kinematics'], resources: ['ROS Official Docs', 'Control Systems Course', 'Robotics Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced ROS', 'Motion Planning', 'Sensor Fusion'], resources: ['ROS Projects', 'SLAM', 'Advanced Robotics'] }
        ],
        timeline: '7-9 months',
        links: ['https://www.ros.org', 'https://www.roboticstutorial.com', 'https://www.arduino.cc']
      },
      {
        id: 'aiethics',
        title: 'AI Ethics & Safety Researcher',
        salary: '₹14-28 LPA',
        companies: 'OpenAI, DeepMind, Partnership on AI, academics',
        skills: ['AI Understanding', 'Ethics', 'Research', 'Policy Knowledge', 'Statistics'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['AI Fundamentals', 'Ethics Basics', 'Policy'], resources: ['AI Ethics Courses', 'Coursera Ethics', 'Research Papers'] },
          { phase: 'Intermediate (2 months)', topics: ['Bias Detection', 'Fairness Metrics', 'Safety'], resources: ['Fairness Research', 'AI Safety Papers', 'Online Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Research Design', 'Policy Advocacy', 'Governance'], resources: ['Research Groups', 'White Papers', 'Collaboration'] }
        ],
        timeline: '6-8 months',
        links: ['https://openai.com/safety', 'https://www.partnershiponai.org', 'https://www.aiethics.org']
      }
    ]
  },
  {
    id: 'aiml',
    name: 'AI/ML (Applied)',
    description: 'Applied machine learning, production ML systems',
    icon: '⚙️',
    jobs: [
      {
        id: 'mlops',
        title: 'MLOps Engineer',
        salary: '₹12-20 LPA',
        companies: 'Databricks, Hugging Face, Scale AI, Google',
        skills: ['Python', 'ML', 'Docker', 'Kubernetes', 'Monitoring', 'CI/CD'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Python', 'ML Basics', 'DevOps Concepts'], resources: ['DataCamp', 'Udemy ML', 'Docker Tutorial'] },
          { phase: 'Intermediate (2 months)', topics: ['Model Deployment', 'Monitoring', 'Versioning'], resources: ['MLflow', 'Kubeflow', 'AWS SageMaker'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced MLOps', 'Scaling', 'Production Systems'], resources: ['Made With ML', 'Full Stack Deep Learning', 'Expert Courses'] }
        ],
        timeline: '6-8 months',
        links: ['https://mlflow.org', 'https://www.kubeflow.org', 'https://aws.amazon.com/sagemaker']
      },
      {
        id: 'featureeng',
        title: 'Feature Engineering Specialist',
        salary: '₹11-19 LPA',
        companies: 'Stripe, DoorDash, Uber, LinkedIn',
        skills: ['Python', 'SQL', 'Feature Stores', 'Statistics', 'Domain Knowledge'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Advanced SQL', 'Python', 'Statistics'], resources: ['Mode Analytics', 'DataCamp', 'Khan Academy'] },
          { phase: 'Intermediate (2 months)', topics: ['Feature Engineering', 'Feature Stores', 'Time Series'], resources: ['Feast', 'Tecton', 'Feature Engineering Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Features', 'Causal Analysis', 'Experimentation'], resources: ['Online Courses', 'Research Papers', 'Expert Mentorship'] }
        ],
        timeline: '5-7 months',
        links: ['https://feast.dev', 'https://www.tecton.ai', 'https://mode.com']
      },
      {
        id: 'modelevaluation',
        title: 'ML Model Evaluation Specialist',
        salary: '₹10-18 LPA',
        companies: 'OpenAI, Anthropic, Alignment Research Center',
        skills: ['ML', 'Evaluation Metrics', 'Testing', 'Python', 'Statistics'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['ML Fundamentals', 'Evaluation Metrics', 'Testing'], resources: ['Coursera ML', 'StatQuest', 'Andrew Ng Course'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced Metrics', 'Benchmarking', 'Red Teaming'], resources: ['ML Courses', 'Research Papers', 'Online Tutorials'] },
          { phase: 'Advanced (2 months)', topics: ['Custom Evaluation', 'Interpretability', 'Safety Testing'], resources: ['Advanced Courses', 'Research Groups', 'Expert Collaboration'] }
        ],
        timeline: '5-7 months',
        links: ['https://scikit-learn.org/stable/modules/model_evaluation.html', 'https://www.tensorflow.org', 'https://pytorch.org']
      },
      {
        id: 'appliedmleng',
        title: 'Applied ML Engineer',
        salary: '₹12-20 LPA',
        companies: 'Amazon, Pinterest, Etsy, Instacart',
        skills: ['ML', 'Product Sense', 'A/B Testing', 'Python', 'Analytics'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['ML Basics', 'Product Strategy', 'Analytics'], resources: ['Fast.ai', 'Coursera', 'Product Courses'] },
          { phase: 'Intermediate (2 months)', topics: ['Experimentation', 'A/B Testing', 'Metrics'], resources: ['Udacity ML', 'Experimentation Courses', 'Analytics Books'] },
          { phase: 'Advanced (2 months)', topics: ['Production ML', 'Scaling', 'Impact Measurement'], resources: ['Made With ML', 'Full Stack DL', 'Case Studies'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.fast.ai', 'https://exp-platform.com', 'https://www.kdnuggets.com']
      },
      {
        id: 'llmeng',
        title: 'LLM Engineer',
        salary: '₹16-28 LPA',
        companies: 'OpenAI, Anthropic, Google, Meta',
        skills: ['Python', 'Transformers', 'Prompt Engineering', 'Fine-tuning', 'API Integration'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['LLM Basics', 'Prompt Engineering', 'API Usage'], resources: ['OpenAI API Docs', 'DeepLearning.AI Courses', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['Fine-tuning', 'Embeddings', 'Retrieval'], resources: ['Hugging Face Course', 'LangChain Docs', 'Open Source Models'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Fine-tuning', 'RAG Systems', 'Production Deployment'], resources: ['Research Papers', 'Advanced Courses', 'Expert Collaboration'] }
        ],
        timeline: '5-7 months',
        links: ['https://platform.openai.com', 'https://huggingface.co', 'https://www.langchain.com']
      }
    ]
  },
  {
    id: 'ece',
    name: 'Electronics & Communication',
    description: 'Hardware design, embedded systems, telecom',
    icon: '📡',
    jobs: [
      {
        id: 'embedded',
        title: 'Embedded Systems Engineer',
        salary: '₹7-14 LPA',
        companies: 'Intel, ARM, Qualcomm, Samsung',
        skills: ['C/C++', 'Microcontrollers', 'RTOS', 'Hardware Knowledge'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['C/C++', 'Digital Logic', 'Microcontrollers'], resources: ['Arduino Guide', 'C Tutorial', 'Electronics Basics'] },
          { phase: 'Intermediate (2 months)', topics: ['ARM Architecture', 'RTOS', 'Drivers'], resources: ['ARM Docs', 'FreeRTOS', 'STM32 Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Hardware Optimization', 'Debugging', 'Real-time Systems'], resources: ['Advanced Courses', 'Projects', 'Documentation'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.arduino.cc', 'https://www.arm.com', 'https://www.freertos.org']
      },
      {
        id: 'hwdesign',
        title: 'Hardware Design Engineer',
        salary: '₹9-16 LPA',
        companies: 'Broadcom, MediaTek, NVIDIA, AMD',
        skills: ['VLSI', 'Verilog/VHDL', 'Circuit Design', 'Simulation Tools'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Digital Logic', 'Circuit Theory', 'Verilog Basics'], resources: ['Digital Design Courses', 'Verilog Tutorial', 'Udemy'] },
          { phase: 'Intermediate (3 months)', topics: ['VLSI Design', 'Synthesis', 'Simulation'], resources: ['Cadence Tutorials', 'EDA Tools', 'Online Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Layout Design', 'Timing Analysis', 'Power Optimization'], resources: ['Advanced VLSI Courses', 'Research Papers', 'Industry Training'] }
        ],
        timeline: '7-9 months',
        links: ['https://www.cadence.com', 'https://www.mentor.com', 'https://www.synopsys.com']
      },
      {
        id: 'rfeng',
        title: 'RF & Wireless Engineer',
        salary: '₹8-15 LPA',
        companies: 'Qualcomm, Broadcom, Ericsson, Nokia',
        skills: ['RF Design', 'Antenna Theory', 'Wireless Standards', 'Signal Processing'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Electromagnetic Theory', 'RF Basics', 'Antenna Design'], resources: ['Udemy RF Course', 'Antenna Handbook', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['Wireless Standards', 'Signal Processing', 'Simulation'], resources: ['5G Courses', 'MATLAB', 'Simulation Tools'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced RF Design', 'Optimization', 'Testing'], resources: ['Advanced Courses', 'Industry Standards', 'Expert Training'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.qualcomm.com', 'https://www.mathworks.com', 'https://www.atnf.csiro.au']
      },
      {
        id: 'telecom',
        title: 'Telecom Network Engineer',
        salary: '₹7-13 LPA',
        companies: 'Ericsson, Huawei, Jio, Vodafone',
        skills: ['Networking', '5G/4G', 'Protocol Stack', 'System Design'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Networking Basics', '5G Fundamentals', 'Telecom Standards'], resources: ['GSMA Learning', 'Udemy Telecom', 'Documentation'] },
          { phase: 'Intermediate (2 months)', topics: ['5G Architecture', 'Protocol Stack', 'Core Networks'], resources: ['3GPP Standards', 'Telecom Courses', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced 5G', 'Network Optimization', 'Testing'], resources: ['Advanced Courses', 'Industry Training', 'Certifications'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.gsma.com', '://www.3gpp.org', 'https://www.ericsson.com']
      }
    ]
  },
  {
    id: 'electrical',
    name: 'Electrical Engineering',
    description: 'Power systems, electrical design, automation',
    icon: '⚡',
    jobs: [
      {
        id: 'powersys',
        title: 'Power Systems Engineer',
        salary: '₹7-13 LPA',
        companies: 'NTPC, Power Grid, Siemens, ABB',
        skills: ['Power Systems', 'MATLAB', 'Electrical Theory', 'Simulation'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Power System Basics', 'Circuit Theory', 'MATLAB'], resources: ['NPTEL Courses', 'Power Systems Books', 'MATLAB Tutorial'] },
          { phase: 'Intermediate (2 months)', topics: ['Load Flow', 'Fault Analysis', 'Stability'], resources: ['MATLAB Simulation', 'Power System Analysis Books', 'Online Courses'] },
          { phase: 'Advanced (2 months)', topics: ['Protection Systems', 'Smart Grids', 'Optimization'], resources: ['Advanced Courses', 'Industry Standards', 'Expert Training'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.mathworks.com', 'https://nptel.ac.in', 'https://www.abb.com']
      },
      {
        id: 'automationeng',
        title: 'Automation & Controls Engineer',
        salary: '₹8-14 LPA',
        companies: 'Siemens, ABB, Schneider Electric, GE',
        skills: ['PLC Programming', 'SCADA', 'Control Theory', 'Ladder Logic'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Control Theory Basics', 'Ladder Logic', 'PLC Programming'], resources: ['Udemy PLC', 'YouTube Tutorials', 'Documentation'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced PLC', 'SCADA Systems', 'Networking'], resources: ['Siemens Training', 'SCADA Courses', 'Online Tutorials'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Control', 'Industrial IoT', 'Optimization'], resources: ['Advanced Courses', 'Industry Training', 'Expert Mentorship'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.siemens.com', 'https://www.abb.com', 'https://www.se.com']
      },
      {
        id: 'electricaldesign',
        title: 'Electrical Design Engineer',
        salary: '₹7-12 LPA',
        companies: 'TCS, Infosys, L&T, Bharat Heavy Electricals',
        skills: ['CAD Software', 'Electrical Design', 'Standards', 'Project Management'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['CAD Software', 'Electrical Standards', 'Design Basics'], resources: ['AutoCAD Tutorials', 'Electrical Standards Books', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced CAD', 'Design Software', 'Project Execution'], resources: ['AutoCAD Expert Courses', 'Design Software Training', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Complex Designs', 'BIM', 'Optimization'], resources: ['Advanced Courses', 'Industry Projects', 'Expert Training'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.autodesk.com', 'https://www.revit.com', 'https://www.ltonline.com']
      },
      {
        id: 'renewableeng',
        title: 'Renewable Energy Engineer',
        salary: '₹8-14 LPA',
        companies: 'SOLARTECH, Suzlon, Adani Green, ReNew Power',
        skills: ['Solar/Wind Technology', 'Power Electronics', 'System Design', 'MATLAB'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Renewable Energy Basics', 'Power Electronics', 'Solar Fundamentals'], resources: ['NPTEL Courses', 'Online Tutorials', 'Industry Webinars'] },
          { phase: 'Intermediate (2 months)', topics: ['Solar System Design', 'Wind Power', 'Grid Integration'], resources: ['IRENA Training', 'Advanced Courses', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Energy Storage', 'Optimization', 'Project Management'], resources: ['Advanced Courses', 'Industry Training', 'Expert Collaboration'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.irena.org', 'https://nptel.ac.in', 'https://www.renewableenergyworld.com']
      }
    ]
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Design, manufacturing, CAD, thermal systems',
    icon: '🔩',
    jobs: [
      {
        id: 'mechanicaldesign',
        title: 'Mechanical Design Engineer',
        salary: '₹7-13 LPA',
        companies: 'Bosch, Siemens, GM, BMW, Hero MotoCorp',
        skills: ['CAD', 'Design Theory', 'Simulation', 'Material Science'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['CAD Software', 'Design Principles', 'Drawing Standards'], resources: ['CAD Tutorials', 'Design Books', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced CAD', 'FEA Simulation', 'Optimization'], resources: ['CATIA/Solidworks Courses', 'ANSYS Training', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Complex Design', 'Advanced Simulation', 'Manufacturing'], resources: ['Advanced Courses', 'Industry Projects', 'Expert Training'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.solidworks.com', 'https://www.3ds.com/products/catia', 'https://www.ansys.com']
      },
      {
        id: 'manufacturingeng',
        title: 'Manufacturing Engineer',
        salary: '₹7-12 LPA',
        companies: 'Tata Motors, Maruti, Bosch, Siemens',
        skills: ['Process Design', 'Quality Control', 'Lean Manufacturing', 'Production Planning'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Manufacturing Basics', 'Quality Management', 'Lean Principles'], resources: ['NPTEL Courses', 'Online Tutorials', 'Industry Standards'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced Manufacturing', 'Six Sigma', 'Process Control'], resources: ['Lean Courses', 'Six Sigma Training', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Automation', 'Advanced Quality', 'Optimization'], resources: ['Advanced Courses', 'Industry Training', 'Expert Mentorship'] }
        ],
        timeline: '5-7 months',
        links: ['https://nptel.ac.in', 'https://www.asq.org', 'https://www.lean.org']
      },
      {
        id: 'automotiveeng',
        title: 'Automotive Engineer',
        salary: '₹8-15 LPA',
        companies: 'Tesla, BMW, GM, Volkswagen, Tata Motors',
        skills: ['Vehicle Dynamics', 'CAD', 'Systems Design', 'Testing'],
        learningPath: [
          { phase: 'Foundation (2 months)', topics: ['Automotive Basics', 'CAD', 'Engine Fundamentals'], resources: ['Automotive Courses', 'CAD Training', 'Industry Resources'] },
          { phase: 'Intermediate (2 months)', topics: ['Advanced Vehicle Dynamics', 'Electric Vehicles', 'Safety Systems'], resources: ['Automotive Engineering Courses', 'EV Technology', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced EV Technology', 'Autonomous Vehicles', 'Testing'], resources: ['Advanced Courses', 'Industry Training', 'Research Collaboration'] }
        ],
        timeline: '6-8 months',
        links: ['https://www.tesla.com', 'https://www.bmwgroup.com', 'https://www.sae.org']
      },
      {
        id: 'thermaleng',
        title: 'Thermal & HVAC Engineer',
        salary: '₹7-13 LPA',
        companies: 'Carrier, Daikin, Godrej, Voltas',
        skills: ['Thermodynamics', 'HVAC Design', 'Simulation', 'Energy Efficiency'],
        learningPath: [
          { phase: 'Foundation (1 month)', topics: ['Thermodynamics', 'Heat Transfer', 'HVAC Basics'], resources: ['NPTEL Courses', 'Thermodynamics Books', 'YouTube'] },
          { phase: 'Intermediate (2 months)', topics: ['HVAC Design', 'Simulation Tools', 'Standards'], resources: ['HVAC Design Courses', 'EnergyPlus', 'Online Resources'] },
          { phase: 'Advanced (2 months)', topics: ['Advanced Design', 'Energy Optimization', 'Green Building'], resources: ['Advanced Courses', 'Industry Training', 'Expert Mentorship'] }
        ],
        timeline: '5-7 months',
        links: ['https://www.ashrae.org', 'https://energyplus.net', 'https://nptel.ac.in']
      }
    ]
  }
];
