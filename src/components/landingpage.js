import React, { Component } from 'react';
import { Grid,Cell} from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%',margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img 
                        src="https://cdn2.iconfinder.com/data/icons/business-209/512/Businesswoman-512.png"
                        alt="avatar"
                        className="avatar-image"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB | AngularJS </p>
                       
                        
                        <div className="social-links">

                        {/*LinkedIn*/}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square" area-hidden="true" ></i>
                        </a>
                          {/*github*/}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github-square"></i>
                        </a>
                        {/*instagram*/}
                        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-youtube-square"></i>
                        </a>

                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;