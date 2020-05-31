import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import {useSelector, useDispatch} from 'react-redux';


const  C = (props) => {


	console.log(props)

     return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={props.dataa.options}
              series={props.dataa.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );

}

export default C;