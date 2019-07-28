import React, { Component, Fragment } from 'react';
import * as projectActions from '../../../redux/actions/export';
import { connect } from 'react-redux';
//import ProjectData from '../../../data/projects.json'
import './project-box.css';
import Loader from '../../useables/preloader/preloader';
import * as utils from '../../../redux/utility';
import projectImage1 from '../../../assets/img/image.png';
import projectImage2 from '../../../assets/img/borehole.png';
import location from '../../../assets/img/location-icon.png';
import money from '../../../assets/img/money-icon.png';
import amazon from '../../../assets/img/c-amazon.png';
import flutter from '../../../assets/img/c-flutter.png';
import head from '../../../assets/img/c-head.png';
import arrow from '../../../assets/img/forward-icon.png';



var projectImage = projectImage2;
var statusColor;
var statusMessage;
//Pagination logic is done here
class ProjectBox extends Component {
    state = {
        //todos: ['a','b','c','d','e','f','g','h','i','j','k'],
        currentPage: 1,
        projectsPerPage: 8
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { currentPage, projectsPerPage } = this.state;

        var projectBox = <Loader activity="Loading Projects" />
        if (this.props.projects.length) {
            // Logic for displaying current projects
            const indexOfLastProject = currentPage * projectsPerPage;
            const indexOfFirstProject = indexOfLastProject - projectsPerPage;
            const currentProjects = this.props.projects.slice(indexOfFirstProject, indexOfLastProject);

            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.projects.length / projectsPerPage); i++) {
                pageNumbers.push(i);
            }
            //render the page numbers
            var renderPageNumbers = pageNumbers.map(number => {
                return (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handleClick}
                    >
                        {number}
                    </li>
                );
            });

            projectBox = (<div className="boxes">
                {currentProjects.map((project, index) => {

                    if (index == 0) projectImage = projectImage1;
                    if (index == 1) projectImage = projectImage1;
                    if (index % 2 == 0 && index != 0) projectImage = projectImage1;
                    if (index % 3 == 0) projectImage = projectImage2;

                    if (project.status == 0) {
                        //TO DO : add date property to projects.json to check if project date is reach and not started : for "On track to be defaulted" status
                        statusColor = "#9B51E0";
                        statusMessage = "Not Initiated";
                    }
                    if (project.status > 0 && project.status <= 10) {
                        statusColor = "#EB5757";
                        statusMessage = "Defaulted";
                    }
                    if (project.status > 10 && project.status <= 30) {
                        statusColor = "#27AE60";
                        statusMessage = "Initiated";
                    }
                    if (project.status > 10 && project.status <= 40) {
                        statusColor = "#27AE60";
                        statusMessage = "Initiated";
                    }
                    if (project.status > 40 && project.status <= 99) {
                        statusColor = "#828282";
                        statusMessage = "On track to be completed";
                    }
                    if (project.status == 100) {
                        statusColor = "#000000";
                        statusMessage = "Completed";
                    }


                    return (
                        <div className="project-box">
                            <div className="be-inline proj-img-container" style={{ backgroundImage: "url(" + projectImage + ")" }}>
                                <div className="text-center" style={{ backgroundColor: `${statusColor}`, padding: "7px 10px", display: "inline-block", borderRadius: "7px 0 7px 0" }}><span style={{ color: "#ffffff" }}>{statusMessage}</span></div>
                                <div class="progress" style={{ width: "80%", height: "28px", margin: "320px auto 0 auto", bottom: "10px", }}>
                                    <div class="progress-bar" role="progressbar" style={{ width: `${project.status}%`, backgroundColor: "#2D9CDB" }} aria-valuenow={project.status} aria-valuemin="0" aria-valuemax="100"><span style={{ position: "absolute", marginLeft: `${project.status < 50 ? 100 : 40}px`, color: `${project.status < 50 ? 'black' : '#ffffff'}` }}>{project.status}% completed</span></div>
                                </div>
                            </div>

                            <div className="project-content be-inline">
                                <h2>{project.name}</h2>
                                <div>
                                    <p className="add-cost"> <span style={{ marginRight: 25 }}><img src={location} alt="L" /> {project.city}, {project.state}</span> <span><img src={money} alt="L" /> Budget: ${utils.formatAmount(project.budget)}</span></p>
                                </div>

                                <div className="project-brief">
                                    <p>
                                        {utils.wordTrimmer(project.details, 210, "...")}{project.details.length > 210 ? <span onClick={() => this.props.details(project)} className="read-more">Read more</span> : null}
                                    </p>
                                </div>
                                <div className="divider"></div>
                                <h3>Contractors</h3>
                                <div>
                                    <span className="contractor-img"><img src={head} alt="C" /></span>
                                    <span className="contractor-img"><img src={flutter} alt="C" /></span>
                                    <span className="contractor-img"><img src={amazon} alt="C" /></span>
                                    <p className="more-details" onClick={() => this.props.details(project)}>View more details <img src={arrow} alt="C" /></p>
                                </div>
                            </div>
                        </div>
                    );

                })

                }
            </div>);
        }


        return (
            <Fragment>
                {projectBox}
<div className="clearfix"></div>
                {this.props.projects.length ?
                    <div className="pagination-i">
                        <ul className="paginate-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div> : null}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.project.projects,
        fetchingProject: state.project.FetchingProject,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(projectActions.fetchProjects()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectBox);