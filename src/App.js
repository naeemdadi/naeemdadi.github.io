import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Intro from "./components/Intro";
import SelectedWork from "./components/SelectedWork";
import Skills from "./components/Skills";
import Writing from "./components/Writing";
import { portfolio } from "./data/portfolio";
import { Content, Page, Shell } from "./styles";

function App() {
  return (
    <Page>
      <Shell>
        <Intro
          name={portfolio.name}
          role={portfolio.role}
          tagline={portfolio.tagline}
          email={portfolio.email}
          resumeUrl={portfolio.resumeUrl}
          profiles={portfolio.profiles}
        />
        <Content>
          <About paragraphs={portfolio.about} />
          <Experience
            jobs={portfolio.experience}
            education={portfolio.education}
          />
          <SelectedWork projects={portfolio.projects} />
          <Skills groups={portfolio.skills} />
          <Writing posts={portfolio.writing} />
          <Contact
            email={portfolio.email}
            profiles={portfolio.profiles}
            name={portfolio.name}
            resumeUrl={portfolio.resumeUrl}
          />
        </Content>
      </Shell>
    </Page>
  );
}

export default App;
