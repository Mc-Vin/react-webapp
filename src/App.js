import React, { Fragment } from 'react';
import { GlobalStyle } from './style';
import { Provider } from 'react-redux';
import store from '../src/store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/home';
import Order from './views/order';
import Account from './views/account';
import BottomBar from './components/bottomBar';

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route path='/home' component={Home} exact />
              <Route path='/order' component={Order} exact />
              <Route path='/account' component={Account} exact />
              <Redirect from='/' to='/home' exact />
            </Switch>
            <BottomBar></BottomBar>
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
