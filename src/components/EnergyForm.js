// src/components/EnergyForm.js
import React, { useState } from 'react';

const EnergyForm = () => {
    const [consumption, setConsumption] = useState('');
    const [result, setResult] = useState(null);

    // Define the calculateRenewablePercentage function
    const calculateRenewablePercentage = (consumption) => {
        // Implement your calculation logic based on your dataset
        // For example, using a placeholder value for total renewable capacity
        const totalRenewableCapacity = 100; // Replace this with actual calculation logic from your dataset
        const renewableShare = (totalRenewableCapacity / consumption) * 100;
        return renewableShare.toFixed(2); // Return the result rounded to two decimal places
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the calculateRenewablePercentage function when form is submitted
        const renewablePercentage = calculateRenewablePercentage(consumption);
        setResult(renewablePercentage);
    };

    return (
        <div>
            <h2>Estimación de energía renovable</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Consumo de electricidad (en kWh):
                    <input 
                        type="number" 
                        value={consumption} 
                        onChange={(e) => setConsumption(e.target.value)} 
                        required 
                    />
                </label>
                <button type="submit" className="button">Calcular</button>
            </form>

            {result && (
                <div>
                    <h3>Porcentaje de energía renovable estimado: {result}%</h3>
                </div>
            )}
        </div>
    );
};

export default EnergyForm;
