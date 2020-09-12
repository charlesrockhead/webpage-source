import React from "react"
import { Helmet } from "react-helmet"

import NavBar from "../components/navbar"
import ContactBar from "../components/contactbar"

const IndexPage = () => (
  <div>
    <NavBar/>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Charles Rockhead</title>
    </Helmet>

    <div class="columns is-centered">
      <div class="column is-4" style={{'margin-left':'1.5rem', 'margin-right':'1.5rem'}}>
          <center>
            {/* this is used to  change the profile image on the main page*/}
            <img class={"img-rounded"} src={"/img/photo.jpg"} style={{'border-radius' : '50%','width' : '14rem'}}/>
            <p class="subtitle is-3" style={{'margin-bottom' : '.3rem'}}>Charles Rockhead</p>
            <p style={{'margin-bottom' : '1.2rem'}}><ContactBar/></p>
          </center>

          <p align="left">
            Hey! I'm Charles. I'm currently a junior at the University of Pennsylvania where I am completing my Computer Science (CSCI) and I'm originally from Kingston, Jamaica. 
            <br/><br/>
            Currently, I'm working on stock bot with <a href="https://github.com/anyareddy"> Anya Reddy </a>, which aims to use the alpaca API to conduct algo trading using 20,50 day moving averages strategy.
            <br/><br/>
            I'm also working on a research project with Center of Neuroengineering and Therapeautics in which we are using machine learning to model seizure spread in epileptic patients in order to improve better patients outcomes in resective surgury.
            <br/><br/>
            In my freetime, I enjoy playing water sports, hanging out with friends, and learning about business decisions which impact my everyday life.
          </p>
      </div>
    </div>
  </div>
)

export default IndexPage
