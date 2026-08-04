import React from "react";

import ProjectCard from "../components/ProjectCard";
import { SITE_COPY } from "../constants/copy";
import { portfolio } from "../data/portfolio";
import { PageHeader, PageLead, PageTitle, Stack } from "../styles";

const WorkPage = () => (
  <>
    <PageHeader>
      <PageTitle>{SITE_COPY.sections.work}</PageTitle>
      <PageLead>{SITE_COPY.sections.workLead}</PageLead>
    </PageHeader>
    <Stack gap="var(--space-4)">
      {portfolio.projects.map((project, index) => (
        <ProjectCard key={project.name} project={project} index={index} />
      ))}
    </Stack>
  </>
);

export default WorkPage;
