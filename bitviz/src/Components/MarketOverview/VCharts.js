import React, { Component } from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryCandlestick,
  VictoryTheme
} from "victory";

class PieChart extends Component {
  /*
          RESPONSE FORMAT
    [time,low, high, open, close, volume]
    */
  render() {
    /*Converts Epoch unix time to local time */
    const reformatData = this.props.data.map(item => {
      const timeConvert = new Date(
        item[0] * 1000
      ).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric"
      });
      return {x: timeConvert, open: item[3], close: item[4], high: item[2], low: item[1]};
    });
    console.log('reformatData: ',reformatData);

    return (
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ y: [0, 6000]}}
        domainPadding={{ x: 25 }}
        scale={{ x: "time" }}
      >
        <VictoryAxis         
        tickFormat={t => `${t.getDate()}/${t.getMonth()}`} />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          data={[
            { x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0 },
            { x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5 },
            { x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10 },
            { x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7 },
            { x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5 }
          ]}
        />
      </VictoryChart>
    );
  }
}

export default PieChart;
