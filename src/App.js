import React from 'react';
import Sidebar from "react-sidebar";
import Home from './comps/main/home.jsx';
import About from './comps/main/About.jsx';
import Contact from './comps/main/Contact.jsx';
import SideBarContent from './comps/sub/SideBarContent.jsx';
import aboutParagraphs from './comps/sub/aboutParagraphs';
import './App.css';
import {
    Switch,
    Route, BrowserRouter as Router
} from "react-router-dom";

import RubberBand from 'react-reveal/Jump';

import fullLogo from './imgs/FullLogo.png';
import smLogo from './imgs/SmLogo.png';

class App extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open)
    {
        this.setState({sidebarOpen: open});
    }
    render() {
        return (
            <div className="App">
                <Sidebar
                    sidebar={<SideBarContent />}
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="bg-dark text-light"
                    sidebarId="sidebar"
                >
                </Sidebar>
                <RubberBand>
                    <nav className="navbar navbar-light bg-dark py-2 bg1">
                        <img src={smLogo} alt="Logo Sm" id="smLogo" />
                        <img src={fullLogo} alt="Logo" id="fullLogo" />
                        <button className="navbar-toggler ml-auto" type="button"
                                onClick={() => this.onSetSidebarOpen(true)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </RubberBand>
                <div id="content" class="bg2 container-fluid">
                    <div class="pt-lg">
                        <Router>
                            <Switch>
                                <Route path="/about"  render={() => <About aboutParagraphs={aboutParagraphs} />} />
                                <Route path="/contact" component={Contact} />
                                <Route path="/"
                                       render={() => <Home aboutParagraphs={aboutParagraphs} />}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
