import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { portfolio } from "./data/portfolio";
import { SITE_COPY } from "./constants/copy";

test("home page shows name, resume link, and latest experience", () => {
  const container = document.createElement("div");
  ReactDOM.render(<App />, container);

  expect(container.querySelector("h1").textContent).toBe(portfolio.name);
  expect(container.textContent).toContain(portfolio.role);

  const resumeLinks = Array.from(container.querySelectorAll("a")).filter(
    (link) => link.getAttribute("href") === portfolio.resumeUrl
  );
  expect(resumeLinks.length).toBeGreaterThan(0);
  expect(resumeLinks[0].textContent).toMatch(/résumé/i);

  expect(container.textContent).toContain("Hero Pages");
  expect(container.textContent).toContain("Senior Software Engineer");
  expect(container.textContent).toContain(SITE_COPY.sections.experience);
  expect(container.textContent).toContain("Insomanager");
  expect(container.textContent).toContain("Impact Analysis");
  expect(container.textContent).toContain(
    "Node App Integration Tests with Docker, Redis & PostgreSQL"
  );
  expect(container.textContent).not.toContain("EaseIt");
  expect(container.textContent).toContain(portfolio.email);

  ReactDOM.unmountComponentAtNode(container);
});
