import React, { Component } from "react";
import ServiceDB from "../../utils/DB/ServiceDB"


class ServiceResults extends Component {
    state = {
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

    // componentDidUpdate() {
    //     this.getVenues();
    // }
    // deleteVenue = (id) => {
    //     alert(`Venue Deleted`)
    //     DB.delete(id).then(this.getVenues())
    //     this.getVenues()
        
    // }

    render(){
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
            </div>
            </div>
            </div>

        )})}
        </div>
        )}
}
export default ServiceResults;