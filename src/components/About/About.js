import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  BodyText,
  Section,
  SectionHeader,
  SectionTitle,
} from "../../styles";

const AboutGrid = styled.div`
  display: grid;
  gap: var(--space-6);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
    gap: var(--space-8);
    align-items: start;
  }
`;

const AboutHeader = styled(SectionHeader)`
  margin-bottom: 0;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const About = ({ paragraphs }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="about"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <AboutGrid>
        <AboutHeader>
          <SectionTitle>{SITE_COPY.sections.about}</SectionTitle>
        </AboutHeader>
        <Copy>
          {paragraphs.map((paragraph) => (
            <BodyText key={paragraph}>{paragraph}</BodyText>
          ))}
        </Copy>
      </AboutGrid>
    </Section>
  );
};

export default About;
