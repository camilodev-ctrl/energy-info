// src/components/Dashboard.js
// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, LineChart, Line, AreaChart, Area } from 'recharts';
import { Container, Typography, Paper } from '@mui/material';
import data from '../scripts/renewable-data.json'; // Adjust path as necessary

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const processedData = data.map(item => ({
            year: item.Year,
            renewables: item['Renewables (% equivalent primary energy)']
        }));
        setChartData(processedData);
    }, []);

    const pieData = [
        { name: 'Renewable Energy', value: chartData.reduce((acc, curr) => acc + curr.renewables, 0) },
        { name: 'Non-Renewable Energy', value: 100 - chartData.reduce((acc, curr) => acc + curr.renewables, 0) }
    ];

    return (
        <Container maxWidth="lg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" gutterBottom align="center">
                Renewable Energy Dashboard
            </Typography>

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                <Typography variant="h5" align="center">Bar Chart of Renewable Energy Production</Typography>
                <BarChart width={600} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="renewables" fill="#82ca9d" />
                </BarChart>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                <Typography variant="h5" align="center">Pie Chart of Renewable Energy Distribution</Typography>
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                <Typography variant="h5" align="center">Line Chart of Renewable Energy Over Years</Typography>
                <LineChart width={600} height={300} data={chartData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="renewables" stroke="#ff7300" />
                </LineChart>
            </Paper>

            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', width: '100%', maxWidth: '600px' }}>
                <Typography variant="h5" align="center">Area Chart of Renewable Energy Over Years</Typography>
                <AreaChart width={600} height={300} data={chartData}>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="renewables" stroke="#ff7300" fill="#ff7300" />
                </AreaChart>
            </Paper>
        </Container>
    );
};

export default Dashboard;
