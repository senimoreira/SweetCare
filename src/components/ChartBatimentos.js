import React, {Component} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const ChartBatimentos = (props)=>{
    return(
            <LineChart width={310} height={120} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey={"batimentos"} stroke="#DB4C3E" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          );
}

export default ChartBatimentos