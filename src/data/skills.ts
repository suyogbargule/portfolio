import { Skill } from '@/types';
import { publicAssetPath } from '@/lib/publicAssetPath';

const skillImage = (skill: string, image: 'icon' | 'cover', extension: 'png' | 'svg' = 'png') =>
  publicAssetPath(`/images/skill/${skill}/${image}.${extension}`);

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Generative AI & LLMs',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('generative-ai', 'cover'),
    imageUrl: skillImage('generative-ai', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Private, locally hosted AI chatbot',
      'AI-powered lead generation'
    ],
    versionlist: [
      'Large Language Models (LLMs)',
      'Generative AI and Agentic AI',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt engineering and LoRA fine-tuning',
      'Multimodal AI and synthetic data generation'
    ],
    featureslist: [
      'OpenAI GPT-4.5, GPT-5, GPT-5.2',
      'Google Gemini',
      'LLaMA, DeepSeek, Ollama',
      'Stable Diffusion'
    ],
    summary: 'Builds practical generative AI solutions, including locally hosted chatbots, agentic automation, and contract analysis workflows.',
    content: ''
  },
  {
    id: 2,
    title: 'Agent Frameworks & Orchestration',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('agent-frameworks', 'cover'),
    imageUrl: skillImage('agent-frameworks', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis platform',
      'Agentic AI lead generation system',
      'AI chatbot workflows'
    ],
    versionlist: [
      'Multi-agent systems',
      'Agent orchestration and workflow design',
      'Tool calling, stateful flows, and task automation'
    ],
    featureslist: [
      'LangChain',
      'LangGraph',
      'LangSmith',
      'LangFlow',
      'LlamaIndex',
      'CrewAI',
      'n8n'
    ],
    summary: 'Uses agent frameworks and workflow orchestration to connect language models, tools, and business processes. Experience includes a multi-agent contract risk analysis system and automated lead-generation workflows.',
    content: ''
  },
  {
    id: 3,
    title: 'Vector Databases & Retrieval',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('vector-retrieval', 'cover'),
    imageUrl: skillImage('vector-retrieval', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Patient treatment-record retrieval and summarization',
      'RAG-based AI applications'
    ],
    versionlist: [
      'Vector search',
      'Semantic search',
      'Embedding-based retrieval',
      'Retrieval-Augmented Generation (RAG)'
    ],
    featureslist: [
      'FAISS',
      'Pinecone',
      'Qdrant'
    ],
    summary: 'Builds retrieval workflows that connect language models with relevant source information. Resume projects include RAG pipelines for retrieving and summarizing patient treatment records; the resume does not name a vector database for that project.',
    content: ''
  },
  {
    id: 4,
    title: 'Computer Vision',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('computer-vision', 'cover'),
    imageUrl: skillImage('computer-vision', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Traffic surveillance and violation detection',
      'Face recognition and analytics',
      'Assistive AI for visually impaired users',
      'Panoramic and low-light CCTV imaging'
    ],
    versionlist: [
      'Object detection and image segmentation',
      'Face recognition and OCR',
      'Real-time video analytics',
      'Low-light imaging and panoramic image stitching',
      'Vision Transformers (ViTs)'
    ],
    featureslist: [
      'OpenCV',
      'YOLO v5, v7, v8, v11',
      'GStreamer'
    ],
    summary: 'Develops computer vision systems for traffic monitoring, face recognition, assistive applications, and CCTV imaging.',
    content: ''
  },
  {
    id: 5,
    title: 'Machine Learning & Deep Learning',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('machine-learning', 'cover'),
    imageUrl: skillImage('machine-learning', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Mobile rope-jump counter',
      'Product price forecasting',
      'Traffic and face analytics models',
      'Real-time assistive AI system'
    ],
    versionlist: [
      'Convolutional Neural Networks (CNNs)',
      'Generative Adversarial Networks (GANs)',
      'Supervised and unsupervised learning',
      'Regression and classification',
      'Model evaluation'
    ],
    featureslist: [
      'PyTorch',
      'TensorFlow and TensorFlow Lite',
      'Keras',
      'Scikit-learn',
      'NumPy',
      'Pandas'
    ],
    summary: 'Applies machine learning and deep learning to computer vision, mobile applications, and predictive modeling. Work includes pose estimation, price regression, object detection, and real-time AI solutions.',
    content: ''
  },
  {
    id: 6,
    title: 'Natural Language Processing',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('nlp', 'cover'),
    imageUrl: skillImage('nlp', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Contract term extraction and classification',
      'Insurance claim document classification',
      'Treatment-record summarization'
    ],
    versionlist: [
      'Text classification and document classification',
      'Information extraction',
      'Text summarization',
      'Natural Language Processing (NLP)'
    ],
    featureslist: [
      'Hugging Face Transformers',
      'LangChain',
      'LLM-based document processing'
    ],
    summary: 'Applies NLP and language models to extract information from contracts, classify insurance documents, and summarize treatment records.',
    content: ''
  },
  {
    id: 7,
    title: 'Programming Languages',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('programming-languages', 'cover'),
    imageUrl: skillImage('programming-languages', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI and data engineering services',
      'Computer vision applications',
      'Mobile and backend integrations'
    ],
    versionlist: [
      'Application development',
      'Machine learning and data processing',
      'Backend and mobile development'
    ],
    featureslist: [
      'Python',
      'C#',
      'C++',
      'JavaScript',
      'SQL'
    ],
    summary: 'Uses programming languages to build AI services, computer vision systems, automation workflows, and application integrations. Python is the primary language in the documented projects.',
    content: ''
  },
  {
    id: 8,
    title: 'Backend & Integration',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('backend-integration', 'cover'),
    imageUrl: skillImage('backend-integration', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Flask microservices for contract risk assessments',
      'FastAPI AI services for dental workflows',
      'Python and .NET application integrations'
    ],
    versionlist: [
      'Microservices architecture',
      'API development',
      'API integration',
      'Web automation',
      'Mobile application development'
    ],
    featureslist: [
      'FastAPI',
      'Flask',
      '.NET (C#)',
      'REST APIs',
      'Playwright (web automation)',
      'Flutter'
    ],
    summary: 'Develops backend services and API integrations that connect Python-based AI capabilities with enterprise and dental practice systems. Experience includes Flask and FastAPI services, C#/.NET components, REST APIs, browser automation, and Flutter applications.',
    content: ''
  },
  {
    id: 9,
    title: 'Databases',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('databases', 'cover'),
    imageUrl: skillImage('databases', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Database-backed AI and application workflows'
    ],
    versionlist: [
      'Relational data',
      'Document data',
      'SQL querying'
    ],
    featureslist: [
      'PostgreSQL',
      'MongoDB',
      'SQL'
    ],
    summary: 'Database technologies listed in the skills profile include PostgreSQL, MongoDB, and SQL. The supplied resume does not identify project-specific usage periods for these technologies.',
    content: ''
  },
  {
    id: 10,
    title: 'Cloud Platforms',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('cloud-platforms', 'cover'),
    imageUrl: skillImage('cloud-platforms', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AWS-based assistive AI system',
      'Azure Databricks contract analysis platform',
      'Cloud-native AI applications'
    ],
    versionlist: [
      'Cloud-native application deployment',
      'Managed AI and data services',
      'Scalable cloud infrastructure'
    ],
    featureslist: [
      'Microsoft Azure',
      'Amazon Web Services (AWS)',
      'AWS Bedrock',
      'Google Cloud Platform (GCP)'
    ],
    summary: 'Builds and deploys AI applications on cloud platforms. Project examples include an AWS-based assistive AI system and an Azure-hosted contract analysis platform. AWS Bedrock and GCP are included in the skills profile, but the resume does not identify project-specific usage for them; Azure services are described individually.',
    content: ''
  },
  {
    id: 11,
    title: 'MLOps & Deployment',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('mlops-deployment', 'cover'),
    imageUrl: skillImage('mlops-deployment', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Edge AI model optimization',
      'Kubernetes-deployed AI services',
      'Cloud-hosted AI microservices'
    ],
    versionlist: [
      'Model optimization',
      'Edge AI deployment',
      'GPU-accelerated inference',
      'Containerized application deployment'
    ],
    featureslist: [
      'Docker',
      'Kubernetes (K8s)',
      'ONNX and ONNX Runtime',
      'TensorRT',
      'OpenVINO',
      'CUDA'
    ],
    summary: 'Optimizes and deploys machine learning models across cloud and edge environments. The resume documents ONNX, TensorRT, OpenVINO, and CUDA in computer vision work, as well as Kubernetes in AI service deployment; individual tool versions are not specified.',
    content: ''
  },
  {
    id: 12,
    title: 'Development Tools',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('developer-tools', 'cover'),
    imageUrl: skillImage('developer-tools', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'Development and deployment of AI applications'
    ],
    versionlist: [
      'Source control',
      'Development environments',
      'Linux-based development'
    ],
    featureslist: [
      'Git',
      'GitHub',
      'Linux',
      'Visual Studio Code'
    ],
    summary: 'Uses source control, Linux, and development tools as part of software and AI project workflows. The supplied resume does not provide project-specific usage for each tool.',
    content: ''
  },
  {
    id: 13,
    title: 'Domain Expertise',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('domain-expertise', 'cover'),
    imageUrl: skillImage('domain-expertise', 'icon'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis for Honeywell Technologies',
      'Dental insurance and claims automation',
      'Traffic surveillance and violation detection',
      'Assistive AI for visually impaired users'
    ],
    versionlist: [
      'Contract Lifecycle Management (CLM) and Legal AI',
      'Healthcare and dental automation',
      'Insurance and claims processing',
      'Traffic management and Intelligent Transportation Systems (ITS)',
      'Enterprise AI automation'
    ],
    featureslist: [
      'Contract risk analysis and approval workflows',
      'Patient and insurance data processing',
      'Traffic violation detection',
      'Enterprise workflow integration'
    ],
    summary: 'Applies AI to legal contract review, healthcare and dental workflows, insurance claims, traffic management, and enterprise automation.',
    content: ''
  },
  {
    id: 14,
    title: 'Azure App Service',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('azure-app-service', 'cover'),
    imageUrl: skillImage('azure-app-service', 'icon', 'svg'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis platform'
    ],
    versionlist: [
      'Deploy Flask-based REST API microservices',
      'Expose AI-generated assessments and agent outputs'
    ],
    featureslist: [
      'Azure App Service',
      'Flask',
      'REST APIs',
      'Microservices deployment'
    ],
    summary: 'Deployed Flask-based REST API microservices to Azure App Service to expose AI-generated contract risk assessments and agent outputs.',
    content: ''
  },
  {
    id: 15,
    title: 'Azure AI Foundry',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('azure-ai-foundry', 'icon', 'svg'),
    imageUrl: skillImage('azure-ai-foundry', 'icon', 'svg'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis platform'
    ],
    versionlist: [
      'Parallel GPT-5.2 processing across LangGraph agents',
      'LLM-based contract clause analysis'
    ],
    featureslist: [
      'Azure AI Foundry',
      'GPT-5.2',
      'LangGraph',
      'Parallel LLM processing'
    ],
    summary: 'Used Azure AI Foundry to run parallel GPT-5.2 processing across LangGraph agents analyzing contract clauses and generating risk assessments.',
    content: ''
  },
  {
    id: 16,
    title: 'Azure Databricks',
    publishedAt: 'November 2026',
    thumbnailUrl: skillImage('azure-databricks', 'cover'),
    imageUrl: skillImage('azure-databricks', 'icon', 'svg'),
    authorName: 'Suyog Bargule',
    library: '',
    projectlist: [
      'AI-driven contract risk analysis platform'
    ],
    versionlist: [
      'Run a LangGraph multi-agent contract analysis system',
      'Process contract PDFs and generate legal risk assessments'
    ],
    featureslist: [
      'Azure Databricks',
      'Python',
      'LangGraph',
      'Contract PDF processing'
    ],
    summary: 'Built and ran a LangGraph multi-agent contract risk analysis platform on Azure Databricks, automating contract PDF processing and legal risk assessment.',
    content: ''
  }
];
