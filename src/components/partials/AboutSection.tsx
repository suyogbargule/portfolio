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
              Hi, I’m Suyog Hanmant Bargule, an AI & Computer Vision Engineer from Pune, India.
              I specialize in designing, training, and deploying neural network models, with expertise in Generative AI, Video AI, IoT, streaming, and image processing.
              My work involves building scalable AI solutions and problem-solving workflows using generative models, applied to real-world use cases like intelligent surveillance systems, real-time video analytics, and interactive AI-powered tools.
              I’m passionate about combining cutting-edge AI research with practical engineering to create impactful solutions that solve real problems and enhance user experiences.
            </p>
            <a
              href="https://suyogbargule.github.io/portfolio/suyog_resume.pdf"
              download="suyog_resume.pdf"
            >
              <Button className="mt-5">Download CV</Button>
            </a>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Generative AI</h6>
                <p>90%</p>
              </div>
              <ProgressBar color="blue" progress={90} />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Natural Language Processing (NLP)</h6>
                <p>85%</p>
              </div>
              <ProgressBar color="purple" progress={85} />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Image Processing / Computer Vision</h6>
                <p>92%</p>
              </div>
              <ProgressBar color="amber" progress={92} />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Deep Learning</h6>
                <p>88%</p>
              </div>
              <ProgressBar color="indigo" progress={88} />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Model Training</h6>
                <p>86%</p>
              </div>
              <ProgressBar color="rose" progress={86} />
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <h6 className="font-semibold">Backend</h6>
                <p>80%</p>
              </div>
              <ProgressBar color="emerald" progress={80} />
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
              <h2 className="text-3xl font-bold">4+</h2>
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
              <h2 className="text-3xl font-bold">3+</h2>
              <p className="mt-1">Years of experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
