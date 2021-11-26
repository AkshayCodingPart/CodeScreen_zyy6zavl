import React from 'react';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginId: "",
            password: ""
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/about/about')
        .then(res => console.log("############", res.text()))
        .then(console.log("res"));
        console.log("res");
    }

    onChange = (e) => {
        console.log("e", e);
        const { target : { id, value } } = e;
        this.setState({
            [id]: value
        });
    }

    onClick = () => {
        const { loginId, password } = this.state;
        console.log(loginId);
        console.log(password);
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    id="loginId"
                    name="LoginId"
                    onChange={this.onChange}
                />
                <input 
                    type="text"
                    id="password"
                    name="Password"
                    onChange={this.onChange}
                />
                <button
                    type="button"
                    id="loginButton"
                    name="Login"
                    onClick={this.onClick}
                > Login
                </button>
            </div>
        );
    }
}
