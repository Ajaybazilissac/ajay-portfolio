export const PROJECTS = [
  {
    id: 'ai-employee-network',
    domain: 'AI & ML',
    category: 'Multi-Agent AI',
    title: 'AI Employee Network (Multi-Agent System)',
    summary:
      'Autonomous enterprise workflow orchestration connecting specialized AI agents with task delegation, shared memory, and domain-grounded RAG.',
    highlight: 'Autonomous Task Routing & Tool Calling',
    stack: ['Python', 'Multi-Agent Frameworks', 'RAG', 'Tool Calling', 'Vector Stores', 'RESTful APIs'],
    overview:
      'Architected an interconnected autonomous AI employee network built to automate multi-department enterprise workflows through specialized agent collaboration, structured tool execution, and persistent context memory.',
    architecture: [
      'Orchestrator Agent decomposes complex goals into specialized sub-tasks',
      'Inter-agent communication protocol & memory store maintain state across steps',
      'Role-specific RAG retrieval tools ground decisions in verified company knowledge'
    ]
  },
  {
    id: 'hybrid-rag',
    domain: 'AI & ML',
    category: 'Generative AI & NLP',
    title: 'Agentic AI Hybrid Search & RAG System',
    summary:
      'Dual-index Retrieval-Augmented Generation pipeline combining dense vector search (FAISS) with sparse lexical search (BM25) and Qwen2.5-72B.',
    highlight: 'FAISS + BM25 Hybrid Grounding',
    stack: ['Python', 'FAISS', 'BM25', 'Sentence Transformers', 'Qwen2.5-72B', 'Hugging Face API'],
    overview:
      'Developed an end-to-end RAG system uniting semantic embeddings (FAISS + Sentence Transformers) with exact keyword matching (BM25) and multi-step query decomposition using Qwen2.5-72B.',
    architecture: [
      'Multi-step query decomposition splits complex user prompts into focused sub-queries',
      'Parallel FAISS dense vector & BM25 lexical retrieval eliminates blind spots',
      'Prompt-engineered synthesis generates grounded, context-faithful answers'
    ]
  },
  {
    id: 'crop-disease-yolo',
    domain: 'AI & ML',
    category: 'Computer Vision',
    title: 'Crop Disease Detection (YOLOv11)',
    summary:
      'Custom GPU-trained YOLOv11 model trained on 2,832 tomato leaf images across 9 disease classes with a real-time Streamlit diagnostic web app.',
    highlight: '61.0% mAP@50 • 9 Disease Classes',
    stack: ['Python', 'YOLOv11', 'PyTorch', 'CUDA', 'OpenCV', 'Streamlit'],
    overview:
      'Trained a custom YOLOv11 object detection and classification model on 2,832 annotated tomato leaf images across 9 pathology categories, deployed inside an interactive Streamlit diagnostic application.',
    architecture: [
      'Dataset preprocessing, augmentation & CUDA GPU-accelerated YOLOv11 training',
      'Real-time OpenCV inference highlighting bounding boxes and confidence scores',
      'Automated generation of downloadable agronomic treatment reports'
    ]
  },
  {
    id: 'ecommerce-mern',
    domain: 'Web Dev',
    category: 'Full-Stack MERN',
    title: 'Full-Stack E-Commerce Platform',
    summary:
      'End-to-end MERN shopping platform featuring OTP & JWT authentication, Razorpay/Paytm payment gateways, cart management, and an admin dashboard.',
    highlight: 'MERN Stack • Razorpay & JWT Auth',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Razorpay/Paytm', 'JWT', 'Jest'],
    overview:
      'Built scalable solo and team e-commerce web applications using MongoDB, Express.js, React.js, and Node.js with secure user authentication, payment gateway integration, and unit-tested API endpoints.',
    architecture: [
      'Secure authentication workflow combining OTP verification and JWT session tokens',
      'RESTful Express & MongoDB backend handling inventory, orders, and admin analytics',
      'Integrated Razorpay & Paytm checkout flows with responsive React storefront UI'
    ]
  },
  {
    id: 'writing-assistant',
    domain: 'Web Dev',
    category: 'Browser & Office Extension',
    title: 'Cross-Platform Writing Assistant Plugin',
    summary:
      'Real-time grammar and writing assistant deployed across Google Chrome, Microsoft Word, and Outlook using AJAX and ASP.NET REST APIs.',
    highlight: 'Chrome, MS Word & Outlook',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX', 'ASP.NET API'],
    overview:
      'Engineered front-end features and efficient DOM manipulation routines for a cross-platform writing assistant plugin operating seamlessly inside web browsers and Microsoft Office add-ins.',
    architecture: [
      'Optimized DOM inspection & inline suggestion rendering for low-latency typing feedback',
      'Asynchronous AJAX communication pipeline connected to ASP.NET backend services',
      'Consistent responsive UI components across Chrome, Word, and Outlook environments'
    ]
  },
  {
    id: 'telecom-churn',
    domain: 'AI & ML',
    category: 'Predictive Machine Learning',
    title: 'Telecom Customer Churn Prediction',
    summary:
      'End-to-end Scikit-learn supervised classification pipeline predicting customer attrition with feature engineering and ROC-AUC evaluation.',
    highlight: '~71% Accuracy • Full ML Pipeline',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'EDA', 'ROC-AUC'],
    overview:
      'Built and validated a supervised machine learning classification workflow to identify high-risk telecom subscriber attrition using structured customer usage and billing records.',
    architecture: [
      'Exploratory Data Analysis (EDA), missing value imputation & categorical encoding',
      'Feature scaling and Logistic Regression supervised model training',
      'Comprehensive evaluation via Confusion Matrix, Precision, Recall & ROC-AUC'
    ]
  },
  {
    id: 'sustainable-meeting-portal',
    domain: 'Web Dev',
    category: 'Frontend & REST UI',
    title: 'Sustainable Meeting Portal',
    summary:
      'Interactive, pixel-perfect web platform built with responsive modern UI components and seamless REST API integration.',
    highlight: 'Responsive UI • REST Integration',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Responsive Design'],
    overview:
      'Collaborated in an Agile product team to deliver an interactive, accessible web portal featuring clean responsive layouts and dynamic data synchronization via RESTful endpoints.',
    architecture: [
      'Component-driven responsive UI architecture built for mobile and desktop viewports',
      'Clean REST API data binding with loading states and error handling',
      'Cross-browser compatibility and performance optimization'
    ]
  }
];

