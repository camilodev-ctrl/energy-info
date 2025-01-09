
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const EnergyForm = () => {
    const [consumption, setConsumption] = useState('');
    const [result, setResult] = useState(null);

    const calculateRenewablePercentage = (consumption) => {
        const totalRenewableCapacity = 100; // Replace with actual calculation logic
        const renewableShare = (totalRenewableCapacity / consumption) * 100;
        return renewableShare.toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const renewablePercentage = calculateRenewablePercentage(consumption);
        setResult(renewablePercentage);
    };

    return (
        <Container maxWidth="sm" style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Estimación del porcentaje de energía renovable
            </Typography>
            <Paper elevation={3} style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Consumo total de electricidad (kWh)"
                        type="número"
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                        fullWidth
                        required
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Calcular
                    </Button>
                </form>

                {result && (
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                     Porcentaje estimado de energía renovable: {result}%
                    </Typography>
                )}
            </Paper>
        </Container>
    );
};

export default EnergyForm;
