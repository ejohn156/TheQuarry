import React, { Component } from "react";
import "./sent.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ServiceDB from '../../utils/DB/ServiceDB'
import RequestDB from '../../utils/DB/RequestDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
import { Redirect } from 'react-router-dom'
export default class sentPage extends Component {
    state = {
        applications: [],
        requests: [],
        filter: "requests",
    }
    componentDidMount(){
        this.getApplicationsAndRequests()
    }
    getApplicationsAndRequests(){
        var id = sessionStorage.getItem("id")
        ApplicationDB.getUserApplications(id).then(res => this.setState({
            applications: res.data.applications,
            requests: res.data.requests
        }))
    }
    deleteRequest(id){
        RequestDB.delete(id).then(this.getApplicationsAndRequests())
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
                                            <th scope="col">Creator</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">{this.state.filter === "requests" ? "Estimate":"Hourly"}</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    

                                        {this.state.filter === "applications" ? 
                                        this.state.applications.map(application =>{
                                            return(<tbody>
                                                <th>{application.status}</th>
                                                <th>{application.jobCreator}</th>
                                                <th>{application.jobTitle}</th>
                                                <th>{application.jobCategory}</th>
                                                <th>${application.jobEstimate}</th> 
                                                <th><button class="apply">delete</button></th>
                                            </tbody>)
                                        })
                                        :
                                        this.state.requests.map(request => {
                                            return(<tbody>
                                                <th>{request.status}</th>
                                                <th>{request.serviceCreator}</th>
                                                <th>{request.serviceTitle}</th>
                                                <th>{request.serviceCategory}</th>
                                                <th>${request.serviceHourly}</th>
                                                <th><button class="apply" onClick={(id) => this.deleteRequest(request._id)}>delete</button></th>
                                            </tbody>)
                                        })
                                        }
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

