/**
 * ============================================================================
 * AJAY BAZIL ISSAC — FULL-STACK MVC PORTFOLIO SCAFFOLDER
 * ============================================================================
 * Run `node create-mvc-portfolio.js` inside an empty project folder to generate:
 *   - backend/  (Express MVC: config, models, controllers, routes, server.js)
 *   - frontend/ (React + Vite MVC: config, models, services, components, App.jsx)
 * ============================================================================
 */

const fs = require("fs");
const path = require("path");

function writeFile(relativePath, content) {
  const fullPath = path.join(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trimStart(), "utf8");
  console.log(`Created: ${relativePath}`);
}

// ============================================================================
// 1. BACKEND (NODE.JS + EXPRESS MVC ARCHITECTURE)
// ============================================================================

writeFile(
  "backend/package.json",
  `{
  "name": "ajay-portfolio-backend",
  "version": "1.0.0",
  "description": "MVC Express backend for Ajay Bazil Issac AI Portfolio Chatbot",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}
`,
);

writeFile(
  "backend/.env.example",
  `PORT=5000
OPENROUTER_API_KEY=sk-or-v1-your-free-openrouter-key-here
OPENROUTER_MODEL=openrouter/free
CLIENT_ORIGIN=http://localhost:5173
`,
);

writeFile(
  "backend/config/env.js",
  `require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  openRouterApiKey: process.env.OPENROUTER_API_KEY || '',
  openRouterModel: process.env.OPENROUTER_MODEL || 'openrouter/free',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173'
};
`,
);

