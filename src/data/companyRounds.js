import generatePracticeQuestions from "../utils/practiceGenerator";
import { companyCodingProblems } from "./companyCodingProblems";

export const companyRounds = {
  Amazon: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "DSA Practice", link: "https://leetcode.com/" },
        { title: "Amazon Interview Questions", link: "https://leetcode.com/discuss/interview-question?currentPage=1&orderBy=hot&query=amazon" },
        { title: "Two Pointers Guide", link: "https://www.geeksforgeeks.org/two-pointers-technique/" },
        { title: "Sliding Window Tutorial", link: "https://www.geeksforgeeks.org/window-sliding-technique/" }
      ],
      questions: [
        {
          question: "Arrays & Strings",
          answer: "Use techniques like two-pointers, sliding window, and hashing. Master problems like two-sum, container-with-most-water, and string manipulation patterns."
        },
        {
          question: "Sliding Window",
          answer: "Sliding window is used for finding subarrays or substrings. Expand and contract the window based on conditions. Time complexity is O(n) making it efficient."
        },
        {
          question: "Time Complexity",
          answer: "Analyze the number of operations. Common complexities: O(1) constant, O(n) linear, O(n²) quadratic, O(log n) logarithmic, O(n log n) linearithmic. Aim for optimal solutions."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "System Design Basics", link: "https://www.geeksforgeeks.org/system-design-tutorial/" },
        { title: "Amazon System Design", link: "https://www.youtube.com/results?search_query=amazon+system+design+interview" },
        { title: "HashMap Internals", link: "https://www.geeksforgeeks.org/hashing-set-1-introduction/" },
        { title: "OOP Concepts", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" }
      ],
      questions: [
        {
          question: "Design URL Shortener",
          answer: "Use a mapping between short code and long URL. Database to store mappings. Generate short codes using base62 encoding or hash functions. Consider collision handling and TTL."
        },
        {
          question: "Explain HashMap",
          answer: "HashMap uses key-value pairs with hash function for O(1) average lookup. Handles collisions using chaining or open addressing. Load factor determines resizing."
        },
        {
          question: "OOPS concepts",
          answer: "Key concepts: Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (method overriding), Abstraction (hiding complexity). Understand interfaces, abstract classes, and access modifiers."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Amazon Leadership Principles", link: "https://www.amazon.jobs/en/principles" },
        { title: "HR Interview Tips", link: "https://www.geeksforgeeks.org/top-hr-interview-questions-and-answers/" },
        { title: "HR Questions", link: "https://www.interviewbit.com/hr-interview-questions/" }
      ],
      questions: [
        {
          question: "Why Amazon?",
          answer: "Research Amazon's leadership principles, innovation, and customer-centric approach. Mention specific projects or services. Show enthusiasm for growth and learning opportunities."
        },
        {
          question: "Leadership principles",
          answer: "Amazon follows 16 principles like Customer Obsession, Ownership, Invent & Simplify. Be ready with STAR method examples demonstrating these principles in your experience."
        },
        {
          question: "Strengths & weaknesses",
          answer: "For strengths: Be specific with examples. For weaknesses: Choose a real area and show how you're improving. Use STAR method to provide concrete examples of growth."
        }
      ]
    }
  ],

  TCS: [
    {
      round: "Aptitude Test",
      type: "Aptitude",
      resources: [
        { title: "IndiaBix", link: "https://www.indiabix.com/" }
      ],
      questions: [
        {
          question: "Percentages",
          answer: "Percentage = (Part/Whole) × 100. Common problems: profit/loss, discount, interest. Practice ratio and proportion concepts. Use unitary method for efficiency."
        },
        {
          question: "Time & Work",
          answer: "If A completes work in x days, work done per day = 1/x. Combined work = 1/x + 1/y. Solve using LCM method for efficiency. Watch for pipes and cisterns problems."
        },
        {
          question: "Number Series",
          answer: "Identify the pattern: arithmetic (constant difference), geometric (constant ratio), or custom patterns. Look at differences of differences for quadratic sequences."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Core CS", link: "https://www.geeksforgeeks.org/" }
      ],
      questions: [
        {
          question: "OOPS concepts",
          answer: "Master the 4 pillars: Encapsulation, Inheritance, Polymorphism, Abstraction. Understand class vs object, this keyword, super keyword, method overloading/overriding."
        },
        {
          question: "DBMS basics",
          answer: "Know ACID properties, normalization (1NF to 3NF), joins (INNER, LEFT, RIGHT, FULL), indexes, transactions. Difference between SQL and NoSQL databases."
        },
        {
          question: "Difference between C & Java",
          answer: "C is procedural, Java is OOP. Java has automatic memory management (garbage collection), C requires manual management. Java is platform-independent, C is platform-dependent."
        }
      ]
    },
    {
      round: "HR Interview",
      type: "HR",
      resources: [
        { title: "HR Prep", link: "https://www.interviewbit.com/hr-interview-questions/" }
      ],
      questions: [
        {
          question: "Tell me about yourself",
          answer: "Prepare a 2-3 minute elevator pitch. Include: background, education, key experiences, skills, why you're a good fit. End with enthusiasm about the role."
        },
        {
          question: "Why TCS?",
          answer: "Research TCS's scale, innovation, values, and work culture. Mention their reputation, projects, and opportunities for growth. Connect your goals with company's vision."
        },
        {
          question: "Are you willing to relocate?",
          answer: "Be honest. If yes, express flexibility and enthusiasm. If no, be clear about constraints. Many companies value this honesty and may work around it if you're a good fit."
        }
      ]
    }
  ],

  Capgemini: [
    {
      round: "Game-Based Aptitude",
      type: "Aptitude",
      resources: [
        { title: "Capgemini Test Pattern", link: "https://prepinsta.com/capgemini/" }
      ],
      questions: [
        {
          question: "Pseudo Code",
          answer: "Write logic in plain English-like syntax. Define variables, loops, conditions clearly. Show your thought process. Doesn't need to be perfect code syntax."
        },
        {
          question: "Logical Games",
          answer: "Problems involve puzzles, pattern recognition, and logical deduction. Practice sudoku-like puzzles, code-breaking, and sequencing problems. Think systematically."
        },
        {
          question: "Pattern Recognition",
          answer: "Identify patterns in sequences: numbers, letters, shapes. Look for arithmetic/geometric progressions, symmetry, or custom rules. Critical for reasoning tests."
        }
      ]
    }
  ],

  Wipro: [
    {
      round: "Written Test",
      type: "Aptitude + Coding",
      resources: [
        { title: "Wipro Prep", link: "https://prepinsta.com/wipro/" }
      ],
      questions: [
        {
          question: "Basic Coding",
          answer: "Write simple programs in C/C++/Java: loops, arrays, functions, recursion. Focus on logic over syntax. Time management is crucial in tests."
        },
        {
          question: "Aptitude",
          answer: "Cover quantitative aptitude: ratios, percentages, time/work, numbers. Logical reasoning: analogies, series, classification, coding-decoding puzzles."
        },
        {
          question: "Essay Writing",
          answer: "Articulate thoughts clearly within word limit. Structure: introduction, body, conclusion. Practice common topics: technology, education, ethics. Proofread for errors."
        }
      ]
    }
  ],

  Accenture: [
    {
      round: "Cognitive Assessment",
      type: "Aptitude",
      resources: [
        { title: "Accenture Pattern", link: "https://prepinsta.com/accenture/" }
      ],
      questions: [
        {
          question: "Critical Reasoning",
          answer: "Analyze arguments, identify assumptions, evaluate conclusions. Read passages carefully, distinguish facts from opinions. Practice with various argument types and fallacies."
        },
        {
          question: "Abstract Reasoning",
          answer: "Visual pattern recognition with shapes and colors. Look for transformations, rotations, progressions. Practice matrix reasoning and spatial visualization problems."
        }
      ]
    }
  ],

  Cognizant: [
    {
      round: "Technical + HR",
      type: "Mixed",
      resources: [
        { title: "CTS Prep", link: "https://prepinsta.com/cognizant/" }
      ],
      questions: [
        {
          question: "SQL Queries",
          answer: "Master SELECT, WHERE, JOIN, GROUP BY, ORDER BY, aggregate functions. Practice subqueries, views, stored procedures. Common operations: filtering, sorting, aggregation."
        },
        {
          question: "OOPS",
          answer: "Understand classes, objects, inheritance, polymorphism. Know this/super keywords, constructors, access modifiers. Design patterns: Singleton, Factory, Observer, MVC."
        },
        {
          question: "HR questions",
          answer: "Prepare for behavioral questions using STAR method (Situation, Task, Action, Result). Practice discussing conflicts, failures, achievements, and teamwork scenarios."
        }
      ]
    }
  ],

  Microsoft: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "LeetCode DSA", link: "https://leetcode.com/" },
        { title: "Microsoft Interview Prep", link: "https://www.interviewbit.com/courses/programming/" }
      ],
      questions: [
        {
          question: "Binary Trees & Graphs",
          answer: "Study tree traversals (inorder, preorder, postorder), graph algorithms (BFS, DFS), shortest path. Practice problems like LCA, path sum, connected components."
        },
        {
          question: "Dynamic Programming",
          answer: "Learn overlapping subproblems and optimal substructure. Master classics: Fibonacci, knapsack, coin change, longest increasing subsequence. Memoization vs tabulation."
        },
        {
          question: "System Design Basics",
          answer: "Understand scalability, load balancing, caching, databases. Design systems like cache, rate limiter, URL shortener. Know when to use SQL vs NoSQL."
        }
      ]
    },
    {
      round: "Technical Interview Round 1",
      type: "Technical",
      resources: [
        { title: "System Design", link: "https://www.youtube.com/watch?v=fskaRKwXWHs" }
      ],
      questions: [
        {
          question: "Design a Cache System",
          answer: "Implement LRU cache with O(1) operations. Use HashMap + Doubly Linked List. Handle capacity limits, eviction policies. Consider thread safety and distributed caching."
        },
        {
          question: "Tree Reconstruction",
          answer: "Given inorder and preorder/postorder, reconstruct binary tree. Use recursion with proper indexing. Handle edge cases like duplicate values and single node trees."
        },
        {
          question: "Bit Manipulation",
          answer: "Master operations: AND, OR, XOR, bit shifting. Solve problems like single number, power of 2, hamming distance. Understand bit masking for subsets."
        }
      ]
    },
    {
      round: "Technical Interview Round 2",
      type: "Technical",
      resources: [
        { title: "Microsoft Coding Patterns", link: "https://www.interviewbit.com/problems/" }
      ],
      questions: [
        {
          question: "String Algorithms",
          answer: "Master string matching (KMP, Z-algorithm), palindromes, anagrams. Understand rolling hash for pattern matching. Solve problems with substring manipulation."
        },
        {
          question: "Recursion & Backtracking",
          answer: "Solve N-Queens, Sudoku, permutations, combinations. Master backtracking with pruning. Understand time complexity O(N!) problems and optimizations."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "HR Interview Guide", link: "https://www.interviewbit.com/hr-interview-questions/" }
      ],
      questions: [
        {
          question: "Why Microsoft?",
          answer: "Research company values, recent innovations, products. Connect your skills with their technology stack. Show knowledge of their business and culture fit."
        },
        {
          question: "Conflict Resolution",
          answer: "Use STAR method. Describe situation, task, specific actions taken, and results. Show how you handle disagreements constructively and learn from feedback."
        }
      ]
    }
  ],

  Google: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Google Interview Prep", link: "https://www.youtube.com/watch?v=4UWDyJq8jZg" }
      ],
      questions: [
        {
          question: "Arrays and Strings",
          answer: "Master two-pointer technique, sliding window, matrix manipulation. Solve problems like next permutation, rotate matrix, longest substring without repeating."
        },
        {
          question: "Hash Tables",
          answer: "Understand hash function design, collision resolution. Solve problems using HashMap/HashSet. Implement custom hash functions for complex objects."
        },
        {
          question: "Recursion",
          answer: "Master recursive thinking for complex problems. Understand base cases, recursive relations. Solve partition, combinations, and subset problems."
        }
      ]
    },
    {
      round: "Technical Interview Round 1",
      type: "Technical",
      resources: [
        { title: "Google Tech Dev Guide", link: "https://techdevguide.withgoogle.com/" }
      ],
      questions: [
        {
          question: "Graph Algorithms",
          answer: "Master BFS, DFS, topological sort, strongly connected components. Implement Dijkstra's and Floyd-Warshall. Solve problems on connectivity and shortest paths."
        },
        {
          question: "Heaps and Priority Queues",
          answer: "Understand min-heap and max-heap implementation. Solve problems like K largest, merge K sorted lists, median of stream. Know heap sort complexity."
        },
        {
          question: "Design Pattern",
          answer: "Discuss design patterns like Observer, Factory, Singleton. Explain when to use each pattern. Implement a simple design pattern in your chosen language."
        }
      ]
    },
    {
      round: "Technical Interview Round 2",
      type: "Technical",
      resources: [
        { title: "Google Problem Solving", link: "https://leetcode.com/discuss/general-discussion/" }
      ],
      questions: [
        {
          question: "System Design Fundamentals",
          answer: "Design Google Search, YouTube recommender. Discuss databases, caching layers, load balancing. Consider scalability for billions of users and data."
        }
      ]
    },
    {
      round: "Behavioral + HR",
      type: "HR",
      resources: [
        { title: "Google Culture", link: "https://www.google.com/careers/teams-and-culture/" }
      ],
      questions: [
        {
          question: "Tell us about yourself",
          answer: "Prepare concise 2-minute summary. Highlight relevant projects, skills, and why you're interested in Google. Connect past experiences with the role."
        },
        {
          question: "Handling Ambiguity",
          answer: "Describe how you approach undefined problems. Show examples where you asked clarifying questions, broke down problems, and delivered results."
        }
      ]
    }
  ],

  Infosys: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Infosys Test Prep", link: "https://prepinsta.com/infosys/" }
      ],
      questions: [
        {
          question: "Aptitude & Logic",
          answer: "Practice quantitative reasoning: percentages, ratios, averages, time-distance, profit-loss. Master logical reasoning: puzzles, series, analogies. Time management is key."
        },
        {
          question: "English Test",
          answer: "Prepare for reading comprehension, vocabulary, grammar, sentence rearrangement. Practice writing coherent sentences and understanding complex passages."
        },
        {
          question: "Technical Basics",
          answer: "Review fundamental programming concepts, basic data structures, simple algorithms. Know time/space complexity basics, object-oriented programming fundamentals."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Coding Problems", link: "https://www.geeksforgeeks.org/must-do-coding-questions-company-wise/" }
      ],
      questions: [
        {
          question: "Sorting and Searching",
          answer: "Master quick sort, merge sort, binary search, linear search. Understand time complexities and when to use each. Practice implementing from scratch."
        },
        {
          question: "Linked Lists",
          answer: "Master insertion, deletion, reversal, cycle detection. Solve problems like merge sorted lists, remove Nth node. Know singly and doubly linked lists."
        },
        {
          question: "Database Basics",
          answer: "Understand normalization, keys, relationships. Write basic SQL queries. Know difference between relational and NoSQL databases."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Infosys HR Tips", link: "https://www.youtube.com/watch?v=a7LqZ8" }
      ],
      questions: [
        {
          question: "Why Infosys?",
          answer: "Research Infosys' business areas, global presence, technology focus. Show interest in their consulting services and client base. Discuss growth opportunities."
        },
        {
          question: "Team Experience",
          answer: "Describe past teamwork, your role, challenges faced, and outcomes. Show collaboration skills, ability to handle diverse teams, and communication abilities."
        }
      ]
    }
  ],

  "Tech Mahindra": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "TechM Test Prep", link: "https://prepinsta.com/tech-mahindra/" }
      ],
      questions: [
        {
          question: "Core Java Concepts",
          answer: "Master object-oriented principles, exception handling, collections framework. Understand thread handling, synchronization. Know String, StringBuilder differences."
        },
        {
          question: "Problem Solving",
          answer: "Practice logical reasoning and algorithm-based problems. Solve array, string, and simple tree problems. Focus on code efficiency and correctness."
        },
        {
          question: "Web Development Basics",
          answer: "Know HTML, CSS, JavaScript basics. Understand DOM manipulation, event handling. Know difference between frontend and backend technologies."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "TechM Coding", link: "https://www.geeksforgeeks.org/" }
      ],
      questions: [
        {
          question: "Database Management",
          answer: "Master SQL queries, relationships, transactions. Understand ACID properties, normalization levels. Practice JOIN operations and aggregate functions."
        },
        {
          question: "API Design",
          answer: "Understand REST principles, HTTP methods, status codes. Design RESTful APIs, handle errors gracefully. Know authentication and security basics."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "TechM Culture", link: "https://www.techmahindra.com/" }
      ],
      questions: [
        {
          question: "Handling Pressure",
          answer: "Describe situation where you faced deadline pressure. Explain how you prioritized, managed time, and delivered results. Show stress management techniques."
        }
      ]
    }
  ],

  IBM: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "IBM Test Prep", link: "https://prepinsta.com/ibm/" }
      ],
      questions: [
        {
          question: "Programming Fundamentals",
          answer: "Master functions, loops, conditionals, basic data structures. Understand scoping, memory management in C/C++/Java. Practice implementing algorithms."
        },
        {
          question: "Cloud Computing Basics",
          answer: "Understand cloud services models: SaaS, PaaS, IaaS. Know IBM Cloud services. Understand virtualization and containerization concepts."
        },
        {
          question: "Networks Fundamentals",
          answer: "Know OSI model layers, TCP/IP, DNS, HTTP/HTTPS. Understand IP addressing, routing basics. Know port numbers for common services."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "IBM Coding", link: "https://www.hackerrank.com/" }
      ],
      questions: [
        {
          question: "Enterprise Systems",
          answer: "Understand microservices architecture, message queues. Know about transaction handling in distributed systems. Understand load balancing and failover."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "IBM Values", link: "https://www.ibm.com/employment/" }
      ],
      questions: [
        {
          question: "Innovation Example",
          answer: "Describe a project where you innovated or improved a process. Show how you identified problem, proposed solution, and implemented it successfully."
        }
      ]
    }
  ],

  "HCL Technologies": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "HCL Test Prep", link: "https://prepinsta.com/hcl/" }
      ],
      questions: [
        {
          question: "Programming Basics",
          answer: "Master variables, data types, operators, control structures. Implement functions, understand parameter passing. Practice with simple problems."
        },
        {
          question: "Data Structures Basics",
          answer: "Understand arrays, linked lists, stacks, queues. Know basic operations and their complexities. Master when to use which data structure."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "HCL Coding", link: "https://practice.geeksforgeeks.org/" }
      ],
      questions: [
        {
          question: "Web Technologies",
          answer: "Know HTML, CSS, JavaScript, basic web frameworks. Understand request-response cycle, cookies, sessions. Know AJAX and modern web technologies."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "HCL Culture", link: "https://www.hcltech.com/careers" }
      ],
      questions: [
        {
          question: "Adaptability",
          answer: "Describe how you adapted to new technologies or environments. Show learning agility and flexibility. Discuss rapid skill development experiences."
        }
      ]
    }
  ],

  Deloitte: [
    {
      round: "Online Assessment",
      type: "Technical & Aptitude",
      resources: [
        { title: "Deloitte Test Prep", link: "https://prepinsta.com/deloitte/" }
      ],
      questions: [
        {
          question: "Logical Reasoning",
          answer: "Master syllogism, arrangement, sequencing. Understand coding-decoding, pattern recognition. Practice with visual and verbal reasoning problems."
        },
        {
          question: "Numerical Ability",
          answer: "Master percentages, simple & compound interest, speed/distance/time. Know permutations, combinations, probability basics. Practice time management."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Deloitte Tech", link: "https://www2.deloitte.com/us/en/careers" }
      ],
      questions: [
        {
          question: "Business Analysis",
          answer: "Understand requirements gathering, process documentation. Know how to analyze business problems technically. Understand stakeholder communication."
        }
      ]
    },
    {
      round: "Behavioral Interview",
      type: "HR",
      resources: [
        { title: "Deloitte Values", link: "https://www2.deloitte.com/" }
      ],
      questions: [
        {
          question: "Leadership Example",
          answer: "Describe situation where you led a team or took initiative. Show decision-making, problem-solving, and team management skills. Discuss outcomes."
        }
      ]
    }
  ],

  Oracle: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Oracle Interview Prep", link: "https://www.interviewbit.com/" }
      ],
      questions: [
        {
          question: "Database Concepts",
          answer: "Master SQL basics, complex queries with multiple JOINs. Understand indexing, query optimization. Know ACID properties, transactions, locking mechanisms."
        },
        {
          question: "Java Fundamentals",
          answer: "Master multithreading, synchronization, concurrent collections. Understand garbage collection, memory management. Know Spring framework basics."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Oracle Systems", link: "https://www.oracle.com/careers/" }
      ],
      questions: [
        {
          question: "Architecture Patterns",
          answer: "Discuss MVC, MVP, MVVM patterns. Understand monolithic vs microservices. Know when to apply each pattern based on use case."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Oracle Culture", link: "https://www.oracle.com/" }
      ],
      questions: [
        {
          question: "Long-term Goals",
          answer: "Discuss career progression, skill development goals. Connect to Oracle's role and growth opportunities. Show ambition and commitment to learning."
        }
      ]
    }
  ],

  Cisco: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Cisco Interview Prep", link: "https://www.cisco.com/careers/" }
      ],
      questions: [
        {
          question: "Networking Concepts",
          answer: "Master OSI model, TCP/IP stack, routing protocols. Understand switching, VLANs, IP subnetting. Know common networking tools and troubleshooting."
        },
        {
          question: "Systems Security",
          answer: "Understand encryption, firewalls, intrusion detection. Know authentication protocols, SSL/TLS. Discuss security best practices and common vulnerabilities."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Cisco Technologies", link: "https://www.cisco.com/" }
      ],
      questions: [
        {
          question: "Software Development",
          answer: "Master C/C++/Python for network programming. Understand socket programming, multithreading. Know testing and debugging techniques."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Cisco Values", link: "https://www.cisco.com/c/en/us/about/careers" }
      ],
      questions: [
        {
          question: "Innovation in Networking",
          answer: "Discuss emerging networking technologies like SDN, NFV. Show knowledge of 5G, edge computing. Demonstrate interest in networking innovations."
        }
      ]
    }
  ],

  Adobe: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Adobe Interview Prep", link: "https://www.adobe.com/careers/" }
      ],
      questions: [
        {
          question: "Frontend Technologies",
          answer: "Master HTML5, CSS3, JavaScript ES6+. Understand React, Vue, or Angular frameworks. Know responsive design, accessibility, and performance optimization."
        },
        {
          question: "Graphics Programming",
          answer: "Understand graphics pipeline, shaders, 3D transformations. Know image processing concepts, color spaces. Master WebGL basics if applicable."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Adobe Tech", link: "https://www.adobe.com/" }
      ],
      questions: [
        {
          question: "Performance Optimization",
          answer: "Discuss optimization techniques for images, videos, rendering. Understand caching strategies, compression. Know tools for performance analysis."
        }
      ]
    },
    {
      round: "Creative Round",
      type: "Creative",
      resources: [
        { title: "Adobe Portfolio", link: "https://behance.net/" }
      ],
      questions: [
        {
          question: "Your Creative Project",
          answer: "Discuss a project you created using creative tools. Show your design thinking, problem-solving approach. Demonstrate understanding of user experience."
        }
      ]
    }
  ],

  Salesforce: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Salesforce Interview Prep", link: "https://trailhead.salesforce.com/" }
      ],
      questions: [
        {
          question: "Apex Programming",
          answer: "Master Apex syntax, SOQL, SOSL queries. Understand triggers, batch processing, async operations. Know security best practices in Salesforce."
        },
        {
          question: "Salesforce Architecture",
          answer: "Understand multi-tenant architecture, configuration vs customization. Know metadata API, REST API, SOAP API. Master deployment and change management."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Salesforce Dev", link: "https://developer.salesforce.com/" }
      ],
      questions: [
        {
          question: "CRM Concepts",
          answer: "Understand customer relationship management fundamentals. Know sales cloud, service cloud features. Discuss integration with external systems."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Salesforce Culture", link: "https://www.salesforce.com/careers/" }
      ],
      questions: [
        {
          question: "Customer Success Mindset",
          answer: "Discuss customer-centric approach to problem-solving. Show empathy and commitment to customer success. Share examples of customer-focused work."
        }
      ]
    }
  ],

  SAP: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "SAP Interview Prep", link: "https://www.sap.com/careers" }
      ],
      questions: [
        {
          question: "ABAP Programming",
          answer: "Master ABAP syntax, database operations, forms, reports. Understand screens, dialog programming. Know function modules and RFC communication."
        },
        {
          question: "SAP Systems",
          answer: "Understand SAP ERP modules: MM, SD, FI. Know data flow across modules. Understand tables and data structures in SAP."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "SAP Technology", link: "https://www.sap.com/" }
      ],
      questions: [
        {
          question: "Enterprise Integration",
          answer: "Understand how SAP integrates with other systems. Know middleware like SAP PI/PO. Master API-based integrations and real-time data exchange."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "SAP Values", link: "https://www.sap.com/about/careers" }
      ],
      questions: [
        {
          question: "Enterprise Software Experience",
          answer: "Discuss your experience with large-scale systems. Show understanding of business processes. Demonstrate ability to work with complex solutions."
        }
      ]
    }
  ],

  Intel: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Intel Interview Prep", link: "https://www.intel.com/content/www/us/en/careers/home.html" }
      ],
      questions: [
        {
          question: "Computer Architecture",
          answer: "Master processor design, instruction sets, pipelining. Understand caching hierarchies, memory management. Know performance metrics and optimization."
        },
        {
          question: "C/C++ Performance",
          answer: "Master low-level programming, memory management, optimization techniques. Understand compiler optimizations, profiling tools. Know assembly language basics."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Intel Tech", link: "https://www.intel.com/" }
      ],
      questions: [
        {
          question: "Parallel Computing",
          answer: "Understand threading, OpenMP, MPI. Know GPU programming basics. Master performance measurement and scalability analysis."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Intel Culture", link: "https://www.intel.com/content/www/us/en/careers/home.html" }
      ],
      questions: [
        {
          question: "Innovation in Hardware",
          answer: "Discuss emerging technologies like AI accelerators, quantum computing. Show curiosity about semiconductor innovations and research."
        }
      ]
    }
  ],

  "Goldman Sachs": [
    {
      round: "Online Assessment",
      type: "Technical & Aptitude",
      resources: [
        { title: "GS Interview Prep", link: "https://www.goldmansachs.com/careers/" }
      ],
      questions: [
        {
          question: "Financial Mathematics",
          answer: "Master derivatives pricing, risk management, portfolio optimization. Understand Black-Scholes model, Monte Carlo simulations. Know fixed income concepts."
        },
        {
          question: "Coding for Finance",
          answer: "Master Python, C++ for financial applications. Understand backtesting frameworks, data pipelines. Know quantitative analysis and modeling."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "GS Systems", link: "https://www.goldmansachs.com/" }
      ],
      questions: [
        {
          question: "Trading Systems",
          answer: "Understand algorithmic trading, execution systems. Know market microstructure, order books. Discuss low-latency systems and infrastructure."
        }
      ]
    },
    {
      round: "Behavioral Interview",
      type: "HR",
      resources: [
        { title: "GS Culture", link: "https://www.goldmansachs.com/careers/divisions/sales-trading/" }
      ],
      questions: [
        {
          question: "Risk Management",
          answer: "Discuss your approach to managing risk. Show decision-making under pressure. Describe experience with complex, high-stakes situations."
        }
      ]
    }
  ],

  "Morgan Stanley": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "MS Interview Prep", link: "https://www.morganstanley.com/careers/" }
      ],
      questions: [
        {
          question: "Investment Banking",
          answer: "Understand M&A, valuations (DCF, comps), financing structures. Know financial statement analysis, accounting basics. Master investment banking terminology."
        },
        {
          question: "Programming for Finance",
          answer: "Master Python, SQL for data analysis. Understand data pipelines, real-time systems. Know machine learning applications in finance."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "MS Technology", link: "https://www.morganstanley.com/" }
      ],
      questions: [
        {
          question: "Enterprise Systems",
          answer: "Understand trading platforms, settlement systems. Know market data infrastructure. Discuss high-frequency trading systems and ultra-low latency."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "MS Culture", link: "https://www.morganstanley.com/careers" }
      ],
      questions: [
        {
          question: "Market Intelligence",
          answer: "Show awareness of current financial markets and trends. Discuss economic factors, geopolitical impacts. Demonstrate proactive learning."
        }
      ]
    }
  ],

  "JPMorgan Chase": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "JPM Interview Prep", link: "https://www.jpmorganchase.com/careers" }
      ],
      questions: [
        {
          question: "Blockchain & FinTech",
          answer: "Understand blockchain technology, cryptocurrency, smart contracts. Know JPM Coin, digital currencies. Discuss blockchain applications in banking."
        },
        {
          question: "Java Programming",
          answer: "Master Spring Boot, microservices, RESTful APIs. Understand transaction management, database optimization. Know enterprise patterns."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "JPM Tech", link: "https://www.jpmorganchase.com/" }
      ],
      questions: [
        {
          question: "Risk Analytics",
          answer: "Understand risk modeling, stress testing, VAR calculations. Know regulatory requirements (Basel III). Discuss real-time risk monitoring systems."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "JPM Values", link: "https://www.jpmorganchase.com/careers" }
      ],
      questions: [
        {
          question: "Compliance & Ethics",
          answer: "Discuss ethical responsibilities in financial services. Show understanding of compliance requirements. Share examples of ethical decision-making."
        }
      ]
    }
  ],

  Qualcomm: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Qualcomm Interview Prep", link: "https://www.qualcomm.com/careers" }
      ],
      questions: [
        {
          question: "Wireless Communications",
          answer: "Master 5G/4G technologies, signal processing, modulation. Understand MIMO, beamforming, channel coding. Know spectrum and frequency concepts."
        },
        {
          question: "Mobile System Design",
          answer: "Understand mobile chip architecture, power efficiency. Know real-time OS, embedded systems. Discuss thermal management and performance tuning."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Qualcomm Tech", link: "https://www.qualcomm.com/" }
      ],
      questions: [
        {
          question: "Signal Processing",
          answer: "Master DSP algorithms, FFT, filtering. Understand communication systems. Know implementation on hardware accelerators."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Qualcomm Culture", link: "https://www.qualcomm.com/careers" }
      ],
      questions: [
        {
          question: "Innovation in 5G",
          answer: "Discuss 5G use cases, IoT integration, network slicing. Show knowledge of emerging technologies. Demonstrate technical depth in mobile."
        }
      ]
    }
  ],

  Facebook: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Facebook Interview Prep", link: "https://www.metacareers.com/" }
      ],
      questions: [
        {
          question: "Social Graph Algorithms",
          answer: "Master graph algorithms for social networks, recommendation systems. Understand ranking algorithms, personalization. Know distributed graph processing."
        },
        {
          question: "Large-Scale Systems",
          answer: "Understand distributed systems, eventual consistency. Know NoSQL databases, caching layers. Discuss handling billions of users."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Meta Tech", link: "https://www.meta.com/" }
      ],
      questions: [
        {
          question: "Machine Learning @ Scale",
          answer: "Discuss recommendation algorithms at scale. Know feature engineering, model serving. Understand A/B testing and online learning systems."
        }
      ]
    },
    {
      round: "Values + Behavioral",
      type: "HR",
      resources: [
        { title: "Meta Values", link: "https://www.metacareers.com/life-at-meta/" }
      ],
      questions: [
        {
          question: "Impact Focused",
          answer: "Show how your work impacts billions. Discuss meaningful projects. Demonstrate understanding of Meta's mission and social impact."
        }
      ]
    }
  ],

  Apple: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Apple Interview Prep", link: "https://www.apple.com/careers/" }
      ],
      questions: [
        {
          question: "iOS/macOS Development",
          answer: "Master Swift, Objective-C, UIKit/SwiftUI. Understand memory management, concurrency. Know performance optimization for Apple devices."
        },
        {
          question: "Hardware-Software Integration",
          answer: "Understand how software optimizes for hardware capabilities. Know GPU/CPU scheduling. Discuss power efficiency and thermal design."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Apple Tech", link: "https://www.apple.com/" }
      ],
      questions: [
        {
          question: "Security & Privacy",
          answer: "Understand end-to-end encryption, secure enclave. Know privacy-first design principles. Discuss iOS security architecture."
        }
      ]
    },
    {
      round: "Cultural Fit",
      type: "HR",
      resources: [
        { title: "Apple Culture", link: "https://www.apple.com/careers/us/" }
      ],
      questions: [
        {
          question: "Attention to Detail",
          answer: "Show how you maintain high quality standards. Discuss perfectionism in your work. Share examples of meticulous problem-solving."
        }
      ]
    }
  ],

  NVIDIA: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "NVIDIA Interview Prep", link: "https://www.nvidia.com/en-us/about-nvidia/careers/" }
      ],
      questions: [
        {
          question: "CUDA Programming",
          answer: "Master CUDA kernel programming, memory hierarchies, synchronization. Understand warp scheduling, occupancy optimization. Know performance profiling."
        },
        {
          question: "GPU Architecture",
          answer: "Understand streaming multiprocessors, memory coalescing, bandwidth. Know data parallelism, compute capabilities. Discuss performance optimization."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "NVIDIA Tech", link: "https://www.nvidia.com/" }
      ],
      questions: [
        {
          question: "AI/ML Acceleration",
          answer: "Understand tensor operations, deep learning frameworks on GPU. Know optimization for inference and training. Discuss NVIDIA platforms like RAPIDS."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "NVIDIA Culture", link: "https://www.nvidia.com/en-us/about-nvidia/careers/" }
      ],
      questions: [
        {
          question: "Parallel Computing Future",
          answer: "Discuss GPU computing trends, AI acceleration, autonomous systems. Show vision for parallel computing's future. Demonstrate passion for innovation."
        }
      ]
    }
  ],

  AMD: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "AMD Interview Prep", link: "https://www.amd.com/en/careers.html" }
      ],
      questions: [
        {
          question: "Processor Design",
          answer: "Master Zen architecture, instruction-level parallelism, branch prediction. Understand power efficiency in chip design. Know performance metrics."
        },
        {
          question: "System Performance",
          answer: "Understand CPU-GPU collaboration, data movement optimization. Know memory hierarchies, cache optimization. Discuss performance tuning."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "AMD Tech", link: "https://www.amd.com/" }
      ],
      questions: [
        {
          question: "Competitive Architecture",
          answer: "Understand competitive analysis in processor design. Know x86 and ARM architectures. Discuss performance vs power tradeoffs in modern CPUs."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "AMD Culture", link: "https://www.amd.com/en/careers.html" }
      ],
      questions: [
        {
          question: "Competition & Excellence",
          answer: "Show drive to win and excel. Discuss how you handle competition. Demonstrate continuous improvement mindset."
        }
      ]
    }
  ],

  Twitter: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Twitter Interview Prep", link: "https://twitter.com/careers" }
      ],
      questions: [
        {
          question: "Real-time Systems",
          answer: "Master message queues, event streaming, distributed timers. Understand Kafka, stream processing. Know handling billions of events at scale."
        },
        {
          question: "Feed Algorithms",
          answer: "Understand ranking algorithms for feeds, personalization. Know how to handle network graphs efficiently. Master recommendation at scale."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Twitter Tech", link: "https://twitter.com/" }
      ],
      questions: [
        {
          question: "Scalability Challenges",
          answer: "Discuss handling Twitter-scale data. Know database sharding strategies. Understand cache invalidation and consistency models."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Twitter Culture", link: "https://twitter.com/careers" }
      ],
      questions: [
        {
          question: "Open Communication",
          answer: "Show how you communicate openly and transparently. Discuss handling criticism and feedback. Demonstrate collaborative problem-solving."
        }
      ]
    }
  ],

  LinkedIn: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "LinkedIn Interview Prep", link: "https://www.linkedin.com/careers" }
      ],
      questions: [
        {
          question: "Professional Graph Algorithms",
          answer: "Master algorithms for professional networks, connections. Understand job recommendation systems. Know skills matching algorithms."
        },
        {
          question: "Data-Driven Products",
          answer: "Understand A/B testing, analytics, insights. Know how to measure product impact. Discuss data pipelines for professional insights."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "LinkedIn Tech", link: "https://engineering.linkedin.com/" }
      ],
      questions: [
        {
          question: "Career Development Platform",
          answer: "Discuss how platforms support professional growth. Know learning recommendations. Understand skill development tracking."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "LinkedIn Culture", link: "https://www.linkedin.com/careers" }
      ],
      questions: [
        {
          question: "Professional Growth",
          answer: "Show commitment to professional development. Discuss learning mindset. Share examples of career growth and skill development."
        }
      ]
    }
  ],

  Flipkart: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Flipkart Interview Prep", link: "https://www.flipkart.careers/" }
      ],
      questions: [
        {
          question: "E-commerce Scale",
          answer: "Understand inventory management at scale, order processing, payment systems. Know handling peak loads during sales. Master distributed transactions."
        },
        {
          question: "Search & Discovery",
          answer: "Master product search, filtering, ranking. Understand relevance algorithms. Know faceted search and personalized recommendations."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Flipkart Tech", link: "https://www.flipkart.careers/" }
      ],
      questions: [
        {
          question: "Mobile-First Optimization",
          answer: "Understand optimizing for mobile devices, bandwidth constraints. Know progressive loading strategies. Discuss performance on 2G networks."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Flipkart Culture", link: "https://www.flipkart.careers/" }
      ],
      questions: [
        {
          question: "Customer Obsession",
          answer: "Show deep focus on customer needs and satisfaction. Discuss how you prioritize customer success. Share examples of customer-centric solutions."
        }
      ]
    }
  ],

  Uber: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Uber Interview Prep", link: "https://www.uber.com/en-IN/careers/" }
      ],
      questions: [
        {
          question: "Location-Based Services",
          answer: "Master geohashing, spatial indexing, nearest neighbor queries. Understand real-time location tracking. Know route optimization algorithms."
        },
        {
          question: "Ride Matching",
          answer: "Understand matching algorithms between drivers and riders. Know surge pricing algorithms. Master real-time optimization at scale."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Uber Tech", link: "https://www.uber.com/" }
      ],
      questions: [
        {
          question: "Real-time Decision Making",
          answer: "Discuss systems making decisions for millions of rides. Understand latency requirements, consistency tradeoffs. Know handling network issues gracefully."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Uber Culture", link: "https://www.uber.com/en-IN/careers/" }
      ],
      questions: [
        {
          question: "Thriving in Ambiguity",
          answer: "Show comfort working in uncertain environments. Discuss handling fast-changing requirements. Share examples of adapting quickly to changes."
        }
      ]
    }
  ],

  Snapchat: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Snap Interview Prep", link: "https://www.snap.com/en-US/careers/" }
      ],
      questions: [
        {
          question: "Ephemeral Content Systems",
          answer: "Understand building systems for temporary content. Master deletion at scale, privacy guarantees. Know messaging security, end-to-end encryption."
        },
        {
          question: "Computer Vision",
          answer: "Master image processing, face recognition, AR filters. Understand real-time processing on mobile. Know ML-based content analysis."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Snap Tech", link: "https://www.snap.com/" }
      ],
      questions: [
        {
          question: "AR Innovation",
          answer: "Understand augmented reality capabilities, AR lenses, creative tools. Know how Snap innovates in AR space. Discuss AR platform architecture."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Snap Culture", link: "https://www.snap.com/en-US/careers/" }
      ],
      questions: [
        {
          question: "Creative Expression",
          answer: "Show passion for creativity and self-expression. Discuss how technology enables creativity. Share examples of supporting user expression."
        }
      ]
    }
  ],

  Citrix: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Citrix Interview Prep", link: "https://www.citrix.com/careers/" }
      ],
      questions: [
        {
          question: "Virtualization Technology",
          answer: "Master virtual machine concepts, hypervisors, containerization. Understand resource allocation, scheduling. Know performance optimization."
        },
        {
          question: "Remote Computing",
          answer: "Understand remote desktop protocols, compression, latency optimization. Know multi-user systems, session management. Master bandwidth optimization."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Citrix Tech", link: "https://www.citrix.com/" }
      ],
      questions: [
        {
          question: "Enterprise Infrastructure",
          answer: "Discuss managing enterprise workloads, security, compliance. Understand hybrid cloud solutions. Know integrations with major cloud providers."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Citrix Culture", link: "https://www.citrix.com/careers/" }
      ],
      questions: [
        {
          question: "Enterprise Focus",
          answer: "Show understanding of enterprise needs and complexity. Discuss supporting global organizations. Share experience with large-scale systems."
        }
      ]
    }
  ],

  VMware: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "VMware Interview Prep", link: "https://careers.vmware.com/" }
      ],
      questions: [
        {
          question: "Cloud Infrastructure",
          answer: "Master cloud computing, multi-cloud strategies, Kubernetes. Understand container orchestration, service mesh. Know cloud-native architecture."
        },
        {
          question: "Virtualization Core",
          answer: "Understand vSphere, ESXi, hypervisors. Master resource management, clustering, high availability. Know vMotion and live migration."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "VMware Tech", link: "https://www.vmware.com/" }
      ],
      questions: [
        {
          question: "DevOps & Automation",
          answer: "Discuss infrastructure automation, IaC, deployment pipelines. Know Ansible, Terraform. Understand continuous integration and deployment."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "VMware Culture", link: "https://careers.vmware.com/" }
      ],
      questions: [
        {
          question: "Infrastructure Innovation",
          answer: "Show passion for cloud and infrastructure innovation. Discuss how technology transforms IT. Demonstrate forward-thinking approach to systems."
        }
      ]
    }
  ],

  Nielsen: [
    {
      round: "Online Assessment",
      type: "Technical & Analytical",
      resources: [
        { title: "Nielsen Interview Prep", link: "https://www.nielsen.com/careers/" }
      ],
      questions: [
        {
          question: "Data Analysis",
          answer: "Master statistical analysis, hypothesis testing, A/B testing. Understand data visualization, storytelling with data. Know business metrics."
        },
        {
          question: "Big Data Processing",
          answer: "Master Hadoop, Spark, distributed computing. Understand data pipelines, ETL processes. Know handling petabyte-scale data."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Nielsen Analytics", link: "https://www.nielsen.com/" }
      ],
      questions: [
        {
          question: "Audience Insights",
          answer: "Understand media measurement, audience analytics. Know how Nielsen gathers and analyzes viewing data. Discuss data-driven insights for media."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Nielsen Culture", link: "https://www.nielsen.com/careers/" }
      ],
      questions: [
        {
          question: "Data-Driven Decision Making",
          answer: "Show commitment to data-driven insights. Discuss how you use data to solve problems. Share examples of analytics influencing decisions."
        }
      ]
    }
  ],

  "Exl Analytics": [
    {
      round: "Online Assessment",
      type: "Technical & Analytical",
      resources: [
        { title: "ExlService Interview Prep", link: "https://www.exlservice.com/careers" }
      ],
      questions: [
        {
          question: "Advanced Analytics",
          answer: "Master predictive modeling, machine learning, optimization. Understand statistical techniques, data mining. Know business applications of analytics."
        },
        {
          question: "Business Process",
          answer: "Understand process optimization, six sigma, lean methodologies. Know how to analyze and improve business operations. Master performance metrics."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "ExlService Tech", link: "https://www.exlservice.com/" }
      ],
      questions: [
        {
          question: "Client Consulting",
          answer: "Discuss advising clients on analytics strategy. Know how to translate business problems to technical solutions. Understand client engagement."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "ExlService Culture", link: "https://www.exlservice.com/careers" }
      ],
      questions: [
        {
          question: "Problem Solving",
          answer: "Show structured approach to complex problems. Discuss analytical thinking. Share examples of driving business value through analysis."
        }
      ]
    }
  ],

  "ZS Associates": [
    {
      round: "Online Assessment",
      type: "Technical & Analytical",
      resources: [
        { title: "ZS Interview Prep", link: "https://www.zs.com/careers" }
      ],
      questions: [
        {
          question: "Consulting Skills",
          answer: "Master problem structuring, analytical frameworks, hypothesis-driven approach. Understand stakeholder management, presentation skills. Know business strategy."
        },
        {
          question: "Advanced Analytics for Business",
          answer: "Master analytics applied to business strategy, marketing, sales optimization. Understand ROI calculations, pricing strategies. Know competitive analysis."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "ZS Tech", link: "https://www.zs.com/" }
      ],
      questions: [
        {
          question: "Data-Driven Transformation",
          answer: "Discuss helping organizations transform with data. Know change management, implementation strategies. Understand driving adoption of analytics."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "ZS Culture", link: "https://www.zs.com/careers" }
      ],
      questions: [
        {
          question: "Business Impact Mindset",
          answer: "Show commitment to creating business impact. Discuss how you measure success by business outcomes. Share examples of value creation."
        }
      ]
    }
  ],

  McKinsey: [
    {
      round: "Online Assessment",
      type: "Problem Solving & Analytical",
      resources: [
        { title: "McKinsey Interview Prep", link: "https://www.mckinsey.com/careers" }
      ],
      questions: [
        {
          question: "Case Interview",
          answer: "Master frameworks for market sizing, business strategy, operations. Understand structuring complex problems. Know when to estimate vs calculate."
        },
        {
          question: "Quantitative Analysis",
          answer: "Master financial analysis, ROI calculations, sensitivity analysis. Understand probability and statistics. Know how to work with uncertain data."
        }
      ]
    },
    {
      round: "Technical Round",
      type: "Technical",
      resources: [
        { title: "McKinsey Tech", link: "https://www.mckinsey.com/" }
      ],
      questions: [
        {
          question: "Digital Strategy",
          answer: "Understand digital transformation, technology strategy, innovation roadmaps. Know emerging technologies impact on business. Discuss tech-enabled solutions."
        }
      ]
    },
    {
      round: "Behavioral Interview",
      type: "HR",
      resources: [
        { title: "McKinsey Culture", link: "https://www.mckinsey.com/careers" }
      ],
      questions: [
        {
          question: "Leadership Potential",
          answer: "Show leadership qualities, decision-making, influence without authority. Discuss team collaboration, mentoring. Share examples of driving change."
        }
      ]
    }
  ],

  "Bain & Company": [
    {
      round: "Online Assessment",
      type: "Problem Solving",
      resources: [
        { title: "Bain Interview Prep", link: "https://www.bain.com/careers/" }
      ],
      questions: [
        {
          question: "Strategic Thinking",
          answer: "Master competitive strategy, business models, market analysis. Understand value creation frameworks. Know financial and operational metrics."
        },
        {
          question: "Case Analysis",
          answer: "Practice structuring cases, hypothesis-driven analysis, data-driven recommendations. Understand client perspective, implementation feasibility."
        }
      ]
    },
    {
      round: "Technical Round",
      type: "Technical",
      resources: [
        { title: "Bain Tech", link: "https://www.bain.com/" }
      ],
      questions: [
        {
          question: "Business Transformation",
          answer: "Discuss helping organizations transform operations and strategy. Know technology enablement of business change. Understand implementation challenges."
        }
      ]
    },
    {
      round: "Values & Fit",
      type: "HR",
      resources: [
        { title: "Bain Culture", link: "https://www.bain.com/careers/" }
      ],
      questions: [
        {
          question: "Client Service Orientation",
          answer: "Show dedication to client success and satisfaction. Discuss collaborative problem-solving. Share examples of going extra mile for clients."
        }
      ]
    }
  ],

  "Boston Consulting Group": [
    {
      round: "Online Assessment",
      type: "Problem Solving & Fit",
      resources: [
        { title: "BCG Interview Prep", link: "https://www.bcg.com/careers" }
      ],
      questions: [
        {
          question: "Consulting Framework",
          answer: "Master frameworks for strategy, operations, marketing. Understand MECE principle, issue trees. Know how to structure ambiguous problems."
        },
        {
          question: "Quantitative Rigor",
          answer: "Master data interpretation, statistical thinking, financial analysis. Understand scenario planning, risk analysis. Know probability concepts."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "BCG Tech", link: "https://www.bcg.com/" }
      ],
      questions: [
        {
          question: "Technology & Business",
          answer: "Understand how technology creates competitive advantage. Know digital business models, innovation strategies. Discuss tech-led transformation."
        }
      ]
    },
    {
      round: "Behavioral Interview",
      type: "HR",
      resources: [
        { title: "BCG Culture", link: "https://www.bcg.com/careers" }
      ],
      questions: [
        {
          question: "Diverse Leadership",
          answer: "Show respect for diverse perspectives and backgrounds. Discuss inclusive teamwork. Share examples of learning from different viewpoints."
        }
      ]
    }
  ],

  Mahindra: [
    {
      round: "Online Assessment",
      type: "Technical & Aptitude",
      resources: [
        { title: "Mahindra Interview Prep", link: "https://www.mahindra.com/careers" }
      ],
      questions: [
        {
          question: "Automotive Technology",
          answer: "Master automotive systems, engine technology, vehicle electronics. Understand electrification, autonomous vehicles. Know industry standards and regulations."
        },
        {
          question: "Manufacturing Excellence",
          answer: "Understand lean manufacturing, quality control, supply chain. Master process optimization, cost reduction. Know Industry 4.0 concepts."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Mahindra Tech", link: "https://www.mahindra.com/" }
      ],
      questions: [
        {
          question: "Sustainability",
          answer: "Discuss sustainable manufacturing practices, green technologies. Understand environmental responsibility. Know ESG impact of vehicles."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Mahindra Culture", link: "https://www.mahindra.com/careers" }
      ],
      questions: [
        {
          question: "Future of Mobility",
          answer: "Show vision for automotive future, electric vehicles, autonomous driving. Discuss industry transformation. Demonstrate passion for transportation innovation."
        }
      ]
    }
  ],

  Bosch: [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Bosch Interview Prep", link: "https://www.bosch.com/careers" }
      ],
      questions: [
        {
          question: "Connected Devices",
          answer: "Master IoT systems, embedded devices, connectivity protocols. Understand edge computing, data from devices. Know 5G and wireless technologies."
        },
        {
          question: "Industrial Solutions",
          answer: "Understand industrial automation, smart manufacturing. Master robotics, control systems. Know Industry 4.0 and digital factories."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Bosch Tech", link: "https://www.bosch.com/" }
      ],
      questions: [
        {
          question: "Reliability & Safety",
          answer: "Discuss mission-critical systems and safety standards. Know reliability engineering, testing practices. Understand zero-defects approach."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Bosch Culture", link: "https://www.bosch.com/careers" }
      ],
      questions: [
        {
          question: "Precision & Quality",
          answer: "Show commitment to precision and quality in all work. Discuss attention to detail, continuous improvement. Share examples of quality mindset."
        }
      ]
    }
  ],

  "Paytm": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Paytm Interview Prep", link: "https://paytm.com/careers" }
      ],
      questions: [
        {
          question: "Fintech & Payments",
          answer: "Master payment systems, UPI integration, wallets. Understand transaction security, fraud detection. Know payment gateways and settlement."
        },
        {
          question: "Scalability @ Millions",
          answer: "Understand handling millions of transactions. Know distributed systems, failure recovery. Master throughput optimization."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Paytm Tech", link: "https://paytm.com/" }
      ],
      questions: [
        {
          question: "Financial Inclusion",
          answer: "Discuss enabling digital payments for everyone. Know low-bandwidth solutions. Understand accessibility in fintech products."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Paytm Culture", link: "https://paytm.com/careers" }
      ],
      questions: [
        {
          question: "Digital India Vision",
          answer: "Show alignment with digital transformation vision. Discuss impact on financial inclusion. Share passion for enabling digital payments."
        }
      ]
    }
  ],

  "Snapdeal": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Snapdeal Interview Prep", link: "https://www.snapdeal.com/careers" }
      ],
      questions: [
        {
          question: "E-commerce Optimization",
          answer: "Master marketplace algorithms, seller management, inventory. Understand fraud prevention, customer trust. Know conversion optimization."
        },
        {
          question: "Data Processing at Scale",
          answer: "Understand big data tools, real-time analytics. Master customer behavior analysis. Know personalization at marketplace scale."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Snapdeal Tech", link: "https://www.snapdeal.com/" }
      ],
      questions: [
        {
          question: "Marketplace Economics",
          answer: "Understand marketplace dynamics, unit economics, sustainability. Know competitive analysis, market positioning. Discuss growth strategies."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Snapdeal Culture", link: "https://www.snapdeal.com/careers" }
      ],
      questions: [
        {
          question: "Startup Mindset",
          answer: "Show entrepreneurial thinking, ownership mentality. Discuss thriving in fast-paced environment. Share examples of innovation and quick execution."
        }
      ]
    }
  ],

  "Ola": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Ola Interview Prep", link: "https://www.olaelectric.com/careers" }
      ],
      questions: [
        {
          question: "Mobility Solutions",
          answer: "Master ride-hailing systems, driver-rider matching. Understand dynamic pricing, surge management. Know optimization algorithms."
        },
        {
          question: "Electric Mobility",
          answer: "Understand EV technology, battery management, charging infrastructure. Know sustainable mobility solutions. Discuss electrification strategy."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Ola Tech", link: "https://www.olaelectric.com/" }
      ],
      questions: [
        {
          question: "Sustainability in Mobility",
          answer: "Discuss environmental impact of transportation. Know carbon footprint reduction. Understand sustainable urban mobility vision."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Ola Culture", link: "https://www.olaelectric.com/careers" }
      ],
      questions: [
        {
          question: "Future of Transport",
          answer: "Show vision for future of mobility and transportation. Discuss EV adoption, sustainable cities. Demonstrate passion for transformation."
        }
      ]
    }
  ],

  "OLX": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "OLX Interview Prep", link: "https://www.olx.in/careers" }
      ],
      questions: [
        {
          question: "Classifieds Platform",
          answer: "Master peer-to-peer marketplace design, seller trust, safety. Understand fraud prevention, moderation. Know recommendation for classifieds."
        },
        {
          question: "Growth at Scale",
          answer: "Master growth strategies, user acquisition, retention. Know marketplace network effects. Discuss scaling in different markets."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "OLX Tech", link: "https://www.olx.in/" }
      ],
      questions: [
        {
          question: "Multi-market Operations",
          answer: "Discuss managing operations across countries and languages. Understand localization, cultural adaptation. Know cross-border coordination."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "OLX Culture", link: "https://www.olx.in/careers" }
      ],
      questions: [
        {
          question: "Emerging Markets Focus",
          answer: "Show understanding of emerging market dynamics. Discuss addressing local needs. Share passion for reaching underserved populations."
        }
      ]
    }
  ],

  "Yahoo": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Yahoo Interview Prep", link: "https://www.verizonmedia.com/careers" }
      ],
      questions: [
        {
          question: "Search Technology",
          answer: "Master search algorithms, indexing, ranking. Understand information retrieval, query processing. Know search performance optimization."
        },
        {
          question: "Ad Tech & Monetization",
          answer: "Understand online advertising, ad auctions, RTB systems. Know conversion tracking, attribution modeling. Master ad serving at scale."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Yahoo Tech", link: "https://www.verizonmedia.com/" }
      ],
      questions: [
        {
          question: "Media & Digital Platform",
          answer: "Discuss managing content platforms, user engagement, media economics. Know ad-driven business models. Understand content personalization."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Yahoo Culture", link: "https://www.verizonmedia.com/careers" }
      ],
      questions: [
        {
          question: "Digital Pioneer Legacy",
          answer: "Show respect for Yahoo's pioneering role in internet. Discuss learning from digital evolution. Share vision for digital future."
        }
      ]
    }
  ],

  "Amazon Pay": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Amazon Interview Prep", link: "https://www.amazon.com/careers" }
      ],
      questions: [
        {
          question: "Payment Systems",
          answer: "Master payment processing, security, compliance. Understand PCI-DSS, tokenization. Know fraud detection and prevention systems."
        },
        {
          question: "Trust & Safety",
          answer: "Understand customer protection, data security, risk management. Know handling sensitive payment data. Discuss security best practices."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Amazon Tech", link: "https://www.amazon.com/" }
      ],
      questions: [
        {
          question: "Financial Services Innovation",
          answer: "Discuss innovating in fintech through Amazon ecosystem. Know checkout optimization, payment experience. Understand cross-service integration."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Amazon Culture", link: "https://www.amazon.com/careers" }
      ],
      questions: [
        {
          question: "Customer-Centric Innovation",
          answer: "Show how you put customers first in payment experience. Discuss simplifying payments. Share examples of reducing friction for customers."
        }
      ]
    }
  ],

  "Siemens": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Siemens Interview Prep", link: "https://www.siemens.com/careers" }
      ],
      questions: [
        {
          question: "Industrial Automation",
          answer: "Master PLCs, SCADA systems, industrial protocols. Understand process control, manufacturing systems. Know factory automation technologies."
        },
        {
          question: "Digital Enterprise",
          answer: "Understand Industry 4.0, digitization, IoT in manufacturing. Master data collection from industrial systems. Know edge-to-cloud solutions."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Siemens Tech", link: "https://www.siemens.com/" }
      ],
      questions: [
        {
          question: "Engineering Excellence",
          answer: "Discuss precision engineering, quality standards, reliability. Know mission-critical system design. Understand compliance and certifications."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Siemens Culture", link: "https://www.siemens.com/careers" }
      ],
      questions: [
        {
          question: "Industry Leadership",
          answer: "Show respect for Siemens' industrial heritage and innovation. Discuss contributing to industry transformation. Share vision for industrial future."
        }
      ]
    }
  ],

  "Ericsson": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Ericsson Interview Prep", link: "https://www.ericsson.com/careers" }
      ],
      questions: [
        {
          question: "Telecom Infrastructure",
          answer: "Master 5G networks, base stations, RAN technology. Understand network architecture, protocols. Know telecom standards and spectrum."
        },
        {
          question: "Network Optimization",
          answer: "Understand load balancing, network traffic management. Master quality of service, latency optimization. Know performance monitoring."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Ericsson Tech", link: "https://www.ericsson.com/" }
      ],
      questions: [
        {
          question: "Next-Gen Connectivity",
          answer: "Discuss 6G research, edge computing, network slicing. Know enabling technologies for connected world. Understand IoT connectivity."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Ericsson Culture", link: "https://www.ericsson.com/careers" }
      ],
      questions: [
        {
          question: "Connecting the World",
          answer: "Show passion for connecting people and devices globally. Discuss impact of connectivity. Share vision for connected future."
        }
      ]
    }
  ],

  "Virtusa": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Virtusa Interview Prep", link: "https://www.virtusa.com/careers" }
      ],
      questions: [
        {
          question: "Digital Transformation",
          answer: "Master transforming legacy systems to modern architectures. Understand cloud migration, modernization strategies. Know digital business models."
        },
        {
          question: "Software Engineering",
          answer: "Master design patterns, SOLID principles, clean code. Understand testing strategies, CI/CD pipelines. Know enterprise development practices."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Virtusa Tech", link: "https://www.virtusa.com/" }
      ],
      questions: [
        {
          question: "Technology Consulting",
          answer: "Discuss advising clients on technology strategy. Know solution architecture for complex problems. Understand client success outcomes."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Virtusa Culture", link: "https://www.virtusa.com/careers" }
      ],
      questions: [
        {
          question: "Client Success",
          answer: "Show commitment to client success and business outcomes. Discuss collaboration and partnership. Share examples of delivering value."
        }
      ]
    }
  ],

  // eslint-disable-next-line no-dupe-keys
  "Qualcomm": [
    {
      round: "Online Assessment",
      type: "Technical",
      resources: [
        { title: "Qualcomm Interview Prep", link: "https://www.qualcomm.com/careers" }
      ],
      questions: [
        {
          question: "Wireless Communications",
          answer: "Master 5G/4G technologies, signal processing, modulation. Understand MIMO, beamforming, channel coding. Know spectrum and frequency concepts."
        },
        {
          question: "Mobile System Design",
          answer: "Understand mobile chip architecture, power efficiency. Know real-time OS, embedded systems. Discuss thermal management and performance tuning."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "Qualcomm Tech", link: "https://www.qualcomm.com/" }
      ],
      questions: [
        {
          question: "Signal Processing",
          answer: "Master DSP algorithms, FFT, filtering. Understand communication systems. Know implementation on hardware accelerators."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "Qualcomm Culture", link: "https://www.qualcomm.com/careers" }
      ],
      questions: [
        {
          question: "Innovation in 5G",
          answer: "Discuss 5G use cases, IoT integration, network slicing. Show knowledge of emerging technologies. Demonstrate technical depth in mobile."
        }
      ]
    }
  ],

  "GlaxoSmithKline": [
    {
      round: "Online Assessment",
      type: "Technical & Scientific",
      resources: [
        { title: "GSK Interview Prep", link: "https://www.gsk.com/careers" }
      ],
      questions: [
        {
          question: "Pharmaceutical Science",
          answer: "Master drug development, clinical trials, regulatory requirements. Understand disease pathways, therapeutic areas. Know pharmaceutical manufacturing."
        },
        {
          question: "Data & Analytics in Healthcare",
          answer: "Understand medical research data, statistical analysis, clinical outcomes. Master data management in regulated environments. Know privacy requirements."
        }
      ]
    },
    {
      round: "Technical Interview",
      type: "Technical",
      resources: [
        { title: "GSK Tech", link: "https://www.gsk.com/" }
      ],
      questions: [
        {
          question: "Healthcare Technology",
          answer: "Discuss digital health solutions, patient monitoring, treatment optimization. Know healthcare IT systems and interoperability. Understand regulatory compliance."
        }
      ]
    },
    {
      round: "HR Round",
      type: "HR",
      resources: [
        { title: "GSK Culture", link: "https://www.gsk.com/careers" }
      ],
      questions: [
        {
          question: "Patient Impact",
          answer: "Show commitment to improving patient health and quality of life. Discuss ethical considerations in healthcare. Share passion for helping people."
        }
      ]
    }
  ]
};

