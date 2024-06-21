import React from 'react';
import { Chart } from 'react-google-charts';

const ChartDisplay = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const headers = Object.keys(data[0]);
  const chartData = [headers, ...data.map(row => headers.map(header => row[header]))];

  return (
    <div className="chart-display">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={chartData}
        options={{
          title: 'Data Chart',
          chartArea: { width: '50%' },
        }}
      />
    </div>
  );
};

export default ChartDisplay;
