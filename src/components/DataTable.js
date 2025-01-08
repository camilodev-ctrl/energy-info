import React, {useEffect, useState} from 'react';
import data from '../scripts/renewable-data.json';  

const DataTable =() => {
    const[tableData, setTableData] = useState([]);

    useEffect(()=> {
        setTableData(data);
    }, [])

    return (
        <div>
            <h2>Datos mundiales sobre energías renovables (1965-2022)</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>País</th>
                        <th>Año</th>
                        <th>Energías renovables (% de energía primaria equivalente)</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Entity}</td>
                            <td>{row.Year}</td>
                            <td>{row['Renewables (% equivalent primary energy)']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;