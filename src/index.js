import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5TcVe9Rpk8LEHFpujXgAHF2RW8cSHrlA",
  authDomain: "curso-react-f16a5.firebaseapp.com",
  projectId: "curso-react-f16a5",
  storageBucket: "curso-react-f16a5.appspot.com",
  messagingSenderId: "711987902592",
  appId: "1:711987902592:web:aa4f651c3c61d6c537ce65"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
