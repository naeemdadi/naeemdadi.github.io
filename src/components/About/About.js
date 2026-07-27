import React from "react";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  BodyText,
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
} from "../../styles";

const About = ({ paragraphs }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="about"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionIndex aria-hidden="true">01</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.about}</SectionTitle>
      </SectionHeader>
      {paragraphs.map((paragraph) => (
        <BodyText key={paragraph}>{paragraph}</BodyText>
      ))}
    </Section>
  );
};

export default About;