writeFile(
  "backend/models/resumeModel.js",
  `/**
 * MODEL: Resume Knowledge Base & Deterministic Fallback Matcher
 * Stores structured facts from both Ajay's AI/ML and Full-Stack MERN resumes.
 */

const RESUME_KNOWLEDGE_BASE = \`
CANDIDATE PROFILE:
Name: Ajay Bazil Issac
Title: AI/ML Engineer & Full-Stack Web Developer (MERN)
Location: Kochi, Kerala, India
Phone: +91 7012792566
Email: ajaybazilissac93@gmail.com
GitHub: https://github.com/Ajaybazilissac
LinkedIn: https://www.linkedin.com/in/ajay-bazil-issac-dataanalyst-aiengineer/
Total Professional Experience: 2 Years, 8 Months.

PROFESSIONAL SUMMARY:
- AI/ML professional with an MCA, Postgraduate Diploma in Web Design & Development (Conestoga College, Canada), and Advanced Certification in Data Science & AI.
- Experienced in building supervised ML models, computer vision systems (YOLOv11, CNNs), NLP/Generative AI pipelines (Hybrid RAG with FAISS + BM25, Multi-Agent systems with smolagents and Qwen2.5), and full-stack MERN applications (MongoDB, Express.js, React.js, Node.js).
- Published deep learning image segmentation research in IJRTE (2019).

TECHNICAL SKILLS:
- Generative AI & NLP: Retrieval-Augmented Generation (RAG), Prompt Engineering, Hugging Face Inference API, Open-Source LLMs (Qwen / Qwen2.5-72B), Sentence Transformers, FAISS, BM25, LangChain Components, Agentic AI Workflows, smolagents (CodeAgent).
- Deep Learning & Computer Vision: Neural Networks, CNN, RNN, LSTM, Transfer Learning, Object Detection, Image Segmentation, YOLOv11, PyTorch, TensorFlow, Keras, OpenCV, CUDA.
- Programming & ML: Python, C, C++, SQL, Machine Learning (Linear/Logistic Regression, Decision Trees, Random Forests, Gradient Boosting), Supervised & Unsupervised Learning, Feature Engineering, EDA, Confusion Matrix, Precision, Recall, F1-Score, ROC-AUC, Hypothesis Testing.
- Full-Stack Web Development: JavaScript (ES6+), React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, Bootstrap, jQuery, AJAX, JSON, MVC Architecture, RESTful APIs, FastAPI, Payment Gateways (Razorpay, Paytm), JWT & OTP Authentication.
- Databases & Data Analytics: MongoDB, PostgreSQL, MySQL, Pandas, NumPy, Power BI, DAX.
- Deployment & Tools: Docker, Docker Compose, Git, GitHub, Bitbucket, Vercel, Netlify, JIRA, Trello, VS Code, Chrome DevTools, Agile/Scrum.

WORK EXPERIENCE (2 YEARS, 8 MONTHS TOTAL):
1. AI/ML Intern | AkumenbyQ (07/2026 – Present)
   - Architecting multi-agent workflows and autonomous AI employee networks with inter-agent communication protocols, task delegation logic, and memory management.
   - Developing Hybrid RAG pipelines combining dense vector indexing (FAISS) with sparse lexical retrieval (BM25) and Sentence Transformers.
   - Implementing smolagents (CodeAgent) workflows integrated with Qwen/Qwen2.5 and Hugging Face Inference APIs.
2. Data Analyst & AI Engineer (Trainee) | CADD Centre Training Services Pvt. Ltd., Kerala (09/2025 – 06/2026)
   - Applied Python (Pandas, NumPy) and SQL to clean, preprocess, and transform multi-source structured data.
   - Performed EDA, statistical hypothesis testing, and built Power BI dashboards with DAX measures.
3. Full-Stack Web Developer | MySolar Group Ltd., Remote (Canada) (01/2023 – 12/2023)
   - Developed and launched responsive MERN stack (MongoDB, Express.js, React.js, Node.js) web applications and RESTful APIs.
   - Created dynamic React components, structured internal CRM data, and deployed via Vercel and Netlify CI/CD workflows.
4. Technology Analyst – Level 1 (Back-End Developer) | Emvigo Technologies Pvt. Ltd., Kerala (11/2020 – 01/2021)
   - Developed scalable server-side applications using Node.js, Express.js, and MongoDB within MVC architecture.
   - Designed RESTful API routes and debugged backend performance bottlenecks.
5. Front-End Developer | Kruxsoft Solutions, Kerala (08/2019 – 10/2020)
   - Built front-end features for a cross-platform writing assistant plugin deployed on Google Chrome, Microsoft Word, and Outlook using HTML, CSS, JavaScript, Bootstrap, jQuery, and AJAX.
6. Machine Learning Researcher (Trainee) | Amrita Vishwa Vidyapeetham, Kerala (01/2019 – 06/2019)
   - Conducted deep learning research on automated document image segmentation using CNNs; published in IJRTE.

KEY PROJECTS:
1. AI Employee Network (Multi-Agent System): Python, LLM Orchestration, Multi-Agent Frameworks, RAG, Tool Calling, Vector Stores, RESTful APIs.
2. Agentic AI Hybrid Search & RAG System: Python, FAISS, BM25, Sentence Transformers, Qwen2.5-72B, Hugging Face API.
3. Crop Disease Detection & Real-Time Classification System: Python, YOLOv11, PyTorch, CUDA, OpenCV, Streamlit (2,832 tomato leaf images, 9 classes, 61.0% mAP@50).
4. Telecom Customer Churn Predictive Modeling: Python, Scikit-learn, Pandas, NumPy, EDA (~71% accuracy, Logistic Regression, ROC-AUC).
5. Full-Stack E-Commerce Platform (Solo & Team): MERN stack, OTP & JWT auth, Razorpay & Paytm gateways, admin dashboard, Jest testing.
6. Cross-Platform Writing Assistant Plugin: HTML, CSS, JavaScript, Bootstrap, jQuery, AJAX, ASP.NET API (Chrome, MS Word, Outlook).
7. Sustainable Meeting Portal: Responsive web portal with REST API integration.

EDUCATION & PUBLICATION:
- Postgraduate Diploma in Web Design & Development — Conestoga College, Canada (2021 – 2022)
- Master of Computer Applications (MCA) — Amrita Vishwa Vidyapeetham, Kerala, India (2016 – 2019)
- Bachelor of Science in Computer Science (B.Sc.) — University of Calicut (SNDP Yogam College), Kerala (2013 – 2016)
- Publication: Issac, A. B. et al., "Segmentation of Complex Background Images Using Deep Learning," IJRTE, 2019.
\`;

function generateFallbackResponse(query) {
  const q = String(query || '').toLowerCase();
  if (q.includes('experience') || q.includes('work') || q.includes('year') || q.includes('company')) {
    return 'Ajay has **2 years and 8 months** of professional experience spanning both AI/ML and Full-Stack Web Development:\\n\\n• **AI/ML Intern** at AkumenbyQ (07/2026–Present) — Multi-agent systems, Hybrid RAG (FAISS + BM25), and smolagents.\\n• **Data Analyst & AI Engineer (Trainee)** at CADD Centre (09/2025–06/2026).\\n• **Full-Stack Web Developer** at MySolar Group Ltd., Canada (01/2023–12/2023) — MERN stack & CRM.\\n• **Back-End Developer** at Emvigo Technologies (11/2020–01/2021) & **Front-End Developer** at Kruxsoft Solutions (08/2019–10/2020).';
  }
  if (q.includes('rag') || q.includes('agent') || q.includes('ai') || q.includes('ml') || q.includes('yolo')) {
    return 'Ajay specializes in **Agentic AI, Hybrid RAG, and Computer Vision**:\\n\\n• **AI Employee Network:** Multi-agent autonomous workforce with task delegation, shared memory, and RAG tool calling.\\n• **Hybrid Search & RAG System:** Combines FAISS dense vector search + BM25 sparse search with Qwen2.5-72B.\\n• **Crop Disease Detection:** Custom YOLOv11 model trained on 2,832 leaf images across 9 classes (61.0% mAP@50) in Streamlit.\\n• **Published Research:** Deep learning CNN image segmentation paper in IJRTE (2019).';
  }
  if (q.includes('mern') || q.includes('web') || q.includes('react') || q.includes('node') || q.includes('full')) {
    return 'On the Full-Stack Web side, Ajay builds scalable apps with **React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS**:\\n\\n• **E-Commerce Platforms:** Built full MERN stores with OTP/JWT auth, Razorpay & Paytm gateways, and admin dashboards.\\n• **Cross-Platform Writing Assistant:** Chrome, MS Word & Outlook plugin using JavaScript, jQuery, AJAX, and ASP.NET APIs.\\n• **MySolar Group (Canada):** Built responsive React UIs, REST APIs, and CRM workflows.';
  }
  if (q.includes('edu') || q.includes('degree') || q.includes('college') || q.includes('cert') || q.includes('publish')) {
    return 'Ajay holds:\\n\\n• **PG Diploma in Web Design & Development** — Conestoga College, Canada (2021–2022)\\n• **Master of Computer Applications (MCA)** — Amrita Vishwa Vidyapeetham (2016–2019)\\n• **B.Sc. in Computer Science** — University of Calicut (2013–2016)\\n• **Publication:** IJRTE (2019) on Deep Learning Image Segmentation.';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('location')) {
    return 'You can reach Ajay Bazil Issac in **Kochi, Kerala, India**:\\n\\n• **Email:** ajaybazilissac93@gmail.com\\n• **Phone:** +91 7012792566\\n• **LinkedIn & GitHub:** Linked right in the Contact section!';
  }
  return "I'm Ajay's Resume AI Assistant! Ajay has **2 years and 8 months** of experience across **AI/ML Engineering** (Multi-Agent systems, FAISS + BM25 Hybrid RAG, YOLOv11) and **Full-Stack MERN Development** (React, Node.js, Express, MongoDB). Ask me about his projects, skills, work history, or education!";
}

module.exports = {
  RESUME_KNOWLEDGE_BASE,
  generateFallbackResponse
};
`,
);

