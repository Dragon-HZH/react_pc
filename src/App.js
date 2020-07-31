import React,{Component} from 'react';
import { HashRouter, Route, Switch, Redirect  } from 'react-router-dom';
import './App.css';
import Web from './webs'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/web' component={Web} ></Route>
          <Redirect from="/" to="/web" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App
