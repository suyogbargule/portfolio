import { Skill } from '@/types';
import { skills } from '@/data/skills';
import { publicAssetPath } from '@/lib/publicAssetPath';

type SkillGroup = {
  category: string;
  sourceId: number;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: 'Generative AI & LLMs',
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
    sourceId: 7,
    items: ['Python', 'C#', 'C++', 'JavaScript', 'SQL']
  },
  {
    category: 'Backend & Integration',
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
    sourceId: 9,
    items: ['PostgreSQL', 'MongoDB', 'SQL']
  },
  {
    category: 'Cloud Platforms',
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
    sourceId: 12,
    items: ['Git', 'GitHub', 'Linux', 'Visual Studio Code']
  },
  {
    category: 'Domain Expertise',
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

const technologyAssets: Record<string, { folder: string; category: string; coverOnly?: boolean }> = {
  'LangSmith': { folder: 'langsmith', category: 'agent-frameworks' },
  'LangFlow': { folder: 'langflow', category: 'agent-frameworks' },
  'n8n': { folder: 'n8n', category: 'agent-frameworks' },
  'OpenCV': { folder: 'opencv', category: 'computer-vision', coverOnly: true },
  'YOLO v5': { folder: 'yolo', category: 'computer-vision' },
  'YOLO v7': { folder: 'yolo', category: 'computer-vision' },
  'YOLO v8': { folder: 'yolo', category: 'computer-vision' },
  'YOLO v11': { folder: 'yolo', category: 'computer-vision' },
  'Keras': { folder: 'keras', category: 'machine-learning' },
  'TensorFlow': { folder: 'tensorflow', category: 'machine-learning' },
  'TensorFlow Lite': { folder: 'tensorflow', category: 'machine-learning' },
  'C++': { folder: 'cpp', category: 'programming-languages' },
  'Ollama': { folder: 'ollama', category: 'generative-ai', coverOnly: true },
  'Amazon Web Services (AWS)': { folder: 'aws-s3', category: 'cloud-platforms' },
  'ONNX': { folder: 'onnx', category: 'mlops-deployment' },
  'ONNX Runtime': { folder: 'onnx', category: 'mlops-deployment' },
  'OpenVINO': { folder: 'openvino', category: 'mlops-deployment' }
};

const directTechnologyAssets: Record<string, { icon: string; cover: string }> = {
  'Microsoft Azure': {
    icon: publicAssetPath('/images/skill/azure-app-service/icon.svg'),
    cover: publicAssetPath('/images/skill/azure-app-service/cover.png')
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
    const dedicatedSource = sourceSkillsByTitle.get(title);
    const source = dedicatedSource || categorySource;
    const asset = technologyAssets[title];
    const directAsset = directTechnologyAssets[title];
    const assetBase = asset
      ? publicAssetPath(`/images/skill/${asset.category}/technologies/${asset.folder}`)
      : undefined;
    const imageUrl = dedicatedSource?.imageUrl
      || directAsset?.icon
      || (assetBase && !asset.coverOnly ? `${assetBase}/icon.png` : categorySource.imageUrl);
    const thumbnailUrl = dedicatedSource?.thumbnailUrl
      || directAsset?.cover
      || (assetBase ? `${assetBase}/cover.png` : categorySource.thumbnailUrl);

    return {
      ...source,
      id: nextIndividualSkillId++,
      title,
      imageUrl,
      thumbnailUrl,
      category: group.category,
      categoryExperience: categorySource.experience,
      experience: dedicatedSource?.experience || 'Individual skill duration not specified',
      summary: dedicatedSource?.summary
        || `Listed under ${group.category}. The supplied resume describes experience at the category and project level, rather than separately for this skill.`,
      projectlist: dedicatedSource?.projectlist || [],
      versionlist: [],
      featureslist: dedicatedSource?.featureslist || []
    };
  });
});

export const allSkills: Skill[] = [...skills, ...individualSkills];

export const featuredSkills: Skill[] = skillGroups.flatMap((group) => {
  const categorySkill = individualSkills.find((skill) => skill.category === group.category);
  return categorySkill ? [categorySkill] : [];
});