// Add generic rounds/questions for smaller or college-specific companies missing above
const _ensureCompanies = [
  "LTIMindtree",
  "Virtuosa",
  "Mindtree",
  "Softvan",
  "DRDoS Technologies",
  "Nivia Software",
  "Intel",
  "Goldman Sachs",
  "Oracle",
  "Cisco",
  "Adobe",
  "Salesforce",
  "SAP"
];

_ensureCompanies.forEach((name) => {
  if (!companyRounds[name]) {
    const gen = generatePracticeQuestions({ area: 'interview', count: 20, role: 'Software Engineer', company: name });
    companyRounds[name] = [
      {
        round: "Online Assessment",
        type: "Aptitude/Technical",
        resources: [ { title: "DSA Practice", link: "https://leetcode.com/" } ],
        questions: gen.slice(0, 8).map(g => ({ question: g.q, answer: g.ans }))
      },
      {
        round: "Technical Interview",
        type: "Technical",
        resources: [ { title: "Core CS", link: "https://www.geeksforgeeks.org/" } ],
        questions: gen.slice(8, 16).map(g => ({ question: g.q, answer: g.ans }))
      },
      {
        round: "HR Round",
        type: "HR",
        resources: [ { title: "HR Prep", link: "https://www.interviewbit.com/hr-interview-questions/" } ],
        questions: gen.slice(16, 20).map(g => ({ question: g.q, answer: g.ans }))
      }
    ];
  }
});

// automatically append a coding round to every company using the problems file
Object.keys(companyRounds).forEach(name => {
  companyRounds[name].push({
    round: "Coding Round",
    type: "Technical",
    resources: [
      { title: "Practice Problems", link: "#coding-section" }
    ],
    codingProblems: companyCodingProblems[name] || []
  });
});

export default companyRounds;
