import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import WritingPage from "./pages/WritingPage";

const basename = process.env.PUBLIC_URL || "";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/writing" component={WritingPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
