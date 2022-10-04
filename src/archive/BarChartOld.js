import React, { Component } from 'react';
import * as d3 from "d3";

class BarChart extends Component {
    constructor(props) {
        super(props)


        this.state = {
            data: this.props.fetchData(),
        }

        //this.handleClick = this.handleClick.bind(this);
        this.updateChart = this.updateChart.bind(this);
    }

    componentDidMount() {
        this.updateChart()
    }


    updateChart() {

        const data = this.state.data; //getBarData() passed in through props
        const svg = d3.select(".chart");

        const n = data.length;
        //console.log(data);


        const bar_sections = this.props.width / n; //the width of each bar plus its separating space
        const bar_width = bar_sections / 1.25;
        const bar_spacing = bar_sections - bar_width;

        const x_offset = bar_spacing / n;

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => (x_offset * i + 1) + (i * bar_sections))
            .attr("y", (d, i) => this.props.height - (d * 50))
            .attr("width", bar_width)
            .attr("height", (d, i) => d * 50)
            .attr("fill", "green");

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => (x_offset * i + 1) + (i * bar_sections))
            .attr("y", (d, i) => this.props.height - (50 * d) - 3);
    }

    render() {
        return (
            <div>
                <div className="container-fluid" id="bubble-chart" >
                    <svg className="chart" width={this.props.width} height={this.props.height} ref={el => this.svgEl = el}></svg>
                </div>
            </div>
        );
    }
}






export default BarChart;
//<div><button onClick={this.handleClick}>Update</button></div>