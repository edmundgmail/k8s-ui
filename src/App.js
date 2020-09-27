import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Pods} from './pagess/Pods';
import {Setting} from './pagess/Setting';
import {Deployment} from './pagess/Deployment';
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
