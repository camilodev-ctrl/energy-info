import React from 'react';
import '../App.css';

const SolarEnergyInfo = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Información sobre la Energía Solar</h1>
      </header>
      <section className="content">
        <h2>¿Qué es la Energía Solar?</h2>
        <p>
          La energía solar es la energía que se obtiene del sol a través de tecnologías como los paneles solares fotovoltaicos y los colectores solares térmicos.
        </p>
        <h2>Beneficios de la Energía Solar</h2>
        <ul>
          <li><strong>Renovable:</strong> Es inagotable y está disponible en casi todas partes.</li>
          <li><strong>Reducir Costos:</strong> Puede disminuir las facturas de electricidad a largo plazo.</li>
          <li><strong>Menor Huella de Carbono:</strong> Ayuda a reducir las emisiones de gases de efecto invernadero.</li>
        </ul>
        <h2>Datos Estadísticos</h2>
        <p>A continuación, se presentan algunos datos sobre el uso de energías renovables en África:</p>
        <table className="data-table">
          <thead>
            <tr>
              <th>Año</th>
              <th>% Energías Renovables</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2020</td><td>9.62%</td></tr>
            <tr><td>2021</td><td>9.55%</td></tr>
          </tbody>
        </table>
      </section>
      <footer className="footer">
        <p>&copy; 2025 Información sobre Energías Renovables</p>
      </footer>
    </div>
  );
}

export default SolarEnergyInfo;