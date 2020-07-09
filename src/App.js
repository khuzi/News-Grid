import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Hoc/Layout/Layout';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Article from './Components/Pages/Article/Article';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article}/>
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(App);
