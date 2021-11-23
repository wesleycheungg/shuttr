import React from 'react'



class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
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

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        {this.props.formType}
                    </h1>
                    <div>
                        {this.props.errors[0]}
                    </div>
                    <br />
                    <div>
                        <input
                            type="text"
                            value="this.state.username"
                            onChange={this.updateUsername}
                            placeholder="Username"
                        ></input>
                        <input
                            type="password"
                            value="this.state.password"
                            onChange={this.updatePassword}
                            placeholder="Username"
                        ></input>
                    </div>
                    <br />
                    <input type="submit" value={this.props.formType}/>
                    <br />
                    <div>
                        {this.props.formType === 'Sign Up' ? "Do you already have an account?" : "Don't have an account?"}
                        <div>{this.props.link}</div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SessionForm;