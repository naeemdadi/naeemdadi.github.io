import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { GhostButton, PrimaryButton, navLinkStyles } from "../../styles";

const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroRoot = styled.header`
  position: relative;
`;

const NavChrome = styled.div`
  position: sticky;
  top: 0;
  z-index: 30;
  margin: 0 calc(-1 * var(--space-4));
  background: rgba(247, 247, 248, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border);

  @media (min-width: 640px) {
    margin: 0 calc(-1 * var(--space-6));
  }

  @media (min-width: 1024px) {
    margin: 0 calc(-1 * var(--space-8));
  }
`;

const NavInner = styled.div`
  width: min(100%, var(--max-width));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  height: var(--nav-height);
  padding: 0 var(--space-4);

  @media (min-width: 640px) {
    padding: 0 var(--space-6);
  }

  @media (min-width: 1024px) {
    padding: 0 var(--space-8);
  }
`;

const Brand = styled.a`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.03em;
  color: var(--color-fg);
  cursor: pointer;

  &:hover {
    color: var(--color-fg);
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: var(--space-5);

  @media (min-width: 960px) {
    display: flex;
  }
`;

const NavAnchor = styled.a`
  ${navLinkStyles}
`;

const NavCta = styled(PrimaryButton)`
  display: none;
  min-height: 2.4rem;
  padding: 0.45rem 1rem;
  font-size: 0.875rem;

  @media (min-width: 960px) {
    display: inline-flex;
  }
`;

const MenuButton = styled.button`
  border: 1px solid var(--color-border-strong);
  background: var(--color-bg-elevated);
  color: var(--color-fg);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 2.4rem;
  padding: 0 var(--space-3);
  border-radius: var(--radius);

  @media (min-width: 960px) {
    display: none;
  }
`;

const MobilePanel = styled.nav`
  display: none;
  flex-direction: column;
  gap: var(--space-1);
  padding: 0 var(--space-4) var(--space-4);
  border-top: 1px solid var(--color-border);

  &.is-open {
    display: flex;
  }

  @media (min-width: 640px) {
    padding: 0 var(--space-6) var(--space-4);
  }

  @media (min-width: 960px) {
    display: none !important;
  }
`;

const MobileNavAnchor = styled.a`
  display: flex;
  align-items: center;
  min-height: 2.75rem;
  color: var(--color-fg-muted);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;

  &[data-active="true"] {
    color: var(--color-fg);
  }
`;

const Hero = styled.section`
  display: grid;
  gap: var(--space-7);
  padding: var(--space-8) 0 var(--space-6);
  min-height: calc(100vh - var(--nav-height));
  align-content: center;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: var(--space-8);
    padding: var(--space-9) 0 var(--space-8);
    align-items: center;
  }
`;

const HeroCopy = styled.div`
  animation: ${rise} 0.7s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Role = styled.p`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-4);
`;

const Name = styled.h1`
  font-size: clamp(2.75rem, 8vw, 4.75rem);
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 0.95;
  margin-bottom: var(--space-5);
`;

const Tagline = styled.p`
  color: var(--color-fg-muted);
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  max-width: 34rem;
  line-height: 1.55;
  margin-bottom: var(--space-6);
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
`;

const SocialLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-fg-muted);
  cursor: pointer;
  min-height: 2.5rem;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--color-accent);
  }
`;

const HeroVisual = styled.div`
  animation: ${rise} 0.7s ease 0.12s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Stage = styled.div`
  position: relative;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  overflow: hidden;
  min-height: 18rem;

  @media (min-width: 960px) {
    min-height: 22rem;
  }
`;

const StageBar = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.85rem 1rem;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-panel);
`;

const Dot = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  background: ${(props) => props.$color};
`;

const StageUrl = styled.span`
  margin-left: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--color-fg-muted);
`;

const StageBody = styled.div`
  display: grid;
  gap: var(--space-3);
  padding: var(--space-5);
`;

const StageBlock = styled.div`
  height: ${(props) => props.$height || "2.5rem"};
  border-radius: calc(var(--radius) - 2px);
  background: ${(props) =>
    props.$accent ? "rgba(37, 99, 235, 0.12)" : "var(--color-panel)"};
  border: 1px solid
    ${(props) => (props.$accent ? "rgba(37, 99, 235, 0.2)" : "transparent")};
  width: ${(props) => props.$width || "100%"};
`;

const StageRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--space-3);
`;

const StageCaption = styled.p`
  margin-top: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-fg-muted);
  letter-spacing: 0.02em;
`;

const SECTIONS = [
  { id: "work", label: SITE_COPY.nav.work },
  { id: "about", label: SITE_COPY.nav.about },
  { id: "experience", label: SITE_COPY.nav.experience },
  { id: "skills", label: SITE_COPY.nav.skills },
  { id: "writing", label: SITE_COPY.nav.writing },
  { id: "contact", label: SITE_COPY.nav.contact },
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
  const [activeId, setActiveId] = useState("work");
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
    <IntroRoot id="top">
      <NavChrome>
        <NavInner>
          <Brand href="#top">{initials}</Brand>
          <DesktopNav aria-label="Primary">
            {SECTIONS.map((section) => (
              <NavAnchor
                key={section.id}
                href={`#${section.id}`}
                data-active={activeId === section.id ? "true" : "false"}
              >
                {section.label}
              </NavAnchor>
            ))}
          </DesktopNav>
          <NavCta href={`mailto:${email}`}>{SITE_COPY.hero.emailCta}</NavCta>
          <MenuButton
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? SITE_COPY.nav.menuClose : SITE_COPY.nav.menuOpen}
          </MenuButton>
        </NavInner>
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
              {section.label}
            </MobileNavAnchor>
          ))}
        </MobilePanel>
      </NavChrome>

      <Hero aria-label="Introduction">
        <HeroCopy>
          <Role>{role}</Role>
          <Name>{name}</Name>
          <Tagline>{tagline}</Tagline>
          <Actions>
            <PrimaryButton href="#work">{SITE_COPY.hero.workCta}</PrimaryButton>
            <GhostButton href={`mailto:${email}`}>
              {SITE_COPY.hero.emailCta}
            </GhostButton>
            <GhostButton
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE_COPY.hero.resumeCta}
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
        </HeroCopy>

        <HeroVisual>
          <Stage aria-hidden="true">
            <StageBar>
              <Dot $color="#f87171" />
              <Dot $color="#fbbf24" />
              <Dot $color="#4ade80" />
              <StageUrl>naeemdadi.github.io / work</StageUrl>
            </StageBar>
            <StageBody>
              <StageBlock $height="1.25rem" $width="42%" />
              <StageBlock $height="3.5rem" $accent />
              <StageRow>
                <StageBlock $height="5.5rem" />
                <StageBlock $height="5.5rem" />
              </StageRow>
              <StageBlock $height="2rem" $width="58%" />
            </StageBody>
          </Stage>
          <StageCaption>{SITE_COPY.work.preview}</StageCaption>
        </HeroVisual>
      </Hero>
    </IntroRoot>
  );
};

export default Intro;
