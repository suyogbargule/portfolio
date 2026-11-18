import { Skill } from '@/types';
import { skills } from '@/data/skills';
import { publicAssetPath } from '@/lib/publicAssetPath';

type SkillGroup = {
  category: string;
  folder: string;
  sourceId: number;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: 'Generative AI & LLMs',
    folder: 'generative-ai',
    sourceId: 1,
    items: [
      'Large Language Models (LLMs)',
      'Generative AI',
      'Agentic AI',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'LoRA Fine-Tuning',
      'Multimodal AI',
      'Synthetic Data Generation',
      'Stable Diffusion',
      'OpenAI GPT-4.5',
      'OpenAI GPT-5',
      'OpenAI GPT-5.2',
      'Google Gemini',
      'LLaMA',
      'DeepSeek',
      'Ollama'
    ]
  },
  {
    category: 'Agent Frameworks & Orchestration',
    folder: 'agent-frameworks',
    sourceId: 2,
    items: [
      'LangChain',
      'LangGraph',
      'LangSmith',
      'LangFlow',
      'LlamaIndex',
      'CrewAI',
      'Multi-Agent Systems',
      'Agent Orchestration',
      'n8n'
    ]
  },
  {
    category: 'Vector Databases & Retrieval',
    folder: 'vector-retrieval',
    sourceId: 3,
    items: [
      'FAISS',
      'Pinecone',
      'Qdrant',
      'Vector Search',
      'Semantic Search',
      'Embedding-Based Retrieval'
    ]
  },
  {
    category: 'Computer Vision',
    folder: 'computer-vision',
    sourceId: 4,
    items: [
      'OpenCV',
      'YOLO v5',
      'YOLO v7',
      'YOLO v8',
      'YOLO v11',
      'Object Detection',
      'Image Segmentation',
      'Face Recognition',
      'OCR',
      'Real-Time Video Analytics',
      'Low-Light Imaging',
      'Panoramic Image Stitching',
      'GStreamer',
      'Vision Transformers (ViTs)'
    ]
  },
  {
    category: 'Machine Learning & Deep Learning',
    folder: 'machine-learning',
    sourceId: 5,
    items: [
      'PyTorch',
      'TensorFlow',
      'TensorFlow Lite',
      'Keras',
      'Scikit-learn',
      'CNNs',
      'GANs',
      'Supervised Learning',
      'Unsupervised Learning',
      'Regression',
      'Classification',
      'Model Evaluation',
      'NumPy',
      'Pandas'
    ]
  },
  {
    category: 'Natural Language Processing (NLP)',
    folder: 'nlp',
    sourceId: 6,
    items: [
      'NLP',
      'Hugging Face Transformers',
      'Text Classification',
      'Document Classification',
      'Information Extraction',
      'Text Summarization'
    ]
  },
  {
    category: 'Programming Languages',
    folder: 'programming-languages',
    sourceId: 7,
    items: ['Python', 'C#', 'C++', 'JavaScript', 'SQL']
  },
  {
    category: 'Backend & Integration',
    folder: 'backend-integration',
    sourceId: 8,
    items: [
      'FastAPI',
      'Flask',
      '.NET (C#)',
      'REST APIs',
      'Microservices Architecture',
      'API Development',
      'API Integration',
      'Playwright (Web Automation)',
      'Flutter'
    ]
  },
  {
    category: 'Databases',
    folder: 'databases',
    sourceId: 9,
    items: ['PostgreSQL', 'MongoDB', 'SQL']
  },
  {
    category: 'Cloud Platforms',
    folder: 'cloud-platforms',
    sourceId: 10,
    items: [
      'Microsoft Azure',
      'Azure App Service',
      'Azure AI Foundry',
      'Azure Databricks',
      'Amazon Web Services (AWS)',
      'AWS Bedrock',
      'Google Cloud Platform (GCP)'
    ]
  },
  {
    category: 'MLOps & Deployment',
    folder: 'mlops-deployment',
    sourceId: 11,
    items: [
      'Docker',
      'Kubernetes (K8s)',
      'ONNX',
      'ONNX Runtime',
      'TensorRT',
      'OpenVINO',
      'CUDA',
      'Model Optimization',
      'Edge AI Deployment'
    ]
  },
  {
    category: 'Development Tools',
    folder: 'developer-tools',
    sourceId: 12,
    items: ['Git', 'GitHub', 'Linux', 'Visual Studio Code']
  },
  {
    category: 'Domain Expertise',
    folder: 'domain-expertise',
    sourceId: 13,
    items: [
      'Contract Lifecycle Management (CLM)',
      'Legal AI',
      'Healthcare & Dental Automation',
      'Insurance & Claims Processing',
      'Traffic Management',
      'Intelligent Transportation Systems (ITS)',
      'Enterprise AI Automation'
    ]
  }
];

