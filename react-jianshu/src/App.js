import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Globalstyle } from './style';
import { IconfontGlobalstyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Globalstyle/>
        <IconfontGlobalstyle/>
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
