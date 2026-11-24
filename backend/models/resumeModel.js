/**
 * MODEL: Resume Knowledge Base & Deterministic Fallback Matcher
 * Stores structured facts from both Ajay's AI/ML and Full-Stack MERN resumes.
 */

const RESUME_KNOWLEDGE_BASE = `
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
`;

function generateFallbackResponse(query) {
  const q = String(query || '').toLowerCase();
  if (q.includes('experience') || q.includes('work') || q.includes('year') || q.includes('company')) {
    return 'Ajay has **2 years and 8 months** of professional experience spanning both AI/ML and Full-Stack Web Development:\n\n• **AI/ML Intern** at AkumenbyQ (07/2026–Present) — Multi-agent systems, Hybrid RAG (FAISS + BM25), and smolagents.\n• **Data Analyst & AI Engineer (Trainee)** at CADD Centre (09/2025–06/2026).\n• **Full-Stack Web Developer** at MySolar Group Ltd., Canada (01/2023–12/2023) — MERN stack & CRM.\n• **Back-End Developer** at Emvigo Technologies (11/2020–01/2021) & **Front-End Developer** at Kruxsoft Solutions (08/2019–10/2020).';
  }
  if (q.includes('rag') || q.includes('agent') || q.includes('ai') || q.includes('ml') || q.includes('yolo')) {
    return 'Ajay specializes in **Agentic AI, Hybrid RAG, and Computer Vision**:\n\n• **AI Employee Network:** Multi-agent autonomous workforce with task delegation, shared memory, and RAG tool calling.\n• **Hybrid Search & RAG System:** Combines FAISS dense vector search + BM25 sparse search with Qwen2.5-72B.\n• **Crop Disease Detection:** Custom YOLOv11 model trained on 2,832 leaf images across 9 classes (61.0% mAP@50) in Streamlit.\n• **Published Research:** Deep learning CNN image segmentation paper in IJRTE (2019).';
  }
  if (q.includes('mern') || q.includes('web') || q.includes('react') || q.includes('node') || q.includes('full')) {
    return 'On the Full-Stack Web side, Ajay builds scalable apps with **React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS**:\n\n• **E-Commerce Platforms:** Built full MERN stores with OTP/JWT auth, Razorpay & Paytm gateways, and admin dashboards.\n• **Cross-Platform Writing Assistant:** Chrome, MS Word & Outlook plugin using JavaScript, jQuery, AJAX, and ASP.NET APIs.\n• **MySolar Group (Canada):** Built responsive React UIs, REST APIs, and CRM workflows.';
  }
  if (q.includes('edu') || q.includes('degree') || q.includes('college') || q.includes('cert') || q.includes('publish')) {
    return 'Ajay holds:\n\n• **PG Diploma in Web Design & Development** — Conestoga College, Canada (2021–2022)\n• **Master of Computer Applications (MCA)** — Amrita Vishwa Vidyapeetham (2016–2019)\n• **B.Sc. in Computer Science** — University of Calicut (2013–2016)\n• **Publication:** IJRTE (2019) on Deep Learning Image Segmentation.';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('location')) {
    return 'You can reach Ajay Bazil Issac in **Kochi, Kerala, India**:\n\n• **Email:** ajaybazilissac93@gmail.com\n• **Phone:** +91 7012792566\n• **LinkedIn & GitHub:** Linked right in the Contact section!';
  }
  return "I'm Ajay's Resume AI Assistant! Ajay has **2 years and 8 months** of experience across **AI/ML Engineering** (Multi-Agent systems, FAISS + BM25 Hybrid RAG, YOLOv11) and **Full-Stack MERN Development** (React, Node.js, Express, MongoDB). Ask me about his projects, skills, work history, or education!";
}

module.exports = {
  RESUME_KNOWLEDGE_BASE,
  generateFallbackResponse
};
