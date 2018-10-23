import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import browseJobPage from './pages/browseJobPage';
import browseServicePage from './pages/browseServicePage'
import profilePage from './pages/profilePage';
import homePage from './pages/homePage';
import instructionPage from './pages/instructionPage';
import authPage from './pages/authPage';
import postPage from './pages/PostPage'


class App extends Component {
  state = {
    currentPage: "home"
  }
  render() {
    return (
      
    <div className="Container">

    <Router>
          <Switch>
            <Route exact path="/" component={authPage}/>
            <Route path="/home" component={homePage}/>
            <Route exact path="/instruction" component={instructionPage}  />
            <Route path="/profile" component={profilePage} />
            <Route path="/browse/job" component={browseJobPage}/>
            <Route path="/browse/service" component={browseServicePage}/>
            <Route exact path="/Authentication" component={authPage}/>
            <Route exact path="/post" component={postPage}/>
          </Switch>
          </Router>
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
