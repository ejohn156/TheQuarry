import React from "react";
import "./home.css";
import Navbar from '../../components/Navbar';
/* images import*/
import logo49 from "./images/49-logo.png";
import unccwhite from "./images/white-crown-logo.png";
import students from "./images/students-1.jpg";
import car from "./images/car.png";
import computer from "./images/computer-screen.png";
import flask from "./images/flask-outline.png";
import book from "./images/open-book.png";
import paint from "./images/painter-palette.png";

const homePage = ({ match }) => (
<div>
    <Navbar page="home"/> {/* Navbar */}
    <div class="row">
        {/* from bootstrap
        <div class="col-md-1">
            
        </div>
        <div class="col-md-11">
            <h1>Home Page</h1>

        </div>
        */}

        {/* Slide show */}
       <div id="carouselExampleIndicators" data-interval="3000" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            {/* Slide 1 */}
            <div class="carousel-inner">
                    <div class="carousel-item active">
                    <div class="slide-1">
                        <div class="slide-1-div1">
                            <p class="slide-1-text">Welcome to THE QUARRY</p>
                        </div>
                        <div class="slide-1-div2">
                            <img class="slide-1-img" src={logo49} alt="First slide"/>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div class="carousel-item">
                    <div class="slide2">
                        <div class="slide-2-div1">
                                <p class="slide-2-text">UNC Charlotte based freelance 
                                jobs and services for UNCC . . .</p>
                                <img class="slide-2-img" src={unccwhite} alt="Second slide"/>
                            </div>  
                            <div class="slide-2-div2">
                                <ul class="slide-2-1-text">
                                    <li>STUDENTS</li>
                                    <li>STAFF</li>
                                    <li>FACULTY</li>
                                </ul>    
                            </div>
                    </div>                 
                </div>
                {/* Slide 3 */}
                <div class="carousel-item">
                    <div class="slide-3">
                        <div class="slide-3-div1">
                            <img class="slide-3-img" src={students} alt="Third slide"/>
                        </div>
                        
                        <div class="slide-3-div2">
                            <p class="slide-3-text">Get it done with a UNCC student!</p>
                        </div> 
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        {/* job/service cards */}
        <div class="job-sev-cards">
            {/* job card */}
            <div class="card-j">
                <div class="card-body-js">
                    <h3 class="card-title-js">Jobs</h3>
                    <p class="card-text-js">Want something done? 
                    Post your job so someone can help you out.</p>
                    <a class="card-js-links" href="/post/Job">Post a job ></a>
                </div>
            </div>
            {/* service card */}
            <div class="card-s">
                <div class="card-body-js">
                    <h3 class="card-title-js">Services</h3>
                    <p class="card-text-js">Got some skills or talents? 
                    Post your service(s) so others can hire you.</p>
                    <a class="card-js-links" href="/post/Service">Post a service ></a>
                </div>
            </div>
        </div>

        {/* category cards */}
        <div class="cat-div">
            <div class="cat-title">
                <h3>Categories</h3>
            </div>

            <div class="card-cat">
                 <ul class="cat-list">
                    <li>
                        <div class="cat-element">
                            <img class="cat-img" src={computer} alt="img"/>
                            <p class="cat-text">IT/Computer</p>
                        </div>
                    </li>
                    <li>
                        <div class="cat-element">
                            <img class="cat-img" src={car} alt="img"/>
                            <p class="cat-text">Auto</p>
                        </div>
                    </li>
                    <li>
                        <div class="cat-element">
                            <img class="cat-img" src={paint} alt="img"/>
                            <p class="cat-text">Art</p>
                        </div>
                    </li>
                    <li>
                        <div class="cat-element">
                            <img class="cat-img" src={flask} alt="img"/>
                            <p class="cat-text">Science</p>
                        </div>
                    </li>
                    <li>
                        <div class="cat-element">
                            <img class="cat-img" src={book} alt="img"/>
                            <p class="cat-text">Tutoring</p>
                        </div>
                    </li>
                </ul> 
            </div>

            <div class="cat-more">
                <p class="cat-link">View other categories in &nbsp;
                    <a href="/browse/job">jobs ></a><p></p>
                    <a href="/browse/service">services ></a>
                </p>
            </div>
        </div>
    
    </div>
</div>


);

export default homePage;