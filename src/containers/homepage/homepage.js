import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import SearchLocation from '../../components/search-location/search-location';
import Projects from '../../components/projects/projects';
import Modal from '../../components/modal/modal';
import ProjectDetails from '../../components/projects/project-details';
import './homepage.css';

class Homepage extends Component {
    state = {
        showDetails : false
    }

    closeDetails = () => {
        this.setState({showDetails : false});
    }

    showProjectDetails = () => {
        this.setState({showDetails : true})
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.state.showDetails} modalClosed={this.closeDetails}>
                    <ProjectDetails />
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
