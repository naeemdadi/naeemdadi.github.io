import React, { useState } from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Meta,
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
} from "../../styles";

const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  position: relative;
  margin: 0;
  padding: 0;

  @media (min-width: 640px) {
    padding-left: var(--space-2);

    &::before {
      content: "";
      position: absolute;
      left: 0.35rem;
      top: 0.4rem;
      bottom: 0.4rem;
      width: 1px;
      background: var(--color-border);
    }
  }
`;

const CompanyBlock = styled.li`
  position: relative;
  display: grid;
  gap: var(--space-5);

  @media (min-width: 640px) {
    padding-left: var(--space-6);

    &::before {
      content: "";
      position: absolute;
      left: 0.15rem;
      top: 0.55rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--color-fg);
      box-shadow: 0 0 0 3px var(--color-bg);
    }
  }
`;

const CompanyName = styled.h3`
  font-size: clamp(1.15rem, 4vw, 1.35rem);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-1);
`;

const CompanyMeta = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-4);

  @media (min-width: 640px) {
    margin-bottom: var(--space-5);
  }
`;

const RoleStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  @media (min-width: 640px) {
    gap: var(--space-5);
  }
`;

const RoleCard = styled.article`
  max-width: 58ch;
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-left: 2px solid var(--color-fg);
  background: var(--color-bg-elevated);

  @media (min-width: 640px) {
    padding: var(--space-5);
  }
`;

const RoleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-bottom: var(--space-3);

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: var(--space-4);
  }
`;

const RoleTitle = styled.h4`
  font-family: var(--font-display);
  font-size: 1.02rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
`;

const Story = styled.p`
  color: var(--color-fg);
  font-size: 0.98rem;
  line-height: 1.6;
  margin-bottom: var(--space-4);
`;

const Tech = styled.p`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-fg-muted);
  letter-spacing: 0.02em;
  margin-bottom: var(--space-3);
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border: none;
  background: transparent;
  padding: 0;
  min-height: 2.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent);
  cursor: pointer;

  &:hover {
    color: var(--color-accent-hover);
  }
`;

const Wins = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
`;

const Win = styled.li`
  display: grid;
  gap: var(--space-1);

  @media (min-width: 560px) {
    grid-template-columns: 9.5rem minmax(0, 1fr);
    gap: var(--space-4);
  }
`;

const WinTitle = styled.span`
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-fg);
`;

const WinDetail = styled.span`
  color: var(--color-fg-muted);
  font-size: 0.95rem;
  line-height: 1.55;
`;

const EducationBlock = styled.div`
  margin-top: var(--space-8);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border);
`;

const EducationTitle = styled.h3`
  font-size: 0.8125rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-3);
`;

const EducationLine = styled.p`
  font-size: 0.975rem;
  color: var(--color-fg);
`;

const RoleItem = ({ role }) => {
  const hasWins = role.wins && role.wins.length > 0;
  const [open, setOpen] = useState(hasWins);

  return (
    <RoleCard>
      <RoleHeader>
        <RoleTitle>{role.position}</RoleTitle>
        <Meta>
          {role.start} – {role.end}
        </Meta>
      </RoleHeader>
      <Story>{role.story}</Story>
      {role.tech && role.tech.length > 0 && (
        <Tech>{role.tech.join(" · ")}</Tech>
      )}
      {hasWins && (
        <>
          <Toggle
            type="button"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open
              ? SITE_COPY.experience.hideImpact
              : SITE_COPY.experience.showImpact}
          </Toggle>
          {open && (
            <Wins>
              {role.wins.map((win) => (
                <Win key={win.title}>
                  <WinTitle>{win.title}</WinTitle>
                  <WinDetail>{win.detail}</WinDetail>
                </Win>
              ))}
            </Wins>
          )}
        </>
      )}
    </RoleCard>
  );
};

const Experience = ({ jobs, education }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="experience"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionIndex aria-hidden="true">02</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.experience}</SectionTitle>
      </SectionHeader>
      <Timeline>
        {jobs.map((job) => (
          <CompanyBlock key={job.company}>
            <div>
              <CompanyName>{job.company}</CompanyName>
              {job.location && <CompanyMeta>{job.location}</CompanyMeta>}
              <RoleStack>
                {job.roles.map((role) => (
                  <RoleItem
                    key={`${job.company}-${role.position}-${role.start}`}
                    role={role}
                  />
                ))}
              </RoleStack>
            </div>
          </CompanyBlock>
        ))}
      </Timeline>
      {education && education.length > 0 && (
        <EducationBlock>
          <EducationTitle>{SITE_COPY.sections.education}</EducationTitle>
          {education.map((item) => (
            <EducationLine key={item.school}>
              {item.degree}, {item.school} <Meta>({item.years})</Meta>
            </EducationLine>
          ))}
        </EducationBlock>
      )}
    </Section>
  );
};

export default Experience;
