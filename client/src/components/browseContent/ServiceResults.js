import React, { Component } from "react";
import ServiceDB from "../../utils/DB/ServiceDB"


class ServiceResults extends Component {
    state = {
        
        services: [],
        filter: this.props.filter
    }

    getServices(){
        if(this.state.filter === "All"){
            ServiceDB.get()
            .then(res =>
            this.setState({services: res.data}))
            .catch(err => console.log(err));
        }else{
            ServiceDB.getFiltered(this.state.filter).then(res => this.setState({services: res.data}))
            .catch(err => console.log(err))
    }}
    componentDidMount() {
        this.getServices()
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
                <div class="col-md-4 category"><h5>{service.category}</h5></div>
                <div class="col-md-5 desc"><p>{service.description}</p></div>
                <div class="col-md-3 price"><p>Hourly Rate: ${service.hourly}</p></div>
            </div>
            </div>
            </div>

        )})}
        </div>
        )}
}
export default ServiceResults;