import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';

const AboutSection = () => {
  return (
    <>
      <section id="about-me">
        <SectionTitle>About Me</SectionTitle>
        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
          {/* Bio */}
          <div>
            <p className="text-justify">
              Hi, I’m Suyog Hanmant Bargule, a Senior Data Engineer and AI Engineer at NTT DATA, based in Pune, India.
              I build production AI solutions across agentic AI, large language models, RAG, computer vision, and cloud platforms.
              My experience includes developing multi-agent contract risk analysis systems, AI automation for healthcare workflows, and computer vision applications for surveillance and edge devices.
              I use tools such as Python, LangGraph, LangChain, and Azure to take AI solutions from development through deployment.
              I enjoy turning complex data and AI challenges into reliable, practical products that make everyday workflows more efficient.
            </p>
            <a
              href="https://suyogbargule.github.io/portfolio/suyog_resume.pdf"
              download="suyog_resume.pdf"
            >
              <Button className="mt-5">Download CV</Button>
            </a>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h6 className="mb-2 font-semibold">AI & Generative AI</h6>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                LangGraph, LangChain, LangFlow, CrewAI, GPT-5.2, LLMs, RAG, prompt engineering, Hugging Face, LlamaIndex, DeepSeek, Ollama
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h6 className="mb-2 font-semibold">Computer Vision & Machine Learning</h6>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                OpenCV, YOLO, PyTorch, TensorFlow Lite, TensorRT, ONNX, OpenVINO, GStreamer, Vision Transformers, GANs, Stable Diffusion, LoRA, Scikit-learn, regression
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h6 className="mb-2 font-semibold">Cloud, Backend & APIs</h6>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Azure AI Foundry, Azure Databricks, Azure App Service, AWS, GCP, Python, Flask, FastAPI, C#/.NET, REST APIs, Kubernetes, CUDA
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
              <h6 className="mb-2 font-semibold">Data, Automation & Applications</h6>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                FAISS, Pinecone, Qdrant, Playwright, n8n, Apollo.io, Apify Scraper, synthetic data generation, Flutter, Agiloft CLM, LEAP Gateway
              </p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineFire size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">6+</h2>
              <p className="mt-1">Projects Completed</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-5 text-gray-300">
              <FiCoffee size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">2</h2>
              <p className="mt-1">Cup of Coffee</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineUsers size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">4+</h2>
              <p className="mt-1">Satisfied clients</p>
            </div>
          </div>

          <div className="flex">
            <div className="mr-5 text-gray-300">
              <HiOutlineChartBar size={50} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">4+</h2>
              <p className="mt-1">Years of experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
