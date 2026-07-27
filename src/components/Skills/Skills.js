import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
} from "../../styles";

const Grid = styled.dl`
  display: grid;
  gap: var(--space-5);
  margin: 0;

  @media (min-width: 640px) {
    grid-template-columns: 9.5rem 1fr;
    column-gap: var(--space-5);
    row-gap: var(--space-4);
  }
`;

const Group = styled.dt`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin: 0;

  @media (min-width: 640px) {
    padding-top: 0.2rem;
  }
`;

const Items = styled.dd`
  margin: 0;
  color: var(--color-fg);
  font-size: 0.975rem;
  max-width: 52ch;
`;

const Skills = ({ groups }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="skills"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionIndex aria-hidden="true">04</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.skills}</SectionTitle>
      </SectionHeader>
      <Grid>
        {groups.map((group) => (
          <React.Fragment key={group.group}>
            <Group>{group.group}</Group>
            <Items>{group.items.join(", ")}</Items>
          </React.Fragment>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
