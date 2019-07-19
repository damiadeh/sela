import React, { Component } from 'react';
import './_project-box/project-box.css';
import projectImage from '../../assets/img/image.png';
import location from '../../assets/img/location-icon.png';
import money from '../../assets/img/money-icon.png';
import amazon from '../../assets/img/c-amazon.png';
import flutter from '../../assets/img/c-flutter.png';
import head from '../../assets/img/c-head.png';

class ProjectSummary extends Component {
    render() {
        return (
            <div>
                <div className="sum-proj-img-container" style={{ backgroundImage: "url(" + projectImage + ")" }}></div>

                <div className="sum-project-content">
                    <h2>Construction of Borehole</h2>
                    <div>
                        <p className="add-cost"> <span style={{ marginRight: 25 }}><img src={location} alt="L" /> Ikorodu, Lagos</span> <span><img src={money} alt="L" /> Budget: $50,000.00</span></p>
                    </div>

                    <div className="sum-project-brief">
                        <p>
                            The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problemThe people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problemThe people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problemThe people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problemThe people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem
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
        );
    }
}

export default ProjectSummary;