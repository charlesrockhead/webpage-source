import React from 'react'
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa"
import '../styles/styles.sass'

const Contact = () => {
  return (
    <div>
        <a href="https://github.com/charlesrockhead/"><FaGithub size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        <a href="mailto:rockhead@seas.upenn.edu"><FaEnvelope size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        <a href="https://www.linkedin.com/in/charles-rockhead/"><FaLinkedin size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        
    </div>
  )
}

export default Contact
