'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  subTitle: string;
  description: string;
  list: any[];
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Technical Consultant | Jun 2023 - Present',
    subTitle: 'PT.Berca Hardayaperkasa',
    description:
      "",
    list :[
      ' Developed and maintained high-quality web applications, focusing on both frontend and backend development using technologies such as using Java Spring Boot, Vue Typescript and PostgreSQL.',
      'Collaborated with cross-functional teams including product managers, designers, and QA engineers to define, design, and ship new features.',
      'Built and maintained APIs to support application integration with external systems.',
      'Resolved complex technical issues and bugs, ensuring high system availability and reliability.'
    ],
    startDate: 'Jun 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: ''
  },
  {
    title: 'Full Stack Web Developer | Dec 2021 - Jun 2023',
    subTitle: 'PT. Integra Putra Mandiri',
    description:
      '',
       list :[
      ' Developed custom web applications for clients in various industries, from concept to deployment, utilizing technologies such as Python Bottle for backend and Angular.js for frontend.',
      'Build and managed Docker containers for efficient and scalable deployment.',
      'Designed and optimized database schemas using PostgreSQL and RethinkDB.',
      'Perform regular maintenance and updates on existing applications to ensure optimal performance and compatibility with the latest version of the operating system.'
    ],
    startDate: 'Dec 2021',
    endDate: 'Jun 2023',
    isActive: false,
    companyUrl: siteConfig.social.github_organisation
  },
  // {
  //   title: 'Hacktoberfest 2024 | Oct. 2024 - Nov. 2024',
  //   description:
  //     'Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.',
  //   startDate: 'Oct 2024',
  //   endDate: 'Nov 2024',
  //   isActive: false,
  //   companyUrl: siteConfig.other.hacktoberfest
  // },
  // {
  //   title: 'CodSoft - Data Science Intern | Sep. 2023 - Oct. 2023',
  //   description:
  //     'Self-paced Data Science Intern where I gained practical experience in data science applications using Python. I also contributed to open-source projects and maintained repositories on GitHub.',
  //   startDate: 'Sep 2023',
  //   endDate: 'Oct 2023',
  //   companyUrl: siteConfig.other.codsoft
  // },
  // {
  //   title: 'Hacktoberfest 2023 | Sep. 2023 - Oct. 2023',
  //   description:
  //     'Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.',
  //   startDate: 'Sep 2023',
  //   endDate: 'Oct 2023',
  //   companyUrl: siteConfig.other.hacktoberfest
  // },
  // {
  //   title: 'Technical Content Writer | Sep. 2023 - Present',
  //   description:
  //     'Writing technical content and tutorials on platforms like Medium, Dev.to, and Hashnode. Topics include software development, data science, and open-source contributions.',
  //   startDate: 'Sep 2023',
  //   endDate: 'Present',
  //   isActive: true,
  //   companyUrl: siteConfig.baseUrl + '/blog'
  // },
  // {
  //   title: 'Open Source Contributor & Maintainer | Dec. 2020 - Present',
  //   description:
  //     'Actively contributing to and maintaining open-source repositories on GitHub. Focused on building and improving tools for the developer community.',
  //   startDate: 'Dec 2020',
  //   endDate: 'Present',
  //   isActive: true,
  //   companyUrl: siteConfig.social.github
  // }
];
