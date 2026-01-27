// Mapping of skills to learning resources (routes or external links)
export const skillsMapping = {
  // DSA Related
  'Data Structures': { type: 'internal', route: '/dsa', title: 'DSA Practice' },
  'Algorithms': { type: 'internal', route: '/dsa', title: 'DSA Practice' },
  'System Design': { type: 'internal', route: '/dsa', title: 'DSA Practice' },
  'OOP': { type: 'internal', route: '/programming', title: 'Programming Languages' },

  // Programming Related
  'Python': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'JavaScript': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'Java': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'C++': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'React/Vue/Angular': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'Node.js/Python/Java': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'Frontend + Backend': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'Docker': { type: 'external', link: 'https://www.docker.com', title: 'Docker Documentation' },
  'Kubernetes': { type: 'external', link: 'https://kubernetes.io', title: 'Kubernetes Documentation' },
  'CI/CD': { type: 'external', link: 'https://www.jenkins.io', title: 'Jenkins CI/CD' },
  'Linux': { type: 'external', link: 'https://www.linux.org', title: 'Linux Foundation' },
  'Cloud Platforms': { type: 'external', link: 'https://aws.amazon.com', title: 'AWS Cloud' },

  // Database Related
  'SQL': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'Databases': { type: 'external', link: 'https://www.oracle.com', title: 'Oracle Database' },
  'Database Design': { type: 'external', link: 'https://www.postgresql.org', title: 'PostgreSQL' },
  'NoSQL': { type: 'external', link: 'https://www.mongodb.com', title: 'MongoDB' },

  // Testing Related
  'Selenium': { type: 'external', link: 'https://www.selenium.dev', title: 'Selenium Testing' },
  'Testing Tools': { type: 'external', link: 'https://www.postman.com', title: 'Postman API Testing' },
  'Automation': { type: 'external', link: 'https://testautomationu.applitools.com', title: 'Test Automation' },

  // Data Science & ML
  'Python': { type: 'internal', route: '/programming', title: 'Programming Languages' },
  'ML': { type: 'external', link: 'https://www.tensorflow.org', title: 'TensorFlow ML' },
  'Statistics': { type: 'external', link: 'https://www.khanacademy.org', title: 'Khan Academy Statistics' },
  'Data Visualization': { type: 'external', link: 'https://www.tableau.com', title: 'Tableau' },
  'Spark': { type: 'external', link: 'https://spark.apache.org', title: 'Apache Spark' },
  'Hadoop': { type: 'external', link: 'https://hadoop.apache.org', title: 'Apache Hadoop' },
  'ETL': { type: 'external', link: 'https://www.talend.com', title: 'Talend ETL' },
  'Power BI': { type: 'external', link: 'https://powerbi.microsoft.com', title: 'Microsoft Power BI' },
  'Tableau': { type: 'external', link: 'https://www.tableau.com', title: 'Tableau' },
  'dbt': { type: 'external', link: 'https://www.getdbt.com', title: 'dbt Analytics' },

  // AI/ML Specific
  'Deep Learning': { type: 'external', link: 'https://www.deeplearning.ai', title: 'Deep Learning AI' },
  'NLP': { type: 'external', link: 'https://huggingface.co', title: 'Hugging Face NLP' },
  'Transformers': { type: 'external', link: 'https://huggingface.co/course', title: 'Transformers Course' },
  'TensorFlow/PyTorch': { type: 'external', link: 'https://pytorch.org', title: 'PyTorch' },
  'Computer Vision': { type: 'external', link: 'https://opencv.org', title: 'OpenCV' },
  'CNN': { type: 'external', link: 'https://pytorch.org', title: 'PyTorch CNN' },
  'ROS': { type: 'external', link: 'https://www.ros.org', title: 'Robot Operating System' },
  'Control Systems': { type: 'external', link: 'https://www.mathworks.com', title: 'MATLAB Control Systems' },
  'LLMs': { type: 'external', link: 'https://openai.com', title: 'OpenAI LLM' },

  // Electronics Related
  'Microcontrollers': { type: 'external', link: 'https://www.arduino.cc', title: 'Arduino' },
  'RTOS': { type: 'external', link: 'https://www.freertos.org', title: 'FreeRTOS' },
  'VLSI': { type: 'external', link: 'https://www.cadence.com', title: 'Cadence VLSI' },
  'Verilog/VHDL': { type: 'external', link: 'https://www.mentor.com', title: 'Mentor VHDL' },
  'RF Design': { type: 'external', link: 'https://www.keysight.com', title: 'Keysight RF Tools' },
  '5G/4G': { type: 'external', link: 'https://www.gsma.com', title: 'GSMA 5G' },

  // Engineering Tools
  'CAD': { type: 'external', link: 'https://www.solidworks.com', title: 'SolidWorks' },
  'MATLAB': { type: 'external', link: 'https://www.mathworks.com', title: 'MATLAB' },
  'Simulation Tools': { type: 'external', link: 'https://www.ansys.com', title: 'ANSYS Simulation' },
  'AutoCAD': { type: 'external', link: 'https://www.autodesk.com', title: 'AutoCAD' },
  'FEA': { type: 'external', link: 'https://www.ansys.com', title: 'ANSYS FEA' },

  // Other
  'Networking': { type: 'external', link: 'https://www.cisco.com', title: 'Cisco Networking' },
  'Cryptography': { type: 'external', link: 'https://www.coursera.org', title: 'Coursera Cryptography' },
  'Security': { type: 'external', link: 'https://www.comptia.org', title: 'CompTIA Security' },
  'API Testing': { type: 'external', link: 'https://www.postman.com', title: 'Postman API' },
  'Lean Manufacturing': { type: 'external', link: 'https://www.lean.org', title: 'Lean Institute' },
  'Six Sigma': { type: 'external', link: 'https://www.asq.org', title: 'ASQ Six Sigma' },
};

// Function to get skill link info
export const getSkillLink = (skillName) => {
  return skillsMapping[skillName] || { type: 'external', link: 'https://www.google.com/search?q=' + encodeURIComponent(skillName), title: skillName };
};
