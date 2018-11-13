import React, { Component } from 'react';
import './Contact.css';
import {TextField, Button} from "react-md";
import { connect } from 'react-redux';
import {postContact} from "../../actions/simpleAction";
class Contact extends Component {
    constructor(props){
        super();
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
            subject : '',
            invalid : true,
        };

    }


    componentDidMount(){
        this.validForm();
    }

    validForm = () => {
        const {firstName,
            lastName,
            email,
            subject,
            invalid} = this.state;
        if(firstName && lastName && email && subject && invalid === true){
            this.setState({
                invalid : false
            });
        } else if((!firstName || !lastName || !email || !subject) && invalid === false){
            this.setState({
                invalid : true
            });
        }
    };

    handleChange = (e, value) => {
        this.setState({
            [e] : value
        });
        this.validForm();
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postContact(this.state);
        this.setState(
            {
                firstName : '',
                lastName : '',
                email : '',
                subject : '',
                invalid : true,
            }
        );
    };

    render() {
        if(this.props.contact.message){
            alert (this.props.contact.message);
        }
        const { firstName,
             lastName,
             email,
             subject, invalid } = this.state;
        return (
            <div className="contact-form">
                <h3>Contact Form </h3>
                <form id="contactForm">
                    <TextField
                        id="first-name"
                        required
                        label="First Name"
                        placeholder=" Your name…"
                        onChange={(value) => this.handleChange('firstName', value)}
                        size={100}
                        value={firstName}
                        maxLength={255}
                        fullWidth={false}
                        errorText="Please write down your first name."
                    />
                    <TextField
                        id="last-name"
                        required
                        label="Last Name"
                        placeholder="Your last name…"
                        onChange={(value) => this.handleChange('lastName', value)}
                        size={100}
                        value={lastName}
                        maxLength={255}
                        fullWidth={false}
                        errorText="Please write down your last name."
                    />
                    <TextField
                        id="email"
                        required
                        label="Email"
                        placeholder="Your email address…"
                        onChange={(value) => this.handleChange('email', value)}
                        size={100}
                        value={email}
                        maxLength={255}
                        fullWidth={false}
                        errorText="Don’t forget to tell us what your email address is."
                    />
                    <TextField
                        id="subject"
                        required
                        label="Subject"
                        placeholder="Let us know your concerns!"
                        onChange={(value) => this.handleChange('subject', value)}
                        size={100}
                        value={subject}
                        maxLength={500}
                        fullWidth={false}
                        errorText="Don’t forget to write something to use!."
                    />
                    <Button
                        disabled={invalid}
                        onSubmit={this.handleSubmit}
                        onClick={this.handleSubmit}
                        className={"button-submit"} raised>
                        Submit
                    </Button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        contact: state.contactReducer,
    });
};

const mapDispatchToProps = dispatch => ({
    postContact: (form) => dispatch(postContact(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);