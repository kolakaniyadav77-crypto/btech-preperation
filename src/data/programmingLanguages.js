export const programmingLanguages = [
  {
    id: 'python',
    name: 'Python',
    icon: '🐍',
    color: '#3776AB',
    difficulty: 'Beginner-Friendly',
    description: 'Most popular language for beginners and data science',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables, Data Types & Operators',
          'Control Flow (if-else, loops)',
          'Functions & Scope',
          'Lists, Tuples, Dictionaries',
          'String Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the output of print(2 ** 3)?',
            options: ['6', '8', '9', 'Error'],
            answer: 1,
            explanation: '** is the exponentiation operator. 2**3 = 2*2*2 = 8'
          },
          {
            question: 'Which data type is mutable in Python?',
            options: ['String', 'Tuple', 'List', 'Integer'],
            answer: 2,
            explanation: 'Lists are mutable - their elements can be changed. Strings, tuples, and integers are immutable.'
          },
          {
            question: 'What does the len() function return?',
            options: ['Memory size', 'Number of elements', 'Data type', 'None'],
            answer: 1,
            explanation: 'len() returns the number of elements in a sequence (list, string, tuple, etc.)'
          }
        ],
        problems: [
          'Write a program to check if a number is prime',
          'Reverse a string without using built-in functions',
          'Find all palindromes in a list'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'File I/O & Exception Handling',
          'Object-Oriented Programming (OOP)',
          'Modules & Packages',
          'List Comprehension',
          'Decorators & Generators'
        ],
        mcqs: [
          {
            question: 'What is the output of [x**2 for x in range(3)]?',
            options: ['[0, 1, 4]', '[1, 2, 3]', '[0, 1, 2]', 'Error'],
            answer: 0,
            explanation: 'List comprehension: x ranges from 0,1,2. So x**2 = 0,1,4'
          },
          {
            question: 'Which keyword is used to create a function that returns multiple values one at a time?',
            options: ['return', 'yield', 'next', 'iter'],
            answer: 1,
            explanation: 'yield creates a generator function that returns values one at a time.'
          }
        ],
        problems: [
          'Create a class for a bank account with deposit/withdraw methods',
          'Implement file reading and writing operations',
          'Build a decorator to measure function execution time'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Multithreading & Multiprocessing',
          'Asynchronous Programming (async/await)',
          'Metaclasses & Descriptors',
          'Performance Optimization',
          'Design Patterns'
        ],
        mcqs: [
          {
            question: 'What is GIL in Python?',
            options: ['Global Information List', 'Global Interpreter Lock', 'Global Input Library', 'None'],
            answer: 1,
            explanation: 'GIL is Global Interpreter Lock - prevents true parallel execution of threads in CPython'
          }
        ],
        problems: [
          'Implement a thread-safe cache system',
          'Create an async web scraper',
          'Build a custom metaclass for validation'
        ]
      }
    ],
    resources: {
      documentation: 'https://docs.python.org/3/',
      practiceLinks: [
        { title: 'LeetCode Python', url: 'https://leetcode.com/problemset/all/?topicSlugs=python' },
        { title: 'HackerRank Python', url: 'https://www.hackerrank.com/domains/python' },
        { title: 'Codewars', url: 'https://www.codewars.com/kata/latest?q=python' }
      ]
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: '⚡',
    color: '#F7DF1E',
    difficulty: 'Beginner-Friendly',
    description: 'Essential for web development and modern applications',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables (var, let, const)',
          'Data Types & Type Coercion',
          'Functions & Scope',
          'Arrays & Objects',
          'DOM Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the difference between let and var?',
            options: ['No difference', 'let is function-scoped', 'let is block-scoped', 'None'],
            answer: 2,
            explanation: 'let is block-scoped (within {}) while var is function-scoped. This makes let safer to use.'
          },
          {
            question: 'What is the output of console.log(typeof null)?',
            options: ['null', 'object', 'undefined', 'error'],
            answer: 1,
            explanation: 'typeof null returns "object" - this is actually a bug in JavaScript but is maintained for compatibility.'
          }
        ],
        problems: [
          'Create a calculator with add, subtract, multiply, divide functions',
          'Build a todo list app with DOM manipulation',
          'Implement a simple countdown timer'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Callbacks, Promises & Async/Await',
          'ES6 Features (Arrow functions, Destructuring)',
          'Closures & Scope Chain',
          'Prototypes & Inheritance',
          'Event Handling'
        ],
        mcqs: [
          {
            question: 'What is a closure in JavaScript?',
            options: [
              'A function that returns nothing',
              'A function that has access to outer function variables',
              'A loop that terminates',
              'An error handler'
            ],
            answer: 1,
            explanation: 'A closure is a function that has access to variables from another function scope.'
          }
        ],
        problems: [
          'Create a promise-based delay function',
          'Build a fetch API call to get data from an API',
          'Implement event delegation for a dynamic list'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Modules (CommonJS, ES6 Modules)',
          'Testing (Jest, Mocha)',
          'Performance Optimization',
          'Security Best Practices',
          'Web APIs & Service Workers'
        ],
        mcqs: [
          {
            question: 'What is the event loop in JavaScript?',
            options: [
              'A loop for DOM events',
              'Mechanism for handling async operations',
              'A function loop',
              'Error handling mechanism'
            ],
            answer: 1,
            explanation: 'The event loop processes the call stack, microtask queue, and macrotask queue to handle async operations.'
          }
        ],
        problems: [
          'Build a custom event emitter class',
          'Implement a rate limiter function',
          'Create a web worker for heavy computations'
        ]
      }
    ],
    resources: {
      documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      practiceLinks: [
        { title: 'LeetCode JavaScript', url: 'https://leetcode.com/problemset/all/?topicSlugs=javascript' },
        { title: 'HackerRank JavaScript', url: 'https://www.hackerrank.com/domains/javascript' },
        { title: 'Codewars JavaScript', url: 'https://www.codewars.com/kata/latest?q=javascript' }
      ]
    }
  },
  {
    id: 'java',
    name: 'Java',
    icon: '☕',
    color: '#007396',
    difficulty: 'Intermediate',
    description: 'Enterprise-grade language for large-scale applications',
    topics: [
      {
        level: 'Basics',
        content: [
          'Classes & Objects',
          'Variables & Data Types',
          'Control Flow Statements',
          'Arrays & Collections',
          'String Handling'
        ],
        mcqs: [
          {
            question: 'What is the default value of a boolean variable in Java?',
            options: ['null', 'false', 'true', 'undefined'],
            answer: 1,
            explanation: 'The default value of a boolean is false in Java.'
          }
        ],
        problems: [
          'Create a Student class with getters and setters',
          'Implement a binary search algorithm',
          'Build a simple calculator using methods'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Inheritance & Polymorphism',
          'Exception Handling',
          'Collections Framework',
          'File I/O & Serialization',
          'Multithreading'
        ],
        mcqs: [
          {
            question: 'What is method overloading?',
            options: [
              'Using same method name with different parameters',
              'Using different method names',
              'Overriding parent method',
              'None'
            ],
            answer: 0,
            explanation: 'Method overloading is having multiple methods with same name but different parameters/types.'
          }
        ],
        problems: [
          'Implement an interface for different shapes (Circle, Rectangle)',
          'Create a custom exception for invalid age',
          'Build a thread-safe counter'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Design Patterns (Singleton, Factory, Observer)',
          'Streams API & Functional Programming',
          'Reflection & Annotations',
          'JVM Internals & Performance',
          'Concurrency & Thread Pools'
        ],
        mcqs: [
          {
            question: 'What is a lambda expression in Java?',
            options: [
              'Anonymous function implementation',
              'A loop construct',
              'Exception handling',
              'None'
            ],
            answer: 0,
            explanation: 'Lambda expressions provide a way to write anonymous functions in Java 8+.'
          }
        ],
        problems: [
          'Implement Singleton pattern correctly',
          'Create a stream pipeline for data transformation',
          'Build a thread pool executor'
        ]
      }
    ],
    resources: {
      documentation: 'https://docs.oracle.com/en/java/',
      practiceLinks: [
        { title: 'LeetCode Java', url: 'https://leetcode.com/problemset/all/?topicSlugs=java' },
        { title: 'HackerRank Java', url: 'https://www.hackerrank.com/domains/java' },
        { title: 'GeeksforGeeks Java', url: 'https://www.geeksforgeeks.org/java/' }
      ]
    }
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: '⚙️',
    color: '#00599C',
    difficulty: 'Intermediate-Advanced',
    description: 'High-performance language for system programming and competitive programming',
    topics: [
      {
        level: 'Basics',
        content: [
          'Variables & Data Types',
          'Pointers & References',
          'Arrays & Strings',
          'Functions & Scope',
          'Input/Output Streams'
        ],
        mcqs: [
          {
            question: 'What is the difference between pass by value and pass by reference?',
            options: [
              'No difference',
              'Pass by value copies data, pass by reference uses reference',
              'Pass by reference is slower',
              'None'
            ],
            answer: 1,
            explanation: 'Pass by value copies the data; pass by reference accesses the original variable through a reference.'
          }
        ],
        problems: [
          'Implement a simple calculator',
          'Reverse an array',
          'Find maximum element in an array'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Object-Oriented Programming',
          'Inheritance & Polymorphism',
          'Templates & STL',
          'Exception Handling',
          'Memory Management'
        ],
        mcqs: [
          {
            question: 'What are STL containers?',
            options: [
              'Storage for template classes',
              'Standard Template Library data structures',
              'Conditional statements',
              'None'
            ],
            answer: 1,
            explanation: 'STL containers like vector, map, set, queue are predefined data structures in C++ Standard Template Library.'
          }
        ],
        problems: [
          'Create a bank account class with deposit/withdraw',
          'Implement a vector-based dynamic array',
          'Build a tree traversal algorithm'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Smart Pointers & RAII',
          'Move Semantics & Perfect Forwarding',
          'Concurrency & Multithreading',
          'Advanced Templates & Metaprogramming',
          'Performance Optimization'
        ],
        mcqs: [
          {
            question: 'What is RAII in C++?',
            options: [
              'Random Access Initialization',
              'Resource Acquisition Is Initialization',
              'Rapid Application Interface',
              'None'
            ],
            answer: 1,
            explanation: 'RAII is a programming idiom where resources are acquired and released based on object lifetime.'
          }
        ],
        problems: [
          'Implement unique_ptr and shared_ptr',
          'Create a thread-safe queue',
          'Build a custom memory allocator'
        ]
      }
    ],
    resources: {
      documentation: 'https://cplusplus.com/',
      practiceLinks: [
        { title: 'LeetCode C++', url: 'https://leetcode.com/problemset/all/?topicSlugs=cpp' },
        { title: 'HackerRank C++', url: 'https://www.hackerrank.com/domains/cpp' },
        { title: 'Codeforces', url: 'https://codeforces.com/' }
      ]
    }
  },
  {
    id: 'webdev',
    name: 'Web Development',
    icon: '🌐',
    color: '#FF9900',
    difficulty: 'Beginner-Intermediate',
    description: 'Frontend and Backend web development technologies',
    topics: [
      {
        level: 'Frontend Basics',
        content: [
          'HTML Structure & Semantics',
          'CSS Styling & Layouts (Flexbox, Grid)',
          'JavaScript DOM Manipulation',
          'Responsive Design',
          'Forms & Validation'
        ],
        mcqs: [
          {
            question: 'What does CSS Flexbox do?',
            options: [
              'Creates flexible box layouts',
              'Manages JavaScript functions',
              'Handles server requests',
              'None'
            ],
            answer: 0,
            explanation: 'Flexbox is a CSS layout model for creating flexible, responsive layouts with alignment control.'
          }
        ],
        problems: [
          'Build a responsive navbar',
          'Create a card-based product layout',
          'Implement a dark/light mode toggle'
        ]
      },
      {
        level: 'Frontend Advanced',
        content: [
          'React.js Fundamentals',
          'State Management (Redux)',
          'API Integration & Fetch',
          'Testing React Components',
          'Performance Optimization'
        ],
        mcqs: [
          {
            question: 'What is JSX in React?',
            options: [
              'A JavaScript extension to write HTML-like code',
              'A database language',
              'A server framework',
              'None'
            ],
            answer: 0,
            explanation: 'JSX is a syntax extension that allows writing HTML-like code in JavaScript.'
          }
        ],
        problems: [
          'Build a todo list app with React',
          'Create a weather app using API calls',
          'Implement a multi-page app with routing'
        ]
      },
      {
        level: 'Backend Basics',
        content: [
          'Node.js & Express.js',
          'REST APIs & HTTP Methods',
          'Database Design (SQL/NoSQL)',
          'Authentication & Authorization',
          'Server-Side Rendering'
        ],
        mcqs: [
          {
            question: 'What is Express.js?',
            options: [
              'A frontend framework',
              'A Node.js web application framework',
              'A database tool',
              'None'
            ],
            answer: 1,
            explanation: 'Express.js is a minimal and flexible Node.js web application framework for building APIs and web servers.'
          }
        ],
        problems: [
          'Create a RESTful API for a blog',
          'Build user authentication with JWT',
          'Implement database CRUD operations'
        ]
      }
    ],
    resources: {
      documentation: 'https://developer.mozilla.org/en-US/docs/Learn',
      practiceLinks: [
        { title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
        { title: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
        { title: 'LeetCode Frontend', url: 'https://leetcode.com/discuss/interview-question/frontend' }
      ]
    }
  },
  {
    id: 'sql',
    name: 'SQL & Database',
    icon: '🗄️',
    color: '#336791',
    difficulty: 'Intermediate',
    description: 'Database design, querying, and management',
    topics: [
      {
        level: 'Basics',
        content: [
          'SELECT & WHERE Clauses',
          'JOIN Operations',
          'Aggregate Functions',
          'ORDER BY & GROUP BY',
          'INSERT, UPDATE, DELETE'
        ],
        mcqs: [
          {
            question: 'What is the difference between INNER JOIN and LEFT JOIN?',
            options: [
              'No difference',
              'INNER JOIN returns matched rows, LEFT JOIN includes unmatched from left table',
              'LEFT JOIN is faster',
              'None'
            ],
            answer: 1,
            explanation: 'INNER JOIN returns only rows with matches in both tables; LEFT JOIN includes all rows from left table.'
          }
        ],
        problems: [
          'Write a query to find employees earning above average',
          'Join multiple tables to get customer order details',
          'Group data by department and count employees'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Subqueries & CTEs',
          'Indexes & Performance',
          'Transactions & ACID',
          'Normalization (1NF to 3NF)',
          'Views & Stored Procedures'
        ],
        mcqs: [
          {
            question: 'What is database normalization?',
            options: [
              'Sorting data',
              'Process of organizing data to reduce redundancy',
              'Creating backups',
              'None'
            ],
            answer: 1,
            explanation: 'Normalization is the process of structuring a database to reduce redundancy and improve data integrity.'
          }
        ],
        problems: [
          'Optimize slow queries with indexes',
          'Create a stored procedure for data retrieval',
          'Design a normalized database schema'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Query Optimization',
          'Window Functions',
          'Partitioning & Sharding',
          'Advanced Indexing',
          'NoSQL vs SQL'
        ],
        mcqs: [
          {
            question: 'What are window functions in SQL?',
            options: [
              'Functions in UI windows',
              'Functions that perform calculations on a set of rows',
              'Database backup functions',
              'None'
            ],
            answer: 1,
            explanation: 'Window functions perform calculations across a set of rows related to the current row.'
          }
        ],
        problems: [
          'Use window functions for ranking',
          'Partition data for parallel processing',
          'Optimize complex queries'
        ]
      }
    ],
    resources: {
      documentation: 'https://www.postgresql.org/docs/',
      practiceLinks: [
        { title: 'LeetCode Database', url: 'https://leetcode.com/problemset/all/?topicSlugs=database' },
        { title: 'HackerRank SQL', url: 'https://www.hackerrank.com/domains/sql' },
        { title: 'Mode Analytics SQL', url: 'https://mode.com/sql-tutorial/' }
      ]
    }
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    icon: '🏗️',
    color: '#FF6B6B',
    difficulty: 'Intermediate-Advanced',
    description: 'Core concepts for problem-solving and interviews',
    topics: [
      {
        level: 'Basics',
        content: [
          'Arrays & Linked Lists',
          'Stacks & Queues',
          'Searching & Sorting',
          'Hash Tables',
          'Recursion Basics'
        ],
        mcqs: [
          {
            question: 'What is the time complexity of binary search?',
            options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
            answer: 1,
            explanation: 'Binary search divides the search space in half each time, resulting in O(log n) time complexity.'
          }
        ],
        problems: [
          'Implement merge sort algorithm',
          'Find two numbers that add up to target',
          'Reverse a linked list'
        ]
      },
      {
        level: 'Intermediate',
        content: [
          'Trees & BST',
          'Graphs & Traversals',
          'Dynamic Programming',
          'Greedy Algorithms',
          'Bit Manipulation'
        ],
        mcqs: [
          {
            question: 'What is the difference between BFS and DFS?',
            options: [
              'No difference',
              'BFS uses queue, DFS uses stack',
              'DFS is always faster',
              'None'
            ],
            answer: 1,
            explanation: 'BFS uses a queue and explores level by level; DFS uses a stack and explores depth-first.'
          }
        ],
        problems: [
          'Find maximum path sum in binary tree',
          'Detect cycle in undirected graph',
          'Solve 0/1 knapsack problem'
        ]
      },
      {
        level: 'Advanced',
        content: [
          'Segment Trees & Fenwick Trees',
          'Tries & Suffix Arrays',
          'Network Flow Algorithms',
          'String Matching Algorithms',
          'Game Theory'
        ],
        mcqs: [
          {
            question: 'What is a segment tree used for?',
            options: [
              'Storing segments',
              'Range queries and updates efficiently',
              'Sorting segments',
              'None'
            ],
            answer: 1,
            explanation: 'Segment trees are used to efficiently answer range queries and perform range updates in O(log n).'
          }
        ],
        problems: [
          'Build a segment tree for range sum queries',
          'Implement KMP string matching algorithm',
          'Solve maximum flow problem'
        ]
      }
    ],
    resources: {
      documentation: 'https://www.geeksforgeeks.org/data-structures/',
      practiceLinks: [
        { title: 'LeetCode DSA', url: 'https://leetcode.com/' },
        { title: 'GeeksforGeeks DSA', url: 'https://www.geeksforgeeks.org/' },
        { title: 'InterviewBit', url: 'https://www.interviewbit.com/' }
      ]
    }
  }
];
