import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./flexble.js"
import './index.css';
import store from "./store/store.js"
import {Provider} from "react-redux"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
