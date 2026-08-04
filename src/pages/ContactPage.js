import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import { GhostButton, PageHeader, PageTitle, PrimaryButton } from "../styles";

const Banner = styled.div`
  padding: var(--space-6) var(--space-5);
  background: var(--color-ink-soft);
  color: #fafafa;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);

  @media (min-width: 640px) {
    padding: var(--space-7);
  }
`;

const Lead = styled.p`
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4vw, 2.1rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.2;
  max-width: 22ch;
  margin-bottom: var(--space-6);
  color: #fafafa;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);

  a:first-child {
    width: 100%;
    background: #fafafa;
    color: var(--color-fg);

    &:hover {
      background: #fff;
      color: var(--color-fg);
    }
  }

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;

    a:first-child {
      width: auto;
    }
  }
`;

const DarkGhost = styled(GhostButton)`
  background: transparent;
  border-color: rgba(250, 250, 250, 0.28);
  color: #fafafa;

  &:hover {
    border-color: #fafafa;
    background: rgba(250, 250, 250, 0.06);
    color: #fafafa;
  }
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);

  a {
    min-height: 2.75rem;
    display: inline-flex;
    align-items: center;
    color: rgba(250, 250, 250, 0.72);
    font-weight: 500;

    &:hover {
      color: #fff;
    }
  }
`;

const ContactPage = () => (
  <>
    <PageHeader>
      <PageTitle>{SITE_COPY.sections.contact}</PageTitle>
    </PageHeader>
    <Banner>
      <Lead>{SITE_COPY.contact.lead}</Lead>
      <Actions>
        <PrimaryButton href={`mailto:${portfolio.email}`}>
          {portfolio.email}
        </PrimaryButton>
        <DarkGhost
          href={portfolio.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE_COPY.hero.resumeCta}
        </DarkGhost>
      </Actions>
      <SocialRow>
        {portfolio.profiles.map((profile) => (
          <a
            key={profile.network}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.network}
          </a>
        ))}
      </SocialRow>
    </Banner>
  </>
);

export default ContactPage;
