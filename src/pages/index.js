import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me/Me';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Work from './Work/Work';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
        <Route>
          <Work user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;