import React, { Component } from "react";
import "./post.css";


export default class PostForm extends Component {
    state = {
        postType: this.props.type
    }
    render() {
        return (
            <div>
                <div class="postjobcard">
                    <form>
                        <div class="card">
                            <div class="card-head">
                            <h3>{this.state.postType}</h3>
                            </div>
                            <div class="card-body">
                            </div>
                            <div class="form-group">
                                <label for="JobName">Name</label>
                                <textarea type="text" class="form-control" id="Job Name" rows="1" placeholder="Job Name"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="Jobdescription">Description</label>
                                <textarea type="text" class="form-control" id="Job Description" rows="4" placeholder="Job Description"></textarea>
                            </div>

                            <form class="form-inline">
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Category</label>
                                <select class="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                                    <option selected>Choose...</option>
                                    <option value="1">Technology</option>
                                    <option value="2">Artist</option>
                                    <option value="3">Mechanical</option>
                                    <option value="4">Academic</option>
                                </select>
                            </form>

                            <div class="form-group">
                                <label for="Jobdescription">Necessary Skills</label>
                                <textarea type="text" class="form-control" id="Necessaryskills" rows="4" placeholder="Necessary Skills"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}