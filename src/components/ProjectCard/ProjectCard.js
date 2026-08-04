import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { TextLink } from "../../styles";

const Card = styled.article`
  display: grid;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  overflow: hidden;
  transition: border-color var(--transition), transform var(--transition),
    box-shadow var(--transition);

  @media (min-width: 800px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  }

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-border-strong);
      transform: translateY(-2px);
      box-shadow: 0 1px 0 rgba(9, 9, 11, 0.04), 0 16px 40px rgba(9, 9, 11, 0.1);
    }
  }
`;

const Preview = styled.div`
  min-height: 11rem;
  background:
    radial-gradient(
      circle at 18% 20%,
      rgba(37, 99, 235, 0.16),
      transparent 45%
    ),
    linear-gradient(160deg, #f4f4f5 0%, #eef2ff 50%, #fafafa 100%);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4);
  display: flex;
  align-items: flex-end;

  @media (min-width: 800px) {
    min-height: 100%;
    border-bottom: none;
    border-right: 1px solid var(--color-border);
    padding: var(--space-5);
  }
`;

const PreviewWindow = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--space-4);
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
  height: 0.5rem;
  border-radius: 999px;
  background: ${(props) =>
    props.$accent ? "rgba(37, 99, 235, 0.55)" : "var(--color-panel)"};
  width: ${(props) => props.$width || "100%"};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);

  @media (min-width: 800px) {
    padding: var(--space-5) var(--space-6);
    justify-content: center;
  }
`;

const ProjectName = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.6rem);
  letter-spacing: -0.03em;
`;

const Summary = styled.p`
  color: var(--color-fg-muted);
  font-size: 0.98rem;
  line-height: 1.55;
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

const ProjectCard = ({ project, index = 0 }) => (
  <Card>
    <Preview>
      <PreviewWindow>
        <PreviewLabel>
          {String(index + 1).padStart(2, "0")} / {project.name}
        </PreviewLabel>
        <PreviewBars>
          <Bar $width="72%" $accent={index % 2 === 0} />
          <Bar $width="88%" />
          <Bar $width="54%" $accent={index % 2 !== 0} />
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
);

export default ProjectCard;