const skillFolderOverrides: Record<string, string> = {
  'C#': 'c-sharp',
  'C++': 'cpp',
  '.NET (C#)': 'dotnet-csharp'
};

const skillFolderName = (title: string) =>
  skillFolderOverrides[title]
  || title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const skillImagePath = (categoryFolder: string, title: string) =>
  publicAssetPath(`/images/skill/${categoryFolder}/${skillFolderName(title)}/cover.svg?v=2`);

type IndividualSkillDetails = {
  summary: string;
  projectlist?: string[];
  versionlist?: string[];
};

const individualSkillDetails: Record<string, IndividualSkillDetails> = {
  'Large Language Models (LLMs)': {
    summary: 'Applied LLMs to contract clause analysis, patient-record summarization, and a locally hosted company chatbot.',
    projectlist: [
      'AI-driven contract risk analysis platform for Honeywell Technologies',
      'Private company-website chatbot using DeepSeek 14B and Ollama',
      'Patient treatment-record retrieval and summarization'
    ],
    versionlist: ['GPT-5.2 for parallel contract-clause analysis', 'DeepSeek 14B for the local chatbot']
  },
  'Generative AI': {
    summary: 'Built generative AI features for legal contract analysis, locally hosted chat, and automated lead outreach that reduced manual prospecting effort by 80%.',
    projectlist: [
      'AI-driven contract risk analysis platform for Honeywell Technologies',
      'Private company-website chatbot using DeepSeek 14B and Ollama',
      'AI lead-generation and personalized outreach workflow'
    ]
  },
  'Agentic AI': {
    summary: 'Designed agentic workflows to coordinate contract extraction, risk analysis, approval decisions, and lead qualification. The contract platform reduced manual legal review by 70%.',
    projectlist: [
      'AI-driven contract risk analysis platform for Honeywell Technologies',
      'AI lead-generation system for qualifying 500+ prospects'
    ],
    versionlist: ['Contract platform used a Captain Agent with specialized extraction, risk-analysis, and auto-approval agents']
  },
  'Retrieval-Augmented Generation (RAG)': {
    summary: 'Built RAG pipelines to retrieve and summarize patient treatment records, reducing manual lookup effort by 60%.',
    projectlist: ['Patient treatment-record retrieval and summarization at Simplifi Dentistry']
  },
  'Prompt Engineering': {
    summary: 'Created LLM prompt templates for contract-term classification and risk scoring, reaching 80-85% reported accuracy.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  'OpenAI GPT-4.5': {
    summary: 'Listed in the resume as a generative AI model; the resume does not identify a project using this model.',
    versionlist: ['GPT-4.5']
  },
  'OpenAI GPT-5': {
    summary: 'Listed in the resume as a generative AI model; the resume does not identify a project using this model.',
    versionlist: ['GPT-5']
  },
  'OpenAI GPT-5.2': {
    summary: 'Used parallel GPT-5.2 processing across LangGraph agents to analyze contract clauses and generate risk assessments.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies'],
    versionlist: ['GPT-5.2']
  },
  DeepSeek: {
    summary: 'Served a private DeepSeek chatbot locally through Ollama with CUDA acceleration, improving response time by 50%.',
    projectlist: ['Private company-website chatbot'],
    versionlist: ['DeepSeek 14B']
  },
  Ollama: {
    summary: 'Hosted a private company-website chatbot locally, serving DeepSeek 14B with CUDA acceleration.',
    projectlist: ['Private company-website chatbot'],
    versionlist: ['DeepSeek 14B served through Ollama']
  },
  LangChain: {
    summary: 'Used LangChain to build a private company-website chatbot. The resume does not identify which framework was used for the separate treatment-record RAG pipeline.',
    projectlist: ['Private company-website chatbot using DeepSeek 14B and Ollama']
  },
  LangGraph: {
    summary: 'Orchestrated the multi-agent contract-analysis workflow on Azure Databricks, including parallel clause analysis.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies'],
    versionlist: ['Captain Agent coordinated the term-extraction, risk-analysis, and auto-approval agents']
  },
  CrewAI: {
    summary: 'Listed in the dental AI services technology stack; the resume does not name a specific CrewAI workflow.',
    projectlist: ['Simplifi Dentistry AI services (CrewAI is listed in the role technology stack)']
  },
  'Multi-Agent Systems': {
    summary: 'Built a multi-agent contract platform with specialized agents for clause extraction, risk analysis, and approval.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  'Agent Orchestration': {
    summary: 'Coordinated specialized agents to analyze clauses in parallel and map risk scores to approval decisions.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  n8n: {
    summary: 'Automated lead discovery, qualification, personalized outreach, and follow-up generation.',
    projectlist: ['AI lead-generation system for qualifying 500+ prospects']
  },
  OpenCV: {
    summary: 'Used OpenCV for computer-vision systems and panoramic 360-degree CCTV imaging, including low-light image stitching.',
    projectlist: [
      'Traffic surveillance and violation detection',
      'Panoramic 360-degree CCTV imaging and low-light image stitching'
    ]
  },
  'YOLO v5': {
    summary: 'YOLO is listed in the resume technology stack for traffic-surveillance detection; the resume does not tie a specific YOLO version to that project.',
    projectlist: ['Traffic surveillance for helmet, triple-riding, and red-light violations'],
    versionlist: ['YOLO v5 is listed in the resume skills profile']
  },
  'YOLO v7': {
    summary: 'YOLO is listed in the resume technology stack for traffic-surveillance detection; the resume does not tie a specific YOLO version to that project.',
    projectlist: ['Traffic surveillance for helmet, triple-riding, and red-light violations'],
    versionlist: ['YOLO v7 is listed in the resume skills profile']
  },
  'YOLO v8': {
    summary: 'YOLO is listed in the resume technology stack for traffic-surveillance detection; the resume does not tie a specific YOLO version to that project.',
    projectlist: ['Traffic surveillance for helmet, triple-riding, and red-light violations'],
    versionlist: ['YOLO v8 is listed in the resume skills profile']
  },
  'YOLO v11': {
    summary: 'YOLO is listed in the resume technology stack for traffic-surveillance detection; the resume does not tie a specific YOLO version to that project.',
    projectlist: ['Traffic surveillance for helmet, triple-riding, and red-light violations'],
    versionlist: ['YOLO v11 is listed in the resume skills profile']
  },
  'Object Detection': {
    summary: 'Built traffic-violation detection and improved detection accuracy from 40% to 75% with a best-snapshot technique.',
    projectlist: ['Traffic surveillance for helmet, triple-riding, and red-light violations']
  },
  'Face Recognition': {
    summary: 'Optimized face recognition to 95% recognition and 90% detection accuracy, with age, gender, and mask detection at 30-35 ms inference time.',
    projectlist: ['Face recognition and analytics system']
  },
  'Real-Time Video Analytics': {
    summary: 'Developed real-time video analytics for traffic violations and face recognition.',
    projectlist: [
      'Traffic surveillance for helmet, triple-riding, and red-light violations',
      'Face recognition and analytics system'
    ]
  },
  'Low-Light Imaging': {
    summary: 'Implemented low-light image stitching for CCTV footage as part of panoramic imaging work.',
    projectlist: ['Panoramic 360-degree CCTV imaging and low-light image stitching']
  },
  'Panoramic Image Stitching': {
    summary: 'Implemented panoramic 360-degree CCTV imaging and image stitching with OpenCV and GStreamer.',
    projectlist: ['Panoramic 360-degree CCTV imaging and low-light image stitching']
  },
  GStreamer: {
    summary: 'Used GStreamer with OpenCV for panoramic CCTV imaging and low-light image stitching.',
    projectlist: ['Panoramic 360-degree CCTV imaging and low-light image stitching']
  },
  'TensorFlow Lite': {
    summary: 'Built a Flutter rope-jump counter using TensorFlow Lite pose estimation, motion analysis, and jump counting at up to 120 jumps per minute.',
    projectlist: ['Flutter-based rope-jump counter']
  },
  'Scikit-learn': {
    summary: 'Used regression modeling to forecast product prices five days in advance.',
    projectlist: ['Farmer-to-retailer mobile application and product price forecasting']
  },
  Regression: {
    summary: 'Implemented regression-based price prediction to forecast product prices five days ahead.',
    projectlist: ['Farmer-to-retailer mobile application and product price forecasting']
  },
  Classification: {
    summary: 'Applied classification to automate contract-term assessment and insurance-claim document routing.',
    projectlist: [
      'AI-driven contract risk analysis platform for Honeywell Technologies',
      'Insurance-claim tagging and routing for 1,000+ claims'
    ],
    versionlist: ['Contract-term classification and risk scoring reached 80-85% reported accuracy']
  },
  'Document Classification': {
    summary: 'Automated tagging and routing for 1,000+ insurance claims, improving processing accuracy by 15% and reducing turnaround time by 40%.',
    projectlist: ['Insurance-claim tagging and routing at Simplifi Dentistry']
  },
  'Information Extraction': {
    summary: 'Extracted and classified legal clauses from contract PDFs and structured patient information from insurance portals.',
    projectlist: [
      'AI-driven contract risk analysis platform for Honeywell Technologies',
      'Patient insurance-portal data extraction at Simplifi Dentistry'
    ]
  },
  'Text Summarization': {
    summary: 'Built RAG pipelines to retrieve and summarize patient treatment records, reducing manual lookup effort by 60%.',
    projectlist: ['Patient treatment-record retrieval and summarization at Simplifi Dentistry']
  },
  Python: {
    summary: 'Used Python across AI/ML, computer vision, RAG, web automation, and backend microservices projects.',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Dental insurance and treatment-record automation',
      'Traffic surveillance and computer-vision systems'
    ]
  },
  'C#': {
    summary: 'Built C#/.NET backend components and integrated them with Python-based AI services for dental practice workflows.',
    projectlist: ['Dental practice management and insurance automation']
  },
  'FastAPI': {
    summary: 'Developed FastAPI microservices to expose AI capabilities and integrate with dental practice management systems.',
    projectlist: ['Dental insurance and treatment-record automation']
  },
  Flask: {
    summary: 'Developed Flask REST microservices on Azure App Service to expose contract risk assessments and agent outputs.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  '.NET (C#)': {
    summary: 'Built .NET backend components and integrated them with Python AI services for dental practice management.',
    projectlist: ['Dental practice management and insurance automation']
  },
  'REST APIs': {
    summary: 'Built REST APIs for contract risk services and integrations between Python AI services and C#/.NET applications.',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Dental practice management and insurance automation'
    ]
  },
  'Microservices Architecture': {
    summary: 'Developed Python-based AI microservices and integrated them with enterprise and dental practice systems.',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Dental practice management and insurance automation'
    ]
  },
  'Playwright (Web Automation)': {
    summary: 'Automated extraction of patient data from insurance portals and converted unstructured information into structured forms.',
    projectlist: ['Patient insurance-portal data extraction at Simplifi Dentistry']
  },
  Flutter: {
    summary: 'Built a TensorFlow Lite rope-jump counter and a farmer-to-retailer sales app; the latter increased sales by 20%.',
    projectlist: [
      'Flutter-based rope-jump counter',
      'Direct farmer-to-retailer sales application'
    ]
  },
  'Azure App Service': {
    summary: 'Hosted Flask REST microservices that expose AI-generated contract risk assessments and agent outputs.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  'Azure AI Foundry': {
    summary: 'Ran parallel GPT-5.2 processing across LangGraph agents for contract-clause analysis and risk assessment.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies'],
    versionlist: ['GPT-5.2']
  },
  'Azure Databricks': {
    summary: 'Hosted a LangGraph multi-agent platform that processes contract PDFs and generates legal risk assessments.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  'Amazon Web Services (AWS)': {
    summary: 'Deployed a real-time assistive AI system for visually impaired users on AWS.',
    projectlist: ['AWS-based assistive AI system for visually impaired users']
  },
  'Kubernetes (K8s)': {
    summary: 'Included Kubernetes in the deployment stack for AI microservices and dental workflow integrations.',
    projectlist: ['Dental insurance and treatment-record automation']
  },
  CUDA: {
    summary: 'Used CUDA acceleration to serve the locally hosted DeepSeek chatbot; CUDA is also listed in the computer-vision deployment stack.',
    projectlist: ['Private company-website chatbot']
  },
  'Contract Lifecycle Management (CLM)': {
    summary: 'Integrated AI-generated contract risk assessments with Agiloft CLM through the LEAP Gateway.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies']
  },
  'Legal AI': {
    summary: 'Automated legal-clause extraction, risk assessment, and approval routing for enterprise contracts.',
    projectlist: ['AI-driven contract risk analysis platform for Honeywell Technologies'],
    versionlist: ['Indemnity, IP ownership, liability, payment terms, and warranty clauses']
  },
  'Healthcare & Dental Automation': {
    summary: 'Automated patient data extraction, treatment-record retrieval, and dental practice integrations.',
    projectlist: ['Dental insurance and treatment-record automation at Simplifi Dentistry']
  },
  'Insurance & Claims Processing': {
    summary: 'Automated insurance data extraction and document routing for 1,000+ claims, improving accuracy by 15% and turnaround time by 40%.',
    projectlist: ['Dental insurance and claims automation at Simplifi Dentistry']
  },
  'Traffic Management': {
    summary: 'Built traffic surveillance to detect helmet violations, triple riding, and red-light violations with 81% detection accuracy.',
    projectlist: ['Traffic surveillance and violation detection']
  },
  'Intelligent Transportation Systems (ITS)': {
    summary: 'Developed computer-vision traffic surveillance for helmet, triple-riding, and red-light violations.',
    projectlist: ['Traffic surveillance and violation detection']
  },
  'Enterprise AI Automation': {
    summary: 'Integrated AI services with enterprise contract and dental workflows, including automated assessment and routing.',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Dental insurance and treatment-record automation'
    ]
  }
};

