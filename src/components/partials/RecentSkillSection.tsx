import { featuredSkills } from '@/data/individualSkills';
import SectionTitle from '@/components/shared/SectionTitle';
import Skill from '../shared/Skill';

const SkillSection = () => {
  return (
    <>
      <SectionTitle>Skills</SectionTitle>
      <div className="mt-10 grid gap-8 sm:gap-4 md:grid-cols-3 lg:gap-8">
        {featuredSkills.slice(0, 9).map((skill) => (
          <Skill
            key={skill.id}
            href={`/skills/${skill.id}`}
            thumbnailUrl={skill.thumbnailUrl}
            title={skill.title}
            experience={skill.categoryExperience || skill.experience}
          />
        ))}
      </div>
    </>
  );
};

export default SkillSection;
