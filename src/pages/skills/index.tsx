import PageTitle from '@/components/shared/PageTitle';
import Skill from '@/components/shared/Skill';
import { individualSkills, skillCategories } from '@/data/individualSkills';
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
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Each listed technology or skill has its own card. Open a card for its summary, documented project use, related technologies, and version details where available.
        </p>
        {skillCategories.map((category) => {
          const categorySkills = individualSkills.filter((skill) => skill.category === category);

          return (
            <section key={category} className="mb-14 last:mb-0">
              <h2 className="mb-6 text-2xl font-semibold">{category}</h2>
              <div className="grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
                {categorySkills.map((skill) => (
                  <Skill
                    key={skill.id}
                    href={`/skills/${skill.id}`}
                    thumbnailUrl={skill.thumbnailUrl}
                    title={skill.title}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AppLayout>
  );
};

export default Skillblog;
