import './App.css';
import React from 'react'
import MapComponent from './components/map/map.component'
import HoursOfDay from './components/bargraphs/hoursofday/hoursofday'
import Card from './components/card/card'
import AgeGroup from './components/bargraphs/agegroup/agegroup'
import DistributionCard  from './components/bargraphs/emphasisarea/emphasisarea'

// The main component, this component is what shown in the opening screen.
function App() {
  return (
    <div>
    <h1 className = "dashboard"> Gainesville Crash Dashboard</h1>
    <div className="App">
      <div className = "App-first">
        <MapComponent />
        <HoursOfDay />
      </div>
      <div className = "App-second">  
        <DistributionCard />
        <AgeGroup />
        <Card />
      </div>
    </div>
    </div>
  );
}

export default App;
