import React, {useState, useEffect} from 'react';
import './card.css'
import axios from 'axios'

// this component is used to display the count of severity of the crashes
const Card = () => {
    // useState hook is used to store state of a component 
    const [data, setData] = useState([])
    const [fatality, setFataility] = useState([])
    const [injury, setInjury] = useState([])
    
    // useEffect hook is used as a lifecycle method, this is where ajax calls and map initialization are made.
    useEffect(() => {
        // ajax call to backend
        axios.get(`http://${window.location.hostname}:5000/api/driver`)
            .then(response => {
                setData(response.data)
                setFataility(data.filter(d => {
                    return d.Injury_Severity === 'Fatal'
                }))
                setInjury(data.filter(d => {
                    return d.Injury_Severity === 'Injury'
                }))
            })
    },[data])
    return (
        <div className = 'card'>
            <p style = {
                {border: '1px solid rgba(255, 206, 86, 1)',
                borderRadius: '40px', 
                width: '200px',
                backgroundColor: 'rgba(255, 206, 86, 1)', 
                margin: 'auto',
                marginTop: '20px'}}>
                {data.length}
            </p>
            <span>Total Car Crashes </span>
            <p style = {
                {border: '1px solid rgba(255, 206, 86, 1)',
                borderRadius: '40px', 
                width: '200px',
                backgroundColor: 'rgba(255, 206, 86, 1)', 
                margin: 'auto',
                marginTop: '20px'}}>
                    {fatality.length}
            </p>
            <span>Fatality</span>
            <p style = {
                {border: '1px solid rgba(255, 206, 86, 1)',
                borderRadius: '40px', 
                width: '200px',
                backgroundColor: 'rgba(255, 206, 86, 1)', 
                margin: 'auto',
                marginTop: '20px'}}>
                    {injury.length}
            </p>
            <span>Injury</span>
        </div>
    )
}
 
export default Card;