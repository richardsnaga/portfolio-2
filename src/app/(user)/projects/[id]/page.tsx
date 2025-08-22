'use client';

import ProjectDetailSection from '@/src/components/sections/ProjectDetailSection';
import { useParams } from 'next/navigation';
import React from 'react';

const ProjectDetail = () => {
  const params = useParams() as { id: string };
  const id = String(params.id);
  return (
    <>
      <ProjectDetailSection id={id} />
    </>
  );
};

export default ProjectDetail;
