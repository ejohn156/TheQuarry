import React, { Component } from "react";
import ServiceDB from "../../utils/DB/ServiceDB"


class ServiceResults extends Component {
    state = {
        
        services: []
    }

    getServices(){
        ServiceDB.get()
        .then(res =>
        this.setState({services: res.data}))
        .catch(err => console.log(err));
    }

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
        {this.state.services.map(service => {return(<li>{service.title}</li>)})}
        </div>
        )}
}
export default ServiceResults;