import React, { Component } from "react";
import "./received.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ServiceDB from '../../utils/DB/ServiceDB'
import RequestDB from '../../utils/DB/RequestDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
import { Redirect } from 'react-router-dom'
import ProfileDB from "../../utils/DB/ProfileDB";
export default class sentPage extends Component {
    state = {
        requests: [],
        applicant: "",
        accepted: false
    }
    componentDidMount(){
        this.getRequests()
    }
    getRequests(){
        var id = sessionStorage.getItem("id")
        RequestDB.getReceivedRequests(id)
        .then(res => this.setState({
            requests: res.data,
        }))
        
    }
    declineRequest(request){
      alert("request declined")
      request.status = "declined"
      RequestDB.decline(request).then(this.getRequests())
    }
    acceptRequest(request){
      ProfileDB.getById(request.requesterID).then(res => alert("Please contact " + res.data.username + " using " + res.data.email))
      request.status = "accepted"
      RequestDB.accept(request).then(this.getRequests())
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
                                <h1>Received Requests</h1>
                            </div>
                            <div class="card-body">
                                <table class="table table-hover table-dark">
                                    <thead>
                                        <tr>
                                            <th scope="col">requester</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">comment</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                        {this.state.requests.map(request =>{
                                            return(<tbody>
                                                <td>{request.applicantName}</td>
                                                <td>{request.jobTitle}</td> 
                                                <td colspan="3">{request.comment}</td>
                                                <td><button class="apply" onClick={(id) => this.declineRequest(request)}>Decline</button>
                                                <button class="apply" onClick={(id) => this.acceptRequest(request)}>Accept</button></td>
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