import React from 'react';


import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";



const WeatherItem = (props) => {
  const series = [
    {
      name: "Temperature",
      data: props.indicators.temperature,
    },
    {
      name: "Humidity",
      data: props.indicators.humidity,
    },
    {
      name: "Pressure",
      data: props.indicators.pressure,
    },
  ];
  return (
    <Chart pannable zoomable style={{ height: 650 }}>
      <ChartTitle text="Weather indicators for 4 days" />
      <ChartLegend position="top" orientation="horizontal" />

      <ChartValueAxis>
        <ChartValueAxisItem labels={{
          format: "N0",
        }} min={-30} max={1200} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem max={40} categories={props.indicators.date} labels={{ margin: 10, rotation: 45 }} />
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{ visible: true }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  );
};

export default WeatherItem;