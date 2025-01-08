// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SolarEnergyInfo from './components/SolarEnergyInfo';
import DataTable from './components/DataTable';
import EnergyForm from './components/EnergyForm';

// Lazy load the Dashboard component
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/data-table">Data Table</Link></li>
                        <li><Link to="/energy-form">Energy Form</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>

                {/* Suspense fallback for lazy loading */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<SolarEnergyInfo />} />
                        <Route path="/data-table" element={<DataTable />} />
                        <Route path="/energy-form" element={<EnergyForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App;