writeFile(
  "backend/controllers/chatController.js",
  `/**
 * CONTROLLER: Chat Controller
 * Validates incoming user prompts, queries OpenRouter (Qwen 2.5 72B Free)
 * using the Resume Knowledge Base, and gracefully falls back if needed.
 */

const config = require('../config/env');
const { RESUME_KNOWLEDGE_BASE, generateFallbackResponse } = require('../models/resumeModel');

async function handleChatRequest(req, res) {
  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    const trimmedMessage = message.trim();

    if (!config.openRouterApiKey) {
      return res.json({
        reply: generateFallbackResponse(trimmedMessage),
        source: 'local-knowledge-base'
      });
    }

    const systemPrompt = \`You are the official AI Portfolio Assistant for Ajay Bazil Issac. Answer visitor questions strictly using the provided Resume Knowledge Base below. Be friendly, concise, professional, and helpful (2-5 short sentences or clean bullet points). If a visitor asks something not covered in his resumes, politely state that it's not mentioned in his resume and offer his contact email (ajaybazilissac93@gmail.com).\\n\\nKNOWLEDGE BASE:\\n\${RESUME_KNOWLEDGE_BASE}\`;

    const safeHistory = Array.isArray(history)
      ? history.slice(-6).map((item) => ({
          role: item.role === 'assistant' ? 'assistant' : 'user',
          content: String(item.text || item.content || '')
        }))
      : [];

    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: \`Bearer \${config.openRouterApiKey}\`,
        'Content-Type': 'application/json',
        'HTTP-Referer': config.clientOrigin,
        'X-Title': 'Ajay Bazil Issac Portfolio MVC Backend'
      },
      body: JSON.stringify({
        model: config.openRouterModel,
        messages: [
          { role: 'system', content: systemPrompt },
          ...safeHistory,
          { role: 'user', content: trimmedMessage }
        ],
        temperature: 0.3,
        max_tokens: 250,
        reasoning: { effort: 'none' }
      })
    });

    if (!openRouterResponse.ok) {
      throw new Error(\`OpenRouter returned status \${openRouterResponse.status}\`);
    }

    const data = await openRouterResponse.json();
    const replyText = data?.choices?.[0]?.message?.content;

    if (!replyText || !replyText.trim()) {
      throw new Error('Empty content from OpenRouter');
    }

    return res.json({
      reply: replyText.trim(),
      source: 'openrouter'
    });
  } catch (error) {
    console.warn('[ChatController Fallback]:', error.message);
    const fallbackReply = generateFallbackResponse(req.body?.message || '');
    return res.json({
      reply: fallbackReply,
      source: 'fallback-knowledge-base'
    });
  }
}

module.exports = { handleChatRequest };
`,
);

