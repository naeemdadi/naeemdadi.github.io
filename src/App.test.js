import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WritingPage from "./pages/WritingPage";
import { portfolio } from "./data/portfolio";
import { SITE_COPY } from "./constants/copy";

const renderAt = (path, ui) => {
  const container = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={[path]}>
      <Layout>{ui}</Layout>
    </MemoryRouter>,
    container
  );
  return container;
};

test("home page shows identity and explore paths without project cards", () => {
  const container = renderAt("/", <HomePage />);

  expect(container.querySelector("h1").textContent).toBe(portfolio.name);
  expect(container.textContent).toContain(portfolio.role);
  expect(container.textContent).toContain(SITE_COPY.home.exploreTitle);
  expect(container.textContent).toContain(SITE_COPY.nav.about);
  expect(container.textContent).toContain(SITE_COPY.nav.experience);
  expect(container.textContent).toContain(SITE_COPY.nav.work);
  expect(container.textContent).not.toContain("Impact Analysis");
  expect(container.textContent).not.toContain("Senior");

  const resumeLinks = Array.from(container.querySelectorAll("a")).filter(
    (link) => link.getAttribute("href") === portfolio.resumeUrl
  );
  expect(resumeLinks.length).toBeGreaterThan(0);

  ReactDOM.unmountComponentAtNode(container);
});

test("work and experience routes render focused pages", () => {
  const work = renderAt("/work", <WorkPage />);
  expect(work.textContent).toContain(SITE_COPY.sections.work);
  expect(work.textContent).toContain("Impact Analysis");
  ReactDOM.unmountComponentAtNode(work);

  const experience = renderAt("/experience", <ExperiencePage />);
  expect(experience.textContent).toContain("Hero Pages");
  expect(experience.textContent).toContain("Software Engineer");
  expect(experience.textContent).not.toContain("Senior");
  ReactDOM.unmountComponentAtNode(experience);

  const about = renderAt("/about", <AboutPage />);
  expect(about.textContent).toContain(SITE_COPY.sections.skills);
  ReactDOM.unmountComponentAtNode(about);

  const writing = renderAt("/writing", <WritingPage />);
  expect(writing.textContent).toContain(
    "Node App Integration Tests with Docker, Redis & PostgreSQL"
  );
  expect(writing.textContent).not.toContain("EaseIt");
  ReactDOM.unmountComponentAtNode(writing);
});
