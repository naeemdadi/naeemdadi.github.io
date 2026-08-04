import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
  TextLink,
} from "../../styles";

const Grid = styled.div`
  display: grid;
  gap: var(--space-5);

  @media (min-width: 900px) {
    gap: var(--space-6);
  }
`;

const Card = styled.article`
  display: grid;
  gap: 0;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition),
    box-shadow var(--transition);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    min-height: 20rem;
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-border-strong);
      transform: translateY(-3px);
      box-shadow: 0 1px 0 rgba(9, 9, 11, 0.04), 0 18px 48px rgba(9, 9, 11, 0.1);
    }
  }
`;

const Preview = styled.div`
  position: relative;
  min-height: 14rem;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(37, 99, 235, 0.14),
      transparent 42%
    ),
    linear-gradient(160deg, #f4f4f5 0%, #eef2ff 48%, #fafafa 100%);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-5);
  display: flex;
  align-items: flex-end;

  @media (min-width: 900px) {
    min-height: 100%;
    border-bottom: none;
    border-right: 1px solid var(--color-border);
    padding: var(--space-6);
  }
`;

const PreviewWindow = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
  backdrop-filter: blur(6px);
`;

const PreviewLabel = styled.p`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-3);
`;

const PreviewBars = styled.div`
  display: grid;
  gap: var(--space-2);
`;

const Bar = styled.div`
  height: 0.55rem;
  border-radius: 999px;
  background: ${(props) =>
    props.$accent ? "rgba(37, 99, 235, 0.55)" : "var(--color-panel)"};
  width: ${(props) => props.$width || "100%"};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-5);

  @media (min-width: 900px) {
    padding: var(--space-6);
    justify-content: center;
  }
`;

const ProjectName = styled.h3`
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  letter-spacing: -0.03em;
`;

const Summary = styled.p`
  color: var(--color-fg-muted);
  font-size: 1rem;
  line-height: 1.6;
  max-width: 40ch;
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const TechChip = styled.span`
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-fg-muted);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: calc(var(--radius) - 2px);
  padding: 0.3rem 0.55rem;
  letter-spacing: 0.02em;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-1);

  a {
    min-height: 2.5rem;
    display: inline-flex;
    align-items: center;
    font-weight: 500;
  }
`;

const SelectedWork = ({ projects }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="work"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionTitle>{SITE_COPY.sections.work}</SectionTitle>
        <SectionLead>{SITE_COPY.sections.workLead}</SectionLead>
      </SectionHeader>
      <Grid>
        {projects.map((project, index) => (
          <Card key={project.name}>
            <Preview>
              <PreviewWindow>
                <PreviewLabel>
                  {String(index + 1).padStart(2, "0")} / {project.name}
                </PreviewLabel>
                <PreviewBars>
                  <Bar $width="72%" $accent={index === 0} />
                  <Bar $width="88%" />
                  <Bar $width="54%" $accent={index !== 0} />
                  <Bar $width="66%" />
                </PreviewBars>
              </PreviewWindow>
            </Preview>
            <Body>
              <ProjectName>{project.name}</ProjectName>
              <Summary>{project.summary}</Summary>
              <TechRow>
                {project.tech.slice(0, 6).map((item) => (
                  <TechChip key={item}>{item}</TechChip>
                ))}
              </TechRow>
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
            </Body>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default SelectedWork;
