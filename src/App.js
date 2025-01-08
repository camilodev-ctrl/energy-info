import React from 'react';
import SolarEnergyInfo from './components/SolarEnergyInfo.js';
import DataTable from './components/DataTable.js';
import EnergyForm from './components/EnergyForm.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <SolarEnergyInfo />
      <DataTable />
      <EnergyForm />
      <Dashboard />
    </div>
  );
}

export default App;