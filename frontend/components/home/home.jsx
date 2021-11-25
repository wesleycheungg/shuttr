import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="homepage">
                <div className="homepage-text">
                    <h1>Find your inspiration.</h1>
                    <p>Join the Shuttr community, home to ten of billions of photos and 2 million groups.</p>
                    <button className="start-for-free-btn"><Link className="free-btn" to="/signup">Start for Free</Link></button>

                </div>

            </div>
        )
    }
}

export default Home;