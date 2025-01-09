import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import data from '../scripts/renewable-data.json'; // Adjust the path as necessary

const DataTable = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(data);
    }, []);

    return (
        <Container maxWidth="lg" style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Datos mundiales sobre energías renovables (1965-2022)
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>País</TableCell>
                            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Año</TableCell>
                            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>
                                Energías renovables (% de energía primaria equivalente)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, index) => (
                            <TableRow key={index} hover style={{ cursor: 'pointer' }}>
                                <TableCell>{row.Entity}</TableCell>
                                <TableCell>{row.Year}</TableCell>
                                <TableCell>{row['Renewables (% equivalent primary energy)']}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default DataTable;