const sourceSkillsById = new Map(skills.map((skill) => [skill.id, skill] as const));
const sourceSkillsByTitle = new Map(skills.map((skill) => [skill.title, skill] as const));
let nextIndividualSkillId = Math.max(...skills.map(({ id }) => id)) + 1;

export const skillCategories = skillGroups.map(({ category }) => category);

export const individualSkills: Skill[] = skillGroups.flatMap((group) => {
  const categorySource = sourceSkillsById.get(group.sourceId);

  if (!categorySource) {
    throw new Error(`Missing source skill for ${group.category}`);
  }

  return group.items.map((title) => {
    const details = individualSkillDetails[title];
    const dedicatedSource = sourceSkillsByTitle.get(title);
    const source = dedicatedSource || categorySource;
    const imageUrl = skillImagePath(group.folder, title);

    return {
      ...source,
      id: nextIndividualSkillId++,
      title,
      imageUrl,
      thumbnailUrl: imageUrl,
      category: group.category,
      summary: details?.summary
        || dedicatedSource?.summary
        || `${categorySource.summary} The shared resume lists ${title} in this category but does not describe a separate project or implementation for it.`,
      projectlist: details?.projectlist || dedicatedSource?.projectlist || [],
      versionlist: details?.versionlist || dedicatedSource?.versionlist || [],
      featureslist: dedicatedSource?.featureslist?.length
        ? dedicatedSource.featureslist
        : categorySource.featureslist
    };
  });
});

export const allSkills: Skill[] = [...skills, ...individualSkills];

export const featuredSkills: Skill[] = skillGroups.flatMap((group) => {
  const categorySkill = individualSkills.find((skill) => skill.category === group.category);
  return categorySkill ? [categorySkill] : [];
});
