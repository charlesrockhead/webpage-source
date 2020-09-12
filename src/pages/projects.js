import React from "react"
import {Helmet} from "react-helmet"
import {FaLink} from "react-icons/fa"

import NavBar from "../components/navbar"

const Projects = () => (
  <div>
    <NavBar/>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Projects</title>
    </Helmet>

  <div class="columns is-centered">

  <div class="column is-one-fifth">
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        Space Invada
      </p>
      <a href="https://github.com/charlesrockhead/Space-Invada">
      <span class="icon">
        <FaLink/>
      </span>
      </a>
    </div>
    <div class="card-content">
      <p>
      Co-Developed a rehabilitation robotic design project (ENGR 140) which improved the grip function of stroke patients by creating a pressure-based 
      end- effector that allowed stroke patients to play our customized version of ‘Space Invaders’ that scales with their motor function thus 
      allowing them to improve their grip functtion and hand-eye coordination over time.
      </p>
      <br/>
      <p style={{"text-align" : "right"}}><i>March - June 2019</i></p>
    </div>
  </div>
  <br/>
  <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          "Oh, The Places You'll Go!"
        </p>
        <a href="https://github.com/riya-n/nets150_finalproject">
          <span class="icon">
            <FaLink/>
          </span>
        </a>
      </div>
      <div class="card-content">
        <p>
        NETS 150 final project which  allows users to find a city to travel to in the United States and provides them with the best flight route based on cost. 
        Users choose from a finite set of listed attractions/features, departure dates and then we provided them with a corresponding list of destinations and optimal flight routes. 
        This is achieved through using webscraping with the jSoup API, and using Dijkstra’s Algorithm to find the cheapest flights to our recommended destinations.

        </p>
        <br/>
        <p style={{"text-align" : "right"}}><i>April 2020 - May 2020</i></p>
      </div>
    </div>
  </div>

  <div class="column is-one-fifth">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          AlgoTrading
        </p>
        <a href="https://github.com/charlesrockhead/AlgoTrading">
        <span class="icon">
          <FaLink/>
        </span>
        </a>
      </div>
      <div class="card-content">
        <p>
         Using the Alpaca API, in order to implement the 50-20 day moving average trading strategy in which the program 
         will enter long and short positions on particular stocks based on the intersection of those moving averages.
        </p>
        <br/>
        <p style={{"text-align" : "right"}}><i>Aug - Sept 2020</i></p>
      </div>
    </div>
    <br/>
{/*  
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Chess-Ray Vision
        </p>
        <a href="https://github.com/samryan18/chess-ray-vision">
        <span class="icon">
          <FaLink/>
        </span>
        </a>
      </div>
      <div class="card-content">
        <p>
        Convolutional neural network models to recognize chess gamestate from a photo of the board. Our final model yielded 99.28% accuracy on the testing set.
        Additionally, we created a hand-labeled dataset of 500 chess boards with various types of noise (lighting, angles, background).
        </p>
        <br/>
        <p style={{"text-align" : "right"}}><i>Mar - May 2019</i></p>
      </div>
    </div>
    <br/>
*/}
    
  </div>
{/* 
    <div class="column is-one-fifth">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">
            Learning the Game of Life
          </p>
          <a href="https://github.com/mukund-v/learning-the-game-of-life">
          <span class="icon">
            <FaLink/>
          </span>
          </a>
        </div>
        <div class="card-content">
          <p>
          Experimenting with autoencoder-based methods to reconstruct cell lineage tree from
          cell mutation data. In particular, we use autoencoder models to construct a 16-dimensional
          latent space for 200 length DNA strands and use various reconstructions methods such as K-means and UPGMA
          to trace back cell mutation lineages.
          </p>
          <br/>
          <p style={{"text-align" : "right"}}><i>Oct - Dec 2019</i></p>
        </div>
      </div>
    </div>
 */}

  </div>
  </div>
)

export default Projects
