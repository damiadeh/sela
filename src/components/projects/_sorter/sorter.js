import React from 'react';
import MediaQuery from 'react-responsive';

import './sorter.css';
import caret from '../../../assets/img/expand-icon.png';

const sorter = (props) => (
    <div className="row">
        <div className="col-md-3 sort-head"><p className="heading">All Projects</p></div>
        <MediaQuery query="(min-device-width: 600px)">
        <div className="col-md-9 row">
            <div className="col-md-3 sort-by">
                <p>Sort by:</p>
            </div>
            <div className="col-md-3 sort-option" onClick={props.toggleOptions}>
                <p>Budget <span><img src={caret} alt="caret" /></span></p>
                <div className="dropdown-wrapper" style={{ display: props.show ? "block" : "none" }}>
                    <p onClick={props.fetch}>All</p>
                    <p onClick={props.descending}>Descending</p>
                    <p onClick={props.ascending}>Ascending</p>
                </div>
            </div>
            <div className="col-md-3 sort-option">
                <p>Start date <span><img src={caret} alt="caret" /></span></p>
            </div>
            <div className="col-md-3 sort-option-end">
                <p>End date <span><img src={caret} alt="caret" /></span></p>
            </div>
        </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width: 599px)">
        <div className="sort-container" style={{width : "100%"}}>
            <div className="col-sm-4 sort-box sort-option-1" onClick={props.toggleOptions}>
                <p>Budget <span><img src={caret} alt="caret" /></span></p>
                <div className="dropdown-wrapper-m" style={{ display: props.show ? "block" : "none" }}>
                    <p onClick={props.fetch}>All</p>
                    <p onClick={props.descending}>Descending</p>
                    <p onClick={props.ascending}>Ascending</p>
                </div>
            </div>
            <div className="col-sm-4 sort-box sort-option-2">
                <p>Start date <span><img src={caret} alt="caret" /></span></p>
            </div>
            <div className="col-sm-4 sort-box sort-option-3">
                <p>End date <span><img src={caret} alt="caret" /></span></p>
            </div>
        </div>
        </MediaQuery>
        
    </div>
)

export default sorter;