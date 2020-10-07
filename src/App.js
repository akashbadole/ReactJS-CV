import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import { Route , Switch} from 'react-router-dom';
import Features from './Features';
import Enterprise from './Enterprise';
import Support from './Support';
import Pricing from './Pricing';
import Notfound from './Notfound';
import home from './Home';
import Signup from './Signup';



function App() {
  return (
    <div key="id">
       <Header />
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/Features" component={Features} />
        <Route path="/Enterprise" component={Enterprise} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Support" component={Support} />
        <Route path="/Signup" component={Signup} />
        <Route component={Notfound} />
      </Switch>
     
     <Footer />
    </div>
  );
}

export default App;
