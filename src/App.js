import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/navbar';
import {Jumbotron} from './components/jumbotron';
import {Home} from './components/home';
import {About} from './components/about';
import {Contact} from './components/contact';
import {Futer} from './components/futer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <div style={{width:'100%', height:'100%'}} >
  <Navbar/>
</div>, document.getElementById('react-nav'));

ReactDOM.render(
  <div >
  <Jumbotron />
  <Router>
    <div >
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
  <Futer/>

</div>, document.getElementById('react-container'));