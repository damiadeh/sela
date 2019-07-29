import React from 'react';
import MediaQuery from 'react-responsive';

import './sorter.css';
import caret from '../../../assets/img/expand-icon.png';

const sorter = (props) => (
    <div className="row">
        <div className="col-md-3 sort-head"><p className="heading">All Projects</p></div>
        <div className="col-md-9 row">
            <div className="col-xs-6 col-md-3 sort-by">
                <p>Sort by:</p>
            </div>
            <div className="col-xs-6 col-md-3 sort-option" onClick={props.toggleOptions}>
                <p>Budget <span><img src={caret} alt="caret" /></span></p>
                <div className="dropdown-wrapper" style={{ display: props.show ? "block" : "none" }}>
                    <p onClick={props.fetch}>All</p>
                    <p onClick={props.descending}>Descending</p>
                    <p onClick={props.ascending}>Ascending</p>
                </div>
            </div>
            <div className="col-xs-6 col-md-3 sort-option">
                <p>Start date <span><img src={caret} alt="caret" /></span></p>
            </div>
            <div className="col-xs-6 col-md-3 sort-option-end">
                <p>End date <span><img src={caret} alt="caret" /></span></p>
            </div>
        </div>
    </div>
)

export default sorter;