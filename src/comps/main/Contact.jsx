import React, { Component } from 'react';
import Zoom from "react-reveal/Zoom";
import { ContactInformation, Service, Email, SERVICE_TYPE, FONT_AWESOME_SIZE } from 'react-contact-information';

class About extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            phone: '+1-707-472-1474'
        };
    }
    render() {
        return (
            <Zoom>
                <div className="row text-center py-4 text-light">
                    <div class="col-1 col-md-4"></div>
                    <div class="col-10 col-md-4">
                        <div class="text-center altFont h1">Contact</div>
                        <p class="pt-4">
                            <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6} >
                                <Service showIdentifier accountIdentifier='sensamotion' type={SERVICE_TYPE.INSTAGRAM} />
                                <Service showIdentifier accountIdentifier='UCeB_ij_uH_o8iqvn5IUdpIg' type={SERVICE_TYPE.YOUTUBE} />
                                <Email to='sensamotionband@gmail.com' />
                            </ContactInformation>
                            <div class="my-4 py-3 border border-light">
                                <h3><u>Manager/tour Manager</u></h3>
                                <p class="lead">Pauly Herman</p>
                                <span class="fas fa-phone"></span>
                                <a href={'tel:'+this.state.phone}>{this.state.phone}</a>
                                <div class="mt-3">
                                    <ContactInformation size={FONT_AWESOME_SIZE.TWO} rowLength={6} >
                                        <Email to='paulyherman@gmail.com' />
                                    </ContactInformation>
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className="col-1 col-md-4"></div>
                </div>
            </Zoom>
        )
    }
}

export default About;
