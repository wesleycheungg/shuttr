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
        const type = this.props.formType
        const form = type === "Log In" ? 
            <form className="form-container-login" onSubmit={this.handleSubmit}>
                <h1>
                    Log In to Flickr
                </h1>
                <div>
                    {this.props.errors[0]}
                </div>
                <br />
                <div>
                        <input
                            type="text"
                            // value="this.state.username"
                            onChange={this.updateUsername}
                            placeholder="Username"
                        ></input>
                    <br />
                        <input
                            type="password"
                            // value="this.state.password"
                            onChange={this.updatePassword}
                            placeholder="Password"
                        ></input>
                </div>
                <br />
                <input type="submit" value={this.props.formType} />
                <br />
                <div>
                    {this.props.formType === 'Sign Up' ? "Do you already have an account?" : "Don't have an account?"}
                    <div>{this.props.link}</div>
                </div>

            </form>:
            <form className="form-container-signup" onSubmit={this.handleSubmit}>
                <h1>
                    Sign up for Flickr
                </h1>
                <div>
                    {this.props.errors[0]}
                </div>
                <br />
                <div>
                        <input
                            type="text"
                            // value="this.state.username"
                            onChange={this.updateUsername}
                            placeholder="Username"
                        ></input>
                        <input
                            type="password"
                            // value="this.state.password"
                            onChange={this.updatePassword}
                            placeholder="Password"
                        ></input>
                        <input
                            type="text"
                            // value="this.state.password"
                            onChange={this.updateEmail}
                            placeholder="Email"
                        ></input>
                        <input
                            type="text"
                            // value="this.state.password"
                            onChange={this.updateFullname}
                            placeholder="Fullname"
                        ></input>
                </div>
                <br />
                <input type="submit" value={this.props.formType} />
                <br />
                <div>
                    {this.props.formType === 'Sign Up' ? "Already a Shuttr Member?" : "Don't have an account?"}
                    <div>{this.props.link}</div>
                </div>

            </form>
        return(
            <div>
                {form}
                {console.log(type)}
            </div>
        )
    }
}

export default SessionForm;