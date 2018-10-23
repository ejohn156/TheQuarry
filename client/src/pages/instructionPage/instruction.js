import React from "react";
import "./instruction.css";
import Navbar from '../../components/Navbar'

const instructionPage = ({ match }) => (

  <div>
    <Navbar page="instructions"/>
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-11">
    <h1>Instruction page</h1>
    </div>
    </div>
    </div>


);

export default instructionPage;