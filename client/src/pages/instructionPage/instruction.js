import React from "react";
import "./instruction.css";
import Navbar from '../../components/Navbar'

const instructionPage = ({ match }) => (

  <div>
    <Navbar page="instructions"/>
  
    <div class="wrapper">
<div class="strong">
  <h1><strong>Frequently Asked Questions</strong></h1>
</div>
  <br></br>
  <div class="half">
    <div class="tab">
      <input id="tab-one" type="checkbox" name="tabs"/>
      <label for="tab-one">Question #1</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"/>
      <label for="tab-two">Question #2</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-three" type="checkbox" name="tabs"/>
      <label for="tab-three">Question #3</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"/>
      <label for="tab-two">Question #4</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"/>
      <label for="tab-two">Question #5</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <div class="tab">
      <input id="tab-two" type="checkbox" name="tabs"/>
      <label for="tab-two">Question #6</label>
      <div class="tab-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
      </div>
    </div>
    <br></br>
  </div>
  
 
</div>
    

 

  </div>



);

export default instructionPage;