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
    render() {
        
        return (
            <div>
                <Navbar page="mailbox" />
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-head">
                                <h1>Sent</h1>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">Creator</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">estimate/hourly</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

