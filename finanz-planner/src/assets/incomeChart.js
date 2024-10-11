import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import DataList from './dataList';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomPieChart = ({dataInput}) => {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.chartContainer}>
          <PieChart width={400} height={400}>
            <Pie
              data={dataInput} // Daten für das Diagramm
              cx={200} // x-Koordinate des Mittelpunkts 
              cy={200} // y-Koordinate des Mittelpunkts
              labelLine={false} 
              outerRadius={150} // äußere Radius des Kreisdiagrammes
              fill="#8884d8" // Füllfarbe
              dataKey="value" // jedes Segment repräsentiert ein Wert
              >
              {dataInput.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip /> 
            <Legend />
          </PieChart>
        </div>

        <div style={styles.listContainer}>
          <DataList dataArray={dataInput}></DataList>
        </div>
      </div>
    </>
  );
};

// CSS-Style
const styles = { 
  container: {
    display: 'flex', // Flexbox für nebeneinander
    justifyContent: 'center', // Abstand zwischen den Elementen
    alignItems: 'center', // Vertikale Ausrichtung
    gap: '10px', // Abstand zwischen PieChart und DataList
    padding: '10px', // Abstand nach außen
  },
  chartContainer: {
    flex: '0 1 auto', // Flex-Grow, damit das Chart entsprechend Platz einnimmt
  },
  listContainer: {
    flex: '0 1 auto', // Flex-Grow, damit die Liste den restlichen Platz einnimmt
  }
}

export default CustomPieChart;
