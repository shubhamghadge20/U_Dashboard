import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

// Register the required components, including the Filler plugin
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'User Engagement',
      data: [10, 20, 15, 30, 40],
      borderColor: 'rgb(75, 192, 192)',  // Light teal color for the line
      backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Soft fill under the line
      borderWidth: 3,
      pointBackgroundColor: 'rgb(75, 192, 192)', // Points matching the line color
      pointBorderColor: '#fff', // White border for points
      pointBorderWidth: 2,
      tension: 0.4,  // Smooth curve
      fill: true,  // Enables filling under the line
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize more fluidly
    plugins: {
      title: {
        display: true,
        text: 'Monthly User Engagement',
        font: {
          size: 20,
        },
        color: '#333',  // Dark color for the title
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        cornerRadius: 4,
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 14,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',  // Subtle grid lines
        },
      },
      y: {
        type: 'linear',
        min: 0,
        max: 50,  // Set max value to make the chart more visually engaging
        title: {
          display: true,
          text: 'Engagement',
          font: {
            size: 14,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',  // Subtle grid lines
        },
      },
    },
    animation: {
      duration: 1000,  // Smooth animation on load
      easing: 'easeInOutQuad',  // Custom easing for smooth transitions
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
