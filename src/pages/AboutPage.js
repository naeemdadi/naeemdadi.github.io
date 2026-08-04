import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import {
  BodyText,
  PageHeader,
  PageLead,
  PageTitle,
  SectionHeader,
  SectionLead,
  SectionTitle,
  Stack,
} from "../styles";

const AboutCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-7);
  padding: var(--space-5);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);

  @media (min-width: 800px) {
    padding: var(--space-6);
  }
`;

const Bento = styled.div`
  display: grid;
  gap: var(--space-4);

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Tile = styled.div`
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-panel);
  min-height: 9.5rem;
`;

const Group = styled.h3`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin: 0 0 var(--space-4);
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const Chip = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-fg);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  border-radius: calc(var(--radius) - 2px);
  padding: 0.35rem 0.6rem;
`;

const AboutPage = () => (
  <>
    <PageHeader>
      <PageTitle>{SITE_COPY.sections.about}</PageTitle>
      <PageLead>{SITE_COPY.sections.aboutLead}</PageLead>
    </PageHeader>

    <AboutCopy>
      {portfolio.about.map((paragraph) => (
        <BodyText key={paragraph}>{paragraph}</BodyText>
      ))}
    </AboutCopy>

    <Stack gap="var(--space-5)">
      <SectionHeader>
        <SectionTitle>{SITE_COPY.sections.skills}</SectionTitle>
        <SectionLead>{SITE_COPY.sections.skillsLead}</SectionLead>
      </SectionHeader>
      <Bento>
        {portfolio.skills.map((group) => (
          <Tile key={group.group}>
            <Group>{group.group}</Group>
            <Chips>
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </Chips>
          </Tile>
        ))}
      </Bento>
    </Stack>
  </>
);

export default AboutPage;
