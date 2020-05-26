import React, { Component } from 'react';
import about from './../../imgs/about.jpg';
import Zoom from "react-reveal/Zoom";

class About extends Component {
    render() {
        return (
            <Zoom>
                <div className="row text-center py-4 text-light">
                    <div class="col-1 col-md-4"></div>
                    <div class="col-10 col-md-4">
                        <div class="text-center altFont h1">Contact</div>
                        <p class="pt-4">
                            need contact info here
                        </p>
                    </div>
                    <div className="col-1 col-md-4"></div>
                </div>
            </Zoom>
        )
    }
}

export default About;
