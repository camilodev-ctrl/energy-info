import React from 'react';
import SolarEnergyInfo from './components/SolarEnergyInfo.js';
import DataTable from './components/DataTable.js';
import EnergyForm from './components/EnergyForm.js';

function App() {
  return (
    <div className="App">
      <SolarEnergyInfo />
      <DataTable />
      <EnergyForm />
    </div>
  );
}

export default App;