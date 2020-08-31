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
            
            <img class={"img-rounded"} src={"/img/photo.jpg"} style={{'border-radius' : '50%','width' : '14rem'}}/>
            <p class="subtitle is-3" style={{'margin-bottom' : '.3rem'}}>Charles Rockhead</p>
            <p style={{'margin-bottom' : '1.2rem'}}><ContactBar/></p>
          </center>

          <p align="left">
            Hi! I'm Mukund. I'm currently a junior at the University of Pennsylvania where I am completing my Bachelors in Networked and Social Systems Engineering (NETS) and my Masters in Data Science (Machine Learning). 
            <br/><br/>
            Currently, I'm working on <a href="https://github.com/catacomb-ai/catacomb">Catacomb</a>, a library for deploying machine learning prototypes with a simple UI, conducting quality assurance, and tracking production model performance. 
            <br/><br/>
            I'm also working on a few research projects with Penn NLP including training code summarization models to translate Python code snippets to their English intent and <a href="https://github.com/mukund-v/turkish-judge">Turkish Judge</a>, a crowd-based adjudication platform to resolve rejected tasks on Amazon Mechanical Turk.
            <br/><br/>
            In my freetime, I enjoy practicing table tennis, taking photos, and playing poker and Go, which I've recently started to learn after watching the AlphaGo documentary.
          </p>
      </div>
    </div>
  </div>
)

export default IndexPage
