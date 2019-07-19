import React, { Fragment } from 'react';

import './project-box.css';
import projectImage from '../../../assets/img/image.png';
import projectImage2 from '../../../assets/img/borehole.png';
import location from '../../../assets/img/location-icon.png';
import money from '../../../assets/img/money-icon.png';
import amazon from '../../../assets/img/c-amazon.png';
import flutter from '../../../assets/img/c-flutter.png';
import head from '../../../assets/img/c-head.png';
import arrow from '../../../assets/img/forward-icon.png';


const projectBox = (props) => (
    <div className="boxes">

        <div className="project-box">
            <div className="be-inline proj-img-container" style={{ backgroundImage: "url(" + projectImage + ")" }}></div>

            <div className="project-content be-inline">
                <h2>Construction of Borehole</h2>
                <div>
                    <p className="add-cost"> <span style={{marginRight: 25}}><img src={location} alt="L" /> Ikorodu, Lagos</span> <span><img src={money} alt="L" /> Budget: $50,000.00</span></p>
                </div>

                <div className="project-brief">
                    <p>
                        The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem...<span onClick={props.details} className="read-more">Read more</span>
                    </p>
                </div>
                <div className="divider"></div>
                <h3>Contractors</h3>
                <div>
                    <span className="contractor-img"><img src={head} alt="C" /></span>
                    <span className="contractor-img"><img src={flutter} alt="C" /></span>
                    <span className="contractor-img"><img src={amazon} alt="C" /></span>
                    <p className="more-details">View more details <img src={arrow} alt="C" /></p>
                </div>
            </div>
        </div>



        <div className="project-box">
            <div className="be-inline proj-img-container" style={{ backgroundImage: `url(${projectImage2})` }}></div>

            <div className="project-content be-inline">
                <h2>Construction of Borehole</h2>
                <div>
                    <p className="add-cost"> <span style={{marginRight: 25}}><img src={location} alt="L" /> Ikorodu, Lagos</span> <span><img src={money} alt="L" /> Budget: $50,000.00</span></p>
                </div>

                <div className="project-brief">
                    <p>
                        The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem...<span className="read-more">Read more</span>
                    </p>
                </div>
                <div className="divider"></div>
                <h3>Contractors</h3>
                <div>
                    <span className="contractor-img"><img src={head} alt="C" /></span>
                    <span className="contractor-img"><img src={flutter} alt="C" /></span>
                    <span className="contractor-img"><img src={amazon} alt="C" /></span>
                    <p className="more-details">View more details <img src={arrow} alt="C" /></p>
                </div>
            </div>
        </div>
    </div>
);

export default projectBox;