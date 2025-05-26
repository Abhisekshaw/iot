// import React from 'react';
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
// } from 'recharts';


// const data = [
//   { time: '10 AM', power: 20 },
//   { time: '11 AM', power: 30 },
//   { time: '12 PM', power: 60 },
//   { time: '1 PM', power: 40 },
//   { time: '2 PM', power: 50 },
//   { time: '3 PM', power: 70 },
//   { time: '4 PM', power: 65 },
//   { time: '5 PM', power: 60 },
//   { time: '6 PM', power: 75 },
//   { time: '7 PM', power: 50 },
//   { time: '8 PM', power: 40 },
//   { time: '9 PM', power: 30 },
//   { time: '10 PM', power: 20 },
// ];

// const PowerChart = () => {
//   return (
//     <div className="chart-container">
//       <h3 className="chart-title">Power Consumed</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//           <XAxis dataKey="time" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="power"
//             stroke="#8a2be2"
//             strokeWidth={3}
//             dot={{ fill: "#8a2be2", stroke: "#fff", strokeWidth: 2, r: 6 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default PowerChart;
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const data = [
  { time: '10 AM', power: 20 },
  { time: '11 AM', power: 30 },
  { time: '12 PM', power: 60 },
  { time: '1 PM', power: 40 },
  { time: '2 PM', power: 50 },
  { time: '3 PM', power: 70 },
  { time: '4 PM', power: 65 },
  { time: '5 PM', power: 60 },
  { time: '6 PM', power: 75 },
  { time: '7 PM', power: 50 },
  { time: '8 PM', power: 40 },
  { time: '9 PM', power: 30 },
  { time: '10 PM', power: 20 },
];

const PowerChart = () => {
  return (
    <div className="chart-container">
      <h3 className="chart-title">Power Consumed</h3>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="power"
              stroke="#8a2be2"
              strokeWidth={3}
              dot={{ fill: "#8a2be2", stroke: "#fff", strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PowerChart;
