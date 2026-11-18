import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    jobTitle: 'Senior Data Engineer / AI Engineer',
    company: 'NTT DATA, Inc.',
    startDate: 'Apr 2026',
    endDate: 'Present',
    descriptionlist: [
      'Client project: Honeywell Technologies (Jun 2026–Sep 2026) — built an AI-driven contract risk analysis platform using LangGraph on Azure Databricks, automating contract PDF processing and legal risk assessment and improving processing efficiency by 70%.',
      'Designed specialized Contract Term Extraction, Risk Analysis, and Auto-Approval agents, coordinated by a central Captain Agent.',
      'Implemented extraction and classification of Indemnity, IP Ownership, Liability, Payment Terms, and Warranty clauses; engineered prompts and workflows to achieve 80–85% accuracy in term classification and risk scoring.',
      'Enabled parallel GPT-5.2 processing across LangGraph agents through Azure AI Foundry, reducing end-to-end processing and risk heatmap generation time.',
      'Developed Flask REST API microservices and deployed them on Azure App Service; integrated risk assessments with Agiloft CLM through the LEAP Gateway.',
      'Mapped Low, Medium, and High AI risk scores to business approval decisions, reducing manual legal review by 70% and speeding up low-risk approvals by 3 days.',
      'Tech stack: Python, LangGraph, LangChain, GPT-5.2, Azure AI Foundry, Azure Databricks, Azure App Service, Flask, REST APIs, Agiloft CLM.'
    ]
  },
  {
    jobTitle: 'AI Engineer',
    company: 'Simplifi Dentistry Solutions India Pvt Ltd',
    startDate: 'Oct 2025',
    endDate: 'Jan 2026',
    descriptionlist: [
      'Automated patient data extraction from insurance portals with Playwright, converting unstructured data into structured insurance forms and saving 50% of processing time.',
      'Designed end-to-end RAG pipelines to retrieve and summarize patient treatment records, reducing manual lookup effort by 60%.',
      'Integrated LLM document classification to tag and route 1,000+ insurance claims, improving processing accuracy by 15% and reducing turnaround time by 40%.',
      'Developed FastAPI microservices and C#/.NET backend components, with REST integrations to connect Python AI services to dental practice management systems.',
      'Tech stack: Python, C#, .NET, FastAPI, RAG, LLMs, CrewAI, synthetic data generation, Kubernetes, Playwright, REST APIs.'
    ]
  },
  {
    jobTitle: 'AI & Computer Vision Engineer',
    company: 'Futops Technologies, Pune',
    startDate: 'Oct 2022',
    endDate: 'Aug 2025',
    descriptionlist: [
      'Designed a traffic surveillance system for helmet violations, triple riding, and red-light violations, achieving 81% detection accuracy.',
      'Implemented a best-snapshot technique that improved object detection accuracy from 40% to 75%. (SPOT Award)',
      'Optimized a face recognition system to 95% recognition accuracy and 90% detection accuracy, with age, gender, and mask detection at 30–35 ms inference time.',
      'Developed a real-time assistive AI system for visually impaired users on AWS, achieving 82% accuracy with a scalable cloud-native architecture.',
      'Implemented panoramic 360° CCTV imaging and low-light image stitching using OpenCV and GStreamer. (SPOT Award)',
      'Developed an agentic lead-generation system using n8n, Apollo.io, Apify Scraper, LinkedIn, and company data to identify, analyze, and qualify 500+ potential leads.',
      'Automated personalized outreach and follow-up email generation, reducing manual prospecting effort by 80%.',
      'Built a private, locally hosted company website chatbot using LangChain and DeepSeek (14B), served through Ollama with CUDA acceleration, improving response time by 50%.',
      'Tech stack: Python, OpenCV, YOLO, PyTorch, TensorRT, ONNX, OpenVINO, GStreamer, AWS, GCP, Vision Transformers, GANs, Stable Diffusion, LoRA, Hugging Face, LangChain, LlamaIndex, FAISS, Pinecone, Qdrant, Ollama, n8n, CUDA.'
    ]
  },
  {
    jobTitle: 'AI Engineer',
    company: 'AI4SEE Pvt. Ltd, Bangalore',
    startDate: 'Feb 2021',
    endDate: 'Sep 2022',
    descriptionlist: [
      'Developed a Flutter rope-jump counter using TensorFlow Lite for real-time pose estimation, motion analysis, and jump counting, processing up to 120 jumps per minute.',
      'Built a mobile application for direct farmer-to-retailer sales, increasing sales by 20%.',
      'Implemented a regression-based model to forecast product prices five days in advance.',
      'Integrated three machine learning models into mobile applications, delivering real-time AI functionality and improving user engagement by 25%.',
      'Tech stack: Python, TensorFlow Lite, Flutter, regression, Scikit-learn.'
    ]
  }
];
