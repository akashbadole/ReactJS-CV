import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';


function App() {
  return (
    <div>
     <Header />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
