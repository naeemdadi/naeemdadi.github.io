import styled, { css, keyframes } from "styled-components";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.85rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Page = styled.div`
  min-height: 100vh;
`;

export const Shell = styled.div`
  width: min(100%, var(--max-width));
  margin: 0 auto;
  padding: 0 var(--space-4) var(--space-8);

  @media (min-width: 480px) {
    padding: 0 var(--space-5) var(--space-9);
  }

  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: var(--intro-width) minmax(0, 1fr);
    gap: var(--space-8);
    padding: 0 var(--space-6) var(--space-10);
    align-items: start;
  }

  @media (min-width: 1200px) {
    gap: var(--space-10);
  }
`;

export const Content = styled.main`
  padding-top: var(--space-5);
  max-width: var(--content-width);
  min-width: 0;

  @media (min-width: 960px) {
    padding-top: var(--space-9);
    padding-bottom: var(--space-9);
  }
`;

export const Section = styled.section`
  padding: var(--space-7) 0 0;
  scroll-margin-top: calc(var(--nav-height) + var(--space-4));
  opacity: 0;
  transform: translateY(0.85rem);
  transition: opacity 0.45s ease, transform 0.45s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }

  @media (min-width: 960px) {
    scroll-margin-top: var(--space-6);
    padding-top: var(--space-9);

    &:first-of-type {
      padding-top: 0;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--space-5);
`;

export const SectionIndex = styled.span`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-accent);
  letter-spacing: 0.04em;
`;

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-fg-muted);
`;

export const BodyText = styled.p`
  color: var(--color-fg);
  max-width: 62ch;
  margin-bottom: var(--space-4);
  font-size: 1.0625rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextLink = styled.a`
  color: var(--color-fg);
  text-decoration: underline;
  text-underline-offset: 0.22em;
  text-decoration-thickness: 1px;
  cursor: pointer;

  &:hover {
    color: var(--color-accent);
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 2.75rem;
  padding: 0.65rem 1.2rem;
  background: var(--color-fg);
  color: var(--color-bg);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  word-break: break-word;
  text-align: center;

  &:hover {
    background: var(--color-accent);
    color: #fff;
  }
`;

export const GhostButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.65rem 1.2rem;
  color: var(--color-fg);
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 500;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  background: transparent;
  cursor: pointer;
  transition: border-color var(--transition), color var(--transition),
    background var(--transition);

  &:hover {
    border-color: var(--color-fg);
    background: var(--color-bg-elevated);
    color: var(--color-fg);
  }
`;

export const Meta = styled.span`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
  letter-spacing: 0.02em;
`;

export const DividerList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DividerItem = styled.li`
  padding: var(--space-5) 0;
  border-top: 1px solid var(--color-border);

  &:last-child {
    border-bottom: 1px solid var(--color-border);
  }
`;

export const navLinkStyles = css`
  color: var(--color-fg-muted);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  min-height: 2rem;
  transition: color var(--transition);

  &:hover,
  &[data-active="true"] {
    color: var(--color-fg);
  }

  &::before {
    content: "";
    width: 0;
    height: 1px;
    background: var(--color-fg);
    transition: width var(--transition);
  }

  &[data-active="true"]::before,
  &:hover::before {
    width: 1.5rem;
  }
`;

export const revealAnimation = fadeUp;
