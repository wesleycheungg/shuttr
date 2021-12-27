import React from 'react'

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            email: "",
            full_name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.updateEmail = this.updateEmail.bind(this)
        this.updateFullname = this.updateFullname.bind(this)
    }

    componentWillMount = () => {
        this.props.removeSessionErrors();
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    updateUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    updateFullname(e) {
        this.setState({
            full_name: e.target.value
        })
    }

    render(){
        const loggedIn = this.props.sessionId ? <Redirect to="/feed" /> : null
        const type = this.props.formType
        const form = type === "Log In" ?
                <form className="form-container-login" onSubmit={this.handleSubmit}>
                <h1 className="form-container-header">
                        Log in to Shuttr
                    </h1>
                    <br />
                    <div>
                        <input
                            type="text"
                            className="session-form-fields"
                            onChange={this.updateUsername}
                            placeholder="Username"
                        ></input>
                        <br />
                        <input
                            type="password"
                            className="session-form-fields"
                            onChange={this.updatePassword}
                            placeholder="Password"
                        ></input>
                    </div>
                    <br />
                    <input className="session-form-submit-button-login" type="submit" value={this.props.formType} />
                    <br />
                    <div className="error-message">
                        {this.props.errors[0]}
                    </div>
                    <div className="session-container-message">
                        {this.props.formType === 'Sign Up' ? "Do you already have an account?" : "Don't have an account?"}
                    </div>
                        <div>{this.props.link}</div>

                </form>
            :
            <form className="form-container-signup" onSubmit={this.handleSubmit}>
                <h1 className="form-container-header">
                    Sign up for Shuttr
                </h1>
                <br />
                <div>
                        <input
                            type="text"
                            className="session-form-fields"
                            onChange={this.updateUsername}
                            placeholder="Username"
                        ></input>
                        <input
                            type="password"
                            className="session-form-fields"
                            onChange={this.updatePassword}
                            placeholder="Password"
                        ></input>
                        <input
                            type="text"
                            className="session-form-fields"
                            onChange={this.updateEmail}
                            placeholder="Email"
                        ></input>
                        <input
                            type="text"
                            className="session-form-fields"
                            onChange={this.updateFullname}
                            placeholder="Full Name"
                        ></input>
                </div>
                <br />
                <input className="session-form-submit-button-signup" type="submit" value={this.props.formType} />
                <br />
                <div className="error-message">
                    {this.props.errors.map( error => {
                        return (
                            <div>
                                {error}
                                <br></br>
                            </div>
                        )
                    })}
                </div>
                <div className="session-container-message">
                    {this.props.formType === 'Sign Up' ? "Already a Shuttr Member?"  : "Don't have an account?"}
                </div>
                    <div>{this.props.link}</div>

            </form>
        return(
            <div className="session-container">
                {loggedIn}
                {form}
                {console.log(type)}
            </div>
        )
    }
}

export default SessionForm;