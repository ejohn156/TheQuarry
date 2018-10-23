import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import browsePage from './pages/browsePage';
import profilePage from './pages/profilePage';
import homePage from './pages/homePage';
import instructionPage from './pages/instructionPage';
import authPage from './pages/authPage';


class App extends Component {
  render() {
    return (
      
    <div className="Container">
    <div class="row">
    <div class="col-md-12">
    <Navbar />
    </div>
    </div>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <Router>
          <Switch>

            <Route exact path="/" render={() => (
              true ? (
                <Redirect to="/home"/>
              ) : (
                  <Redirect to="/Authentication" />
                )
            )} />
            {/* <Route exact path="/" component={LoginPage} /> */}
            <Route exact path="/home" component={homePage} />
            <Route exact path="/instruction" component={instructionPage} />
            <Route path="/profile" component={profilePage} />
            <Route path="/browse" component={browsePage}/>
            <Route exact path="/Authentication" component={authPage}/>
          </Switch>
          </Router>
        </div>
        </div>
        <div class="row">
        <div class="col-md-12">
      <Footer />
      </div>
    </div>
    </div>
  
      
    );
  }
}

export default App;
