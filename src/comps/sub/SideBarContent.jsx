import React, { Component } from 'react';
import logo from './../../imgs/LogoFullWhite.png';
import about from "../../imgs/keys.jpg";
import contact from "../../imgs/contact.jpg";

const textClasses="imgTxtCenter h1 altFont text-decoration-none text-light";
class SideBarContent extends Component {
    render() {
        return (
            <div class="sideBarLinks">
                <a className="SideBarImgParent" href="/">
                    <img className="SideBarImg p-4" src={logo}/>
                </a>
                <a className="SideBarImgParent" href="about">
                    <img className="SideBarImg halfOpacity" src={about}/>
                    <span className={textClasses}>About</span>
                </a>
                <a className="SideBarImgParent" href="contact">
                    <img className="SideBarImg halfOpacity" src={contact}/>
                    <span className={textClasses}>Contact</span>
                </a>
            </div>
        )
    }
}

export default SideBarContent;