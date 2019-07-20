import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import SearchLocation from '../../components/search-location/search-location';
import Projects from '../../components/projects/projects';
import Modal from '../../components/modal/modal';
import ProjectSummary from '../../components/projects/project-details';
import './homepage.css';

class Homepage extends Component {
    state = {
        showDetails : false,
        project: {
            name: "22222222",
            city: "",
            state: "",
            details: "",
            budget: ""
        }
    }

    closeDetails = () => {
        this.setState({showDetails : false});
    }

    showProjectDetails = (project) => {
        this.setState({showDetails : true, project})
        
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.state.showDetails} modalClosed={this.closeDetails}>
                    <ProjectSummary project={this.state.project} name="tttt"/>
                </Modal>
                <Banner />
                <SearchLocation />
                <Projects showDetails={this.showProjectDetails} />
                <div onClick={() => this.props.history.push("/add")} className="add-project">
                    <span className="fa fa-plus"></span>
                </div>
            </Fragment>
        );
    }
}

export default Homepage;
