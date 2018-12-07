import React, { Component } from "react";
import "./received.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ServiceDB from '../../utils/DB/ServiceDB'
import RequestDB from '../../utils/DB/RequestDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
import ProfileDB from "../../utils/DB/ProfileDB"
import { Redirect } from 'react-router-dom'
export default class sentPage extends Component {
    state = {
        applications: [],
    }
    componentDidMount(){
        this.getApplications()
    }
    getApplications(){
        var id = sessionStorage.getItem("id")
        ApplicationDB.getReceivedApplications(id)
        .then(res => this.setState({
            applications: res.data,
        }))
        
    }
    declineApplication(application){
      alert("application declined")
      application.status = "Declined"
      ApplicationDB.decline(application).then(this.getApplications())
    }
    acceptApplication(application){
        ProfileDB.getById(application.applicantID).then(res => alert("Application Accepted!\nPlease contact " + res.data.username + " using " + res.data.email))
      application.status = "Accepted"
      ApplicationDB.accept(application).then(this.getApplications())
  }
  contact(application){
    ProfileDB.getById(application.applicantID).then(res => alert("Username: " + res.data.username + "\nEmail: " + res.data.email))
  }
  complete(application){
    alert("Service has been completed")
    ApplicationDB.delete(application._id)
  }
  componentDidUpdate(){
    this.getApplications()
  }
    render() {
        
        return (
            <div>
                <Navbar page="mailbox" />
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-head">
                                <h1>Received Applications</h1>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Status</th>
                                            <th scope="col">Applicant</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                        {this.state.applications.map(application =>{
                                            if(application.status != "Declined"){
                                            return(<tbody>
                                                <td>{application.status}</td>
                                                <td>{application.applicantName}</td>
                                                <td>{application.jobTitle}</td> 
                                                <td colspan="3">{application.comment}</td>
                                                <td>{application.status === "Pending" ? <div><button class="apply" onClick={(id) => this.declineApplication(application)}>Decline</button>
                                                <button class="apply" onClick={(id) => this.acceptApplication(application)}>Accept</button></div>:<div><button onClick={(id) => this.contact(application)}>Contact</button><button onClick={(id) => this.complete(application)}>Complete</button></div>}</td>
                                            </tbody>)
                                            }
                                        })}
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


