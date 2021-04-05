import * as React from "react"

import HeroImage from "../images/hero.jpg"

import "../styles/hero.css"

const Hero = () => (
    <>
    <div className="Hero">
        <img src={HeroImage} alt=""/>
        <div className="Hero__Content">
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum consequatur unde, asperiores, ipsam tempora nam illum iste velit praesentium error sint fugit doloremque. Saepe consectetur fugiat tempore impedit modi?</p>
        </div>
    </div>
    <div className="Hero__Form">
        <input type="email" placeholder="Email"/>
        <button className="Form__Button">Go</button>
    </div>
    </>
)

export default Hero
