import React, { Component } from 'react';
import * as utils from '../../redux/utility';
import './_project-box/project-box.css';
import projectImage from '../../assets/img/image.png';
import location from '../../assets/img/location-icon.png';
import money from '../../assets/img/money-icon.png';
import amazon from '../../assets/img/c-amazon.png';
import flutter from '../../assets/img/c-flutter.png';
import head from '../../assets/img/c-head.png';

const ProjectSummary = (props) => {
    var projectItems = props.project;

    return(
    <div>
        <div className="sum-proj-img-container" style={{ backgroundImage: "url(" + projectImage + ")" }}></div>

        <div className="sum-project-content">
            <h2>{projectItems.name}</h2>
            <div>
                <p className="add-cost"> <span style={{ marginRight: 25 }}><img src={location} alt="L" /> {projectItems.city ? projectItems.city:null}, {projectItems.state? projectItems.state: null}</span> <span><img src={money} alt="L" /> Budget: ${projectItems.budget ? utils.formatAmount(projectItems.budget) : null}</span></p>
            </div>

            <div className="sum-project-brief">
                <p>
                    {projectItems.details ?projectItems.details : null}
                </p>
            </div>
            <div className="divider"></div>
            <h3>Contractors</h3>
            <div>
                <span className="contractor-img"><img src={head} alt="C" /></span>
                <span className="contractor-img"><img src={flutter} alt="C" /></span>
                <span className="contractor-img"><img src={amazon} alt="C" /></span>
            </div>
        </div>
    </div>
)};

export default ProjectSummary;