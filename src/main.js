import './app.css';
import App from './App.svelte';
import Chart from 'chart.js/auto';

/*const app = new App({
  target: document.getElementById('app'),
});

export default app;*/

document.addEventListener('DOMContentLoaded', function () {
  console.log('Chart initialization started'); // Debugging statement

  /* data for the chart */
  const velocityData = [0.2, 0.8, 0.6, 0.4, 0.2, 0.0];

  const ctx = document.getElementById('velocityChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Label1', 'Label2', 'Label3'],
      datasets: [{
        label: 'Vertical Velocity Visualization',
        data: velocityData,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Time (s)'
          },
          time: {
            unit: 'second',
            tooltipFormat: 'ss',
            displayFormats: {
              second: 'ss',
            }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Vertical Velocity (m/s)'
          },
          ticks: {
            beginAtZero: true,
            max: 1,
            stepSize: 0.1,
          }
        }
      }
    }
  });
});
