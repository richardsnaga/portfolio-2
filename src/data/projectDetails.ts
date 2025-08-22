export interface Project {
  id: string;
  title: string;
  img: string;
  subtitle: string;
}

export const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    title: 'E-Procurement',
    img: '/projects/polytama/polytama.png',
    subtitle: 'Website E-Procurement for PT.Polytama Propindo'
  }
];
