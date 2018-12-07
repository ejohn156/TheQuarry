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
        ApplicationDB.getreceivedApplications(id).then(res => this.setState({
            applications: res.data.applications,
            requests: res.data.requests
        }))
    }
    declineApplication(id){
        ApplicationDB.decline(id).then(this.getApplications())
    }
    acceptApplication(id){
      alert("please contact the applicant using the information on their profile page")
      ApplicationDB.accept(id).then(this.getApplications())
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
                                            <th scope="col">Status</th>
                                            <th scope="col">Recipient</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">{this.state.filter === "requests" ? "Estimate":"Hourly"}</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    

                                        { this.state.applications.map(application =>{
                                            return(<tbody>
                                                <th>{application.status}</th>
                                                <th>{application.jobCreator}</th>
                                                <th>{application.jobTitle}</th>
                                                <th>{application.jobCategory}</th>
                                                <th>${application.jobEstimate}</th> 
                                                <th><button class="apply" onClick={(id) => this.deleteApplication(application._id)}>delete</button></th>
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


