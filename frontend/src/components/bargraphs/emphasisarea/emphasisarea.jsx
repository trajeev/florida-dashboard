import React, {useEffect, useState} from 'react';
import './emphasisarea.css'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'

// THis component is used to display gender distribution for all the crashes.
const DistributionCard = () => {
    // useState hook is used to store state of a component 
    const [data, setData] = useState([])
    let array = []

    // useEffect hook is used as a lifecycle method, this is where ajax calls and map initialization are made.
    useEffect(() => {
        // ajax call to backend
        axios.get(`http://${window.location.hostname}:5000/api/driver`)
            .then(response => setData(response.data))
    },[])

    // used to segregate gender to initialize array variable.
    data.forEach(d => {
        if (d.Sex === 'M') array[0] = array[0] + 1 || 1
        else array[1] = array[1] + 1 || 1
    })
    return (
    <div className = 'emphasisarea'>
       <Bar
                data={{
                labels: ['M', 'F'],
                datasets: [
                    {
                    label: 'Gender distribution',
                    data: array,
                    backgroundColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    },
                ],
                }}
                height={200}
                width={370}

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
    </div>)
}
 
export default DistributionCard;