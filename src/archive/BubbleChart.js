import React, { Component } from 'react';
import * as d3 from "d3";
//import getData from '../helpers/getData';

let colours = ['#2176ae', '#57b8ff', '#b66d0d', '#fbb13c', '#fe6847']

class BubbleChart extends Component {
    constructor(props) {
        super(props)


        this.state = {
            //data: getData()
            data: this.props.data
        }

        this.handleClick = this.handleClick.bind(this)
        this.updateStyleAndAttrs = this.updateChart.bind(this)
    }

    handleClick() {
        this.setState({
            data: this.props.data
        })
    }

    componentDidMount() {
        this.updateChart()
    }

    componentDidUpdate() {
        this.updateChart()
    }

    updateChart() {
        let maxRadius = 40
        let xScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.width])
        let yScale = d3.scaleLinear().domain([0, 1]).range([0, this.props.height])
        let rScale = d3.scaleLinear().domain([0, 1]).range([0, maxRadius])

        let u = d3.select(this.svgEl)
            .selectAll('circle')
            .data(this.state.data)

        u.enter()
            .append('circle')
            .attr('cx', 0.5 * this.props.width)
            .attr('cy', 0.5 * this.props.height)
            .style('fill', '#fff')
            .merge(u)
            .transition()
            .duration(1000)
            .attr('cx', d => xScale(d.x))
            .attr('cy', d => yScale(d.y))
            .attr('r', d => rScale(d.r))
            .style('fill', d => colours[d.colour])

        u.exit().remove()
    }

    render() {
        return (
            <div className="container-fluid" id="bubble-chart">
                <svg width={this.props.width} height={this.props.height} ref={el => this.svgEl = el}></svg>
                <div><button onClick={this.handleClick}>Update</button></div>
            </div>
        );
    }
}

export default BubbleChart;