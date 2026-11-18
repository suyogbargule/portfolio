import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import { Skill } from '@/types';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { allSkills } from '@/data/individualSkills';

type Props = {
  post: Skill;
};

const SkillDetail: React.FunctionComponent<Props> = ({ post }) => {

  return (
    <AppLayout title={post.title}>
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{post.title}</h1>
          {post.category && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Category: {post.category}
            </p>
          )}
        </div>
        <div className="relative mt-10 h-64 overflow-hidden rounded-xl bg-gray-50 sm:h-80 md:h-96">
          <Image src={post.imageUrl} layout="fill" objectFit="contain" alt={`${post.title} logo`} />
        </div>

        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p className="mt-4">{post.summary}</p>
          {post.category && (
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
              Project and version details are included only when they are identified in the shared resume.
            </p>
          )}
          <h3 className="mt-10 text-xl font-semibold">Versions / Implementation Details</h3>
          {post.versionlist.length > 0 ? (
            <ul className="mt-4 list-disc pl-4">
              {post.versionlist.map((version, index) => (
                <li key={index}>{version}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              No specific version or implementation detail is stated in the shared resume for this skill.
            </p>
          )}
          {post.featureslist.length > 0 && (
            <>
              <h3 className="mt-10 text-xl font-semibold">Related Skills & Technologies</h3>
              <ul className="mt-4 list-disc pl-4">
                {post.featureslist.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}
          <h3 className="mt-10 text-xl font-semibold">Used In Projects</h3>
          {post.projectlist.length > 0 ? (
            <ul className="mt-4 list-disc pl-4">
              {post.projectlist.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              The shared resume does not identify a specific project using this skill.
            </p>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allSkills.map((skill) => ({
    params: { id: skill.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const skill = allSkills.find((skill) => skill.id === Number(id));

  if (!skill) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: skill,
    },
  };
};

export default SkillDetail;
