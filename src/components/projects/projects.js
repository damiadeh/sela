import React, { Component } from 'react';
import Sorter from './_sorter/sorter';
import ProjectBox from './_project-box/project-box';
import './projects.css';

class Projects extends Component {

    render() {
        return (
            <div className="project-container">
                <Sorter />
                <ProjectBox  details={this.props.showDetails}/>
            </div>
        )
    }
}

export default Projects;