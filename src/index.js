// Shahrukh Imam

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import clickcountred from './reducers/clickcountreducer'
import { Provider } from 'react-redux';
import { connect, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import action from "./actions"


const store =createStore(clickcountred,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  console.log(store)
  
  
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
  document.getElementById('root')
);

