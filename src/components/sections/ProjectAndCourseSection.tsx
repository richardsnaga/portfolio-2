'use client';
import React from 'react';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { projects } from '@/src/data/projectDetails';
import { useRouter } from 'next/navigation';

const ProjectAndCourseSection = () => {
  const router = useRouter();
  const projectDetails = (item: any) => {
    console.log('item pressed', item);
    router.push(`/projects/${item.id}`);
  };
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Project" />
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
          {projects.map((item) => (
            /* eslint-disable no-console */
            <Card
              key={item.id}
              isPressable
              shadow="sm"
              onPress={() => projectDetails(item)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  shadow="sm"
                  src={item.img}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small w-auto text-foreground dark:text-white">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectAndCourseSection;
