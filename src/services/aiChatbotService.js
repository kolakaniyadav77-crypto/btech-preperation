// Mock AI Service - Comprehensive Software Knowledge Base
// This version includes extensive software development information

// Comprehensive knowledge base for software-related topics
const softwareKnowledgeBase = {
  dsa: [
    "Binary Search is an efficient algorithm to search in sorted arrays with O(log n) time complexity. It works by dividing the search space in half with each iteration.",
    "Dynamic Programming solves problems by breaking them into subproblems and storing results to avoid recomputation. Great for optimization problems like fibonacci, knapsack, longest substring.",
    "Hash Tables provide O(1) average time for search, insert, and delete operations using a hash function to map keys to values.",
    "Linked Lists are useful when you need frequent insertions/deletions. They use nodes with data and pointers to traverse. Types: singly, doubly, circular.",
    "Graphs can be represented using adjacency matrix or adjacency list. Use BFS/DFS for traversal and Dijkstra for shortest path.",
    "Trees are hierarchical data structures. Important types: BST, AVL, Red-Black, B-Tree. Used in databases and file systems.",
    "Sorting algorithms: QuickSort (avg O(n log n)), MergeSort (O(n log n)), HeapSort (O(n log n)), BubbleSort (O(n²)).",
    "Recursion is a function calling itself. Requires base case and recursive case. Watch out for stack overflow.",
    "Stack (LIFO) and Queue (FIFO) are fundamental data structures. Used in expression evaluation, BFS/DFS.",
    "Greedy algorithms make locally optimal choices. Used in Huffman coding, activity selection, Dijkstra's algorithm.",
  ],
  programming: [
    "Python is great for beginners with clean syntax. Use for AI/ML, web development, scripting. Popular frameworks: Django, Flask.",
    "Java is enterprise standard with strong OOP. Master collections, multithreading, memory management. Spring framework is powerful.",
    "JavaScript powers web development. Learn async/await, promises, closures, prototypal inheritance, ES6+ features.",
    "C++ is fast and used in competitive programming, game engines, system software. Master pointers, STL, memory management.",
    "C# is used for Windows and Unity development. Similar to Java with language-integrated query (LINQ).",
    "Go is modern, compiled language with fast execution. Great for microservices, concurrent programming, cloud tools.",
    "Rust provides memory safety without garbage collection. Used in systems programming, WebAssembly.",
    "OOPS concepts: Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (method overriding), Abstraction.",
    "Functions should be single responsibility. Use meaningful names. Keep them small and focused.",
    "Design patterns: Singleton, Factory, Observer, Strategy, Decorator, Adapter, MVC. Learn when and how to use them.",
  ],
  webdevelopment: [
    "Frontend: HTML (structure), CSS (styling), JavaScript (interactivity). Learn responsive design and accessibility.",
    "React is a JavaScript library for building UIs with components, state management (hooks, context), and virtual DOM.",
    "Vue.js is lightweight with great documentation. Uses templates, reactive data binding, and composable components.",
    "Angular is a full framework with TypeScript, dependency injection, RxJS observables. Good for large applications.",
    "HTML semantic elements: header, nav, article, section, footer improve SEO and accessibility.",
    "CSS Flexbox and Grid for modern layouts. Learn media queries for responsive design. BEM methodology for naming.",
    "JavaScript DOM manipulation: querySelector, addEventListener, innerHTML. Avoid inline scripts for security.",
    "RESTful APIs: Use HTTP methods (GET, POST, PUT, DELETE) properly. Return appropriate status codes (200, 201, 400, 404, 500).",
    "GraphQL is an alternative to REST with precise data fetching. Query language for APIs with strong typing.",
    "Web security: HTTPS, CSRF tokens, SQL injection prevention, XSS protection, CORS, authentication, authorization.",
  ],
  backend: [
    "Backend handles business logic, database operations, authentication, server management.",
    "Node.js runs JavaScript on server. Express.js is popular framework for building REST APIs quickly.",
    "Django (Python) includes ORM, admin panel, authentication. Great for rapid development of full-featured applications.",
    "Spring Boot (Java) simplifies Spring development. Handles dependency injection, auto-configuration, embedded server.",
    "ASP.NET Core is Microsoft's modern framework for APIs and web apps. Fast, cross-platform, built-in dependency injection.",
    "Middleware in web frameworks intercepts requests/responses. Used for logging, authentication, error handling.",
    "RESTful API design: Use nouns for endpoints, HTTP verbs for operations. Version your API (/v1, /v2).",
    "Authentication: Passwords, OAuth2, JWT tokens. Authorization: Role-based access (RBAC), permissions.",
    "Rate limiting prevents abuse. Use tokens, IP-based limits, or API keys to control request frequency.",
    "Error handling: Return meaningful error messages. Use proper HTTP status codes. Log errors for debugging.",
  ],
  database: [
    "SQL databases (MySQL, PostgreSQL) use tables with structured schema. Good for relational data.",
    "NoSQL databases (MongoDB, Firebase): Document-based, key-value stores. Flexible schema, horizontal scaling.",
    "ACID properties: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent), Durability (persistent).",
    "Normalization reduces data redundancy. 1NF: atomic values, 2NF: functional dependency, 3NF: transitive dependency.",
    "Indexing speeds up queries. Primary key (unique), foreign key (relationships), unique index, full-text search.",
    "JOIN types: INNER (matching), LEFT (left + matching), RIGHT (right + matching), FULL (all rows).",
    "Transactions ensure data integrity. BEGIN, COMMIT, ROLLBACK. Use for multi-step operations.",
    "Denormalization improves read performance by storing redundant data. Trade-off: less consistency.",
    "Sharding distributes data across multiple databases. Horizontal scaling for large datasets.",
    "Backup and recovery: Regular backups, replication, point-in-time recovery. Critical for data safety.",
  ],
  versioncontrol: [
    "Git tracks code changes. Distributed version control system.",
    "Commands: git init (create), git add (stage), git commit (save), git push (upload), git pull (download).",
    "Branches allow parallel work. Create: git branch name. Switch: git checkout name. Merge: git merge name.",
    "GitHub/GitLab hosting platforms. Push to remote, create pull requests for code review.",
    "Commit messages should be clear: 'Fix bug in login validation' not 'fixed stuff'.",
    "Merge conflicts happen when changes overlap. Manually resolve conflicts in conflicted files.",
    "Rebase rewrites history by replaying commits. Good for clean history but use with caution.",
    "Stash saves work temporarily: git stash save 'message', git stash pop to restore.",
    ".gitignore file specifies files to ignore (node_modules, .env, build outputs).",
    "GitHub Actions automate tests, builds, deployments. CI/CD pipelines run on every push.",
  ],
  testing: [
    "Unit testing tests individual functions/methods. Use frameworks: Jest (JavaScript), unittest (Python), JUnit (Java).",
    "Integration testing tests multiple components working together. Tests API endpoints, database interactions.",
    "E2E testing simulates real user scenarios. Tools: Selenium, Cypress, Playwright.",
    "Test coverage: Aim for 70-80%. Tools: Istanbul (JavaScript), coverage (Python).",
    "Mocking replaces dependencies with test doubles. Useful for isolating code under test.",
    "TDD (Test-Driven Development): Write tests first, then code. Ensures code is testable.",
    "BDD (Behavior-Driven Development): Tests describe behavior in plain language. Bridges gap between technical and non-technical.",
    "Assertions check expected outcomes. Example: assert(result === 5).",
    "Performance testing: Load testing, stress testing, spike testing. Tools: JMeter, Locust.",
    "Security testing: SQL injection, XSS, authentication bypass. Use tools like OWASP ZAP.",
  ],
  designpatterns: [
    "Singleton: One instance of a class. Example: database connection pool, logger.",
    "Factory: Creates objects without specifying exact classes. Example: UI element creation.",
    "Observer: One-to-many relationship. Subject notifies observers of state changes. Example: event listeners.",
    "Strategy: Define family of algorithms, encapsulate each. Example: payment methods, sorting algorithms.",
    "Decorator: Add behavior to objects without modifying them. Example: stream wrappers.",
    "Adapter: Make incompatible interfaces compatible. Example: legacy system integration.",
    "MVC (Model-View-Controller): Separates concerns. Model (data), View (UI), Controller (logic).",
    "Repository: Abstracts data access. Enables switching databases without changing business logic.",
    "Dependency Injection: Pass dependencies as parameters. Improves testability and loose coupling.",
    "Service Locator: Object finds dependencies. Alternative to DI but less testable.",
  ],
  devops: [
    "Docker containers package applications with dependencies. Ensures consistency across environments.",
    "Docker images are templates, containers are running instances. Use Dockerfile to build images.",
    "Kubernetes orchestrates containers. Auto-scaling, load balancing, self-healing.",
    "CI/CD automates testing and deployment. Continuous Integration (frequent merges), Continuous Deployment (auto release).",
    "Jenkins, GitLab CI, GitHub Actions automate pipelines.",
    "Infrastructure as Code (IaC): Terraform, CloudFormation define infrastructure in code. Version controllable.",
    "Monitoring and logging: Prometheus, ELK stack, DataDog track application health.",
    "Load balancing distributes traffic. Nginx, HAProxy, cloud load balancers.",
    "SSL/TLS encryption secures data in transit. Use certificates for HTTPS.",
    "Blue-Green deployment: Run two identical environments, switch traffic instantly. Zero downtime.",
  ],
  clouddevelopment: [
    "AWS (Amazon Web Services): EC2 (compute), S3 (storage), RDS (database), Lambda (serverless).",
    "Azure (Microsoft): VMs, App Service, SQL Database, Cosmos DB.",
    "Google Cloud: Compute Engine, Cloud Storage, Cloud SQL, BigQuery.",
    "Serverless computing: Write functions, no server management. AWS Lambda, Google Cloud Functions.",
    "CDN (Content Delivery Network) caches content globally. CloudFront (AWS), CloudFlare.",
    "Auto-scaling: Add/remove resources based on demand. Cost-effective for variable loads.",
    "Microservices architecture: Small independent services. Easier scaling but complex management.",
    "API Gateway: Single entry point for APIs. Rate limiting, authentication, request transformation.",
    "Message queues: Decouple services. RabbitMQ, Kafka, AWS SQS.",
    "Containerization: Docker, Kubernetes. Orchestrate and scale containers.",
  ],
  security: [
    "Authentication: Verify who you are. Passwords, biometrics, OAuth2, JWT tokens.",
    "Authorization: Verify what you can do. Role-based (RBAC), attribute-based (ABAC).",
    "Encryption: Data at rest (database), data in transit (HTTPS), end-to-end.",
    "SQL Injection: Input validation and parameterized queries prevent it.",
    "XSS (Cross-Site Scripting): Sanitize user input, use Content Security Policy (CSP).",
    "CSRF (Cross-Site Request Forgery): Use CSRF tokens, SameSite cookies.",
    "Password security: Minimum 8 chars, complexity requirements, hashing (bcrypt, argon2).",
    "Secrets management: Environment variables, vault systems. Never commit secrets.",
    "API security: Authentication, rate limiting, input validation, CORS properly configured.",
    "Security headers: X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security.",
  ],
  apidesign: [
    "RESTful design uses HTTP methods: GET (retrieve), POST (create), PUT (update), DELETE (remove).",
    "Stateless APIs don't store client context. Client sends all needed info. Easier to scale.",
    "Versioning: /v1/users, /v2/users. Allows backward compatibility while improving API.",
    "Pagination: Limit results with offset/limit or cursor-based. Improves performance.",
    "Filtering: /users?role=admin&status=active. Reduces data transferred.",
    "Sorting: /users?sort=name,-date. Ascending (default) or descending (-).",
    "Response format: JSON is standard. Include status codes, error messages, metadata.",
    "HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error).",
    "API documentation: OpenAPI/Swagger. Auto-generated documentation, client SDKs.",
    "Rate limiting: Prevent abuse. Return X-RateLimit headers with limit, remaining, reset.",
  ],
  softwareengineer: [
    "Clean Code: Meaningful names, small functions, DRY (Don't Repeat Yourself), KISS (Keep It Simple).",
    "SOLID principles: S (Single Responsibility), O (Open/Closed), L (Liskov Substitution), I (Interface Segregation), D (Dependency Inversion).",
    "Code Review: Check logic, edge cases, tests, style. Constructive feedback improves team.",
    "Refactoring: Improve code without changing behavior. Extract methods, reduce duplication, improve readability.",
    "Technical Debt: Shortcuts that cost later. Must balance speed with quality.",
    "Performance optimization: Profile code, identify bottlenecks, cache results, database indexing.",
    "Documentation: Code comments, README files, API docs. Helps maintainability.",
    "Logging: Appropriate levels (DEBUG, INFO, WARNING, ERROR). Helps debugging and monitoring.",
    "Version control workflow: Feature branches, code review, merge main. Prevents chaos.",
    "Agile methodology: Sprints, standups, retrospectives. Iterative development and continuous improvement.",
  ],
  problemsolving: [
    "Understand the problem: Read carefully, clarify requirements, identify constraints.",
    "Think before coding: Draw diagrams, think through examples, plan approach.",
    "Start simple: Brute force solution first, then optimize if needed.",
    "Test edge cases: Empty input, single element, very large input, negative numbers.",
    "Debug systematically: Add print statements, use debugger, isolate the issue.",
    "Ask for help: Code reviews, pair programming, asking colleagues. Faster solution.",
    "Break into subproblems: Large problem into smaller manageable pieces.",
    "Pattern recognition: Similar problems solved before? Reuse approaches.",
    "Optimize later: Get working solution first, then optimize if needed.",
    "Learn from mistakes: Keep a notebook of errors and solutions for future reference.",
  ],
  aiml: [
    "Machine Learning: Algorithms learn patterns from data. Supervised (labeled data), Unsupervised (no labels), Reinforcement (rewards).",
    "TensorFlow (Python): Google's ML library. Used for deep learning, neural networks, computer vision, NLP.",
    "PyTorch (Python): Facebook's ML framework. Dynamic computation graph, popular for research and production.",
    "Scikit-learn (Python): Simple ML library. Great for beginners. Classification, regression, clustering, preprocessing.",
    "Deep Learning: Neural networks with multiple layers. CNNs for images, RNNs for sequences, Transformers for NLP.",
    "OpenAI API: GPT-3/GPT-4 for language tasks. Chat completion, text generation, embeddings for semantic search.",
    "Hugging Face: Pre-trained models library. BERT, GPT-2, DistilBERT. Easy fine-tuning and deployment.",
    "Keras: High-level API for TensorFlow. Simple API for building neural networks quickly.",
    "Natural Language Processing (NLP): Tokenization, word embeddings (Word2Vec, GloVe), sentiment analysis, named entity recognition.",
    "Computer Vision: Image classification (CNNs), object detection (YOLO, R-CNN), face recognition, image segmentation.",
    "LangChain (Python): Build LLM applications. Chains, agents, memory management. For complex AI workflows.",
    "Prompt Engineering: Craft effective prompts for LLMs. Few-shot learning, chain-of-thought, role-playing.",
    "Transfer Learning: Use pre-trained models, fine-tune on your data. Saves time and improves accuracy.",
    "Data Preprocessing: Cleaning, normalization, feature scaling. Crucial for model performance.",
    "Evaluation Metrics: Accuracy, Precision, Recall, F1-score, AUC-ROC, RMSE, MAE.",
  ],
  powerbi: [
    "Power BI: Microsoft's business intelligence tool. Create dashboards and reports from data.",
    "Power BI Desktop: Design reports locally. Connects to various data sources (SQL, Excel, APIs).",
    "Power BI Service (Cloud): Publish and share reports. Real-time dashboards, collaboration, security.",
    "DAX (Data Analysis Expressions): Language for calculations. Similar to Excel formulas but more powerful.",
    "Power Query: Data transformation tool. Clean data, merge sources, unpivot/pivot data.",
    "Visualizations: Charts, maps, cards, tables, gauges. Choose visualization matching data type.",
    "KPIs (Key Performance Indicators): Track metrics. Conditional formatting shows status (red/yellow/green).",
    "Filters and Slicers: Interactive elements. Users filter data to explore insights.",
    "Relationships: Connect tables through keys. Enables cross-table analysis and calculations.",
    "Row-Level Security (RLS): Different users see different data based on roles.",
    "Refresh schedules: Automatic data updates from sources. Real-time or scheduled refresh.",
    "Drill-through: Click to see detailed data. Navigate from summary to granular details.",
    "Bookmarks: Save filter states. Users navigate between different report perspectives.",
    "Sharing and Collaboration: Share reports with team. Comments, annotations, version history.",
    "Performance Optimization: Reduce data model size, optimize DAX, aggregations, use efficient visuals.",
  ],
  dataanalysis: [
    "Pandas (Python): Data manipulation library. DataFrames for tabular data, groupby, merge, pivot operations.",
    "NumPy (Python): Numerical computing. Arrays, matrix operations, mathematical functions.",
    "SQL: Query language for databases. SELECT, WHERE, GROUP BY, JOIN, aggregations.",
    "Excel: Spreadsheet tool. Pivot tables, VLOOKUP, formulas, basic analysis.",
    "Tableau: Data visualization tool. Interactive dashboards, story-telling with data.",
    "Data Mining: Extract patterns from large datasets. Useful for business intelligence.",
    "Statistical Analysis: Mean, median, standard deviation, correlation, regression.",
    "Hypothesis Testing: Null hypothesis, p-values, significance testing.",
    "Data Visualization: Charts, graphs, heatmaps. Communicate insights clearly.",
    "ETL Process: Extract (source), Transform (clean, combine), Load (destination).",
  ],
  softwaretools: [
    "Version Control: Git, GitHub, GitLab, Bitbucket. Manage code changes, collaborate.",
    "IDEs: VS Code, IntelliJ, PyCharm, Visual Studio. Code editing, debugging, extensions.",
    "Project Management: Jira, Asana, Monday, Trello. Track tasks, sprints, team collaboration.",
    "Communication: Slack, Teams, Discord. Team messaging, file sharing, integrations.",
    "Documentation: Confluence, Notion, Google Docs. Knowledge base, wikis, shared notes.",
    "Design Tools: Figma, Adobe XD, Sketch. UI/UX design, prototyping, collaboration.",
    "API Testing: Postman, Insomnia, REST Client. Test endpoints, manage collections, automation.",
    "Database Tools: DBeaver, pgAdmin, MySQL Workbench. Connect, query, manage databases.",
    "Monitoring: New Relic, Datadog, Grafana. Application monitoring, performance insights.",
    "Bug Tracking: GitHub Issues, Jira, Bugzilla. Report, track, manage bugs.",
  ],
  cloudplatforms: [
    "AWS (Amazon Web Services): EC2 (compute), S3 (storage), Lambda (serverless), RDS (database), DynamoDB (NoSQL).",
    "Azure (Microsoft): Virtual Machines, App Service, SQL Database, Cosmos DB, AI services.",
    "Google Cloud: Compute Engine, Cloud Storage, BigQuery (data warehouse), Vertex AI (ML platform).",
    "Firebase (Google): Real-time database, Authentication, Hosting, Cloud Functions, Storage.",
    "Heroku: Platform as a Service (PaaS). Simple deployment for web apps, databases, add-ons.",
    "DigitalOcean: Affordable cloud provider. Droplets (VMs), App Platform, Databases.",
    "AWS Lambda: Serverless computing. Pay per execution. Write functions without managing servers.",
    "Google Cloud Functions: Serverless functions. Trigger on events, auto-scale.",
    "RDS (AWS): Managed relational databases. MySQL, PostgreSQL, Oracle, SQL Server.",
    "DynamoDB (AWS): NoSQL database. Fast, scalable, pay-per-request pricing.",
  ],
  webframeworks: [
    "React: JavaScript library for UIs. Component-based, state management (hooks, context), virtual DOM.",
    "Vue.js: Progressive framework. Single File Components, reactive data, easy to learn.",
    "Angular: Full framework. TypeScript-first, RxJS, dependency injection, large applications.",
    "Next.js: React framework. Server-side rendering (SSR), static generation, API routes.",
    "Svelte: Compiler framework. No virtual DOM, compile to vanilla JS, very performant.",
    "Express.js: Node.js backend framework. Middleware, routing, simple and fast.",
    "Django: Python web framework. ORM, admin panel, authentication, batteries-included.",
    "Flask: Lightweight Python framework. Flexible, minimal boilerplate, microservices.",
    "FastAPI: Modern Python framework. Async, automatic API documentation, fast development.",
    "Spring Boot: Java framework. Microservices, cloud-native, enterprise applications.",
  ],
  devtoolsutilities: [
    "Docker: Containerization. Package app with dependencies. Works consistently across environments.",
    "Kubernetes (K8s): Container orchestration. Auto-scaling, load balancing, self-healing.",
    "Jenkins: CI/CD automation. Build pipelines, testing, deployment automation.",
    "GitHub Actions: Automated workflows. CI/CD, testing, deployments on code events.",
    "GitLab CI/CD: Integrated CI/CD. Pipeline files in repo, runner architecture.",
    "Webpack: Module bundler for JavaScript. Code splitting, asset optimization, tree-shaking.",
    "Vite: Fast build tool. Lightning-fast development, optimized production build.",
    "Babel: JavaScript transpiler. Write ES6+, transpile to compatible JavaScript.",
    "ESLint: JavaScript linter. Code quality, style enforcement, bug detection.",
    "Prettier: Code formatter. Consistent code style, auto-format on save.",
  ],
  mobiledev: [
    "React Native: Build mobile apps with React. Android and iOS from single codebase.",
    "Flutter: Dart-based framework. High performance, beautiful UIs, iOS and Android.",
    "Swift: Apple's language for iOS. Type-safe, modern, integrated with Xcode.",
    "Kotlin: Modern language for Android. Concise syntax, null-safety, interoperable with Java.",
    "Expo: React Native framework. Simplified development, instant updates, cloud build.",
    "Firebase: Backend services. Authentication, real-time database, push notifications.",
    "Mobile UI Guidelines: Apple HIG (Human Interface Guidelines), Material Design (Android).",
    "App Performance: Optimize memory, battery usage, startup time, smooth animations.",
    "Testing: Unit tests, integration tests, UI tests. XCTest (iOS), Espresso (Android).",
    "App Store: Distribution, reviews, in-app purchases, analytics.",
  ],
  dataengineering: [
    "Data Pipelines: ETL workflows moving data through systems. Automation, scheduling, monitoring.",
    "Apache Spark: Big data processing. Distributed computing, fast processing of large datasets.",
    "Apache Kafka: Event streaming. Real-time data pipelines, message broker.",
    "Apache Airflow: Workflow orchestration. DAGs (Directed Acyclic Graphs), scheduling, monitoring.",
    "Data Warehousing: Centralized data repository. BigQuery, Redshift, Snowflake.",
    "Data Lakes: Store raw data at scale. Unstructured data, cost-effective, Hadoop, Delta Lake.",
    "Batch Processing: Process large data in batches. Spark, MapReduce for overnight jobs.",
    "Stream Processing: Real-time data processing. Kafka, Flink, Spark Streaming.",
    "Data Quality: Validation, anomaly detection, monitoring. Ensures reliable analytics.",
    "Metadata Management: Track data lineage, schemas, ownership, governance.",
  ],
};

