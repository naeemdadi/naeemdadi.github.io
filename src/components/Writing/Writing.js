import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../../constants/copy";
import { useReveal } from "../../hooks/useReveal";
import {
  Meta,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
  TextLink,
} from "../../styles";

const List = styled.ul`
  display: grid;
  gap: var(--space-4);

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-panel);
  transition: border-color var(--transition), transform var(--transition);

  @media (hover: hover) {
    &:hover {
      border-color: var(--color-border-strong);
      transform: translateY(-2px);
    }
  }
`;

const DateCol = styled.div``;

const Title = styled.h3`
  font-size: 1.15rem;
  line-height: 1.35;
  letter-spacing: -0.02em;
`;

const Summary = styled.p`
  color: var(--color-fg-muted);
  font-size: 0.98rem;
  line-height: 1.55;
  flex: 1;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: var(--space-2);
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
        <SectionTitle>{SITE_COPY.sections.writing}</SectionTitle>
        <SectionLead>{SITE_COPY.sections.writingLead}</SectionLead>
      </SectionHeader>
      <List>
        {posts.map((post) => (
          <Item key={post.url}>
            <DateCol>
              <Meta>{post.date}</Meta>
            </DateCol>
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
            <MetaRow>
              {post.publication && <Meta>{post.publication}</Meta>}
              <TextLink
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE_COPY.writing.read}
              </TextLink>
            </MetaRow>
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Writing;
