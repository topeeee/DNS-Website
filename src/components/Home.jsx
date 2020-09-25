import React, { Component } from 'react'
import Navigation from './navigation';
import Header from './header';
// import Driver from './driver';
import About from './about'
import DriverSignup from './driverSignup';
import DriverLogin from "./driverLogin";
import Contact from './contact';
import JsonData from '../data/data.json';

export class Home extends Component {
    state = {
        landingPageData: {},
    }
    getlandingPageData() {
        this.setState({landingPageData : JsonData})
    }

    componentDidMount() {
        this.getlandingPageData();
    }

    render() {
        return (
            <div>
                <Navigation />
                <Header data={this.state.landingPageData.Header} />
                {/*<Driver />*/}
                <DriverSignup />
                <DriverLogin />
                <About />
                <Contact data={this.state.landingPageData.Contact} />
            </div>
        )
    }
}

export default Home;
