import React, { Component } from 'react';
import logo from './../../imgs/responsive/LogoFullWhite.png';
import about from "../../imgs/responsive/tree.jpg";
import contact from "../../imgs/responsive/contact.jpg";

const textClasses="imgTxtCenter h1 altFont text-decoration-none text-light";
class SideBarContent extends Component {
    render() {
        return (
            <div class="sideBarLinks">
                <a className="SideBarImgParent" href="/">
                    <img alt="logo" className="SideBarImg p-4" src={logo}/>
                </a>
                <a className="SideBarImgParent" href="about">
                    <img alt="about" className="SideBarImg halfOpacity" src={about}/>
                    <span className={textClasses}>About</span>
                </a>
                <a className="SideBarImgParent" href="contact">
                    <img alt="contact" className="SideBarImg halfOpacity" src={contact}/>
                    <span className={textClasses}>Contact</span>
                </a>
            </div>
        )
    }
}

export default SideBarContent;
