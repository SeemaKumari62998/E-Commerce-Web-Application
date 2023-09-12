import React from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import store from './services/reducers/index';
import {Provider}from 'react-redux';
import rootReducer from './services/reducers/index'
// const store = configureStore(rootReducer)
// //
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
   <StrictMode> 
  <Provider store={store}> 
  <App />
  </Provider>
  </StrictMode>   
);



// ReactDOM.render(
          
//   <Provider store={store}> 
//   <App />
//   </Provider>,
//   document.getElementById('root')  
 
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
