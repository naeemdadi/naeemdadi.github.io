import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { GhostButton, PrimaryButton, navLinkStyles } from "../../styles";

const IntroRoot = styled.div`
  @media (min-width: 960px) {
    position: sticky;
    top: 0;
    align-self: start;
  }
`;

const MobileChrome = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  margin: 0 calc(-1 * var(--space-4));
  background: rgba(250, 250, 250, 0.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);

  @media (min-width: 480px) {
    margin: 0 calc(-1 * var(--space-5));
  }

  @media (min-width: 960px) {
    display: none;
  }
`;

const MobileBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  height: var(--nav-height);
  padding: 0 var(--space-4);

  @media (min-width: 480px) {
    padding: 0 var(--space-5);
  }
`;

const MobileBrand = styled.a`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  color: var(--color-fg);
  cursor: pointer;

  &:hover {
    color: var(--color-fg);
  }
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  color: var(--color-fg);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 2.75rem;
  min-width: 2.75rem;
  padding: 0 var(--space-2);
`;

const MobilePanel = styled.nav`
  display: none;
  flex-direction: column;
  gap: var(--space-1);
  padding: 0 var(--space-4) var(--space-4);

  &.is-open {
    display: flex;
  }

  @media (min-width: 480px) {
    padding: 0 var(--space-5) var(--space-4);
  }
`;

const MobileNavAnchor = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 2.75rem;
  color: var(--color-fg-muted);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;

  &[data-active="true"] {
    color: var(--color-fg);
  }

  span {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-accent);
  }
`;

const Aside = styled.aside`
  padding-top: var(--space-5);
  padding-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border);

  @media (min-width: 960px) {
    min-height: 100vh;
    padding-top: var(--space-9);
    padding-bottom: var(--space-7);
    border-bottom: none;
    display: flex;
    flex-direction: column;
  }
`;

const Identity = styled.div`
  margin-bottom: var(--space-5);

  @media (min-width: 960px) {
    margin-bottom: var(--space-7);
  }
`;

const Name = styled.h1`
  font-size: clamp(2.15rem, 9vw, 3.35rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: var(--space-3);
  line-height: 1.05;
`;

const Role = styled.p`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 500;
  margin-bottom: var(--space-3);

  @media (min-width: 960px) {
    font-size: 1.125rem;
    margin-bottom: var(--space-4);
  }
`;

const Tagline = styled.p`
  color: var(--color-fg-muted);
  font-size: 0.98rem;
  max-width: 22rem;
  line-height: 1.55;
`;

const DesktopNav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-1);
  margin-bottom: var(--space-7);

  @media (min-width: 960px) {
    display: flex;
  }
`;

const NavAnchor = styled.a`
  ${navLinkStyles}
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-5);

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

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);

  @media (min-width: 960px) {
    margin-top: auto;
    padding-top: var(--space-6);
  }
`;

const SocialLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-fg-muted);
  cursor: pointer;
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--color-accent);
  }
`;

const SECTIONS = [
  { id: "about", label: SITE_COPY.nav.about, index: "01" },
  { id: "experience", label: SITE_COPY.nav.experience, index: "02" },
  { id: "projects", label: SITE_COPY.nav.work, index: "03" },
  { id: "skills", label: SITE_COPY.nav.skills, index: "04" },
  { id: "writing", label: SITE_COPY.nav.writing, index: "05" },
  { id: "contact", label: SITE_COPY.nav.contact, index: "06" },
];

const getInitials = (fullName) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Intro = ({ name, role, tagline, email, resumeUrl, profiles }) => {
  const [activeId, setActiveId] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const initials = getInitials(name);

  useEffect(() => {
    const elements = SECTIONS.map((section) =>
      document.getElementById(section.id)
    ).filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.45],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <IntroRoot>
      <MobileChrome>
        <MobileBar>
          <MobileBrand href="#top">{initials}</MobileBrand>
          <MenuButton
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? SITE_COPY.nav.menuClose : SITE_COPY.nav.menuOpen}
          </MenuButton>
        </MobileBar>
        <MobilePanel
          id="mobile-nav"
          className={menuOpen ? "is-open" : undefined}
          aria-label="Mobile"
        >
          {SECTIONS.map((section) => (
            <MobileNavAnchor
              key={section.id}
              href={`#${section.id}`}
              data-active={activeId === section.id ? "true" : "false"}
              onClick={closeMenu}
            >
              <span aria-hidden="true">{section.index}</span>
              {section.label}
            </MobileNavAnchor>
          ))}
        </MobilePanel>
      </MobileChrome>
      <Aside id="top" aria-label="Introduction">
        <Identity>
          <Name>{name}</Name>
          <Role>{role}</Role>
          <Tagline>{tagline}</Tagline>
        </Identity>
        <DesktopNav aria-label="Primary">
          {SECTIONS.map((section) => (
            <NavAnchor
              key={section.id}
              href={`#${section.id}`}
              data-active={activeId === section.id ? "true" : "false"}
            >
              <span aria-hidden="true">{section.index}</span>
              {section.label}
            </NavAnchor>
          ))}
        </DesktopNav>
        <Actions>
          <PrimaryButton
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE_COPY.hero.resumeCta}
          </PrimaryButton>
          <GhostButton href={`mailto:${email}`}>
            {SITE_COPY.hero.emailCta}
          </GhostButton>
        </Actions>
        <SocialRow>
          {profiles.map((profile) => (
            <SocialLink
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.network}
            </SocialLink>
          ))}
        </SocialRow>
      </Aside>
    </IntroRoot>
  );
};

export default Intro;
