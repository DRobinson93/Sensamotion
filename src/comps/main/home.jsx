import React, { Component } from 'react';
import single from './../../imgs/truthNDisc.jpg';
import about from './../../imgs/about.jpg';
import contact from './../../imgs/TreeFav.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class Home extends Component {
    render() {
        return (
            <div>
                <Zoom>
                    <div className="row text-center py-4 text-light">
                        <div class="col-1 col-md-4"></div>
                        <div class="col-10 col-md-4">
                            <img class="w-100 imgOutline" src={single} />
                            <div className="h1 font-weight-bold altFont pt-2">New Single!</div>
                        </div>
                        <div className="col-1 col-md-4"></div>
                    </div>
                </Zoom>
                <Fade left>
                    <div className="row no-gutters text-dark bg1-lighter shape1">
                        <div class="col-7 col-md-9 py-4">
                            <h1 class="altFont text-center">About us</h1>
                            <div class="d-none d-sm-block text-center">
                                <p class="py-4">
                                    need some text here
                                </p>
                                <a class="btn btn-outline-dark" href="about">READ MORE</a>
                            </div>
                        </div>
                        <div className="col-5 col-md-3">
                            <img className="imgOutline w-100" src={about}/>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="row no-gutters text-light pb-4">
                        <div className="col-4 col-md-2">
                            <img className="imgOutline w-100" src={contact}/>
                        </div>
                        <div className="col-8 col-md-10 py-4">
                            <h1 className="altFont text-center">CONTACT US</h1>
                            <div className="d-none d-sm-block text-center">
                                <p className="py-4">
                                    need some text here
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Home;