writeFile(
  "backend/routes/chatRoutes.js",
  `/**
 * ROUTES: API Endpoints
 */
const express = require('express');
const { handleChatRequest } = require('../controllers/chatController');

const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Ajay Portfolio MVC Backend' });
});

router.post('/chat', handleChatRequest);

module.exports = router;
`,
);

writeFile(
  "backend/server.js",
  `/**
 * SERVER ENTRY POINT: Express MVC Application
 */
const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(cors({ origin: config.clientOrigin }));
app.use(express.json({ limit: '1mb' }));

// Mount MVC API Routes
app.use('/api', chatRoutes);

app.listen(config.port, () => {
  console.log(\`MVC Backend running on http://localhost:\${config.port}\`);
});
`,
);

// ============================================================================
// 2. FRONTEND (REACT + VITE MVC ARCHITECTURE)
// ============================================================================

writeFile(
  "frontend/package.json",
  `{
  "name": "ajay-portfolio-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.0.0",
    "vite": "^6.0.0"
  }
}
`,
);

writeFile(
  "frontend/vite.config.js",
  `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
`,
);

writeFile(
  "frontend/index.html",
  `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ajay Bazil Issac — AI/ML Engineer &amp; Full-Stack Developer</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,
);

writeFile(
  "frontend/src/index.css",
  `@import "tailwindcss";
`,
);

writeFile(
  "frontend/src/main.jsx",
  `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
);

writeFile(
  "frontend/src/config/theme.js",
  `// ============================================================================
// YOUR PROFILE PHOTO: Place your photo in frontend/public/ajay-photo.jpg
// and set PROFILE_PHOTO_URL = '/ajay-photo.jpg'
// ============================================================================
export const PROFILE_PHOTO_URL = '';

export const THEME = {
  bg: '#FFFFFF',
  bgSubtle: '#F5F8FC',
  card: '#FFFFFF',
  text: '#1C2B33',
  textMuted: '#5B6E7D',
  textLight: '#7A8C99',
  border: '#E1E9F2',
  accent: '#0064E0',
  accentBright: '#0866FF',
  accentCyan: '#00C2FF',
  accentSoft: '#EBF4FF',
  accentText: '#FFFFFF',
  gradient: 'linear-gradient(135deg, #0064E0 0%, #0082FB 55%, #00C2FF 100%)',
  gradientSoft: 'linear-gradient(135deg, rgba(0, 100, 224, 0.08) 0%, rgba(0, 194, 255, 0.12) 100%)'
};
`,
);

writeFile(
  "frontend/src/models/portfolioModel.js",
  `export const PROJECTS = [
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
`,
);

writeFile(
  "frontend/src/services/chatService.js",
  `/**
 * SERVICE: Frontend API Client for MVC Backend (/api/chat)
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

export async function askPortfolioAssistant(message, history) {
  const response = await fetch(\`\${API_BASE_URL}/api/chat\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, history })
  });

  if (!response.ok) {
    throw new Error(\`Backend API error: \${response.status}\`);
  }

  return response.json();
}
`,
);

writeFile(
  "frontend/src/components/FadeUp.jsx",
  `import React, { useState, useEffect, useRef } from 'react';

export default function FadeUp({ children, delay = 0, className = '' }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={\`transition-all duration-700 ease-out \${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } \${className}\`}
      style={{ transitionDelay: \`\${delay}ms\` }}
    >
      {children}
    </div>
  );
}
`,
);

