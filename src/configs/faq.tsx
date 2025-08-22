'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I'm Richard Praedana Sinaga. I'm a Software Developer with over 3 years of experience and a passion for tackling complex technical challenges through elegant, efficient algorithmic solutions.
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  {
    title: 'What technologies do you use?',
    content: (
      <>
        I am experienced with Java Spring Boot and Python for backend, as well as frontend frameworks such as Vue.js and AngularJS. I am also familiar with modern infrastructure such as Docker, PostgreSQL, and Linux-based server management.
      </>
    )
  },
  {
    title: 'Can we hire you?',
    content: (
      <>
        Yes, I am currently looking for job opportunities! Feel free to reach
        out to me via email or Linkedin if you're interested in hiring me or
        collaborating on exciting projects.
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  // {
  //   title: 'What is your approach to new technologies?',
  //   content: (
  //     <>
  //       I'm always excited to learn new technologies! I typically start by
  //       building small projects to understand the fundamentals before diving
  //       deeper. I focus on adopting tools that improve my workflow and help me
  //       build better applications.
  //       <br className="mb-2" />
  //       For more about my tech journey, visit my{' '}
  //       <Link
  //         href={`https://github.com/${siteConfig.social.github}`}
  //         className="text-blue-500 hover:underline"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         GitHub page
  //       </Link>
  //       .
  //     </>
  //   )
  // },
  // {
  //   title: 'Do you offer freelance services?',
  //   content: (
  //     <>
  //       Yes, I am available for freelance work. Please contact me{' '}
  //       <Link
  //         href={`mailto:${siteConfig.social.email}`}
  //         className="text-blue-500 hover:underline"
  //       >
  //         via email
  //       </Link>{' '}
  //       or{' '}
  //       <Link
  //         href={siteConfig.social.discord}
  //         className="text-blue-500 hover:underline"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Discord
  //       </Link>{' '}
  //       to discuss your project details. I would be happy to explore how we can
  //       collaborate!
  //       <br className="mb-2" />
  //       You can reach me through the contact information provided on my{' '}
  //       <Link
  //         href={`https://github.com/${siteConfig.social.github}`}
  //         className="text-blue-500 hover:underline"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         GitHub page
  //       </Link>
  //       .
  //     </>
  //   )
  // },
  // {
  //   title:
  //     "I tried to contact you but haven't received a response, what happened?",
  //   content: (
  //     <>
  //       I apologize if I missed your message or if I was slow to respond.
  //       Sometimes, messages get overlooked, or I may be caught up with other
  //       tasks. If I missed your message by mistake, please feel free to reach
  //       out again.
  //       <br className="mb-2" />
  //       To get a faster response, you can also create a notice through a{' '}
  //       <Link
  //         href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/discussions`}
  //         className="text-blue-500 hover:underline"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         GitHub Discussion
  //       </Link>{' '}
  //       or open an issue on my{' '}
  //       <Link
  //         href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/issues`}
  //         className="text-blue-500 hover:underline"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         GitHub repository
  //       </Link>
  //       . I try to keep track of discussions and issues more actively.
  //     </>
  //   )
  // }
];
