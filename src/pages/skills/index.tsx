import PageTitle from '@/components/shared/PageTitle';
import Pagination from '@/components/shared/Pagination';
import Skill from '@/components/shared/Skill';
import { skills } from '@/data/skills';
import AppLayout from '@/layouts/AppLayout';

const Skillblog = () => {
  return (
    <AppLayout title="Skill">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Skill', path: '' },
        ]}
      >
        Skills
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
          {skills.map((post) => (
            <Skill
              key={post.id}
              href={`/skills/${post.id}`}
              thumbnailUrl={post.thumbnailUrl}
              title={post.title}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Skillblog;
