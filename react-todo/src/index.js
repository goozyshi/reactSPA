import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import store from './store/store';
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)
ReactDOM.render( App, document.getElementById('root'));

