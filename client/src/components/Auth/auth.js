import React, { Component } from "react";
import "./auth.css";


export default class authContent extends Component{
    state = {
        authType : this.props.type
    }
    render(){
        return(
            <div class="col-md-7">
            <h1>{this.state.authType}</h1>
            </div>
        );
    }
}