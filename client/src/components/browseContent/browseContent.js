import React, { Component } from "react";
import "./browseContent.css";


export default class browseContent extends Component{
    state = {
        content : this.props.content
    }
    render(){
        return(
            <div class="col-md-7">
            <h1>Browsing {this.state.content}</h1>
            </div>
        );
    }
}
