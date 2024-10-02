import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaMediumM } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { FaKaggle } from "react-icons/fa6";
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import Typed from 'react-typed';
import AboutSection from './AboutSection'

const HeroSection = () => {
  return (
    <section>
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full">
          <Image src="https://suyogbargule.github.io/portfolio/images/avatar/man.png" width={180} height={180} alt="avatar" />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Suyog Bargule</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          I'm a{' '}
          <Typed
            strings={['AI Engineer', 'Computer Vision Engineer', 'Data Scientist']}
            typeSpeed={60}
            backSpeed={30}
            loop
          />
        </div>
        <div className="mt-4  flex gap-5">
          <Link href="https://huggingface.co/suyogbargule">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <SiHuggingface size={25} />
            </a>
          </Link>
          <Link href="https://www.kaggle.com/suyogbargule/discussion">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaKaggle size={25} />
            </a>
          </Link>
          <Link href="https://medium.com/@suyogb8392">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FaMediumM size={25} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/suyog-bargule-358a85118/">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiLinkedin size={25} />
            </a>
          </Link>
          <Link href="https://github.com/suyogbargule">
            <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500">
              <FiGithub size={25} />
            </a>
          </Link>
        </div>
        <Link href="#about-me">
        <Button className="mt-5 px-8">Hire Me</Button>
        </Link>
      </div>
      <div className="absolute bottom-0 flex flex-col items-center ">
        <p className="mb-3 text-sm">Scroll Down</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
