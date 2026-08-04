import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import {
  GhostButton,
  PrimaryButton,
  SectionHeader,
  SectionLead,
  SectionTitle,
  Stack,
} from "../styles";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  margin-bottom: var(--space-7);

  @media (min-width: 960px) {
    max-width: 44rem;
    margin-bottom: var(--space-8);
  }
`;

const Role = styled.p`
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 9vw, 4.25rem);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 0.96;
`;

const Tagline = styled.p`
  color: var(--color-fg-muted);
  font-size: clamp(1.05rem, 2.4vw, 1.2rem);
  line-height: 1.5;
  max-width: 34rem;
`;

const AboutBlurb = styled.p`
  color: var(--color-fg);
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 40rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  a {
    width: 100%;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;

    a {
      width: auto;
    }
  }
`;

const PathGrid = styled.div`
  display: grid;
  gap: var(--space-4);

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const PathCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  min-height: 10.5rem;
  padding: var(--space-5);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  color: var(--color-fg);
  transition: border-color var(--transition), transform var(--transition);

  &:hover {
    color: var(--color-fg);
    border-color: var(--color-border-strong);
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const PathLabel = styled.span`
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const PathCopy = styled.span`
  color: var(--color-fg-muted);
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`;

const PathGo = styled.span`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent);
`;

const PATHS = [
  {
    to: "/about",
    label: SITE_COPY.nav.about,
    copy: SITE_COPY.home.paths.about,
  },
  {
    to: "/experience",
    label: SITE_COPY.nav.experience,
    copy: SITE_COPY.home.paths.experience,
  },
  {
    to: "/work",
    label: SITE_COPY.nav.work,
    copy: SITE_COPY.home.paths.work,
  },
];

const HomePage = () => (
  <>
    <Hero aria-label="Introduction">
      <Stack gap="var(--space-4)">
        <Role>{portfolio.role}</Role>
        <Name>{portfolio.name}</Name>
        <Tagline>{portfolio.tagline}</Tagline>
        <AboutBlurb>{portfolio.about[0]}</AboutBlurb>
        <Actions>
          <PrimaryButton as={Link} to="/about">
            {SITE_COPY.hero.aboutCta}
          </PrimaryButton>
          <GhostButton href={`mailto:${portfolio.email}`}>
            {SITE_COPY.hero.emailCta}
          </GhostButton>
          <GhostButton
            href={portfolio.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE_COPY.hero.resumeCta}
          </GhostButton>
        </Actions>
      </Stack>
    </Hero>

    <section>
      <SectionHeader>
        <SectionTitle>{SITE_COPY.home.exploreTitle}</SectionTitle>
        <SectionLead>{SITE_COPY.home.exploreLead}</SectionLead>
      </SectionHeader>
      <PathGrid>
        {PATHS.map((path) => (
          <PathCard key={path.to} to={path.to}>
            <PathLabel>{path.label}</PathLabel>
            <PathCopy>{path.copy}</PathCopy>
            <PathGo>Open</PathGo>
          </PathCard>
        ))}
      </PathGrid>
    </section>
  </>
);

export default HomePage;
