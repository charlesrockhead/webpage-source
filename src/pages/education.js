import React from "react"
import {Helmet} from "react-helmet"

import NavBar from "../components/navbar"

const Education = () => (
  <div>
    <NavBar/>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Education</title>
    </Helmet>
    <div class="columns is-centered">
      <div class="column is-5" style={{'margin-left':'1.5rem', 'margin-right':'1.5rem'}}>
        <center>
        </center><br/>

        <div class = "columns">
          <div class="column is-2" style={{"margin-right":"1rem"}}>
            <figure class="image container is-48x48">
              <img src={"/img/penn_shield.jpg"}/>
            </figure>
          </div>
          <div class="column">
            <p class="title is-5" style={{"margin-bottom" : ".2rem"}}>University of Pennsylvania - BSE in Computer Science</p>
            <p style={{"margin-bottom":".5rem"}}><i>Aug 2018 - May 2022</i></p>
            <p> Relevant Coursework (CS): Big Data Analytics, Data Structures and Algorithms, Robotics and Rehabilitation, iOS App Development,  Market and Social Systems on the Internet, Managerial Economics, Negotiations </p>
            <br/>
          </div>
        </div>

       
      </div>
    </div>
  </div>
)

export default Education
