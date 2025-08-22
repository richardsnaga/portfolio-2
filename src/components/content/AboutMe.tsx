'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}. {' '}
        </strong>
        I'm a Software Developer with over 3 years of experience and a passion for tackling complex technical challenges through elegant, efficient algorithmic solutions.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        My journey began with 1.5 years in web development at a consulting firm, where I built a strong foundation in Python, AngularJS, Docker, PostgreSQL, RethinkDB, and Linux. I then spent more than 2 years at another consultancy, honing my expertise in Java Spring Boot, Vue, and TypeScript, while gaining deep insights into e-procurement systems.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        I thrive on creating systems that not only work flawlessly but are also easy to operate and highly efficient. Today, my focus extends beyond building web applications — I’m committed to ensuring they run at peak performance. I’m currently exploring modern approaches to application performance and traffic management with Docker and Kubernetes, ensuring the solutions I build are both scalable and reliable.
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        If you’re interested in collaborating on something exciting, feel free to reach out. Let’s create something amazing
        together!
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
