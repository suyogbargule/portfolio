import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import CommentBox from '@/components/partials/CommentBox';
import RecentComment from '@/components/partials/RecentComment';
import { Skill } from '@/types';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { skills } from '@/data/skills';

type Props = {
  post: Skill;
};

const BlogSingle: React.FunctionComponent<Props> = ({ post }) => {
  
  return (
    <AppLayout title="Blog">
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{post.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>Experience</span>
            <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{post.experience}</span>
          </p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl">
            <Image src={post.imageUrl} height={720} width={1280} layout="responsive" alt={post.title} />
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">{post.summary}</p>
          <h3 className="mt-10 text-xl font-semibold">Version</h3>
          <ul className="mt-4 list-disc pl-4">
            {post.versionlist.map((version, index) => (
              <li key={index}>{version}</li>
            ))}
          </ul>
          <h3 className="mt-10 text-xl font-semibold">Libraries Used </h3>
          <ul className="mt-4 list-disc pl-4">
            {post.featureslist.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <h3 className="mt-10 text-xl font-semibold">Project List</h3>
          <ul className="mt-4 list-disc pl-4">
            {post.projectlist.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        </div>
    </AppLayout>
  );
};

// Fetching paths for dynamic routes
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = skills.map((skill) => ({
    params: { id: skill.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

// Fetching data for each work detail
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const skill = skills.find((skill) => skill.id === Number(id));

  if (!skill) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: skill,  // Change 'skill' to 'post'
    },
  };
};

export default BlogSingle;
