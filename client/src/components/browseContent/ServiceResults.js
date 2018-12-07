import React, { Component } from "react";
import ServiceDB from "../../utils/DB/ServiceDB"
import {Redirect} from "react-router-dom"


class ServiceResults extends Component {
    state = {
        applied: "",
        type: this.props.type,
        services: [],
        filter: this.props.filter
    }


    getUsersServices(){
            
        ServiceDB.getUsersServices(sessionStorage.getItem("id")).then(
            res => this.setState({services: res.data.services}))
    
}
    getServices(){
        if(this.state.filter === "All" ){
            ServiceDB.get()
            .then(res =>
            this.setState({services: res.data}))
            .catch(err => console.log(err));
        }else{
            ServiceDB.getFiltered(this.state.filter).then(res => this.setState({services: res.data}))
            .catch(err => console.log(err))
    }}
    componentDidMount() {
        if(this.state.type === "browse")
        this.getServices()
        else if(this.state.type === "profile")
        this.getUsersServices()
    }

    handleApplication(subject){
        if(sessionStorage.getItem("id") === null){
            this.setState({applied: "failed"})
        }else{
            sessionStorage.setItem("subject", subject) 
            this.setState({applied: "success"})
        }
    }
    handleDelete(subject){
        ServiceDB.delete(subject).then(this.getUsersServices())
        }
    


    render(){
        if(this.state.applied === "success"){
            return(
            <Redirect to="/request"/>
            )
        }
        else if(this.state.applied === "failed"){
            return(
                <Redirect to="/login"/>
            )
        }
        return(
        <div>
        {this.state.services.map(service => {
            if(service.creatorID === sessionStorage.getItem("id") & this.state.type === "browse"){
                return(<div></div>)
            }
            else{
            return(
            <div class="card">
            <div class="card-body">
            <div class="row">
            <div class="col-md-12">
            <div class="row">
                <div class="col-md-4"><h4 class="creator"   >Service: {service.title}</h4></div>
                <div class="col-md-4"><h4 class="creator"   >Creator: {service.creator}</h4></div>
                <div class="col-md-4 category"><h4 class="cat">Type: {service.category}</h4></div>
                </div>
                <div class="row">
                <div class="col-md-6 desc"><h4>Description:</h4><p class="desc">{service.description}</p></div>
                </div>
                <div class="row">
                <div class="col-md-6 price"><h4 class="est">Hourly Rate: ${service.hourly}</h4></div>
                <div class="col-md-6 apply"><button class="browseBtn" onClick={(subject) => this.state.type === "browse" ? this.handleApplication(service._id) : this.handleDelete(service._id)}>{this.state.type === "browse" ? "Request" : "Delete"}</button></div>
            </div>
            </div>
            </div>
            </div>
            </div>

        )}})}
        </div>
        )}
}
export default ServiceResults;