import React, { Fragment } from 'react';
import './modal.css';
import Backdrop from '../useables/backdrop/backdrop';

const modal = (props) => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className="Modal"
            style={{
                transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
                display: props.show ? 'block' : 'none'
            }}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;