import React from "react";
import styled from "styled-components";

import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import {
  Meta,
  PageHeader,
  PageLead,
  PageTitle,
  TextLink,
} from "../styles";

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
  min-height: 100%;
`;

const Title = styled.h2`
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
`;

const WritingPage = () => (
  <>
    <PageHeader>
      <PageTitle>{SITE_COPY.sections.writing}</PageTitle>
      <PageLead>{SITE_COPY.sections.writingLead}</PageLead>
    </PageHeader>
    <List>
      {portfolio.writing.map((post) => (
        <Item key={post.url}>
          <Meta>{post.date}</Meta>
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
  </>
);

export default WritingPage;
