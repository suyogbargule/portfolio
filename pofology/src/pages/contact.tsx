import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>3rd Floor, Abu Sayeed Market, Rampura</p>
              <p>Dhaka, Bangladesh</p>

              <p className="mt-4">+8801834507645</p>
              <p>mostafizurhimself@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
