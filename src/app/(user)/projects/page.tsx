import ProjectAndCourseSection from '@/src/components/sections/ProjectAndCourseSection';
import { generateMetadata as getPageMetadata } from '@/src/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Projects and Course',
    description:
      'Explore the projects I have worked on, showcasing skills and technologies.',
    path: '/projects'
  });
}

const Projects = () => <ProjectAndCourseSection />;

export default Projects;
