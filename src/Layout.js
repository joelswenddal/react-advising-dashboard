import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import Foot from './components/Foot';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import getDataFeeds from './helpers/getDataFeeds';

// App
class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: getDataFeeds()
        };

        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState({
            data: getDataFeeds(),
        })
    }
    /*
    //automatic updating
    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                data: getDataFeeds()
            })
        }, 5000)
    }
    */
    render() {
        return (
            <div className="Layout">
                <Nav title="AdvisorDash" />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="main chart-wrapper">
                            <LineChart
                                data={this.state.data[0].data}
                                title={this.state.data[0].title}
                                color="#3E517A"
                            />

                        </div>
                    </div>
                    <div className="row">
                        <div><button className="btn btn-dark btn-sm" onClick={this.handleClick}>Update</button></div>
                    </div>
                    <div className="row justify-content-center" id="lowest-row">
                        <div className="sub chart-wrapper">
                            <BarChart
                                data={this.state.data[1].data}
                                title={this.state.data[1].title}
                                color="#70CAD1"
                            />
                        </div>
                        <div className="sub chart-wrapper">
                            <BarChart
                                data={this.state.data[2].data}
                                title={this.state.data[2].title}
                                color="#a28392"
                            />
                        </div>
                        <div className="sub chart-wrapper">
                            <DoughnutChart
                                data={this.state.data[3].data}
                                title={this.state.data[3].title}
                                colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#1f4761', '#a28392']}
                            />
                        </div>
                    </div>
                </div>
                <Foot />
            </div>
        );
    }
}

export default Layout;