import { ISkill } from '../component/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Typescript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Azure Devops',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
