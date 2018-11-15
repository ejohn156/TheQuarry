import React, { Component } from "react";
import "./browseContent.css";
import JobResults from "./JobResults";
import ServiceResults from "./ServiceResults";


export default class browseContent extends Component {
    state = {
        content: this.props.content,
        filter: "All"
    }
    
    
    changeFilter = (event) =>(this.setState({filter: event}))
    render() {
        return (
            <div class="row">
                <div class="col-md-2">
                    <div class="btn-group-vertical">
                        <button type="button" class={this.state.filter === "All" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("All")}>{this.state.filter === "All" ? "Categories":"All"}</button>
                        <button type="button" class={this.state.filter === "Art" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Art")}>Art</button>
                        <button type="button" class={this.state.filter === "Technology" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("IT")}>IT</button>
                        <button type="button" class={this.state.filter === "Academic" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Tutoring")}>Tutoring</button>
                        <button type="button" class={this.state.filter === "Mechanical" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Mechanical")}>Mechanical</button>
                    </div>
                </div>
                <div class="col-md-10">
                    <h1>Browsing {this.state.content}</h1>
                    {this.state.content == "Jobs" ?<JobResults />:<ServiceResults />}
                </div>
            </div>
        );
    }
}