// Enhanced topic detection
const detectTopic = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // DSA & Algorithms
  if (/dsa|algorithm|array|string|tree|graph|sort|search|dynamic|hash|linked|stack|queue|binary/.test(lowerMessage)) {
    return "dsa";
  }
  // Programming Languages
  if (/python|java|cpp|javascript|c\+\+|golang|rust|c#|ruby|php|kotlin/.test(lowerMessage)) {
    return "programming";
  }
  // Web Development
  if (/react|angular|vue|html|css|frontend|web|browser|responsive|responsive/.test(lowerMessage)) {
    return "webdevelopment";
  }
  // Backend
  if (/backend|server|express|django|spring|api|endpoint|http|framework/.test(lowerMessage)) {
    return "backend";
  }
  // Database
  if (/database|sql|mysql|postgresql|mongodb|firebase|nosql|table|query|index|transaction/.test(lowerMessage)) {
    return "database";
  }
  // Version Control
  if (/git|github|gitlab|commit|branch|merge|version|control|repository/.test(lowerMessage)) {
    return "versioncontrol";
  }
  // Testing
  if (/test|jest|unit|integration|e2e|coverage|mock|cypress|selenium/.test(lowerMessage)) {
    return "testing";
  }
  // Design Patterns
  if (/pattern|singleton|factory|observer|strategy|decorator|mvc|adapter/.test(lowerMessage)) {
    return "designpatterns";
  }
  // DevOps
  if (/docker|kubernetes|ci\/cd|pipeline|jenkins|deployment|container|orchestr/.test(lowerMessage)) {
    return "devops";
  }
  // Cloud
  if (/aws|azure|google cloud|serverless|lambda|s3|ec2|cloud|microservices/.test(lowerMessage)) {
    return "clouddevelopment";
  }
  // Security
  if (/security|encrypt|authentication|authorization|password|jwt|oauth|sql injection|xss|csrf/.test(lowerMessage)) {
    return "security";
  }
  // API Design
  if (/api|rest|endpoint|http|request|response|status|pagination|filter|sort/.test(lowerMessage)) {
    return "apidesign";
  }
  // Software Engineering
  if (/clean code|solid|refactor|code review|technical debt|documentation|logging/.test(lowerMessage)) {
    return "softwareengineer";
  }
  // Problem Solving
  if (/solve|approach|think|debug|optimize|edge case|problem/.test(lowerMessage)) {
    return "problemsolving";
  }
  // AI & Machine Learning
  if (/ai|machine learning|ml|tensorflow|pytorch|neural|deep learning|nlp|gpt|transformers|langchain|prompt/.test(lowerMessage)) {
    return "aiml";
  }
  // Power BI & Data Analysis
  if (/power bi|powerbi|dax|power query|visualization|dashboard|kpi|tableau|data|analytics/.test(lowerMessage)) {
    return "powerbi";
  }
  // Data Analysis & Tools
  if (/pandas|numpy|sql|excel|statistics|hypothesis|etl|data mining/.test(lowerMessage)) {
    return "dataanalysis";
  }
  // Software Tools
  if (/tool|jira|asana|postman|figma|slack|confluence|notion|debugger|ide/.test(lowerMessage)) {
    return "softwaretools";
  }
  // Cloud Platforms
  if (/aws|azure|google cloud|firebase|heroku|digitalocean|lambda|serverless/.test(lowerMessage)) {
    return "cloudplatforms";
  }
  // Web Frameworks
  if (/next\.js|svelte|fastapi|django|flask|express|spring/.test(lowerMessage)) {
    return "webframeworks";
  }
  // Dev Tools & Utilities
  if (/webpack|vite|babel|eslint|prettier|npm|yarn|rollup|parcel/.test(lowerMessage)) {
    return "devtoolsutilities";
  }
  // Mobile Development
  if (/react native|flutter|swift|kotlin|expo|mobile|ios|android|app|xcode/.test(lowerMessage)) {
    return "mobiledev";
  }
  // Data Engineering
  if (/spark|kafka|airflow|data pipeline|big data|warehouse|lake|batch|stream|processing/.test(lowerMessage)) {
    return "dataengineering";
  }
  
  return "placement"; // default fallback to general knowledge
};

export const chatWithAI = async (userMessage) => {
  try {
    // Simulate API delay for realistic experience
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const topic = detectTopic(userMessage);
    const responses = softwareKnowledgeBase[topic] || softwareKnowledgeBase.placement;
    
    // Return a random response from the detected topic
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return randomResponse;
  } catch (error) {
    console.error("AI Chatbot Error:", error);
    throw new Error("Failed to get response. Please try again.");
  }
};

export const generateContextualResponse = async (userMessage, context) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const topic = detectTopic(userMessage);
    const responses = softwareKnowledgeBase[topic] || softwareKnowledgeBase.placement;
    
    return responses[Math.floor(Math.random() * responses.length)];
  } catch (error) {
    console.error("AI Response Generation Error:", error);
    throw new Error("Failed to generate response.");
  }
};