export const SKILL_GROUPS = [
  {
    title: 'Generative AI, LLMs & Agents',
    skills: [
      'RAG Pipelines',
      'Agentic Workflows',
      'smolagents (CodeAgent)',
      'Qwen2.5 LLMs',
      'Sentence Transformers',
      'FAISS',
      'BM25',
      'LangChain',
      'Prompt Engineering',
      'Hugging Face API'
    ]
  },
  {
    title: 'Machine Learning & Computer Vision',
    skills: [
      'Python',
      'PyTorch',
      'TensorFlow & Keras',
      'YOLOv11',
      'OpenCV',
      'CUDA',
      'Scikit-learn',
      'CNNs & Image Segmentation',
      'Feature Engineering',
      'ROC-AUC & Hypothesis Testing'
    ]
  },
  {
    title: 'Full-Stack Web Development (MERN)',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'Node.js',
      'Express.js',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery & AJAX',
      'MVC Architecture',
      'Payment Gateways (Razorpay)'
    ]
  },
  {
    title: 'Data, Databases & Deployment',
    skills: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'Pandas & NumPy',
      'Power BI & DAX',
      'FastAPI & REST APIs',
      'Docker & Compose',
      'Git & GitHub',
      'Vercel & Netlify',
      'Agile / JIRA'
    ]
  }
];

