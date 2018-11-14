import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Globalstyle } from './style';
import { IconfontGlobalstyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle/>
        <IconfontGlobalstyle/>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={ Home }></Route>
              <Route path='/detail/:id' exact component={ Detail }></Route>
              <Route path='/login' exact component={ Login }></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
