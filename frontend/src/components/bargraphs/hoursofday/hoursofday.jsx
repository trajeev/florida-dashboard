import React, { useEffect, useState} from 'react';
import './hoursofday.css'
import axios from 'axios'
import BarChart from './chart/chart'

// This component is used to display Crashes in 24 hours
const HoursOfDay = () => {
    // useState hook is used to store state of a component 
    const [data, setData] = useState([])
    // useEffect hook is used as a lifecycle method, this is where ajax calls and map initialization are made.
    useEffect(() => {
        // ajax call to backend
        axios.get(`http://${window.location.hostname}:5000/api/get`)
            .then(response => setData(response.data))
    }, [])

    return (
    <div className = 'hoursofday'>
        <BarChart data = {data} />
    </div>)
}
 
export default HoursOfDay;