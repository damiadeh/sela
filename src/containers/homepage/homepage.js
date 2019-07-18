import React, { Component, Fragment } from 'react';
import Banner from '../../components/banner/banner';
import SearchLocation from '../../components/search-location/search-location';
import Projects from '../../components/projects/projects';

class Homepage extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <SearchLocation />
                <Projects />
            </Fragment>
        );
    }
}

export default Homepage;
