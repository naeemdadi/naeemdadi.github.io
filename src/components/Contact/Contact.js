import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  BodyText,
  PrimaryButton,
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
  TextLink,
} from "../../styles";

const Lead = styled(BodyText)`
  font-size: 1.125rem;
  font-family: var(--font-display);
  font-weight: 500;
  line-height: 1.4;
  max-width: 28rem;
  margin-bottom: var(--space-5);

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-3);
  margin-bottom: var(--space-5);

  a:first-child {
    width: 100%;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);

    a:first-child {
      width: auto;
      max-width: 100%;
    }
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
  }
`;

const FooterNote = styled.p`
  margin-top: var(--space-9);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
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
      <SectionHeader>
        <SectionIndex aria-hidden="true">06</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.contact}</SectionTitle>
      </SectionHeader>
      <Lead>{SITE_COPY.contact.lead}</Lead>
      <Actions>
        <PrimaryButton href={`mailto:${email}`}>{email}</PrimaryButton>
        <TextLink
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {SITE_COPY.hero.resumeCta}
        </TextLink>
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
    </Section>
  );
};

export default Contact;
