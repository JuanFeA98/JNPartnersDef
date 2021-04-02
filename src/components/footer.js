import * as React from "react"
import { Link } from "gatsby"

import "../styles/footer.css"

import Facebook__Icon from "../images/facebook.png"
import Instagram__Icon from "../images/instagram.png"
import Twitter__Icon from "../images/twitter.png"

const Footer = () => (
    <footer className="Footer">
        <h5>JNPartners & Co</h5>
        <div className="Footer__options">
            <Link to="/page-2">Option random</Link>
            <Link to="/">Option random</Link>
            <Link to="/">Option random</Link>
            <Link to="/">Option random</Link>
        </div>
        <div className="Footer__social">
            <Link to="/">
                <img src={Facebook__Icon} alt="facebook"/>
            </Link>
            <Link to="/">
                <img src={Instagram__Icon} alt="instagram"/>
            </Link>
            <Link to="/">
                <img src={Twitter__Icon} alt="twitter"/>
            </Link>
        </div>
    </footer>
)

export default Footer
