import * as React from "react"

import "../styles/content.css"

import Icon1 from "../images/bank.png"
import Icon2 from "../images/calculator.png"
import Icon3 from "../images/dollar.png"


const Content = () => (
    <React.Fragment>
        <div className="First__Content">
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit repellat itaque et incidunt numquam illum recusandae laboriosam assumenda quis inventore error molestias culpa obcaecati fugit, blanditiis quam suscipit nihil deleniti?
            </p>
            <button>Saber más</button>
        </div>
        <div className="Second__Content">
            <div className="Card">
                <img src={ Icon1 } alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, omnis? Magni cupiditate voluptatem excepturi odio.</p>
            </div>
            <div className="Card">
                <img src={ Icon2 } alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, omnis? Magni cupiditate voluptatem excepturi odio.</p>
            </div>
            <div className="Card">
                <img src={ Icon3 } alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, omnis? Magni cupiditate voluptatem excepturi odio.</p>
            </div>
        </div>
    </React.Fragment>
)

export default Content
