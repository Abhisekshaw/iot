
import React from "react";
import { format, parseISO } from "date-fns";

const rawData = [
  {
    timestamp: "2025-05-26T09:45:00",
    Pb: 10, Tb: 15, VmT: 18, VbT: 20, Qb: 22, BatR: 85,
  },
  {
    timestamp: "2025-05-26T10:05:00",
    Pb: 11, Tb: 16, VmT: 19, VbT: 21, Qb: 23, BatR: 86,
  },
  {
    timestamp: "2025-05-26T10:30:00",
    Pb: 12, Tb: 17, VmT: 20, VbT: 22, Qb: 24, BatR: 87,
  },
  {
    timestamp: "2025-05-26T11:55:00",
    Pb: 13, Tb: 18, VmT: 21, VbT: 23, Qb: 25, BatR: 88,
  },
];

// Convert and group by hour
const getHourlyData = (data) => {
  const hourMap = new Map();

  data.forEach((entry) => {
    const date = new Date(entry.timestamp);
    const hour = date.getHours();
    const label = `${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? "AM" : "PM"} – ${(hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12} ${hour + 1 < 12 || hour + 1 === 24 ? "AM" : "PM"}`;

    // Store only the first data per hour
    if (!hourMap.has(label)) {
      hourMap.set(label, { ...entry, time: label });
    }
  });

  return Array.from(hourMap.values()).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
};

const filteredData = getHourlyData(rawData);

const DataTable = ({data}) => {
  console.log({data}, "DataTable Component Data");
  
  // -----------------------
  return (
    <div className="table-container">
      <h3 className="table-title">Sensor Data Table</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Pb</th>
            <th>Tb</th>
            <th>VmT</th>
            <th>VbT</th>
            <th>Qb</th>
            <th>BatR</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((row, i) => (
            <tr key={i}>
              <td>{row.d_details.timestamp}</td>
              <td>{row.flow_data.Pb}</td>
              <td>{row.flow_data.Tb}</td>
              <td>{row.flow_data.VmT}</td>
              <td>{row.flow_data.VbT}</td>
              <td>{row.flow_data.Qb}</td>
              <td>{row.flow_data.Batt_R}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
