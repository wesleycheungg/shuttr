import React from 'react'
import { Link } from 'react-router-dom';
import PhotoIndexContainer from '../photo/photo_index_container';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    loggedInView = () => {
        return(
            <div>
                <h1>PhotoStream Page!</h1>
                <PhotoIndexContainer />
            </div>

        )
    }

    loggedOutView = () => {
        return (
            <div className="homepage">
                <div className="homepage-text">
                    <h1>Find your inspiration.</h1>
                    <p>Join the Shuttr community, home to ten of billions of photos and 2 million groups.</p>
                    <button className="start-for-free-btn"><Link className="free-btn" to="/signup">Start for Free</Link></button>

                </div>

            </div>
        )
    }

    render(){
        const loggedIn = this.props.currentUser ? this.loggedInView() : this.loggedOutView()
        return(
            // <div className="homepage">
            //     <div className="homepage-text">
            //         <h1>Find your inspiration.</h1>
            //         <p>Join the Shuttr community, home to ten of billions of photos and 2 million groups.</p>
            //         <button className="start-for-free-btn"><Link className="free-btn" to="/signup">Start for Free</Link></button>

            //     </div>

            // </div>
            loggedIn
            
        )   
    }
}

export default Home;