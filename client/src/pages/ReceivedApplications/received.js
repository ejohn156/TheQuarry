import React, { Component } from "react";
import "./received.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ServiceDB from '../../utils/DB/ServiceDB'
import RequestDB from '../../utils/DB/RequestDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
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
      application.status = "declined"
      ApplicationDB.decline(application).then(this.getApplications())
    }
    acceptApplication(application){
      alert("application accepted")
      application.status = "accepted"
      ApplicationDB.accept(application).then(this.getApplications())
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
                                <h1>Sent {this.state.filter === "requests" ? "Requests": "Applications"}</h1>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Applicant</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">comment</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                        {this.state.applications.map(application =>{
                                            return(<tbody>
                                                <td>{application.applicantName}</td>
                                                <td>{application.jobTitle}</td> 
                                                <td colspan="3">{application.comment}</td>
                                                <td><button class="apply" onClick={(id) => this.declineApplication(application)}>Decline</button>
                                                <button class="apply" onClick={(id) => this.acceptApplication(application)}>Accept</button></td>
                                            </tbody>)
                                       
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


