import React, { Component } from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../components/useables/button/button';
import './add-project.css';
import '../../components/useables/input/input.css';
import * as projectActions from '../../redux/actions/export';

const pattern = /^\d+$/;
class AddProject extends Component {
    state = {
        newProject: {
            name: "",
            state: "",
            city: "",
            details: "",
            status: "",
            budget: ""
        },
        touched: false,
        inValidStatus: false,
        formIsValid: false,
    }

    handleInputChange = (e) => {
        if (!this.state.touched) this.setState({ touched: true });
        const newProject = { ...this.state.newProject },
            name = e.target.name,
            value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
        newProject[name] = value;

        this.setState({ newProject: newProject }, () => this.checkValidation());
    }

    submitFormHandler = (event) => {

        event.preventDefault();
        // console.log(this.state.newProject);
        this.props.postProject(this.state.newProject);
    }

    checkValidation = () => {
        let isValid = true;
        let inputName = { ...this.state.newProject };

        // console.log(inputName)
        for (var prop in inputName) {
            if (inputName[prop] == "") isValid = false;
        }
        //TODO: do more validation on status

        this.setState({ formIsValid: isValid }, () => console.log(this.state.newProject));
    }


    render() {

        let form = (
            <div className="addForm">
                <h4>Add Project</h4>
                <form onSubmit={this.submitFormHandler}>
                    {this.state.touched && !this.state.formIsValid ? <i className="text-center text-danger">-Please fill all fields below correctly, Enter status not more than 100</i> : null}
                    {/* {this.state.inValidStatus ? <i className="text-center text-danger">- Status can't be more than 100</i> : null} */}

                    <div className="input">
                        <label className="label">Project Name*</label>
                        <input className="inputElement" name='name' type='string' onChange={this.handleInputChange} />
                    </div>

                    <div className="input">
                        <label className="label">City*</label>
                        <select className="inputElement" name="city" itemType="string" onChange={this.handleInputChange}>
                            <option value="">select city...</option>
                            <option value="Ikeja">Ikeja</option>
                            <option value="Magodo">Magodo</option>
                            <option value="Lekki">Lekki</option>
                            <option value="Yaba">Yaba</option>
                        </select>
                    </div>

                    <div className="input">
                        <label className="label" >State*</label>
                        <select className="inputElement" name="state" itemType="string" onChange={this.handleInputChange}>
                            <option value="">select state...</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Ondo">Ondo</option>
                            <option value="Anambra">Anambra</option>
                        </select>
                    </div>

                    <div className="input">
                        <label className="label">Enter project details*</label>
                        <textarea className="inputElement" rows="4" cols="6" name="details" type="string" onChange={this.handleInputChange} />
                    </div>

                    <div className="input">
                        <label className="label">Project Status*</label>
                        <input className="inputElement" name='status' type='number' onChange={this.handleInputChange} />
                    </div>

                    <div className="input">
                        <label className="label">Project Budget*</label>
                        <input className="inputElement" name='budget' type='number' onChange={this.handleInputChange} />
                    </div>

                    {this.props.addingProject ? <button disabled style={{ cursor: "not-allowed" }} className="btn btn-default">Processing ...</button> : <Button btnStyle="btn button btn-primary" disabled={!this.state.formIsValid}>ADD +</Button>}
                    <Link to="/">Back to Homepage</Link>
                </form>
            </div>
        );

        if(this.props.responseType == 1){
            // let initialProject = {
            //     name: "",
            //     state: "",
            //     city: "",
            //     details: "",
            //     status: "",
            //     budget: ""
            // };
            // this.setState({newProject: initialProject});
            //this.props.resetState();
            form = <Redirect to="/" />
        }

        return form;
    }
}


const mapStateToProps = state => {
    return {
        addingProject: state.project.AddingProject,
        responseType: state.project.responseType,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        postProject: (project) => dispatch(projectActions.addProject(project)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);