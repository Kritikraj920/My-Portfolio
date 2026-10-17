import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './component/Layout';
import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>
);

