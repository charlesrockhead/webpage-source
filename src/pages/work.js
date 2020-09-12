import React from "react"
import {Helmet} from "react-helmet"

import NavBar from "../components/navbar"

const Work = () => (
  <div>
    <NavBar/>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Work</title>
    </Helmet>

   
    <div class="columns is-centered">
      <div class="column is-5" style={{'margin-left':'1.5rem', 'margin-right':'1.5rem'}}>
        <center>
        </center><br/>
 {/*  
        <div>
          <div class = "columns">
            <div class="column is-2" style={{"margin-right":"1rem"}}>
              <figure class="image container is-48x48">
                <img src={"/img/g.png"}/>
              </figure>
            </div>
            <div class="column">
              <p class="title is-5" style={{"margin-bottom" : ".2rem"}}>Google - Software Engineering Intern</p>
              <p style={{"margin-bottom":".5rem"}}><i>May 2019 - August 2019</i></p>
              <p> Built optimization and evaluation infrastructure for ClusterFuzz, a scalable fuzzing infrastructure running on 25,000 cores. Implemented a multi-armed bandit algorithm to manage strategy selection, final production model yielded 148% improvement in code coverage on stable fuzz targets. Authored a research paper on the system architecture and the model's use in fuzzing infrastrucutres. </p>
              <br/>
            </div>
          </div>
        </div>
*/}
        <div>
          <div class = "columns">
            <div class="column is-2" style={{"margin-right":"1rem"}}>
              <figure class="image container is-64x64">
                <img src={"/img/penn_CNT_logo.png"}/>
              </figure>
            </div>
            <div class="column">
              <p class="title is-5" style={{"margin-bottom" : ".2rem"}}>University of Pennsylvania - Research Assistant</p>
              <p style={{"margin-bottom":".5rem"}}><i>May 2019 - current</i></p>
              <p> Implement and performing machine learning modules on EEG data acquire from the Neurology department at HUP in order to analyze seizures and determine drug effectiveness
              Currently, working on a machine learning project which analyzes seizure spread so that the origin can be more accurately localized for surgical removal.</p>
              <br/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Work
