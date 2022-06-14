import React from 'react'
import '../../App.css';
import { Button } from '../button/Button.js';
import './HeroSection.css';
import data from "../../video/intro.mp4"


function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video autoPlay loop muted>
              <source src={data} type="video/mp4"></source>
            </video>
            <h1>DAMITO MAKES PERFECT.</h1>
            <p>안정적인 DAMITO로 관리합시다.</p>
            <div className="hero-btns">
                 <Button className = 'btns' buttonStyle = 'btn--primary' 
                buttonSize = 'btn--large'>Tutorial</Button>
            </div>
               
        </div>
    )
}

export default HeroSection