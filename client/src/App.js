import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import browseJobPage from './pages/browseJobPage';
import browseServicePage from './pages/browseServicePage'
import profilePage from './pages/profilePage';
import homePage from './pages/homePage';
import instructionPage from './pages/instructionPage';
import signUpPage from './pages/signUpPage';
import loginPage from './pages/loginPage';
import postJob from './pages/PostJob';
import postService from './pages/PostService';
import browseJobArt from './pages/browseJobArt';
import browseJobMech from './pages/browseJobMech';
import browseJobAcademic from './pages/browseJobAcademic';
import browseJobTech from './pages/browseJobTech';
import browseServiceArt from './pages/browseServiceArt';
import browseServiceAcademic from './pages/browseServiceAcademic';
import browseServiceMech from './pages/browseServiceMech';
import browseServiceTech from './pages/browseServiceTech';
import myJobPage from "./pages/myJobsPage";
import myServicePage from "./pages/myServicesPage";
import editProfilePage from "./pages/editProfilePage"
import applyPage from "./pages/ApplyPage"
import requestPage from "./pages/RequestPage"

class App extends Component {
  state = {
    currentPage: "home"
  }
  render() {
    return (
      
    <div className="Container">
      <div className="body">
    <Router>
          <Switch>
            <Route exact path="/" component={homePage}/>
            <Route path="/home" component={homePage}/>
            <Route exact path="/instruction" component={instructionPage}  />
            <Route exact path="/profile" component={profilePage} />
            <Route exact path="/profile/edit" component={editProfilePage} />
            <Route exact path="/profile/jobs" component={myJobPage} />
            <Route exact path="/profile/services" component={myServicePage} />
            <Route exact path="/browse/job" component={browseJobPage}/>
            <Route exact path="/browse/job/art" component={browseJobArt}/>
            <Route exact path="/browse/job/academic" component={browseJobAcademic}/>
            <Route exact path="/browse/job/mechanical" component={browseJobMech}/>
            <Route exact path="/browse/job/technology" component={browseJobTech}/>
            <Route exact path="/browse/service" component={browseServicePage}/>
            <Route exact path="/browse/service/art" component={browseServiceArt}/>
            <Route exact path="/browse/service/academic" component={browseServiceAcademic}/>
            <Route exact path="/browse/service/mechanical" component={browseServiceMech}/>
            <Route exact path="/browse/service/technology" component={browseServiceTech}/>
            <Route exact path="/login" component={loginPage}/>
            <Route exact path="/sign-up" component={signUpPage}/>
            <Route exact path="/post/Job" component={postJob}/>
            <Route exact path="/post/Service" component={postService}/>
            <Route exact path="/apply" component={applyPage}/>
            <Route exact path="/request" component={requestPage}/>
          </Switch>
          </Router>
          </div>
        <div className="row">
        <div className="col-md-12">
      <Footer />
      </div>
    </div>
    </div>
  
      
    );
  }
}

export default App;
