import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/Footer.css';
import { IconName } from 'react-feather';

const Camera = require('react-feather/dist/icons/camera').default;
const Facebook = require('react-feather/dist/icons/facebook').default;
const Twitter = require('react-feather/dist/icons/twitter').default;

class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="main-footer" >
                    <div className="container">
                        <div className="row">
                            {/* Column1 */}
                            <div className="column">
                                <b className="contact">Contact us</b>
                                <p className="contact">support@kreutherchocolate.com</p>
                                <p className="contact">212.201.1985</p>
                                <b className="contact">Headquarters</b>
                                <p>1114 Avenue of the Americas
                                New York, NY 10036</p>
                            </div>
                            {/* Column2 */}
                            <div className="column">
                            <ul className="list-unstyled">
                                <b>More</b>
                                <li className="footer-li">Shop location update</li>
                                <li className="footer-li">FAQs</li>
                                <Link to="/shipping">
                                <li className="footer-li">Shipping Policy</li>
                                </Link>
                                <li className="footer-li">Refund Policy</li>
                                <li className="footer-li">Privacy Policy</li>
                                <li className="footer-li">Terms of Use</li>
                            </ul>
                                </div>
                            {/* Column3 */}
                            {/* <div className="column">
                                <b>Join our mailing list</b>

                                {/* <button className="footer-button">Subscribe</button> */}
                            {/* </div>  */}
                            <div className="column">
                                <b>Stay connected</b>
                                <Facebook />
                                <Twitter/>
                                <Camera />
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        )

    }
}

export default Footer;