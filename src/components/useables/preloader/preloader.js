import React from 'react';
import './preloader.css';

const preloader = (props) => {
    return (
        <div className="l-container">
            <div class="l-boxes">
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <div class="l-box"></div>
                <b>{props.activity}</b>
            </div>
            
        </div>
    )
}
export default preloader;