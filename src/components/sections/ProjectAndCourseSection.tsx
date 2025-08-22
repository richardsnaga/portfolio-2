'use client';
import React from 'react';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';

const ProjectAndCourseSection = () => {
  const list = [
    {
      title: 'E-Procurement',
      img: '/projects/polytama/polytama.png',
      subtitle: 'Website E-Procurement for PT.Polytama Propindo'
    }
  ];
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Project" />
        <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            /* eslint-disable no-console */
            <Card
              key={index}
              isPressable
              shadow="sm"
              onPress={() => console.log('item pressed')}
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
