import React from 'react';
import { Router } from 'wouter';
import { Route } from 'wouter';
import { Motion } from 'framer-motion';

const App = () => {
  return (
    <Router>
      <Motion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Motion>
    </Router>
  );
};

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

export default App;
