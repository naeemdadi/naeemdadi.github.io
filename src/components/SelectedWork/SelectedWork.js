import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Meta,
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
  TextLink,
} from "../../styles";

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5) 0;
  border-top: 1px solid var(--color-border);

  &:last-child {
    border-bottom: 1px solid var(--color-border);
  }

  @media (hover: hover) and (min-width: 640px) {
    margin: 0 calc(-1 * var(--space-4));
    padding-left: var(--space-4);
    padding-right: var(--space-4);
    transition: background var(--transition), transform var(--transition);

    &:hover {
      background: var(--color-row-hover);
      transform: translateX(0.25rem);
    }
  }

  @media (min-width: 640px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: start;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.15rem;
  margin-bottom: var(--space-2);

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Summary = styled.p`
  color: var(--color-fg-muted);
  max-width: 52ch;
  margin-bottom: var(--space-3);
  font-size: 0.98rem;
`;

const Tech = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
  line-height: 1.5;
  overflow-wrap: anywhere;
  margin-bottom: var(--space-3);

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  min-height: 2.75rem;
  align-items: center;

  @media (min-width: 640px) {
    justify-content: flex-end;
    padding-top: 0.2rem;
    min-width: 7rem;
  }
`;

const SelectedWork = ({ projects }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="projects"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionIndex aria-hidden="true">03</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.work}</SectionTitle>
      </SectionHeader>
      <List>
        {projects.map((project) => (
          <Item key={project.name}>
            <div>
              <ProjectName>{project.name}</ProjectName>
              <Summary>{project.summary}</Summary>
              <Tech>
                <Meta>{project.tech.join(" · ")}</Meta>
              </Tech>
            </div>
            <Links>
              {project.url && (
                <TextLink
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_COPY.work.live}
                </TextLink>
              )}
              {project.githubUrl && (
                <TextLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_COPY.work.github}
                </TextLink>
              )}
            </Links>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default SelectedWork;
