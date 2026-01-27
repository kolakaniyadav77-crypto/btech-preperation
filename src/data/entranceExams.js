// Entrance Exams Database - 20+ Indian Exams
// Each exam has resources, application links, and preparation tips

export const entranceExams = [
  {
    id: 1,
    name: 'GATE - Graduate Aptitude Test in Engineering',
    acronym: 'GATE',
    category: 'Engineering',
    freqency: 'Annual (February)',
    examFee: '₹1500 - ₹2500',
    officialWebsite: 'https://gate.iitm.ac.in',
    applicationLink: 'https://appsgate.iitm.ac.in',
    duration: '180 minutes',
    totalMarks: '100',
    branches: ['CE', 'CS', 'EC', 'EE', 'ME', 'Biomedical', 'Biotechnology', 'Chemical', 'Instrumentation', 'Petroleum', 'Mining', 'Geology', 'Naval'],
    examPattern: '65 MCQs (1 & 2 marks) + Numerical Type',
    syllabus: 'Engineering Mathematics, Problem Solving, Subject Specific',
    benefits: [
      'M.Tech admission in top IITs and NITs',
      'PSU recruitment (NTPC, IOCL, ONGC, etc.)',
      'Stipend of ₹8,000-12,500/month during M.Tech',
      'International scholarship opportunities',
      'Research fellowships'
    ],
    resources: [
      { name: 'GATE Official', link: 'https://gate.iitm.ac.in', type: 'Official' },
      { name: 'GeeksforGeeks GATE', link: 'https://www.geeksforgeeks.org/gate-cs-notes-gq', type: 'Study Material' },
      { name: 'Testbook GATE', link: 'https://testbook.com/gate', type: 'Mock Tests' },
      { name: 'NPTEL Videos', link: 'https://nptel.ac.in', type: 'Video Lectures' },
      { name: 'Made Easy GATE', link: 'https://www.madeeasy.in', type: 'Coaching' }
    ],
    prepTime: '4-6 months',
    difficulty: 'Hard'
  },
  {
    id: 2,
    name: 'JEE Main',
    acronym: 'JEE',
    category: 'Engineering',
    freqency: 'Twice a year (January & April)',
    examFee: '₹650',
    officialWebsite: 'https://jeemain.nta.ac.in',
    applicationLink: 'https://jeemain.nta.ac.in',
    duration: '180 minutes',
    totalMarks: '300',
    branches: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: '90 Questions (MCQ + Numerical)',
    syllabus: 'Class 11 & 12 NCERT (Physics, Chemistry, Math)',
    benefits: [
      'NIT & IIIT admission',
      'Engineering college admission',
      'Eligibility for JEE Advanced',
      'Merit-based scholarships',
      'National Ranking'
    ],
    resources: [
      { name: 'JEE Main Official', link: 'https://jeemain.nta.ac.in', type: 'Official' },
      { name: 'Vedantu JEE', link: 'https://www.vedantu.com/jee', type: 'Online Coaching' },
      { name: 'Toppr JEE Prep', link: 'https://www.toppr.com', type: 'Study Platform' },
      { name: 'Khan Academy', link: 'https://www.khanacademy.org', type: 'Video Lectures' }
    ],
    prepTime: '6-12 months',
    difficulty: 'Medium-Hard'
  },
  {
    id: 3,
    name: 'JEE Advanced',
    acronym: 'JEE-Adv',
    category: 'Engineering',
    freqency: 'Annual (June)',
    examFee: '₹2800',
    officialWebsite: 'https://jeeadv.ac.in',
    applicationLink: 'https://jeeadv.ac.in',
    duration: '240 minutes (2 papers)',
    totalMarks: '360',
    branches: ['All Engineering Branches'],
    examPattern: '54 Questions per paper with MCQ & Numerical',
    syllabus: 'Advanced Physics, Chemistry, Mathematics',
    benefits: [
      'IIT admission',
      'Top engineering institutes in India',
      'Direct recruitment from PSUs',
      'International scholarships',
      'Best salary packages'
    ],
    resources: [
      { name: 'JEE Advanced Portal', link: 'https://jeeadv.ac.in', type: 'Official' },
      { name: 'Allen KVPY', link: 'https://www.allen.ac.in', type: 'Coaching' },
      { name: 'Unacademy JEE', link: 'https://unacademy.com/jee', type: 'Online Classes' }
    ],
    prepTime: '2-4 months (after JEE Main)',
    difficulty: 'Very Hard'
  },
  {
    id: 4,
    name: 'CAT - Common Admission Test',
    acronym: 'CAT',
    category: 'MBA',
    freqency: 'Annual (November)',
    examFee: '₹2200',
    officialWebsite: 'https://www.iimcat.ac.in',
    applicationLink: 'https://www.iimcat.ac.in',
    duration: '120 minutes',
    totalMarks: '198',
    branches: ['Business Management'],
    examPattern: 'MCQ + TITA (66 questions)',
    syllabus: 'Quantitative Ability, Verbal Reasoning, Data Interpretation',
    benefits: [
      'Top IIM admission',
      'MBA from premier institutes',
      'Average salary ₹20L+ PA',
      'Corporate leadership roles',
      'Global opportunities'
    ],
    resources: [
      { name: 'CAT Official', link: 'https://www.iimcat.ac.in', type: 'Official' },
      { name: '2IIM', link: 'https://www.2iim.com', type: 'Online Coaching' },
      { name: 'CatKing', link: 'https://www.catking.in', type: 'Coaching' },
      { name: 'Pagalguy CAT', link: 'https://www.pagalguy.com', type: 'Community' }
    ],
    prepTime: '3-6 months',
    difficulty: 'Hard'
  },
  {
    id: 5,
    name: 'UPSC CSE - Civil Services Examination',
    acronym: 'UPSC CSE',
    category: 'Government',
    freqency: 'Annual (May-June)',
    examFee: '₹100',
    officialWebsite: 'https://www.upsc.gov.in',
    applicationLink: 'https://www.upsc.gov.in',
    duration: '2 hours per paper',
    totalMarks: '1025',
    branches: ['General Studies', 'Optional Subject'],
    examPattern: 'Prelims + Mains + Interview',
    syllabus: 'History, Geography, Politics, Science, Current Affairs',
    benefits: [
      'IAS/IPS/IFS officer',
      'Government job security',
      'Respect and authority',
      'Good salary & perks',
      'Social impact work'
    ],
    resources: [
      { name: 'UPSC Official', link: 'https://www.upsc.gov.in', type: 'Official' },
      { name: 'BYJUS UPSC', link: 'https://byjus.com/upsc', type: 'Online Coaching' },
      { name: 'Vision IAS', link: 'https://www.visionias.in', type: 'Coaching' },
      { name: 'InsightsIAS', link: 'https://www.insightsonindia.com', type: 'Current Affairs' }
    ],
    prepTime: '1-2 years',
    difficulty: 'Very Hard'
  },
  {
    id: 6,
    name: 'NEET - National Eligibility cum Medical Entrance Test',
    acronym: 'NEET',
    category: 'Medical',
    freqency: 'Annual (May)',
    examFee: '₹1600',
    officialWebsite: 'https://neet.nta.ac.in',
    applicationLink: 'https://neet.nta.ac.in',
    duration: '180 minutes',
    totalMarks: '720',
    branches: ['Physics', 'Chemistry', 'Biology'],
    examPattern: '200 MCQs (1 mark each)',
    syllabus: 'Class 11 & 12 Biology, Physics, Chemistry',
    benefits: [
      'MBBS admission',
      'BDS admission',
      'Government & private medical colleges',
      'Medical professional career',
      'Fulfilling healthcare profession'
    ],
    resources: [
      { name: 'NEET Official', link: 'https://neet.nta.ac.in', type: 'Official' },
      { name: 'Aakash Institute', link: 'https://www.aakashinstitute.com', type: 'Coaching' },
      { name: 'Physics Wallah', link: 'https://www.pw.live', type: 'Online Classes' }
    ],
    prepTime: '6-12 months',
    difficulty: 'Hard'
  },
  {
    id: 7,
    name: 'NET/SET - National Eligibility Test / State Eligibility Test',
    acronym: 'NET/SET',
    category: 'Academic',
    freqency: 'Twice a year (June & December)',
    examFee: '₹1000',
    officialWebsite: 'https://ugcnet.nta.ac.in',
    applicationLink: 'https://ugcnet.nta.ac.in',
    duration: '180 minutes',
    totalMarks: '300',
    branches: ['Science', 'Social Science', 'Commerce', 'Humanities'],
    examPattern: '150 MCQs (2 marks each)',
    syllabus: 'Subject-specific + Teaching Aptitude + Research Methodology',
    benefits: [
      'Lectureship in colleges',
      'Junior Research Fellowship',
      'PhD admission',
      'Academic career',
      'Government teaching job'
    ],
    resources: [
      { name: 'UGC NET Official', link: 'https://ugcnet.nta.ac.in', type: 'Official' },
      { name: 'Testbook NET', link: 'https://testbook.com/net', type: 'Mock Tests' },
      { name: 'NET Guide', link: 'https://www.netguide.com', type: 'Study Material' }
    ],
    prepTime: '3-4 months',
    difficulty: 'Medium'
  },
  {
    id: 8,
    name: 'GMAT - Graduate Management Admission Test',
    acronym: 'GMAT',
    category: 'International MBA',
    freqency: 'Throughout the year',
    examFee: '$275 (₹23,000 approx)',
    officialWebsite: 'https://www.gmac.com',
    applicationLink: 'https://www.mba.com',
    duration: '187 minutes',
    totalMarks: '800',
    branches: ['Quantitative', 'Verbal', 'Integrated Reasoning'],
    examPattern: 'Adaptive CAT format',
    syllabus: 'English, Mathematics, Reasoning',
    benefits: [
      'Top global MBA programs',
      'Study abroad opportunities',
      'High salary packages globally',
      'International career options',
      'Network with global professionals'
    ],
    resources: [
      { name: 'GMAT Official', link: 'https://www.mba.com', type: 'Official' },
      { name: 'Manhattan Prep', link: 'https://www.manhattanprep.com', type: 'Online Coaching' },
      { name: 'Veritas Prep', link: 'https://www.veritasprep.com', type: 'Coaching' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Hard'
  },
  {
    id: 9,
    name: 'GRE - Graduate Record Examination',
    acronym: 'GRE',
    category: 'International Masters',
    freqency: 'Throughout the year',
    examFee: '$205 (₹17,000 approx)',
    officialWebsite: 'https://www.ets.org/gre',
    applicationLink: 'https://www.ets.org/gre/revised_general',
    duration: '180 minutes',
    totalMarks: '340',
    branches: ['Verbal', 'Quantitative', 'Analytical Writing'],
    examPattern: 'Adaptive computer-based test',
    syllabus: 'English Vocabulary, Mathematics, Logical Reasoning',
    benefits: [
      'MS admission worldwide',
      'Study in USA, UK, Canada',
      'Global scholarship opportunities',
      'High earning potential abroad',
      'International education'
    ],
    resources: [
      { name: 'GRE Official', link: 'https://www.ets.org/gre', type: 'Official' },
      { name: 'Magoosh GRE', link: 'https://magoosh.com/gre', type: 'Online Prep' },
      { name: 'Kaplan GRE', link: 'https://www.kaptest.com/gre', type: 'Coaching' }
    ],
    prepTime: '2-4 months',
    difficulty: 'Medium-Hard'
  },
  {
    id: 10,
    name: 'IELTS / TOEFL - English Proficiency',
    acronym: 'IELTS/TOEFL',
    category: 'Language Test',
    freqency: 'Multiple times monthly',
    examFee: '₹12,500 (IELTS) / $235 (TOEFL)',
    officialWebsite: 'https://www.ielts.org / https://www.ets.org/toefl',
    applicationLink: 'https://www.ielts.org',
    duration: '180 minutes (IELTS) / 120 minutes (TOEFL)',
    totalMarks: '9.0 (IELTS) / 120 (TOEFL)',
    branches: ['Listening', 'Reading', 'Writing', 'Speaking'],
    examPattern: 'Paper-based or computer-based',
    syllabus: 'English Communication Skills',
    benefits: [
      'Study abroad eligibility',
      'Work visa sponsorship',
      'International job opportunities',
      'Migration to English-speaking countries',
      'Professional communication skills'
    ],
    resources: [
      { name: 'IELTS Official', link: 'https://www.ielts.org', type: 'Official' },
      { name: 'British Council IELTS', link: 'https://www.britishcouncil.in', type: 'Coaching' },
      { name: 'TOEFL Official', link: 'https://www.ets.org/toefl', type: 'Official' }
    ],
    prepTime: '1-2 months',
    difficulty: 'Medium'
  },
  {
    id: 11,
    name: 'SSC Combined Graduate Level Examination',
    acronym: 'SSC CGL',
    category: 'Government',
    freqency: 'Annual',
    examFee: '₹100',
    officialWebsite: 'https://ssc.nic.in',
    applicationLink: 'https://ssc.nic.in',
    duration: '200 minutes (total)',
    totalMarks: '200 (Tier 1)',
    branches: ['General Studies', 'Quantitative Aptitude', 'English'],
    examPattern: 'Tier 1 (Online) + Tier 2 + Tier 3',
    syllabus: 'Math, English, Reasoning, General Awareness',
    benefits: [
      'Central Government Jobs',
      'Income Tax Officer',
      'Statistical Officer',
      'Job security',
      'Government perks & pension'
    ],
    resources: [
      { name: 'SSC Official', link: 'https://ssc.nic.in', type: 'Official' },
      { name: 'Testbook SSC CGL', link: 'https://testbook.com/ssc-cgl', type: 'Mock Tests' },
      { name: 'Adda 247', link: 'https://www.adda247.com', type: 'Study Material' }
    ],
    prepTime: '3-6 months',
    difficulty: 'Medium'
  },
  {
    id: 12,
    name: 'BANK PO - Banking Sector Jobs',
    acronym: 'Bank PO',
    category: 'Banking',
    freqency: 'Annual/Bi-annual',
    examFee: '₹750 - ₹1000',
    officialWebsite: 'https://www.sbi.co.in / https://www.ibps.in',
    applicationLink: 'https://www.sbi.co.in',
    duration: '180 minutes',
    totalMarks: '200',
    branches: ['Reasoning', 'Quantitative', 'English', 'General Awareness'],
    examPattern: 'Prelims (Objective) + Mains + Interview',
    syllabus: 'Banking awareness, Finance, Economics',
    benefits: [
      'Banking sector career',
      'Salary ₹35,000 - ₹50,000/month',
      'Promotion opportunities',
      'Government job security',
      'Good perks & benefits'
    ],
    resources: [
      { name: 'SBI Recruitment', link: 'https://www.sbi.co.in', type: 'Official' },
      { name: 'IBPS Selection', link: 'https://www.ibps.in', type: 'Official' },
      { name: 'Banking Awareness Guide', link: 'https://www.bankersadda.com', type: 'Study Material' }
    ],
    prepTime: '2-4 months',
    difficulty: 'Medium'
  },
  {
    id: 13,
    name: 'Railway Recruitment Board Examination',
    acronym: 'RRB',
    category: 'Government',
    freqency: 'Annual',
    examFee: '₹250 - ₹500',
    officialWebsite: 'https://www.rrbonline.in',
    applicationLink: 'https://www.rrbonline.in',
    duration: '90 minutes',
    totalMarks: '100',
    branches: ['General Awareness', 'Arithmetic', 'Reasoning'],
    examPattern: 'CBT Stage 1 & Stage 2',
    syllabus: 'Mathematics, General Knowledge, Reasoning',
    benefits: [
      'Railway Jobs (ALP, Technician, etc)',
      'Job security',
      'Monthly salary ₹25,000 - ₹40,000',
      'Government benefits & pension',
      'Decent work-life balance'
    ],
    resources: [
      { name: 'RRB Official', link: 'https://www.rrbonline.in', type: 'Official' },
      { name: 'RRB Guide', link: 'https://www.rrbguide.com', type: 'Study Material' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Easy-Medium'
  },
  {
    id: 14,
    name: 'CLAT - Common Law Admission Test',
    acronym: 'CLAT',
    category: 'Law',
    freqency: 'Annual (May)',
    examFee: '₹4000',
    officialWebsite: 'https://www.consortiumofnlus.ac.in',
    applicationLink: 'https://www.consortiumofnlus.ac.in',
    duration: '120 minutes',
    totalMarks: '120',
    branches: ['English', 'Reasoning', 'Legal Knowledge', 'Quantitative Ability'],
    examPattern: 'Single Paper MCQ-based',
    syllabus: 'Legal awareness, Logic, English comprehension',
    benefits: [
      'Top Law College Admission',
      'Legal profession career',
      'Lawyer earning potential',
      'Social impact through law',
      'International opportunities'
    ],
    resources: [
      { name: 'CLAT Official', link: 'https://www.consortiumofnlus.ac.in', type: 'Official' },
      { name: 'CLAT prep portal', link: 'https://www.clatprepportal.com', type: 'Study Material' }
    ],
    prepTime: '3-4 months',
    difficulty: 'Medium'
  },
  {
    id: 15,
    name: 'AIIMS NEET - Medical Entrance (Alternative)',
    acronym: 'AIIMS',
    category: 'Medical',
    freqency: 'Combined with NEET',
    examFee: '₹1600',
    officialWebsite: 'https://aiimsexams.ac.in',
    applicationLink: 'https://neet.nta.ac.in',
    duration: '180 minutes',
    totalMarks: '720',
    branches: ['Physics', 'Chemistry', 'Biology'],
    examPattern: 'Same as NEET unified format',
    syllabus: 'Class 11 & 12 Science',
    benefits: [
      'AIIMS Hospital Jobs',
      'Premium medical training',
      'Prestigious institution',
      'Excellent medical infrastructure',
      'High quality education'
    ],
    resources: [
      { name: 'AIIMS Exams', link: 'https://aiimsexams.ac.in', type: 'Official' },
      { name: 'NEET Prep', link: 'https://neet.nta.ac.in', type: 'Official' }
    ],
    prepTime: '6-12 months',
    difficulty: 'Hard'
  },
  {
    id: 16,
    name: 'CAT-like Exams (XAT, IIFT, SNAP)',
    acronym: 'XAT/IIFT/SNAP',
    category: 'MBA Alternatives',
    freqency: 'January - January',
    examFee: '₹1800 - ₹2500',
    officialWebsite: 'https://www.xatexam.in',
    applicationLink: 'https://www.xatexam.in',
    duration: '170 minutes',
    totalMarks: '120 - 200',
    branches: ['Quantitative', 'Verbal', 'Decision Making'],
    examPattern: 'MCQ-based with varied question types',
    syllabus: 'Management aptitude, business awareness',
    benefits: [
      'Alternative MBA paths',
      'Diverse top B-schools',
      'Career in business management',
      'Good salary packages',
      'Multiple admission opportunities'
    ],
    resources: [
      { name: 'XAT Exam', link: 'https://www.xatexam.in', type: 'Official' },
      { name: 'MBA Prep', link: 'https://www.mba.com', type: 'Study Portal' }
    ],
    prepTime: '3-4 months',
    difficulty: 'Medium-Hard'
  },
  {
    id: 17,
    name: 'KVPY - Kishore Vaigyanik Protsahan Yojana',
    acronym: 'KVPY',
    category: 'Science Scholarship',
    freqency: 'Annual (November)',
    examFee: 'Free',
    officialWebsite: 'https://kvpy.iisc.ac.in',
    applicationLink: 'https://kvpy.iisc.ac.in',
    duration: '180 minutes (each paper)',
    totalMarks: '100',
    branches: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    examPattern: 'Paper 1 (SA) + Paper 2 (SX)',
    syllabus: 'Class 11 & 12 Science',
    benefits: [
      'Monthly scholarship ₹5000-7000',
      'Annual contingency grant',
      'Free coaching option',
      'Research career guidance',
      'International exposure'
    ],
    resources: [
      { name: 'KVPY Official', link: 'https://kvpy.iisc.ac.in', type: 'Official' },
      { name: 'KVPY Preparation', link: 'https://kvpy.iisc.ac.in', type: 'Study Material' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Hard'
  },
  {
    id: 18,
    name: 'BITSAT - BITS Admission Test',
    acronym: 'BITSAT',
    category: 'Engineering',
    freqency: 'Annual (May-June)',
    examFee: '₹2850',
    officialWebsite: 'https://www.bitsadmission.com',
    applicationLink: 'https://www.bitsadmission.com',
    duration: '180 minutes',
    totalMarks: '450',
    branches: ['Physics', 'Chemistry', 'Mathematics', 'Reasoning'],
    examPattern: '150 MCQs (multiple correct options)',
    syllabus: 'Class 12 + Early portions of Class 11',
    benefits: [
      'BITS Pilani admission',
      'Top private engineering college',
      'Excellent placements',
      'Good salary packages',
      'Quality education'
    ],
    resources: [
      { name: 'BITS Admission', link: 'https://www.bitsadmission.com', type: 'Official' },
      { name: 'BITSAT Coaching', link: 'https://www.resonance.ac.in', type: 'Coaching' }
    ],
    prepTime: '4-5 months',
    difficulty: 'Medium-Hard'
  },
  {
    id: 19,
    name: 'VITEEE - VIT Engineering Entrance Exam',
    acronym: 'VITEEE',
    category: 'Engineering',
    freqency: 'Annual (April)',
    examFee: '₹1150',
    officialWebsite: 'https://www.vit.ac.in',
    applicationLink: 'https://www.vit.ac.in/admissions',
    duration: '150 minutes',
    totalMarks: '125',
    branches: ['Physics', 'Chemistry', 'Mathematics'],
    examPattern: '125 MCQs',
    syllabus: 'Class 12 + Class 11 portions',
    benefits: [
      'VIT University admission',
      'Quality engineering education',
      'Good placements',
      'Internship opportunities',
      'Industry collaboration'
    ],
    resources: [
      { name: 'VIT Official', link: 'https://www.vit.ac.in', type: 'Official' },
      { name: 'VITEEE Preparation', link: 'https://www.studyadda.com', type: 'Study Material' }
    ],
    prepTime: '3-4 months',
    difficulty: 'Medium'
  },
  {
    id: 20,
    name: 'SAT / ACT - International Standard Tests',
    acronym: 'SAT/ACT',
    category: 'International',
    freqency: 'Multiple times yearly',
    examFee: '$105-165 (SAT) / $55-70 (ACT)',
    officialWebsite: 'https://www.sat.org / https://www.act.org',
    applicationLink: 'https://www.sat.org',
    duration: '180-240 minutes',
    totalMarks: '1600 (SAT) / 36 (ACT)',
    branches: ['Math', 'Evidence-Based Reading', 'Optional Essay'],
    examPattern: 'Computer-adaptive (SAT)',
    syllabus: 'General academic skills',
    benefits: [
      'US & Global University admission',
      'Study abroad opportunities',
      'Merit scholarships',
      'International career options',
      'Top university access'
    ],
    resources: [
      { name: 'SAT Official', link: 'https://www.sat.org', type: 'Official' },
      { name: 'Khan Academy SAT Prep', link: 'https://www.khanacademy.org/test-prep/sat', type: 'Free Prep' },
      { name: 'ACT Official', link: 'https://www.act.org', type: 'Official' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Medium'
  },
  {
    id: 21,
    name: 'CDS - Combined Defence Services',
    acronym: 'CDS',
    category: 'Military/Defence',
    freqency: 'Twice yearly',
    examFee: '₹100',
    officialWebsite: 'https://www.upsconline.nic.in',
    applicationLink: 'https://www.upsconline.nic.in',
    duration: '120 minutes (each paper)',
    totalMarks: '300',
    branches: ['English', 'General Knowledge', 'Mathematics'],
    examPattern: '3 papers - MCQ type',
    syllabus: 'Class 12 standard + General Knowledge',
    benefits: [
      'Officers in Indian Armed Forces',
      'Defence career',
      'Salary ₹56,100 - ₹1,77,500 PA',
      'National service opportunity',
      'Prestigious government job'
    ],
    resources: [
      { name: 'UPSC CDS', link: 'https://www.upsc.gov.in', type: 'Official' },
      { name: 'CDS Preparation', link: 'https://testbook.com/cds', type: 'Mock Tests' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Medium'
  },
  {
    id: 22,
    name: 'Nursing Entrance Exams (AIEE-NURSING)',
    acronym: 'Nursing AIEE',
    category: 'Healthcare',
    freqency: 'Varies by state',
    examFee: '₹500-1000',
    officialWebsite: 'Varies by state nursing board',
    applicationLink: 'State-specific nursing boards',
    duration: '120 minutes',
    totalMarks: '100-200',
    branches: ['Physics', 'Chemistry', 'Biology', 'English'],
    examPattern: 'MCQ-based questions',
    syllabus: 'Class 12 Biology & Chemistry',
    benefits: [
      'Nursing profession career',
      'Healthcare field opportunities',
      'Decent salary ₹20,000-50,000/month',
      'Job security',
      'Social service opportunity'
    ],
    resources: [
      { name: 'State Nursing Boards', link: 'State government websites', type: 'Official' },
      { name: 'Nursing Study Material', link: 'https://www.stuvia.com', type: 'Study Material' }
    ],
    prepTime: '2-3 months',
    difficulty: 'Medium'
  }
];

// Function to get exam by id
export const getExamById = (id) => {
  return entranceExams.find(exam => exam.id === id);
};

// Function to get exams by category
export const getExamsByCategory = (category) => {
  return entranceExams.filter(exam => exam.category === category);
};

// Function to get all categories
export const getAllCategories = () => {
  const categories = new Set();
  entranceExams.forEach(exam => categories.add(exam.category));
  return Array.from(categories).sort();
};

// Function to search exams
export const searchExams = (query) => {
  const lower = query.toLowerCase();
  return entranceExams.filter(exam => 
    exam.name.toLowerCase().includes(lower) || 
    exam.acronym.toLowerCase().includes(lower)
  );
};
