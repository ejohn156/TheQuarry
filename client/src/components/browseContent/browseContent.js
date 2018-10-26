import React, { Component } from "react";
import "./browseContent.css";
import Sidebar from '../SideBar'


export default class browseContent extends Component {
    state = {
        content: this.props.content,
        results: [{ test: "test1" }, { test: "test2" }, { test: "test3" }, { test: "test4" }],
        filter: "All"
    }
    changeFilter = (event) =>(this.setState({filter: event}))
    render() {
        return (
            <div class="row">
                <div class="col-md-2">
                    <div class="btn-group-vertical">
                        <button type="button" class="btn btn-light" onClick={(event) => this.changeFilter("All")}>Categories</button>
                        <button type="button" class="btn btn-secondary" onClick={(event) => this.changeFilter("Art")}>Art</button>
                        <button type="button" class="btn btn-secondary" onClick={(event) => this.changeFilter("IT")}>IT</button>
                        <button type="button" class="btn btn-secondary" onClick={(event) => this.changeFilter("Tutoring")}>Tutoring</button>
                        <button type="button" class="btn btn-secondary" onClick={(event) => this.changeFilter("Mechanical")}>Mechanical</button>
                    </div>
                </div>
                <div class="col-md-10">
                    <h1>Browsing {this.state.content}</h1>
                    <h3>Filter {this.state.filter}</h3>
                    <ul>
                        <li>{this.state.results.map(element => { return (<li>{element.test}</li>) })}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
