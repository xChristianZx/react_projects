import React, { Component } from "react";
import _ from "lodash";
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme,
  VictoryLine,
  VictoryLabel,
  VictoryBar
} from "victory";

class CandleCharts extends Component {
  /*
          RESPONSE FORMAT
    [time,low, high, open, close, volume]
    *NOTE* GDAX returns time in Epoch Unix
    */

  render() {
    /* Converts Epoch unix time to local time and then creates an OHLC object for VCharts */
    if (!this.props.data.length > 0) {
      return null;
    }

    const reformatData = this.props.data.map(item => {
      const timeConvert = new Date(item[0] * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
      });
      return {
        x: timeConvert,
        open: item[3],
        close: item[4],
        high: item[2],
        low: item[1]
      };
    });

    const reformatSlice = reformatData.slice(0, 29);
    const lastCloseY = reformatSlice[0].close;
    // const lastCloseX0 = reformatSlice[28].x;
    // const lastCloseX1 = reformatSlice[0].x;
    const priorDaysClose = this.props.priorClose;
    
    const dayDiff = (lastCloseY-priorDaysClose);
    const dayChangeDelta = _.round(
      (lastCloseY - priorDaysClose) / priorDaysClose * 100,
      2
    );
    const formattedDayChangeDelta = (dayChangeDelta > 0) ? `+${dayChangeDelta}`: dayChangeDelta;
    
    const dayChangeDeltaColorFill = () => (dayChangeDelta < 0) ? {fontSize: 18, fill: 'red'} : {fontSize: 18, fill: 'green'};
    
    //volume test
    const test = () =>
      !this.props.data.length > 0
        ? null
        : this.props.data.map(item => Math.round(item[5]));

    const testSlice = test().slice(0, 29);

    const priorCloseLine = reformatSlice.map(item => {
      return { x: item.x, y: priorDaysClose };
    });
    // console.log("reformatSlice: ", reformatSlice);
    // console.log("lastCloseX0: ", lastCloseX0);
    // console.log("lastCloseX1: ", lastCloseX1);
    // // console.log("DLINE: ", dLine);
    // console.log("PRIORCLOSE: ", this.props.priorClose);
    // console.log("DayChange: ", dayChangeDelta);
    // console.log('DayDiff: ', dayDiff)
    // console.log('formattedDayChangeDelta: ', formattedDayChangeDelta);

    return (
      <VictoryChart
        animate={{ duration: 2000 }}
        theme={VictoryTheme.material}
        padding={50}
        domainPadding={{ x: [5, 5], y: 25 }}
        scale={{ x: "time" }}
        height={350}
        width={500}
      >
        {/* Coin Label */ }
        <VictoryLabel x={50} y={20} style={{fontSize: 18, fontWeight: 'bold'}} text={this.props.label} />
        {/* DayChange% */ }
        <VictoryLabel x={275} y={20} style={dayChangeDeltaColorFill()} text={`${formattedDayChangeDelta}%`} />
        {/* Spot Price */ }
        <VictoryLabel x={375} y={20} style={{fontSize: 20}} text={`$${lastCloseY}`} />
        

        {/* X-Axis */}
        <VictoryAxis
          fixLabelOverlap={true}
          style={{
            grid: { stroke: "grey", strokeWidth: 1, strokeOpacity: 0.25 },
            tickLabels: { fontSize: 12, padding: 5 }
          }}
        />
        {/* Y-Axis */}
        <VictoryAxis          
          fixLabelOverlap={true}
          orientation="right"
          offsetX={50}
          tickCount={8}
          tickFormat={d => `$${d}`}
          style={{
            grid: { stroke: "grey", strokeWidth: 1, strokeOpacity: 0.35 },
            tickLabels: { fontSize: 16, padding: 0 }
          }}
          dependentAxis
        />
        {/* Prior Close Line */}
        <VictoryLine
          data={priorCloseLine}
          labels={[`PriorClose - ${priorDaysClose}`]}
          labelComponent={<VictoryLabel dx={-330} />}
          style={{
            data: {
              stroke: "red",
              strokeOpacity: 0.4,
              strokeDasharray: "10,10",
              strokeWidth: 1
            },
            labels: {
              fill: "red",
              opacity: 0.4
            }
          }}
        />
        {/* <VictoryBar standalone style={{ data: { fill: "#c43a31" } }} data={testSlice} /> */}
        <VictoryCandlestick
          candleColors={{ positive: "green", negative: "#c43a31" }}
          data={reformatSlice}
        />
      </VictoryChart>
    );
  }
}

export default CandleCharts;