writeFile(
  "frontend/src/components/NeuronBackground.jsx",
  `import React, { useEffect, useRef } from 'react';

export default function NeuronBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const nodeCount = Math.min(48, Math.max(22, Math.floor((width * height) / 32000)));
    const connectionDist = 175;

    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.36,
      vy: (Math.random() - 0.5) * 0.36,
      radius: Math.random() * 1.8 + 1.8,
      pulsePhase: Math.random() * Math.PI * 2
    }));

    const signals = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulsePhase += 0.025;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dxMouse = mouse.x - n.x;
        const dyMouse = mouse.y - n.y;
        const distMouse = Math.hypot(dxMouse, dyMouse);
        if (distMouse < 200 && distMouse > 1) {
          n.x += (dxMouse / distMouse) * 0.25;
          n.y += (dyMouse / distMouse) * 0.25;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(b.x - a.x, b.y - a.y);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.24;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = \`rgba(0, 100, 224, \${alpha.toFixed(3)})\`;
            ctx.lineWidth = 1;
            ctx.stroke();

            if (signals.length < 16 && Math.random() < 0.00045) {
              signals.push({
                from: a,
                to: b,
                progress: 0,
                speed: 0.012 + Math.random() * 0.012
              });
            }
          }
        }
      }

      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;
        const edgeDist = Math.hypot(sig.to.x - sig.from.x, sig.to.y - sig.from.y);

        if (sig.progress >= 1 || edgeDist > connectionDist * 1.15) {
          signals.splice(s, 1);
          continue;
        }

        const px = sig.from.x + (sig.to.x - sig.from.x) * sig.progress;
        const py = sig.from.y + (sig.to.y - sig.from.y) * sig.progress;

        const glow = ctx.createRadialGradient(px, py, 0, px, py, 8);
        glow.addColorStop(0, 'rgba(0, 194, 255, 0.85)');
        glow.addColorStop(0.5, 'rgba(8, 102, 255, 0.35)');
        glow.addColorStop(1, 'rgba(0, 100, 224, 0)');

        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#0866FF';
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3.5 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = \`rgba(0, 130, 251, \${(0.07 + pulse * 0.05).toFixed(3)})\`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 100, 224, 0.55)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-75"
    />
  );
}
`,
);

writeFile(
  "frontend/src/components/Navbar.jsx",
  `import React from 'react';
import { THEME } from '../config/theme';

export default function Navbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-md shadow-2xs"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderBottom: \`1px solid \${THEME.border}\`
      }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#about"
          className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight shrink-0"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: THEME.gradient }}
          />
          <span>Ajay Bazil Issac</span>
        </a>

        <nav
          className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium"
          style={{ color: THEME.textMuted }}
        >
          <a href="#about" className="hover:text-[#0064E0] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#0064E0] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#0064E0] transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-[#0064E0] transition-colors">
            Experience
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: THEME.gradient,
              color: THEME.accentText
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
`,
);

writeFile(
  "frontend/src/components/ProjectModal.jsx",
  `import React from 'react';
import { X, Github } from 'lucide-react';
import { THEME } from '../config/theme';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl"
        style={{
          backgroundColor: THEME.card,
          border: \`1px solid \${THEME.border}\`,
          color: THEME.text
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: THEME.accentSoft, color: THEME.accent }}
            >
              {project.category}
            </span>
            <h3
              className="text-xl sm:text-2xl font-bold mt-2"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:opacity-70 cursor-pointer"
            style={{ backgroundColor: THEME.bgSubtle }}
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
          {project.overview}
        </p>

        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider" style={{ color: THEME.textLight }}>
            How It Works
          </div>
          <ul className="space-y-2 text-sm" style={{ color: THEME.textMuted }}>
            {project.architecture.map((step, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold" style={{ color: THEME.accent }}>
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-1 rounded-md"
              style={{ backgroundColor: THEME.bgSubtle, color: THEME.text }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <a
            href="https://github.com/Ajaybazilissac"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold"
            style={{ backgroundColor: THEME.accent, color: THEME.accentText }}
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
`,
);

