import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './component/Layout';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import Footer from './component/Footer/Foater';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout/>
    <Footer/>
  </React.StrictMode>
);


