import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search'
import Footer from './Footer/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Search/>
    <Footer/>
  </React.StrictMode>
);

