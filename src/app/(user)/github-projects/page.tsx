import ProjectsSection from '@/src/components/sections/ProjectsSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Github Projects',
    description:
      'Explore the projects I have worked on, showcasing skills and technologies.',
    path: '/github-projects'
  });
}

const GithubProjects = () => <ProjectsSection />;

export default GithubProjects;
