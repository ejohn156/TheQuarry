import React, {Component} from "react";
import "./sent.css";
import Navbar from '../../components/Navbar'
import JobDB from '../../utils/DB/JobDB'
import ProfileDB from '../../utils/DB/ProfileDB'
import ApplicationDB from '../../utils/DB/ApplicationDB'
import {Redirect} from 'react-router-dom'
export default class sentPage extends Component  {
    render(){
    return(
<div>
    <Navbar page="post"/>
    <h1>Sent</h1>
</div>
    )}}

