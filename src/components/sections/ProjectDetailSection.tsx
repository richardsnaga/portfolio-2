'use client';
import React from 'react';

interface ProjectDetailSectionProps {
  id: string; // props type
}

const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({ id }) => {
  return <div>ProjectDetailSection {id}</div>;
};

export default ProjectDetailSection;
