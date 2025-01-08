// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, LineChart, Line, AreaChart, Area } from 'recharts';
import data from '../scripts/renewable-data.json'; // Adjust path as necessary

const Dashboard = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Process data to get required format for charts
        const processedData = data.map(item => ({
            year: item.Year,
            renewables: item['Renewables (% equivalent primary energy)']
        }));
        setChartData(processedData);
    }, []);

    // Example data for pie chart (you might want to summarize your data differently)
    const pieData = [
        { name: 'Renewable Energy', value: chartData.reduce((acc, curr) => acc + curr.renewables, 0) },
        { name: 'Non-Renewable Energy', value: 100 - chartData.reduce((acc, curr) => acc + curr.renewables, 0) }
    ];

    return (
        <div>
            <h2>Renewable Energy Dashboard</h2>

            {/* Bar Chart */}
            <h3>Bar Chart of Renewable Energy Production</h3>
            <BarChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="renewables" fill="#82ca9d" />
            </BarChart>

            {/* Improved Pie Chart */}
            <h3>Pie Chart of Renewable Energy Distribution</h3>
            <PieChart width={400} height={400}>
                <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                    labelLine={false}
                >
                    {pieData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={index % 2 === 0 ? '#82ca9d' : '#ff7300'} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

            {/* Line Chart */}
            <h3>Line Chart of Renewable Energy Over Years</h3>
            <LineChart width={600} height={300} data={chartData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="renewables" stroke="#ff7300" />
            </LineChart>

            {/* Area Chart */}
            <h3>Area Chart of Renewable Energy Over Years</h3>
            <AreaChart width={600} height={300} data={chartData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="renewables" stroke="#ff7300" fill="#ff7300" />
            </AreaChart>
        </div>
    );
};

export default Dashboard;
