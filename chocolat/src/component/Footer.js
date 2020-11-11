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
                                <ul className="contact-container">
                                <li>
                                    <b>Contact us</b>
                                    <p className="contact">support@chocolatdeboutique.com</p>
                                    <p className="contact">212.333.5577</p>
                                </li>
                                <li>
                                    <b>Headquarters</b>
                                    <p className="contact">1114 Avenue of the Americas</p>
                                    <p className="contact">New York, NY 10036</p>
                                </li>
                                </ul>
                            </div>
                            {/* Column2 */}
                            <div className="column">
                            <ul className="link-container">
                                <li>
                                    <b>More</b>
                                </li>
                                <li className="footer-li">Shop location update</li>
                                <li className="footer-li">FAQs</li>
                                <li className="footer-li">
                                    <Link to="/shipping-guidelines">Shipping Policy</Link>
                                </li>
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
                                <b className="social-title">Stay connected</b>
                                <div className="social-links">
                                    <Facebook fill="#000"/>
                                    <Twitter fill="#000"/>
                                    <Camera/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        )

    }
}

export default Footer;