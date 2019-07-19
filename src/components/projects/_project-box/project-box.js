import React, { Fragment } from 'react';
import ProjectData from '../../../data/projects.json'
import './project-box.css';
import * as utils from '../../../redux/utility';
import projectImage1 from '../../../assets/img/image.png';
import projectImage2 from '../../../assets/img/borehole.png';
import location from '../../../assets/img/location-icon.png';
import money from '../../../assets/img/money-icon.png';
import amazon from '../../../assets/img/c-amazon.png';
import flutter from '../../../assets/img/c-flutter.png';
import head from '../../../assets/img/c-head.png';
import arrow from '../../../assets/img/forward-icon.png';

var projectImage;
const projectBox = (props) => {
    var projectBox = (<div className="boxes">
        {ProjectData.map((project, index) => {
            switch (index) {
                case (index == 1):
                    projectImage = projectImage1;
                    break;
                case (index % 3 == 0):
                    projectImage = projectImage2;
                    break;
                case (index % 5 == 0):
                    projectImage = projectImage1;
                    break;
                default:
                    projectImage = projectImage2;
            };

            return (
                <div className="project-box">
                    <div className="be-inline proj-img-container" style={{ backgroundImage: "url(" + projectImage + ")" }}></div>

                    <div className="project-content be-inline">
                        <h2>{project.name}</h2>
                        <div>
                            <p className="add-cost"> <span style={{ marginRight: 25 }}><img src={location} alt="L" /> {project.city}, {project.state}</span> <span><img src={money} alt="L" /> Budget: ${utils.formatAmount(project.budget)}</span></p>
                        </div>

                        <div className="project-brief">
                            <p>
                                {utils.wordTrimmer(project.details, 210, "...")}{project.details.length > 210 ? <span onClick={() => props.details} className="read-more">Read more</span> : null}
                            </p>
                        </div>
                        <div className="divider"></div>
                        <h3>Contractors</h3>
                        <div>
                            <span className="contractor-img"><img src={head} alt="C" /></span>
                            <span className="contractor-img"><img src={flutter} alt="C" /></span>
                            <span className="contractor-img"><img src={amazon} alt="C" /></span>
                            <p className="more-details" onClick={props.details}>View more details <img src={arrow} alt="C" /></p>
                        </div>
                    </div>
                </div>
            );

        })

        }
    </div>);

    return projectBox;

    
};

export default projectBox;