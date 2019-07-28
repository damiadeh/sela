import React, { Component, Suspense } from 'react';
import Sorter from './_sorter/sorter';
//import ProjectBox from './_project-box/project-box';
import Loader from '../useables/preloader/preloader'
import './projects.css';

const ProjectBox = React.lazy(() => import('./_project-box/project-box'));

class Projects extends Component {

    render() {
        return (
            <div className="project-container">
                <Sorter />
                <Suspense fallback={<Loader activity="Loading Projects..." />}>
                    <ProjectBox  details={this.props.showDetails}/>
                </Suspense>
            </div>
        )
    }
}

export default Projects;