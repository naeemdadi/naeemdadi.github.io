import React, { useState } from "react";
import styled from "styled-components";

import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import { Meta, PageHeader, PageLead, PageTitle, Stack } from "../styles";

const CompanyCard = styled.article`
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  overflow: hidden;
`;

const CompanyHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-4) var(--space-5);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-panel);

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const CompanyName = styled.h2`
  font-size: clamp(1.15rem, 3vw, 1.35rem);
  letter-spacing: -0.02em;
`;

const RoleBlock = styled.div`
  padding: var(--space-5);
  border-top: 1px solid var(--color-border);

  &:first-of-type {
    border-top: none;
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

const RoleTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
`;

const Story = styled.p`
  font-size: 0.98rem;
  line-height: 1.55;
  margin-bottom: var(--space-3);
`;

const Tech = styled.p`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-fg-muted);
  line-height: 1.5;
  margin-bottom: var(--space-3);
  overflow-wrap: anywhere;
`;

const Toggle = styled.button`
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
  display: grid;
  gap: var(--space-3);
  margin-top: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Win = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-3);
  background: var(--color-panel);
  border-radius: var(--radius);
`;

const WinTitle = styled.span`
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
`;

const WinDetail = styled.span`
  color: var(--color-fg-muted);
  font-size: 0.92rem;
  line-height: 1.5;
`;

const Education = styled.div`
  padding: var(--space-5);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
`;

const EducationTitle = styled.h2`
  font-size: 0.78rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-3);
`;

const RoleItem = ({ role }) => {
  const hasWins = role.wins && role.wins.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <RoleBlock>
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
    </RoleBlock>
  );
};

const ExperiencePage = () => (
  <>
    <PageHeader>
      <PageTitle>{SITE_COPY.sections.experience}</PageTitle>
      <PageLead>{SITE_COPY.sections.experienceLead}</PageLead>
    </PageHeader>
    <Stack gap="var(--space-4)">
      {portfolio.experience.map((job) => (
        <CompanyCard key={job.company}>
          <CompanyHead>
            <CompanyName>{job.company}</CompanyName>
            {job.location && <Meta>{job.location}</Meta>}
          </CompanyHead>
          {job.roles.map((role) => (
            <RoleItem
              key={`${job.company}-${role.position}-${role.start}`}
              role={role}
            />
          ))}
        </CompanyCard>
      ))}
      {portfolio.education && portfolio.education.length > 0 && (
        <Education>
          <EducationTitle>{SITE_COPY.sections.education}</EducationTitle>
          {portfolio.education.map((item) => (
            <p key={item.school}>
              {item.degree}, {item.school} <Meta>({item.years})</Meta>
            </p>
          ))}
        </Education>
      )}
    </Stack>
  </>
);

export default ExperiencePage;
