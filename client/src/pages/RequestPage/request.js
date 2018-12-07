import React, { Component } from "react";
import "./request.css";
import Navbar from '../../components/Navbar'
import ServiceDB from '../../utils/DB/ServiceDB'
import ProfileDB from '../../utils/DB/ProfileDB'
import RequestDB from '../../utils/DB/RequestDB'
import { Redirect } from 'react-router-dom'
export default class RequestPage extends Component {
    state = {
        comment: "",
        service: {},
        requester: {},
        delivered: false
    }
    getService() {
        var subject = sessionStorage.getItem("subject")
        ServiceDB.getById(subject).then(res => this.setState({ service: res.data }))
    }
    getApplicant() {
        var id = sessionStorage.getItem("id")
        ProfileDB.getById(id).then(res => this.setState({ requester: res.data }))
    }
    componentDidMount() {
        this.getService()
        this.getApplicant()
    }
    handleCommentChange = event => {
        this.setState({ comment: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        alert("Request Submitted")
        var newRequest = {
            serviceCreator: this.state.service.creator,
            serviceCategory: this.state.service.category,
            serviceTitle: this.state.service.title,
            serviceHourly: this.state.service.hourly,
            requesterID: this.state.requester._id,
            requesterName: this.state.requester.username,
            recipientID: this.state.service.creatorID,
            comment: this.state.comment
        }
        RequestDB.create(newRequest).then(this.setState({ delivered: true }))

    }
    render() {
        if (this.state.delivered === true) {
            return (
                <div>
                    <Redirect to="/" />
                </div>
            )
        }
        return (
            <div>
                <Navbar page="post" />
                <div>
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-10">
                            <div class="card postjobcard">
                                <div class="card-head">
                                    <h2>Request For {this.state.service.title}</h2>
                                </div>
                                <div class="card-body">
                                    <h3>Requester: {this.state.requester.username}</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label htmlFor="comment" id="Jobdescription">Request Comment</label>
                                            <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder="Explain what you need of this service provider!" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                                        </div>
                                        <button type="submit">Send Request</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}