writeFile(
  "frontend/src/components/ResumeChatbot.jsx",
  `import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, MessageSquare, Send, Bot, User } from 'lucide-react';
import { THEME } from '../config/theme';
import { SUGGESTED_QUESTIONS } from '../models/portfolioModel';
import { askPortfolioAssistant } from '../services/chatService';

export default function ResumeChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Ajay's AI Resume Assistant. Ask me anything about his AI/ML projects, Hybrid RAG systems, Full-Stack MERN work, experience, or education!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  const sendMessage = async (questionText) => {
    const trimmed = questionText.trim();
    if (!trimmed || isTyping) return;

    const updatedHistory = [...messages, { role: 'user', text: trimmed }];
    setMessages(updatedHistory);
    setInput('');
    setIsTyping(true);

    try {
      const data = await askPortfolioAssistant(trimmed, updatedHistory);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: data.reply || 'I could not retrieve a response right now. Please try again!'
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Unable to reach the backend server. Ensure the Express backend is running on port 5000, or email Ajay at ajaybazilissac93@gmail.com.'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{
            backgroundColor: THEME.card,
            border: \`1px solid \${THEME.border}\`,
            maxHeight: '520px'
          }}
        >
          <div
            className="px-4 py-3.5 flex items-center justify-between text-white shrink-0"
            style={{ background: THEME.gradient }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">Ask Ajay&apos;s AI</div>
                <div className="text-[11px] text-white/85 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>Grounded in 2 Resumes</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 text-sm"
            style={{ backgroundColor: THEME.bgSubtle, minHeight: '250px' }}
          >
            {messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={index}
                  className={\`flex items-start gap-2 \${isUser ? 'justify-end' : 'justify-start'}\`}
                >
                  {!isUser && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white"
                      style={{ background: THEME.gradient }}
                    >
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className="rounded-2xl px-3.5 py-2.5 max-w-[82%] leading-relaxed whitespace-pre-line text-xs sm:text-[13px] shadow-2xs"
                    style={
                      isUser
                        ? {
                            background: THEME.gradient,
                            color: '#FFFFFF',
                            borderBottomRightRadius: '4px'
                          }
                        : {
                            backgroundColor: THEME.card,
                            color: THEME.text,
                            border: \`1px solid \${THEME.border}\`,
                            borderBottomLeftRadius: '4px'
                          }
                    }
                  >
                    {msg.text}
                  </div>

                  {isUser && (
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: THEME.accentSoft, color: THEME.accent }}
                    >
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ background: THEME.gradient }}
                >
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div
                  className="px-3.5 py-2.5 rounded-2xl text-xs flex items-center gap-1"
                  style={{
                    backgroundColor: THEME.card,
                    border: \`1px solid \${THEME.border}\`,
                    color: THEME.textMuted
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#0064E0] animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div
            className="px-3 py-2 flex gap-1.5 overflow-x-auto shrink-0"
            style={{ backgroundColor: THEME.card, borderTop: \`1px solid \${THEME.border}\` }}
          >
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                disabled={isTyping}
                className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors cursor-pointer hover:opacity-80 disabled:opacity-50"
                style={{
                  backgroundColor: THEME.accentSoft,
                  color: THEME.accent
                }}
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-2.5 flex items-center gap-2 shrink-0"
            style={{ backgroundColor: THEME.card, borderTop: \`1px solid \${THEME.border}\` }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, RAG, MERN, roles..."
              className="flex-1 text-xs sm:text-sm px-3 py-2 rounded-xl outline-none"
              style={{
                backgroundColor: THEME.bgSubtle,
                color: THEME.text,
                border: \`1px solid \${THEME.border}\`
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-xl text-white transition-opacity disabled:opacity-40 cursor-pointer shrink-0"
              style={{ background: THEME.gradient }}
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full text-white font-semibold text-sm shadow-lg transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
        style={{ background: THEME.gradient }}
        aria-label="Open AI Resume Assistant"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4" />
            <span>Close Chat</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4" />
            <span>Ask AI About Ajay</span>
          </>
        )}
      </button>
    </div>
  );
}
`,
);

