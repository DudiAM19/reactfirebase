import React, { Component } from 'react';
import './register.css';
import firebase from '../../../config/firebase';

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleRegisterSubmit = () => {
        const {email, password} = this.state;
        console.log('before : ', email,password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('succes', res);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    render() {
        return (
            <div className="container"> 
                    <h3 className="p">Register Page</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleChangeText} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleChangeText} type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleRegisterSubmit}>Register</button>
                {/* <button>Go to Dashboard</button> */}
            </div>
        )
    }
}

export default Register;