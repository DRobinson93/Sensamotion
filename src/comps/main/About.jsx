import React, { Component } from 'react';
import about from './../../imgs/about.jpg';
import Zoom from "react-reveal/Zoom";

class About extends Component {
    render() {
        return (
            <Zoom>
                <div className="row py-4">
                    <div class="col-1 col-md-4"></div>
                    <div class="col-10 col-md-4">
                        <img alt="about" class="w-100 imgOutline" src={about} />
                    </div>
                    <div className="col-1 col-md-4"></div>
                </div>
                <p className="pt-4 text-center py-4 text-light px-4">
                    {this.props.aboutParagraphs.map((para, i) => {
                        return (<p>{para}</p>)
                    })}
                </p>
            </Zoom>
        )
    }
}

export default About;