writeFile(
  "frontend/src/App.jsx",
  `import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight,
  Award
} from 'lucide-react';
import { THEME, PROFILE_PHOTO_URL } from './config/theme';
import {
  PROJECTS,
  SKILL_GROUPS,
  EXPERIENCE,
  EDUCATION,
  CERTIFICATIONS
} from './models/portfolioModel';
import Navbar from './components/Navbar';
import NeuronBackground from './components/NeuronBackground';
import FadeUp from './components/FadeUp';
import ProjectModal from './components/ProjectModal';
import ResumeChatbot from './components/ResumeChatbot';

export default function App() {
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [photoLoadError, setPhotoLoadError] = useState(false);
  const [copied, setCopied] = useState(false);

  const filteredProjects =
    projectFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.domain === projectFilter);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('ajaybazilissac93@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: THEME.bg,
        color: THEME.text,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <NeuronBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 inset-x-0 h-72 z-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0, 130, 251, 0.10), rgba(0, 194, 255, 0.03) 60%, transparent 100%)'
        }}
      />

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20 space-y-24 sm:space-y-28">
        {/* HERO SECTION */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center scroll-mt-24">
          <div className="md:col-span-7 space-y-6">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: THEME.gradientSoft,
                color: THEME.accent,
                border: '1px solid rgba(0, 100, 224, 0.16)'
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI/ML Engineer &amp; Full-Stack Web Developer</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Building intelligent AI systems &amp; scalable{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: THEME.gradient }}
              >
                full-stack web apps.
              </span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed" style={{ color: THEME.textMuted }}>
              Hi, I&apos;m <strong>Ajay Bazil Issac</strong>—an <strong>AI/ML Engineer</strong> and{' '}
              <strong>Full-Stack MERN Developer</strong> with <strong>2 years and 8 months</strong> of professional
              experience. I build autonomous multi-agent AI workflows, Hybrid RAG pipelines, and Computer Vision
              models alongside responsive, production-ready React &amp; Node.js applications.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#projects"
                className="px-5 py-3 rounded-xl text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 shadow-sm"
                style={{ background: THEME.gradient, color: THEME.accentText }}
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-[#F5F8FC]"
                style={{
                  backgroundColor: THEME.card,
                  color: THEME.text,
                  border: \`1px solid \${THEME.border}\`
                }}
              >
                Get In Touch
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2" style={{ color: THEME.textMuted }}>
              <a
                href="https://github.com/Ajaybazilissac"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span style={{ color: THEME.border }}>•</span>
              <a
                href="https://www.linkedin.com/in/ajay-bazil-issac-dataanalyst-aiengineer/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: THEME.border }}>•</span>
              <a
                href="mailto:ajaybazilissac93@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-75 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            <div
              className="rounded-2xl p-4 shadow-xs"
              style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
            >
              <div
                className="relative aspect-square rounded-xl overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: THEME.bgSubtle }}
              >
                {PROFILE_PHOTO_URL && !photoLoadError ? (
                  <img
                    src={PROFILE_PHOTO_URL}
                    alt="Ajay Bazil Issac — AI/ML Engineer & Full-Stack Developer"
                    onError={() => setPhotoLoadError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
                    <rect width="300" height="300" fill={THEME.bgSubtle} />
                    <circle cx="150" cy="135" r="88" fill={THEME.accentSoft} />
                    <circle
                      cx="150"
                      cy="116"
                      r="42"
                      fill={THEME.accent}
                      fillOpacity="0.16"
                      stroke={THEME.accent}
                      strokeWidth="2.5"
                    />
                    <path
                      d="M78 262C78 216 108 188 150 188C192 188 222 216 222 262"
                      fill={THEME.accent}
                      fillOpacity="0.12"
                      stroke={THEME.accent}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="212" cy="84" r="6" fill={THEME.accent} />
                    <circle cx="88" cy="96" r="4" fill={THEME.accent} fillOpacity="0.5" />
                  </svg>
                )}

                <div
                  className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 shadow-xs backdrop-blur-sm"
                  style={{
                    backgroundColor: \`\${THEME.card}F0\`,
                    color: THEME.text,
                    border: \`1px solid \${THEME.border}\`
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Open to AI/ML &amp; Full-Stack Roles</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div
                className="rounded-xl p-3"
                style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
              >
                <div className="font-bold text-sm" style={{ color: THEME.accent }}>
                  2 Yrs 8 Mos
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: THEME.textMuted }}>
                  Experience
                </div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
              >
                <div className="font-bold text-sm" style={{ color: THEME.accent }}>
                  AI + MERN
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: THEME.textMuted }}>
                  Dual Stack
                </div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
              >
                <div className="font-bold text-sm" style={{ color: THEME.accent }}>
                  1 IJRTE
                </div>
                <div className="text-[11px] mt-0.5" style={{ color: THEME.textMuted }}>
                  Publication
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <FadeUp>
          <section id="projects" className="space-y-8 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: THEME.accent }}>
                  Selected Work
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  AI/ML &amp; Full-Stack Web Projects
                </h2>
              </div>

              <div
                className="inline-flex items-center gap-1 p-1 rounded-xl"
                style={{ backgroundColor: THEME.bgSubtle, border: \`1px solid \${THEME.border}\` }}
              >
                {['All', 'AI & ML', 'Web Dev'].map((tab) => {
                  const isActive = projectFilter === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setProjectFilter(tab)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                      style={{
                        backgroundColor: isActive ? THEME.accent : 'transparent',
                        color: isActive ? THEME.accentText : THEME.textMuted
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs"
                  style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-md"
                        style={{ backgroundColor: THEME.accentSoft, color: THEME.accent }}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-medium" style={{ color: THEME.textLight }}>
                        {project.highlight}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold pt-1"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-md font-medium"
                          style={{ backgroundColor: THEME.bgSubtle, color: THEME.textMuted }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-75 cursor-pointer"
                      style={{ color: THEME.accent }}
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* SKILLS SECTION */}
        <FadeUp>
          <section id="skills" className="space-y-8 scroll-mt-24">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: THEME.accent }}>
                Capabilities
              </p>
              <h2
                className="text-2xl sm:text-3xl font-bold tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Technical Skills &amp; Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SKILL_GROUPS.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl p-6 space-y-4"
                  style={{ backgroundColor: THEME.bgSubtle, border: \`1px solid \${THEME.border}\` }}
                >
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4" style={{ color: THEME.accent }} />
                    <h3
                      className="font-bold text-base"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg"
                        style={{
                          backgroundColor: THEME.card,
                          color: THEME.text,
                          border: \`1px solid \${THEME.border}\`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <FadeUp>
          <section id="experience" className="space-y-10 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: THEME.accent }}>
                  Background
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Work Experience
                </h2>
              </div>

              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: THEME.accentSoft, color: THEME.accent }}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>2 Years, 8 Months Total Experience</span>
              </span>
            </div>

            <div className="space-y-5">
              {EXPERIENCE.map((item) => (
                <div
                  key={\`\${item.company}-\${item.period}\`}
                  className="rounded-2xl p-6 transition-colors"
                  style={{ backgroundColor: THEME.card, border: \`1px solid \${THEME.border}\` }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="text-lg font-bold"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {item.role}
                        </h3>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-md"
                          style={{ backgroundColor: THEME.bgSubtle, color: THEME.textMuted }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-sm font-medium mt-0.5" style={{ color: THEME.textMuted }}>
                        {item.company}
                      </p>
                    </div>

                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: item.current ? THEME.accentSoft : THEME.bgSubtle,
                        color: item.current ? THEME.accent : THEME.textMuted
                      }}
                    >
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-sm leading-relaxed" style={{ color: THEME.textMuted }}>
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span style={{ color: THEME.accent }}>•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div
                className="rounded-2xl p-6 space-y-4"
                style={{ backgroundColor: THEME.bgSubtle, border: \`1px solid \${THEME.border}\` }}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" style={{ color: THEME.accent }} />
                  <h3
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Education
                  </h3>
                </div>
                <div className="space-y-3.5">
                  {EDUCATION.map((edu) => (
                    <div key={edu.title}>
                      <div className="text-sm font-semibold">{edu.title}</div>
                      <div className="text-xs" style={{ color: THEME.textMuted }}>
                        {edu.institution} • {edu.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-6 space-y-5"
                style={{ backgroundColor: THEME.bgSubtle, border: \`1px solid \${THEME.border}\` }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" style={{ color: THEME.accent }} />
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Published Research
                    </h3>
                  </div>
                  <p className="text-sm font-semibold leading-snug">
                    &ldquo;Segmentation of Complex Background Images Using Deep Learning&rdquo;
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: THEME.textMuted }}>
                    Issac, A. B. et al. — International Journal of Recent Technology and Engineering (IJRTE), 2019.
                  </p>
                </div>

                <div className="space-y-2 pt-2" style={{ borderTop: \`1px solid \${THEME.border}\` }}>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" style={{ color: THEME.accent }} />
                    <h4
                      className="text-sm font-bold"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      Certifications
                    </h4>
                  </div>
                  <ul className="space-y-1 text-xs" style={{ color: THEME.textMuted }}>
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert} className="flex items-start gap-1.5">
                        <span style={{ color: THEME.accent }}>•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* CONTACT SECTION */}
        <FadeUp>
          <section id="contact" className="scroll-mt-24">
            <div
              className="rounded-3xl p-8 sm:p-10 text-center space-y-6"
              style={{ backgroundColor: THEME.bgSubtle, border: \`1px solid \${THEME.border}\` }}
            >
              <div className="space-y-2 max-w-xl mx-auto">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: THEME.accent }}>
                  Get In Touch
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Open to AI/ML Engineer &amp; Full-Stack Opportunities
                </h2>
                <p className="text-sm sm:text-base" style={{ color: THEME.textMuted }}>
                  Based in Kochi, Kerala, India — available for full-time roles, remote positions, and AI/web
                  engineering collaborations.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:ajaybazilissac93@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold shadow-sm transition-transform hover:-translate-y-0.5"
                  style={{ background: THEME.gradient, color: THEME.accentText }}
                >
                  <Mail className="w-4 h-4" />
                  <span>ajaybazilissac93@gmail.com</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
                  style={{
                    backgroundColor: THEME.card,
                    color: THEME.text,
                    border: \`1px solid \${THEME.border}\`
                  }}
                >
                  {copied ? <Check className="w-4 h-4" style={{ color: THEME.accent }} /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div
                className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs sm:text-sm font-medium"
                style={{ color: THEME.textMuted }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-4 h-4" style={{ color: THEME.accent }} />
                  +91 7012792566
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" style={{ color: THEME.accent }} />
                  Kochi, Kerala, India
                </span>
                <a
                  href="https://www.linkedin.com/in/ajay-bazil-issac-dataanalyst-aiengineer/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                  style={{ color: THEME.accent }}
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/Ajaybazilissac"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:underline"
                  style={{ color: THEME.accent }}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>
        </FadeUp>
      </main>

      <footer
        className="relative z-10 py-8 px-5 text-center text-xs bg-white/80 backdrop-blur-xs"
        style={{ borderTop: \`1px solid \${THEME.border}\`, color: THEME.textLight }}
      >
        © 2026 Ajay Bazil Issac • AI/ML Engineer &amp; Full-Stack Web Developer
      </footer>

      <ResumeChatbot />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
`,
);

console.log(
  "\n====================================================================",
);
console.log(
  "SUCCESS! Full-Stack MVC Portfolio created in ./backend & ./frontend",
);
console.log(
  "====================================================================",
);
console.log("Next steps:");
console.log(
  "1. cd backend && cp .env.example .env (add your OPENROUTER_API_KEY)",
);
console.log("2. npm install && npm run dev");
console.log(
  "3. Open a second terminal: cd frontend && npm install && npm run dev",
);
