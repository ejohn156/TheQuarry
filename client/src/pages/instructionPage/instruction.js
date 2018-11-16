import React from "react";
import "./instruction.css";
import Navbar from '../../components/Navbar'

const instructionPage = ({ match }) => (

  <div>
    <Navbar page="instructions"/>
  
    <div class="wrapper">

  <br></br>
  <div class="half">
    <div class="tab">
     <input id="tab-one" type="checkbox" name="tabs"/>
     <label for="tab-one">What is a <i>service</i> defined as?</label>
      <div class="tab-content">
        <p>A <i>service</i> is something a student wants to provide or offer to others.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"/>
      <label for="tab-two">What is a <i>job</i> defined as?</label>
      <div class="tab-content">
        <p>A <i>job</i> is something a student requests to be done by someone else.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-three" type="checkbox" name="tabs"/>
      <label for="tab-three">Who is allowed to use <i>The Quarry?</i></label>
      <div class="tab-content">
        <p><i>The Quarry</i> is a University of North Carolina at Charlotte based website. All UNCC students, staff, and faculty are permitted to use the site in its entirety. Anyone outside of the UNCC community is not permitted at this time.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-four" type="checkbox" name="tabs"/>
      <label for="tab-four">How do I find my <i>UNCC ID number?</i></label>
      <div class="tab-content">
      <p><a href="https://aux.uncc.edu/49er-card">Click here</a> for more information regarding your UNCC ID.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-five" type="checkbox" name="tabs"/>
      <label for="tab-five">Does my <i>username</i> have to be the same as my UNCC login?</label>
      <div class="tab-content">
        <p>No, the <i>username</i> you create can be whatever you would like it to be as long as it's appropriate.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-six" type="checkbox" name="tabs"/>
      <label for="tab-six">My account was <i>banned</i>, what can I do now?</label>
      <div class="tab-content">
        <p>If your account is temporarily banned there is no appeal process. However, if your account is temporarily banned you may submit an appeal.</p>
      </div>
    </div>
    <div class="tab">
     <input id="tab-seven" type="checkbox" name="tabs"/>
     <label for="tab-seven">How do I advertise a <i>job</i> or <i>service</i>?</label>
      <div class="tab-content">
        <p>Once you sign up and log in you will be directed to <i>service</i> and <i>job</i> form you can fill out.</p>
      </div>
    </div>
    <div class="tab">
     <input id="tab-eight" type="checkbox" name="tabs"/>
     <label for="tab-eight">How do I search for help? </label>
      <div class="tab-content">
        <p>Simply click on the <i>browse</i> tab and search for help depending on whether you need help with <i>job</i> or <i>service</i>.</p>
      </div>
    </div>


   


    <br></br>
    <br></br>
    <br></br>

  </div>
  

</div>
    

 

  </div>



);

export default instructionPage;