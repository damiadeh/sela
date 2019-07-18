import React from 'react';

import './sorter.css';
import caret from '../../../assets/img/expand-icon.png';

const sorter = (props) => (
    <div className="row">
        <div className="col-md-3 sort-head"><p className="heading">All Projects</p></div>
        <div className="col-md-9 row">
            <div className="col-md-3 sort-by">
                <p>Sort by:</p>
            </div>
            <div className="col-md-3 sort-option">
                <p>Budget <span><img src={caret} alt="caret" /></span></p>
            </div>
            <div className="col-md-3 sort-option">
                <p>Start date <span><img src={caret} alt="caret" /></span></p>
            </div>
            <div className="col-md-3 sort-option-end">
                <p>End date <span><img src={caret} alt="caret" /></span></p>
            </div>
        </div>
    </div>
)

export default sorter;