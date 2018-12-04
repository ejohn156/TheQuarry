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
            <Redirect to="/apply"/>
            )
        }
        else if(this.state.applied === "failed"){
            return(
                <Redirect to="/login"/>
            )
        }
        return(
        <div>
        {this.state.services.map(service => {return(
            <div class="card">
            <div class="card-header"><h2 class="title">{service.title}</h2></div>
            <div class="card-body">
            <div class="row">
                <div class="col-md-3"><h4>{service.creator}</h4></div>
                <div class="col-md-3 category"><h5>{service.category}</h5></div>
                <div class="col-md-4 desc"><p>{service.description}</p></div>
                <div class="col-md-2 price"><p>Hourly: ${service.hourly}</p></div>
                <div class="col-md-1 apply"><button onClick={(subject) => this.state.type === "browse" ? this.handleApplication(service._id) : this.handleDelete(service._id)}>{this.state.type === "browse" ? "Request" : "Delete"}</button></div>
            </div>
            </div>
            </div>

        )})}
        </div>
        )}
}
export default ServiceResults;