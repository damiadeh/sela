import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from '../../components/useables/button/button';
import './add-project.css';
import Input from '../../components/useables/input/input';
import {connect} from 'react-redux';
import * as projectActions from '../../redux/actions/export';

class AddProject extends Component {
    state = {
        addForm : {
            name: {
                label: 'Name*',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6,
                },
                valid: false,
                touched: false
            },
            city: {
                label: 'City*',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Yaba', displayValue: 'Yaba'},
                        {value: 'Ikeja', displayValue: 'IKeja'},
                        {value: 'Lekki', displayValue: 'Lekki'},
                        {value: 'Okota', displayValue: 'Okota'},
                        {value: 'Mushin', displayValue: 'Mushin'},
                    ]
                },
                value: 'Yaba',
                validation: {},
                valid: true
            },
            state: {
                label: 'State*',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'Lagos', displayValue: 'Lagos'},
                        {value: 'Abuja', displayValue: 'Abuja'},
                        {value: 'Kaduna', displayValue: 'Kaduna'},
                        {value: 'Ekiti', displayValue: 'Ekiti'},
                        {value: 'Mushin', displayValue: 'Mushin'},
                    ]
                },
                value: 'Lagos',
                validation: {},
                valid: true
            },
            details: {
                label: "Project Details",
                elementType: 'textarea',
                elementConfig: {
                    rows: "5",
                    placeholder: "Enter details of project"
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            status: {
                label: "Project Status",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: '0-100'
                },
                value: '',
                validation: {
                    required: true,
                    max: 100,
                    isNumeric: true,
                },
                valid: false,
                touched: false
            },
            budget: {
                label: "Project Budget",
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                value: '',
                validation: {
                    required: true,
                    maxLength: 9,
                    isNumeric: true,
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
    }

    submitFormHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.addForm){
            formData[formElementIdentifier] = this.state.addForm[formElementIdentifier].value;
        }
         this.props.postProject(formData);
         console.log(formData);
       //this.props.onOrderBurger(order, this.props.token);
    }

    checkValidation = (value, rules) => {
        let isValid = true;
        if(!rules){
            return true;
        }
        if (rules.required){
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if(rules.max) {
            isValid = value <= rules.max && isValid;
        }
        if(rules.isNumeric){
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedAddForm ={
            ...this.state.addForm
        };
        const updatedFormElement = {
            ...updatedAddForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched =true;
        updatedAddForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let inputIdentifier in updatedAddForm){
            formIsValid = updatedAddForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({addForm : updatedAddForm, formIsValid : formIsValid});
    }

    render (){
        const formElementArray = [];
        for (let key in this.state.addForm){
            formElementArray.push({
                id: key,
                config: this.state.addForm[key],
            })
        } 
        let form = (
            <form onSubmit={this.submitFormHandler}>
                {formElementArray.map(formElement => (
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
                ))}
                <Button btnStyle="btn button btn-primary" disabled={!this.state.formIsValid}>ADD +</Button>
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


const mapStateToProps = state =>{
    return {
        addingProject : state.project.AddingProject,
        responseType : state.project.responseType,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        postProject: (project) => dispatch(projectActions.addProject(project))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);