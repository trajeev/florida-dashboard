import React from 'react';
import {Bar} from 'react-chartjs-2'

// This component is used to display bar chart for different times.
const BarChart = ({data}) => {
    
    return ( 
        <div>
            <Bar
                data={{
                labels: ['0:00 - 5:99', '6:00 - 11:59', '12:00 - 17:59', '18:00 - 23:59'],
                datasets: [
                    {
                    label: '# of crashes in hour of day',
                    data: [0, 1, 3, 1],
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    },
                ],
                }}
                height={300}
                width={600}
                options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                    {
                        ticks: {
                        beginAtZero: true,
                        },
                    },
                    ],
                },
                legend: {
                    labels: {
                    fontSize: 25,
                    },
                },
                }}
             />
        </div>
    )
}
 
export default BarChart;