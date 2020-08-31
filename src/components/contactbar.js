import React from 'react'
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa"
import '../styles/styles.sass'

const Contact = () => {
  return (
    <div>
        <a href="https://github.com/mukund-v/"><FaGithub size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        <a href="mailto:mukundv@seas.upenn.edu"><FaEnvelope size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        <a href="https://linkedin.com/in/mukund-v"><FaLinkedin size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', 'color':'#0645AD'}}/></a>
        <a href="https://twitter.com/mukundvenk"><FaTwitter size={'1.5rem'} style={{'vertical-align':'middle', 'color':'#0645AD'}}/></a>
    </div>
  )
}

export default Contact
