import React from 'react'
import {
    Line, LineChart, CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'
const Charts = () => {
    const data = [
        { name: 'Jan', sales: 400, expenses: 240 },
        { name: 'Feb', sales: 300, expenses: 139 },
        { name: 'Mar', sales: 200, expenses: 980 },
        { name: 'Apr', sales: 278, expenses: 390 },
        { name: 'May', sales: 189, expenses: 480 },
        { name: 'Jun', sales: 239, expenses: 380 },
        { name: 'Jul', sales: 349, expenses: 430 },
    ];
    return (
        <div >
            <LineChart width={600} height={300} data={data}>
                {/* X and Y Axes */}
                <XAxis dataKey="name" />
                <YAxis />

                {/* Grid */}
                <CartesianGrid strokeDasharray="3 3" />

                {/* Tooltip */}
                <Tooltip />

                {/* Legend */}
                <Legend />

                {/* Line for Sales */}
                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />

                {/* Line for Expenses */}
                <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="#82ca9d"
                />
            </LineChart>
        </div>
    )
}

export default Charts