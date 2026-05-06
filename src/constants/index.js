import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  python,
  java,
  springboot,
  mongodb,
  mysql,
  aws,
  kubernetes,
  coverhunt,
  microverse,
  kelhel,
  dcc,
  filesystem,
  leaderboard,
  math,
  movie,
  pytorch,
  tensorflow,
  linux,
  jest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Researcher',
    company_name: 'San Francisco State University',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2023 – Jan 2026',
  },
  {
    title: 'Software Developer',
    company_name: 'CO Bounce',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2020 – Sep 2022',
  },
  {
    title: 'Software Developer',
    company_name: 'ERITEL',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Dec 2018 – Nov 2019',
  },
  {
    title: 'Electrical Engineer',
    company_name: 'Keih Bahri Food Production',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2016 – Aug 2018',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'UI Element Detection',
    description: 'Fine-tuned vision-language models (BLIP-2, QLoRA) to detect UI elements from screenshots using distributed training on HPC clusters with PyTorch and Hugging Face.',
    tags: [
      { name: 'Python', color: 'blue-text-gradient' },
      { name: 'PyTorch', color: 'green-text-gradient' },
      { name: 'Hugging Face', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: 'https://github.com/mekonnen',
    demo: 'https://github.com/mekonnen',
  },
  {
    id: 'project-2',
    name: 'Custom File System',
    description: 'Built a custom file system in C using POSIX system calls, bio library, and multithreading — supporting core OS-level read, write, and directory operations.',
    tags: [
      { name: 'C', color: 'blue-text-gradient' },
      { name: 'POSIX', color: 'green-text-gradient' },
      { name: 'Multithreading', color: 'pink-text-gradient' },
    ],
    image: leaderboard,
    repo: 'https://github.com/mekonnen',
    demo: 'https://github.com/mekonnen',
  },
  {
    id: 'project-3',
    name: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with React, Redux, and Node.js featuring product catalogue, shopping cart, user authentication, and Stripe API payments.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'Stripe API', color: 'pink-text-gradient' },
    ],
    image: math,
    repo: 'https://github.com/mekonnen',
    demo: 'https://github.com/mekonnen',
  },
  {
    id: 'project-4',
    name: 'AI Resume Builder',
    description: 'AI-powered resume builder using React and Node.js with ChatGPT API integration to generate tailored resume content based on job descriptions.',
    tags: [
      { name: 'React', color: 'blue-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'ChatGPT API', color: 'pink-text-gradient' },
    ],
    image: movie,
    repo: 'https://github.com/mekonnen',
    demo: 'https://github.com/mekonnen',
  },
];

// const projects = [
//   {
//     id: 'project-1',
//     name: 'KomiKult',
//     description: 'A comic characters list app that displays Marvel characters.',
//     tags: [
//       {
//         name: 'react',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'mongodb',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'tailwind',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: komikult,
//     repo: 'https://github.com/shaqdeff/KomiKult',
//     demo: 'https://shaqdeff.github.io/KomiKult/',
//   },
//   {
//     id: 'project-2',
//     name: 'Leaderboard',
//     description:
//       'A leaderboard list app that displays scores submitted by different players.',
//     tags: [
//       {
//         name: 'react',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'restapi',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'scss',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: leaderboard,
//     repo: 'https://github.com/shaqdeff/Leaderboard',
//     demo: 'https://shaqdeff.github.io/Leaderboard/',
//   },
//   {
//     id: 'project-3',
//     name: 'Math Magicians',
//     description: 'This is a single-page calculator app built with React',
//     tags: [
//       {
//         name: 'nextjs',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'supabase',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'css',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: math,
//     repo: 'https://github.com/shaqdeff/Math-Magicians',
//     demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
//   },
//   {
//     id: 'project-4',
//     name: 'Movie Metro',
//     description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
//     tags: [
//       {
//         name: 'nextjs',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'supabase',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'css',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: movie,
//     repo: 'https://github.com/shaqdeff/Movie-Metro',
//     demo: 'https://movie-metro.netlify.app/',
//   },
//   {
//     id: 'project-5',
//     name: 'Nyeusi Fest Site',
//     description:
//       'This is a demo concert website for a music festival called Nyeusi.',
//     tags: [
//       {
//         name: 'nextjs',
//         color: 'blue-text-gradient',
//       },
//       {
//         name: 'supabase',
//         color: 'green-text-gradient',
//       },
//       {
//         name: 'css',
//         color: 'pink-text-gradient',
//       },
//     ],
//     image: nyeusi,
//     repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
//     demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
//   },
// ];

export { services, technologies, experiences, projects };
