import React, { Component } from 'react';
import single from './../../imgs/responsive/truthNDisc.jpg';
import singleMobile from './../../imgs/responsive/truthNDisc-mobile.jpg';
import about from './../../imgs/responsive/about.jpg';
import contact from './../../imgs/responsive/TreeFav.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';
import { Picture } from 'react-responsive-picture';

class Home extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            numOfDescCharsToShow: 100,
            mainImgLoaded : false
        };
    }
    shortDescription(){
        return this.props.aboutParagraphs[0].substring(0, this.state.numOfDescCharsToShow) + '...';
    }
    setMainImgLoaded = () => {
        this.setState({'mainImgLoaded':true});
    }
    render() {
        return (
            <div>
                <div className="row text-center py-4 text-light">
                    <div class="col-1 col-md-4"></div>
                    <div class="col-10 col-md-4">
                        <a href="https://song.link/us/i/1516574684" class="text-light" target="_blank" rel="noopener noreferrer">
                            <Zoom>
                                <Picture
                                    alt="single" class="w-100 imgOutline" onLoad={this.setMainImgLoaded}
                                    sources = {[
                                        {
                                            srcSet: singleMobile,
                                            media: "(max-width: 768px)",
                                        },
                                        {
                                            srcSet: single,
                                            media: "(min-width: 768px)"
                                        }
                                    ]}
                                />
                                <div className="h1 font-weight-bold altFont pt-2">New Single!</div>
                            </Zoom>
                        </a>
                    </div>
                    <div className="col-1 col-md-4"></div>
                </div>
                <Fade left when={this.state.mainImgLoaded}>
                    <a href="/about" className="row no-gutters text-dark bg1-lighter shape1">
                        <div class="col-7 col-md-9 py-4">
                            <h1 class="altFont text-center">About us</h1>
                            <div class="d-none d-sm-block text-center">
                                <p class="py-4">
                                    {this.shortDescription()}
                                </p>
                                <a class="btn btn-outline-dark" href="about">READ MORE</a>
                            </div>
                        </div>
                        <div className="col-5 col-md-3">
                            <LazyLoad>
                                <img alt="about" className="imgOutline w-100" src={about}/>
                            </LazyLoad>
                        </div>
                    </a>
                </Fade>
                <LazyLoad>
                    <a href="/contact" className="row no-gutters text-light pb-4">
                        <div className="col-4 col-md-2">
                            <LazyLoad>
                                <img alt="contact" className="imgOutline w-100" src={contact}/>
                            </LazyLoad>
                        </div>
                        <div className="col-8 col-md-10 py-4">
                            <h1 className="altFont text-center">CONTACT US</h1>
                            <div className="d-none d-sm-block text-center">
                                <a className="btn btn-outline-light" href="/contact">CONTACT INFO</a>
                            </div>
                        </div>
                    </a>
                </LazyLoad>
            </div>
        )
    }
}

export default Home;
