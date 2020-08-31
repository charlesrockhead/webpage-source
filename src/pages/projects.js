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
        Reinforcement Learning Poker
      </p>
      <a href="https://github.com/mukund-v/poker-rnn">
      <span class="icon">
        <FaLink/>
      </span>
      </a>
    </div>
    <div class="card-content">
      <p>
        Using reinforcement learning methods to teach an agent to play the game of Limit Hold-Em Poker using the rl-card environment. Wrote Deep Q-Learning agent
        and Neural Fictitious Self Play agent and formulated recurrent variations of both learning algorithms to induce the modelling bias of sequential
        strategy in poker gameplay.
      </p>
      <br/>
      <p style={{"text-align" : "right"}}><i>Feb - May 2020</i></p>
    </div>
  </div>
  <br/>
  <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Turkish Judge
        </p>
        <a href="https://github.com/mukund-v/turkish-judge">
          <span class="icon">
            <FaLink/>
          </span>
        </a>
      </div>
      <div class="card-content">
        <p>
        Implementation of a self-sufficient appeals system for Amazon Mechanical Turk (AMT). In particular, my partner and I designed a web application
        through which AMT workers are able to appeal their rejected tasks to be adjudicated by other workers on the AMT platform. A game theoretic analysis of the truthfulness properties of the Mechanism was also conducted after
        formulating as a peer prediction problem.
        </p>
        <br/>
        <p style={{"text-align" : "right"}}><i>Mar 2019 - current</i></p>
      </div>
    </div>
  </div>

  <div class="column is-one-fifth">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          Question Answering with Distilled Transformers
        </p>
        <a href="https://github.com/mukund-v/cis530project">
        <span class="icon">
          <FaLink/>
        </span>
        </a>
      </div>
      <div class="card-content">
        <p>
        Fine-tuning pre-trained BERT models for performance on the SQuAD dataset using HuggingFace transformers library. Experimenting with BERT, RoBERTa, DistilBERT, DistilRoBERTa to
        anaylze how different pre-training approaches and distillation of a transformer model affect inference time and performance on the context Q/A task in particular.
        </p>
        <br/>
        <p style={{"text-align" : "right"}}><i>Apr - May 2020</i></p>
      </div>
    </div>
    <br/>
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
    
  </div>

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


  </div>
  </div>
)

export default Projects
