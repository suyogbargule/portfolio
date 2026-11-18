import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

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
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Generative AI</h6>
                <p className="shrink-0">90%</p>
              </div>
              <ProgressBar color="blue" progress={90} />
            </div>

            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Backend</h6>
                <p className="shrink-0">80%</p>
              </div>
              <ProgressBar color="emerald" progress={80} />
            </div>

            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Natural Language Processing (NLP)</h6>
                <p className="shrink-0">85%</p>
              </div>
              <ProgressBar color="purple" progress={85} />
            </div>

            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Image Processing / Computer Vision</h6>
                <p className="shrink-0">92%</p>
              </div>
              <ProgressBar color="amber" progress={92} />
            </div>

            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Deep Learning</h6>
                <p className="shrink-0">88%</p>
              </div>
              <ProgressBar color="indigo" progress={88} />
            </div>

            <div>
              <div className="mb-3 flex items-start justify-between gap-3">
                <h6 className="font-semibold">Model Training</h6>
                <p className="shrink-0">86%</p>
              </div>
              <ProgressBar color="rose" progress={86} />
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
