export const experiences = [
  {
    num: "01",
    company: "Intuit",
    role: "Software Developer Intern",
    years: "September 2025 — April 2026",
    tags: ["Go", "Java", "Springboot", "Python", "AWS"],
    description: "Designed and engineered a Root Cause Analysis (RCA) automation platform using React.js, integrating backend services with Golang, Java (Spring Boot), AWS (EC2, DynamoDB, API Gateway, CDK), and Docker, enabling real-time outage detection and secure data storage.",
    bullets: [
      "Developed and optimized network-aware backend systems using Golang, Java, and Spring Boot, applying TCP/IP, HTTP, and gRPC to improve service reliability and performance.",
      "Built a real-time collaboration system using WebSockets, enabling concurrent editing for distributed teams",
      "Developed and scaled backend REST APIs using Java, integrating LangChain pipelines and external AI APIs to support high-throughput RCA workflows across distributed systems.",
      "Built an LLM-driven RCA assistant using Python and LangChain, automating log analysis and root cause summarization, reducing manual triage time by 30%.",
    ],
  },
  {
    num: "02",
    company: "Interac Corp",
    role: "Software Developer Intern",
    years: "May 2025 — August 2025",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    description: "Developed and tested Canada’s first Real-Time Rail (RTR) payment system by building scalable microservices using Spring Boot (Java) and Golang within large distributed systems, enabling real-time transaction processing with less than 100ms latency.",
    bullets: [
      "Leveraged Elixir’s concurrency and TCP socket programming to handle thousands of lightweight processes for concurrent payment processing and transaction isolation over secure channels.",
      "Built resilient, distributed backend services with CockroachDB and PostgreSQL with Java to ensure high availability and consistency in financial data across regions.",
      "Deployed containerized services on AWS (EKS), scaling services for 10k+ concurrent requests/sec with sub 100ms latency.",      
    ],
  },
  {
    num: "03",
    company: "First National Financial",
    role: "Junior Application Developer",
    years: "May 2023 — May 2024",
    tags: ["React.js", "Java", "C++", "Typescript", "AWS"],
    description: "Designed and built highly reliable and scalable web and mobile applications using React.js, Java, C++, Swift (iOS), TypeScript, Next.js, Node.js, and AWS EC2, serving 100+ daily users, working in a team with a collaborative mindset.",
    bullets: [
      "Built and integrated GraphQL APIs using Spring Boot (Java) and C++, cutting transfer time by 30%",
      "Developed scalable microservices within large distributed systems using SpringBoot (Java), PostgreSQL, and GCP (Google Cloud), improving system performance and reducing latency by 20%.",
      "Enhanced PostgreSQL database performance by 25% through advanced query optimization, stored procedures, and triggers, ensuring accurate and efficient data retrieval.",
    ],
  },
    {
    num: "04",
    company: "First National Financial",
    role: "Sofware Developer Intern",
    years: "May 2022 — August 2022",
    tags: ["Vue.js", "Java", "Golang"],
    description: "Developed a responsive front-end interface using Vue.js, increasing user engagement to 300+ active users.",
    bullets: [
      "Developed & integrated GraphQL APIs with Spring Boot (Java) and Golang, reducing transfer latency by 17%.",
      ],
  },
];

export const skills = [
  { name: "Claude AI",     icon: "🤖" },
  { name: "Python",        icon: "🐍" },
  { name: "Java",          icon: "☕" },
  { name: "Golang",        icon: "🐹" },
  { name: "React / Next",  icon: "⚛️" },
  { name: "TypeScript",    icon: "🔷" },
  { name: "AWS",           icon: "☁️" },
  { name: "Docker",        icon: "🐳" },
  { name: "PostgreSQL",    icon: "🐘" },
];

export const projects = [
  {
    num: "01",
    title: "Data Alpha Engine",
    subtitle: "AI-Powered quantitative research platform",
    description:
      "A full-stack quantitative research platform that ingests unstructured alternative data, extracts predictive signals using LLM embeddings, and backtests them against real equity returns.",
    tags: ["React", "Python", "TypeScript", "Tensorflow", "FastAPI", "Scikit-learn"],
    gradient: "blue-violet",
    link: "https://github.com/akshar1612/DataAlphaEngine",
  },
  {
    num: "02",
    title: "Real-Time PR-Review Agent",
    subtitle: "Automated PR-Review Agent",
    description:
      "An AI-powered code review agent that clones a PR, runs static analysis, understands context across the codebase using RAG, and leaves structured review comments — with confidence scores and links to relevant past issues.",
    tags: ["Python", "React", "ChromaDB", "AWS EKS", "TypeScript"],
    gradient: "cyan-blue",
    link: "https://github.com/akshar1612/PR-Review-Agent",
  },
  {
    num: "03",
    title: "Path Finding Visualizer",
    subtitle: "Interactive Pathfinding Visualizer",
    description:
      "An interactive pathfinding algorithm visualizer built with Next.js, TypeScript, and Tailwind CSS. Place a start and end node, draw walls, choose an algorithm, and watch it search in real time.",
    tags: ["React", "Typescript", "Tailwind", "Next.js"],
    gradient: "violet-pink",
    link: "https://akshar1612.github.io/Path-Finder-Visualizer/",
  },
];

export const marqueeItems = [
  "Software Developer", "·", "Python", "·", "Three.js", "·", "React", "·",
  "Artificial Intelligence", "·", "Claude Code", "·", "Cursor", "·", "Open to Work", "·",
  "Software Developer", "·", "Python", "·", "Three.js", "·", "React", "·",
  "Artificial Intelligence", "·", "Claude Code", "·", "Cursor", "·", "Open to Work", "·",
];
