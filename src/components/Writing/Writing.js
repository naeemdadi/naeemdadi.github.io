import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Meta,
  Section,
  SectionHeader,
  SectionIndex,
  SectionTitle,
  TextLink,
} from "../../styles";

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  display: grid;
  gap: var(--space-2);
  padding: var(--space-5) 0;
  border-top: 1px solid var(--color-border);

  &:last-child {
    border-bottom: 1px solid var(--color-border);
  }

  @media (hover: hover) and (min-width: 640px) {
    margin: 0 calc(-1 * var(--space-4));
    padding-left: var(--space-4);
    padding-right: var(--space-4);
    transition: background var(--transition), transform var(--transition);

    &:hover {
      background: var(--color-row-hover);
      transform: translateX(0.25rem);
    }
  }

  @media (min-width: 640px) {
    grid-template-columns: 4.5rem minmax(0, 1fr) auto;
    align-items: start;
    gap: var(--space-4);
  }
`;

const DateCol = styled.div`
  order: -1;

  @media (min-width: 640px) {
    order: 0;
    padding-top: 0.2rem;
  }
`;

const Title = styled.h3`
  font-size: 1.05rem;
  margin-bottom: var(--space-2);
  line-height: 1.35;

  @media (min-width: 640px) {
    font-size: 1.15rem;
  }
`;

const Summary = styled.p`
  color: var(--color-fg-muted);
  max-width: 52ch;
  margin-bottom: var(--space-2);
  font-size: 0.98rem;
`;

const Publication = styled.p`
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-fg-muted);
  margin-bottom: var(--space-3);

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  min-height: 2.75rem;
  align-items: center;

  @media (min-width: 640px) {
    justify-content: flex-end;
    padding-top: 0.2rem;
    min-width: 4rem;
  }
`;

const Writing = ({ posts }) => {
  const [ref, visible] = useReveal();

  return (
    <Section
      id="writing"
      ref={ref}
      className={visible ? "is-visible" : undefined}
    >
      <SectionHeader>
        <SectionIndex aria-hidden="true">05</SectionIndex>
        <SectionTitle>{SITE_COPY.sections.writing}</SectionTitle>
      </SectionHeader>
      <List>
        {posts.map((post) => (
          <Item key={post.url}>
            <DateCol>
              <Meta>{post.date}</Meta>
            </DateCol>
            <div>
              <Title>
                <TextLink
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.title}
                </TextLink>
              </Title>
              <Summary>{post.summary}</Summary>
              {post.publication && (
                <Publication>{post.publication}</Publication>
              )}
            </div>
            <Links>
              <TextLink
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_COPY.writing.read}
              </TextLink>
            </Links>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Writing;
