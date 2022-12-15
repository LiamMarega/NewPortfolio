import {FaReact, FaNodeJs} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiFlutter, SiMongodb, SiTypescript} from 'react-icons/si';

export const tech1 = [
  {
    icon: <IoLogoJavascript />,
    tech: 'JavaScript',
    time: '2 years',
    expertise: 'Advanced',
    description:
      'JavaScript is a programming language that is one of the core technologies of the World Wide Web, along with HTML and CSS.',
  },
  {
    icon: <SiFlutter />,
    tech: 'Flutter',
    time: '1 year',
    expertise: 'Medium',
    description: 'Flutter is an open source mobile app development SDK created by Google.',
  },
  {
    icon: <FaReact />,
    tech: 'React',
    time: '2 years',
    expertise: 'Advanced',
    description:
      'React is an open source Javascript library designed to create user interfaces to make it easy to develop single page applications.',
  },
];

export const tech2 = [
  {
    icon: <SiMongodb />,
    tech: 'MongoDB',
    time: '1 years',
    expertise: 'Medium',
    description: 'MongoDB is an open source, document-oriented, NoSQL database system.',
  },
  {
    icon: <FaNodeJs />,
    tech: 'Node.js',
    time: '2 years',
    expertise: 'Medium',
    description: 'Node.js is an open source server environment.',
  },
  {
    icon: <SiTypescript />,
    tech: 'TypeScript',
    time: '1 years',
    expertise: 'Medium',
    description:
      'TypeScript is a free and open source programming language developed and maintained by Microsoft.',
  },
];

export default {tech1, tech2};
