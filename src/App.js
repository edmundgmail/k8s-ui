import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Pods} from './pages/Pods';
import {Setting} from './pages/Setting';
import {Deployment} from './pages/Deployment';
import {Layout} from './components/Layout';
import {NavigationBar} from './components/NavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <React.Fragment>
      <NavigationBar/>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Pods}/> 
          <Route exact path="/deployment" component={Deployment}/> 
          <Route exact path="/setting" component={Setting}/> 
        </Switch>
      </Router>
      </Layout>
      </React.Fragment>
  );
}

export default App;
