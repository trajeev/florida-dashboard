import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import './map.styles.css'
import axios from 'axios'

// Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoicmFqZWV2dGlra2EiLCJhIjoiY2s3cnJhZzFvMDJmMDNtbDhqbWUzbHY0aSJ9.VPTiK_ymlaiP186RrWzzNA';
 
// Component used to display map
export default function MapComponent() {
    // UseRef hook is used to refer div tag in the return statement, this is where map will be displayed.
    const mapContainerRef = useRef(null);

    // useEffect hook is used as a lifecycle method, this is where ajax calls and map initialization are made.
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-82.3248, 29.6516],
            zoom: 12.5,
        });
        // ajax call to backend
        console.log(window.location.hostname);
        axios.get(`http://${window.location.hostname}:5000/api/get`)
            .then(response => {
                response.data.forEach( data => {
                    new mapboxgl.Marker()
                        .setLngLat([data.Longitude, data.Latitude])
                        .setPopup(new mapboxgl.Popup()
                        .setHTML(`<h1>${data.Crash_severity}</h1>`))
                        .addTo(map)
                })
            })
        
            //this is added at the bottom-right of the map to give extra control. 
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  
        // this method is used to map, at the end of the lifecycle of the component.
        return () => map.remove();
    }, []); 
  
    return <div className="map-container" ref={mapContainerRef} />;
}