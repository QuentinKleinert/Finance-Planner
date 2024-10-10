import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Unternehmen 1', value: 400 },
  { name: 'Unternehmen 2', value: 600 },
  { name: 'Unternehmen 3', value: 700 },
  { name: 'Unternehmen 4', value: 100 },
];  

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomPieChart = ({dataInput}) => {
  return (
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
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip /> 
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
