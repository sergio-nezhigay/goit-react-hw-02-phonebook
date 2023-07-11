import { ReactNode } from 'react';

import { Title, SectionContainer } from './Section.styled';

interface ISection {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: ISection) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
