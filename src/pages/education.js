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
            <p class="title is-5" style={{"margin-bottom" : ".2rem"}}>University of Pennsylvania - MSE in Data Science</p>
            <p style={{"margin-bottom":".5rem"}}><i>Jan 2019 - May 2021</i></p>
            <p style={{"margin-bottom":".3rem"}}> Master's in Data Science with a focus on Machine Learning.</p>
            <p> Relevant Coursework: Deep Learning for Data Science, Principles of Deep Learning, Computational Linguistics, Machine Learning, Artificial Inteligence, Analysis of Algorithms</p>
            <br/>
          </div>
        </div>

        <div>
          <div class = "columns">
            <div class="column is-2" style={{"margin-right":"1rem"}}>
              <figure class="image container is-48x48">
                <img src={"/img/penn_shield.jpg"}/>
              </figure>
            </div>
            <div class="column">
              <p class="title is-5" style={{"margin-bottom" : ".2rem"}}>University of Pennsylvania - BSE in Networked and Social Systems Engineering</p>
              <p style={{"margin-bottom":".5rem"}}><i>Aug 2017 - May 2021</i></p>
              <p style={{"margin-bottom":".3rem"}}> Bachelor's in Networked and Social Systems Engineering (NETS) - a specialized degree program pulling from theory in Computer Science, Statistics, Economics, and Social Sciences. Depth in Networked and Cloud Services.</p>
              <p> Relevant Coursework: Algorithmic Game Theory, Stochastic Systems Analysis, Dynamical Systems, Data Structures and Algorithms, Crowdsourcing and Human Computation, Cloud and Scalable Computing</p>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Education