export const EXPERIENCE = [
  {
    role: 'AI/ML Intern',
    company: 'AkumenbyQ',
    period: '07/2026 – Present',
    tag: 'AI / Agents',
    current: true,
    bullets: [
      'Architecting multi-agent workflows and autonomous AI employee networks with task delegation logic and memory management.',
      'Building Hybrid RAG pipelines combining dense vector indexing (FAISS) with sparse lexical retrieval (BM25) and Sentence Transformers.',
      'Implementing smolagents (CodeAgent) workflows with Qwen2.5 and Hugging Face Inference APIs for structured tool execution.'
    ]
  },
  {
    role: 'Data Analyst & AI Engineer (Trainee)',
    company: 'CADD Centre Training Services Pvt. Ltd., Kerala',
    period: '09/2025 – 06/2026',
    tag: 'Data & AI',
    current: false,
    bullets: [
      'Applied Python (Pandas, NumPy) and SQL to clean, preprocess, and transform multi-source datasets for modeling.',
      'Performed exploratory data analysis (EDA), statistical hypothesis testing, and built Power BI dashboards with DAX measures.'
    ]
  },
  {
    role: 'Full-Stack Web Developer',
    company: 'MySolar Group Ltd., Remote (Canada)',
    period: '01/2023 – 12/2023',
    tag: 'MERN Stack',
    current: false,
    bullets: [
      'Developed and launched responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and RESTful APIs.',
      'Built dynamic mobile-responsive React components, structured internal CRM data, and deployed via Vercel & Netlify CI/CD workflows.'
    ]
  },
  {
    role: 'Technology Analyst – Level 1 (Back-End Developer)',
    company: 'Emvigo Technologies Pvt. Ltd., Kerala',
    period: '11/2020 – 01/2021',
    tag: 'Node.js / MVC',
    current: false,
    bullets: [
      'Developed scalable server-side applications using Node.js, Express.js, and MongoDB following clean MVC architecture.',
      'Created and optimized RESTful API routes, debugged production bottlenecks, and collaborated with front-end and client teams.'
    ]
  },
  {
    role: 'Front-End Developer',
    company: 'Kruxsoft Solutions, Kerala',
    period: '08/2019 – 10/2020',
    tag: 'Frontend / JS',
    current: false,
    bullets: [
      'Built and supported front-end features for a cross-platform writing assistant plugin across Google Chrome, Microsoft Word, and Outlook.',
      'Implemented responsive UI components using HTML, CSS, JavaScript, Bootstrap, jQuery, and AJAX with optimized DOM performance.'
    ]
  },
  {
    role: 'Machine Learning Researcher (Trainee)',
    company: 'Amrita Vishwa Vidyapeetham, Kerala',
    period: '01/2019 – 06/2019',
    tag: 'Deep Learning',
    current: false,
    bullets: [
      'Conducted deep learning research on automated image segmentation using CNNs, resulting in a peer-reviewed IJRTE publication.'
    ]
  }
];

export const EDUCATION = [
  {
    title: 'Postgraduate Diploma in Web Design & Development',
    institution: 'Conestoga College, Canada',
    year: '2021 – 2022'
  },
  {
    title: 'Master of Computer Applications (MCA)',
    institution: 'Amrita Vishwa Vidyapeetham, Kerala, India',
    year: '2016 – 2019'
  },
  {
    title: 'Bachelor of Science in Computer Science (B.Sc.)',
    institution: 'University of Calicut (SNDP Yogam College), Kerala',
    year: '2013 – 2016'
  }
];

export const CERTIFICATIONS = [
  'Advanced Certification in Data Science & AI — CADD Centre',
  'Namaste React & Namaste Node.js — Namastedev.com (2025)',
  'Namaste JavaScript — Namastedev.com (2025)',
  'Web Design & Responsive Web Design — Udemy (2024)',
  'AI Tools Workshop — Be10x (2026)'
];

export const SUGGESTED_QUESTIONS = [
  "What is Ajay's total experience?",
  'Tell me about his AI & RAG projects',
  'What is his Full-Stack MERN experience?',
  'What are his qualifications & research?'
];
