import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  GhostButton,
  PrimaryButton,
  Section,
  TextLink,
} from "../../styles";

const Banner = styled.div`
  padding: var(--space-7) var(--space-5);
  background: var(--color-ink-soft);
  color: #fafafa;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);

  @media (min-width: 640px) {
    padding: var(--space-8) var(--space-7);
  }
`;

const Eyebrow = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(250, 250, 250, 0.55);
  margin-bottom: var(--space-4);
`;

const Lead = styled.p`
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
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
  align-items: stretch;
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
    align-items: center;
    gap: var(--space-4);

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
    color: rgba(250, 250, 250, 0.7);
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

const FooterNote = styled.p`
  margin-top: var(--space-6);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: rgba(250, 250, 250, 0.45);
`;

const Contact = ({ email, profiles, name, resumeUrl }) => {
  const [ref, visible] = useReveal();
  const year = new Date().getFullYear();

  return (
    <Section
      id="contact"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <Banner>
        <Eyebrow>{SITE_COPY.sections.contact}</Eyebrow>
        <Lead>{SITE_COPY.contact.lead}</Lead>
        <Actions>
          <PrimaryButton href={`mailto:${email}`}>{email}</PrimaryButton>
          <DarkGhost
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE_COPY.hero.resumeCta}
          </DarkGhost>
        </Actions>
        <SocialRow>
          {profiles.map((profile) => (
            <TextLink
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.network}
            </TextLink>
          ))}
        </SocialRow>
        <FooterNote>
          © {year} {name}
        </FooterNote>
      </Banner>
    </Section>
  );
};

export default Contact;
