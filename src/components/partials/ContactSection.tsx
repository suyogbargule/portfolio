import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="https://suyogbargule.github.io/portfolio/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Bhagirathi Heights, Ward No 2,
                Jayganga Nagar, Keshav Nagar,
                Mundhwa, Pune, Maharashtra 411036</p>
              <p>Pune, India</p>
              <p className="mt-4">+919049023685</p>
              <p>suyogb8392@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
