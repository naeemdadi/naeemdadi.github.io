import styled, { css } from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Shell = styled.div`
  width: min(100%, var(--max-width));
  margin: 0 auto;
  padding: 0 var(--page-pad);
`;

export const Main = styled.main`
  flex: 1;
  width: min(100%, var(--max-width));
  margin: 0 auto;
  padding: var(--space-6) var(--page-pad) var(--space-8);

  @media (min-width: 960px) {
    padding: var(--space-7) var(--page-pad) var(--space-9);
  }
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-6);

  @media (min-width: 960px) {
    margin-bottom: var(--space-7);
    max-width: 40rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: clamp(2rem, 7vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
`;

export const PageLead = styled.p`
  color: var(--color-fg-muted);
  font-size: 1.05rem;
  line-height: 1.55;
  max-width: 36rem;
`;

export const Section = styled.section`
  width: 100%;
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-5);

  @media (min-width: 960px) {
    margin-bottom: var(--space-6);
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--color-fg);
`;

export const SectionLead = styled.p`
  color: var(--color-fg-muted);
  font-size: 1rem;
  line-height: 1.55;
  max-width: 36rem;
`;

export const BodyText = styled.p`
  color: var(--color-fg);
  max-width: 62ch;
  margin-bottom: var(--space-4);
  font-size: 1.05rem;

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

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 2.75rem;
  padding: 0.65rem 1.2rem;
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 500;
  border-radius: var(--radius);
  cursor: pointer;
  text-align: center;
  word-break: break-word;
  transition: background var(--transition), color var(--transition),
    border-color var(--transition), transform var(--transition);
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--color-fg);
  color: #fff;

  &:hover {
    background: var(--color-accent);
    color: #fff;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

export const GhostButton = styled.a`
  ${buttonBase}
  color: var(--color-fg);
  border: 1px solid var(--color-border-strong);
  background: var(--color-bg-elevated);

  &:hover {
    border-color: var(--color-fg);
    color: var(--color-fg);
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-1px);
    }
  }
`;

export const Meta = styled.span`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-fg-muted);
  letter-spacing: 0.02em;
`;

export const Panel = styled.div`
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "var(--space-5)"};
`;

export const navLinkStyles = css`
  color: var(--color-fg-muted);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 2.25rem;
  transition: color var(--transition);

  &:hover,
  &[data-active="true"] {
    color: var(--color-fg);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.15rem;
    height: 1px;
    background: var(--color-fg);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition);
  }

  &[data-active="true"]::after,
  &:hover::after {
    transform: scaleX(1);
  }
`;
