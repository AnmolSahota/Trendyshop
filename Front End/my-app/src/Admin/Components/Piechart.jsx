import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend } from 'recharts';

 
  const PieChartComponent = () => {
    const {AdminUserData,AdminAlldataReducer}= useSelector((state)=>{return state})
    const{userdata}=AdminUserData
    const{ayurveda,supliment,teststrip,vitamin}=AdminAlldataReducer
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
    
    const data = [
        { name: 'Total Users', value:userdata.length},
        { name: 'Vitamin Products', value: vitamin.length},
        { name: 'Ayurvedic Products', value: ayurveda.length },
        { name: 'Supliments', value: supliment.length },
        { name: 'Test Strips', value: teststrip.length },
      ];

    return (
      <PieChart style={{display:"block"}} width={356} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    );
  };
  
  export default PieChartComponent;