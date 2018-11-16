import React, { Component } from "react";
import "./browseContent.css";
import JobResults from "./JobResults";
import ServiceResults from "./ServiceResults";
import { Link } from "react-router-dom";


export default class browseContent extends Component {
    state = {
        content: this.props.content,
        filter: this.props.filter
    }
    
    
    changeFilter = (event) =>{
        this.setState({filter: event})
    }
    render() {
        return (

            <div class="row">
                <div class="col-md-2">
                    <div class="btn-group-vertical sidemenu">
                    <Link to={this.state.content === "Jobs" ? "/browse/job":"/browse/service"}><button type="button" class={this.state.filter === "All" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("All")}>{this.state.filter === "All" ? "Categories":"All"}</button></Link>
                        <Link to={this.state.content === "Jobs" ?"/browse/job/art":"/browse/service/art"} >
                        <button type="button" class={this.state.filter === "Art" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Art")}>Art</button>
                        </Link>
                        <Link to={this.state.content === "Jobs" ?"/browse/job/technology": "/browse/service/technology"}>
                        <button type="button" class={this.state.filter === "Technology" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Technology")}>Technology</button>
                        </Link>
                        <Link to={this.state.content === "Jobs" ?"/browse/job/academic":"/browse/service/academic"}>
                        <button type="button" class={this.state.filter === "Academic" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Academic")}>Academic</button>
                        </Link>
                        <Link to={this.state.content === "Jobs" ?"/browse/job/mechanical": "/browse/service/mechanical"}>
                        <button type="button" class={this.state.filter === "Mechanical" ? "btn sideHead":"btn sidebtn"} onClick={(event) => this.changeFilter("Mechanical")}>Mechanical</button>
                        </Link>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12 header">
                        <h1 className="browseHeader">Browsing {this.state.content}</h1></div>
                    </div>
                    {this.state.content == "Jobs" ?<JobResults filter={this.state.filter}/>:<ServiceResults filter={this.state.filter}/>}
                </div>
            </div>
        );
    }
}
