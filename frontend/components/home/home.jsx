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
                <div className="footer-container">
                    <a href="https://github.com/wesleycheungg" target="_blank">
                        <img className="footer-logos" src={window.github}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/cheungwesley/" target="_blank">
                        <img className="footer-logos" src={window.linkedin}></img>
                    </a>
                    <a href="https://angel.co/u/wesley-cheung-6" target="_blank">
                        <img className="footer-logos" src={window.angellist}></img>
                    </a>
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