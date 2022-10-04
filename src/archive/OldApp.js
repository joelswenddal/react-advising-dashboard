//import React, { Component } from "react";
import './App.css';
import React, { Component } from 'react';
import Nav from '../components/Nav';
import BubbleChart from './BubbleChart';
import BarChartB from './BarChartB';
import getData from '../helpers/getData';
import getBarBData from '../helpers/getBarBData';


class App extends Component {
  constructor(props) {
    super(props);

    //you must bind 'this' for all methods in class 
    // components when passing them to other components
    // (since this method is being passed to the Home component)

    this.state = {
      width: 1000,
      height: 900,
    };

    // always declare state in the constructor of a class component
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container-sm" id="centerbox">
          <div className="row">
            <h1>
              Basic Dashboard
            </h1>
          </div>
          <div className="row">
            <h2>
              Graph 1
            </h2>
            <BubbleChart width={this.state.width} height={this.state.height} data={getData} />
          </div>
          <div className="row">
            <h2>
              Appointments by Month - 2021
            </h2>
            <BarChartB width={this.state.width} height={this.state.height} fetchData={getBarBData} />

          </div>
          <div className="row">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
//<BarChart width={this.state.width} height={this.state.height} data={getBarData} />