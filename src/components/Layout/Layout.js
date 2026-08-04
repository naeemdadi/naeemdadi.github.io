import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { ROUTES } from "../../constants/routes";
import { portfolio } from "../../data/portfolio";
import { Main, Page, PrimaryButton, Shell, navLinkStyles } from "../../styles";

const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(244, 244, 245, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
`;

const NavInner = styled(Shell)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  height: var(--nav-height);
`;

const Brand = styled(Link)`
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.03em;
  color: var(--color-fg);
  flex-shrink: 0;

  &:hover {
    color: var(--color-fg);
  }
`;

const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  gap: var(--space-4);

  @media (min-width: 900px) {
    display: flex;
  }
`;

const DesktopLink = styled(NavLink)`
  ${navLinkStyles}

  &.active {
    color: var(--color-fg);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const NavCta = styled(PrimaryButton)`
  display: none;
  min-height: 2.35rem;
  padding: 0.4rem 0.9rem;
  font-size: 0.875rem;

  @media (min-width: 900px) {
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
  min-height: 2.35rem;
  padding: 0 var(--space-3);
  border-radius: var(--radius);

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobilePanel = styled.nav`
  display: none;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2) var(--page-pad) var(--space-4);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg);

  &[data-open="true"] {
    display: flex;
  }

  @media (min-width: 900px) {
    display: none !important;
  }
`;

const MobileLink = styled(NavLink)`
  display: flex;
  align-items: center;
  min-height: 2.75rem;
  color: var(--color-fg-muted);
  font-size: 1rem;
  font-weight: 500;

  &.active,
  &:hover {
    color: var(--color-fg);
  }
`;

const Footer = styled.footer`
  border-top: 1px solid var(--color-border);
  padding: var(--space-5) 0;
`;

const FooterInner = styled(Shell)`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const FooterNote = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);

  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--color-fg-muted);
    min-height: 2.5rem;
    display: inline-flex;
    align-items: center;

    &:hover {
      color: var(--color-accent);
    }
  }
`;

const getInitials = (fullName) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const initials = getInitials(portfolio.name);
  const year = new Date().getFullYear();

  useEffect(() => {
    setMenuOpen(false);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <Page>
      <NavBar>
        <NavInner>
          <Brand to="/">{initials}</Brand>
          <DesktopNav aria-label="Primary">
            {ROUTES.map((route) => (
              <DesktopLink
                key={route.path}
                to={route.path}
                activeClassName="active"
              >
                {route.label}
              </DesktopLink>
            ))}
          </DesktopNav>
          <NavCta href={`mailto:${portfolio.email}`}>
            {SITE_COPY.hero.emailCta}
          </NavCta>
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
          data-open={menuOpen ? "true" : "false"}
          aria-label="Mobile"
        >
          {ROUTES.map((route) => (
            <MobileLink
              key={route.path}
              to={route.path}
              activeClassName="active"
            >
              {route.label}
            </MobileLink>
          ))}
        </MobilePanel>
      </NavBar>

      <Main>{children}</Main>

      <Footer>
        <FooterInner>
          <FooterNote>
            © {year} {portfolio.name}
          </FooterNote>
          <FooterLinks>
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
          </FooterLinks>
        </FooterInner>
      </Footer>
    </Page>
  );
};

export default Layout;
