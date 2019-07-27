import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/useables/button/button';
import './add-project.css';
import '../../components/useables/input/input.css';
import Input from '../../components/useables/input/input';
import { connect } from 'react-redux';
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
        inValidStatus: true,
        formIsValid: false,
    }

    handleInputChange = (e) => {
        if (!this.state.touched) this.setState({ touched: true });
        const newProject = { ...this.state.newProject },
            name = e.target.name,
            value = e.target.type === e.target.value;
        if (name == "status" || name == "budget") {
            if (!pattern.test(value)) {
                return;
            }
        }
        newProject[name] = value;

        this.setState({ newProject }, () => this.checkValidation());
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        // const formData = {};
        // for (let formElementIdentifier in this.state.addForm) {
        //     formData[formElementIdentifier] = this.state.addForm[formElementIdentifier].value;
        // }
        // this.props.postProject(formData);

        console.log(this.state.newProject);
        //this.props.onOrderBurger(order, this.props.token);
    }

    checkValidation = () => {
        let isValid = true;
        let inputName = {...this.state.newProject}
        parseInt(inputName.status) >= 100  ? this.setState({inValidStatus: true}) : this.setState({inValidStatus: false});
        console.log(inputName)
        for(var prop of inputName.values){
            if (prop == "") isValid = false;
        }
        this.setState({ formIsValid: isValid });
    }



    render() {

        let form = (
            <form onSubmit={this.submitFormHandler}>
                {/* {formElementArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        label={formElement.config.label}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))} */}
                {this.state.touched && !this.state.formIsValid ? <i className="text-center text-danger">-Please fill all fields below</i> : null}
                {this.state.touched && !this.state.inValidStatus ? <i className="text-center text-danger">-Status can't be more than 100</i> : null}

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
                    <textarea className="inputElement" rows="4" cols="6" name="details" typeof="string" />
                </div>

                <div className="input">
                    <label className="label">Project Status*</label>
                    <input className="inputElement" name='status' type='number' onChange={this.handleInputChange} />
                </div>

                <div className="input">
                    <label className="label">Project Budget*</label>
                    <input className="inputElement" name='budget' type='number' onChange={this.handleInputChange} />
                </div>

                <Button btnStyle="btn button btn-primary" disabled={!this.state.formIsValid && this.state.inValidStatus}>ADD +</Button>
                <Link to="/">Back to Homepage</Link>
            </form>
        );

        return (
            <div className="addForm">
                <h4>Add Project</h4>
                {form}
            </div>
        );
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
        postProject: (project) => dispatch(projectActions.addProject(project))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);