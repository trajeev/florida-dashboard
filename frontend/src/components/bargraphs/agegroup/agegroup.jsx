import React, { useEffect, useState} from 'react';
import './agegroup.css'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'

const AgeGroup = () => {
    // useState hook is used to store state of a component 
    const [data, setData] = useState([])

    // useEffect hook is used as a lifecycle method, this is where ajax calls and map initialization are made.
    useEffect(() => {
        axios.get(`http://${window.location.hostname}:5000/api/driver`)
            .then(response => setData(response.data))
    },[])

    // used to segregate ages to 4 categories.
    let array = []
    data.forEach(d => {
        if (d.Age < 18) array[0] = array[0] + 1 || 1
        else if (18 <= d.Age && d.Age < 30) array[1] = array[1] + 1 || 1
        if (30 <= d.Age && d.Age < 50) array[2] = array[2] + 1 || 1
        if (50 <= d.Age) array[3] = array[3] + 1 || 1
    })

    return (
        <div className = 'agegroup'>
            <Bar
                data={{
                labels: ['Under 18', '18 - 30', '30 - 50', '50 above'],
                datasets: [
                    {
                    label: 'count for age groups',
                    data: array,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
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
        </div>
    )
}
 
export default AgeGroup;