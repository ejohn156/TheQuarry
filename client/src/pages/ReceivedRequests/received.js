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
      alert("Request Declined")
      request.status = "Declined"
      RequestDB.decline(request).then(this.getRequests())
    }
    complete(request){
        alert("Service has been completed")
        RequestDB.delete(request._id).then(this.getRequests())
      }
    acceptRequest(request){
      ProfileDB.getById(request.requesterID).then(res => alert("Request Accepted!\nPlease contact " + res.data.username + " using " + res.data.email))
      request.status = "Accepted"
      RequestDB.accept(request).then(this.getRequests())
  }
  contact(request){
    ProfileDB.getById(request.requesterID).then(res => alert("Username: " + res.data.username + "\nEmail: " + res.data.email))
  }
  complete(request){
    alert("Service has been completed")
    RequestDB.delete(request._id).then(this.getRequests())
  }
  componentDidUpdate(){
      this.getRequests()
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
                                        <th scope="col">Status</th>
                                            <th scope="col">Requester</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Comment</th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                        {this.state.requests.map(request =>{
                                            if(request.status != "Declined"){
                                            return(<tbody>
                                                <td>{request.status}</td>
                                                <td>{request.requesterName}</td>
                                                <td>{request.serviceTitle}</td> 
                                                <td colspan="3">{request.comment}</td>
                                                <td>{request.status === "Pending" ? <div><button class="apply" onClick={(id) => this.declineRequest(request)}>Decline</button>
                                                <button class="apply" onClick={(id) => this.acceptRequest(request)}>Accept</button></div>:<div><button onClick={(id) => this.contact(request)}>Contact</button><button onClick={(id) => this.complete(request)}>Complete</button></div>}</td>
                                            </tbody>)}                                      
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