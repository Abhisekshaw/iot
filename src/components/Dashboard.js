// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Filters from './FilterPanel';
// import PowerChart from './PowerChart';
// import DataTable from './DataTable';
// import DatePickerComponent from './DatePickerComponent';


// const mockChartData = [
//   { time: '10 AM', value: 20 },
//   { time: '11 AM', value: 60 },
//   { time: '12 PM', value: 45 },
//   { time: '1 PM', value: 10 },
// ];

// const mockTableData = [
//   { time: '10 AM–11 AM', Pb: 12, Tb: 15, VmT: 18, VbT: 20, Qb: 25, BatR: 88 }
// ];

// const Dashboard = () => {
//   const [filters, setFilters] = useState({ time: '', device: '', parameter: '' });

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//     // TODO: Update chart & table based on filters
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <main>
//         <div className="top-bar">
//           <input type="text" placeholder="Search using keywords or name..." />
//           <div className="user">👩 Jasica Williamson</div>
//         </div>
//         <DatePickerComponent />
//         <Filters filters={filters} onChange={handleFilterChange} />
//         {/* <PowerChart data={mockChartData} /> */}
//         {filters.parameter && filters.parameter !== '--Select Parameter--' && (
//   <PowerChart data={mockChartData} />
// )}
//         {/* <DataTable data={mockTableData} /> */}
//         {filters.parameter && filters.parameter !== '--Select Parameter--' && (
//   <DataTable data={mockTableData} />
// )}

//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Filters from './FilterPanel';
// import PowerChart from './PowerChart';
// import DataTable from './DataTable';
// import DatePickerComponent from './DatePickerComponent';

// const allChartData = [
//   { time: '10 AM', device: 'Device A', value: 20 },
//   { time: '11 AM', device: 'Device A', value: 60 },
//   { time: '10 AM', device: 'Device B', value: 45 },
//   { time: '11 AM', device: 'Device B', value: 10 },
// ];

// const allTableData = [
//   { time: '10 AM - 11 AM', device: 'Device A', Pb: 12, Tb: 15, VmT: 18, VbT: 20, Qb: 25, BatR: 88 },
//   { time: '11 AM - 12 PM', device: 'Device A', Pb: 13, Tb: 16, VmT: 19, VbT: 21, Qb: 26, BatR: 89 },
//   { time: '10 AM - 11 AM', device: 'Device B', Pb: 14, Tb: 17, VmT: 20, VbT: 22, Qb: 27, BatR: 90 },
//   { time: '11 AM - 12 PM', device: 'Device B', Pb: 15, Tb: 18, VmT: 21, VbT: 23, Qb: 28, BatR: 91 },
// ];

// const Dashboard = () => {
//   const [filters, setFilters] = useState({ time: '', device: '', parameter: '' });

//   const handleFilterChange = (e) => {
//     setFilters({ ...filters, [e.target.name]: e.target.value });
//   };

//   const filteredChartData = allChartData.filter((entry) => {
//     return (
//       (!filters.time || entry.time === filters.time.split(' - ')[0]) &&
//       (!filters.device || entry.device === filters.device)
//     );
//   });

//   const filteredTableData = allTableData.filter((entry) => {
//     return (
//       (!filters.time || entry.time === filters.time) &&
//       (!filters.device || entry.device === filters.device)
//     );
//   });

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <main>
//         {/* <div className="top-bar">
//           <input type="text" placeholder="Search using keywords or name..." />
//           <div className="user">👩 Jasica Williamson</div>
         
//         </div> */}
//         <div className="top-bar">
          
//             <input type="text" placeholder="Search using keywords or name..." />
//             <div className="user">
//             <img 
//                  src="https://i.pravatar.cc/40"  // ← Replace with your image URL
//                   alt="User"
//                   style={{ 
//                     width: '30px',
//                     height: '30px',
//                     borderRadius: '50%',
//                     marginRight: '8px',
//                     objectFit: 'cover' 
//                 }}
//             />
//               Jasica Williamson
//         </div>
//         </div>

//  <div style={{ position: 'relative', width: '100%' }}>
//   <img
//     src="https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc="
//     alt="Background"
//     style={{
//       height: '150px',
//       width: '100%',
//       objectFit: 'cover',
//       borderRadius: '15px'
//     }}
//   />
//   <div
//     style={{
//       position: 'absolute',
//       top: '20px',
//       left: '20px',
//       color: 'white',
//       fontSize: '16px',
//       fontWeight: 'bold',
//       color:'black',
//       // textShadow: '1px 1px 3px black',
//       lineHeight: '1.5'
//     }}
//   >
//     Hi, Jasica! Good Evening...<br />
//     <span style={{ fontWeight: 'normal' }}>Welcome Home, it's snowing outside stay safe</span>
//   </div>
//   <div
//     style={{
//       position: 'absolute',
//       top: '20px',
//       right: '20px',
//       color: 'white',
//       fontSize: '14px',
//       textAlign: 'right',
//       color:'black',
//       // textShadow: '1px 1px 3px black'
//     }}
//   >
//     12 May 2022<br />
//     -15°C &nbsp; | &nbsp; 10:23 PM
//   </div>
// </div>
      
//         <DatePickerComponent />

//         <Filters filters={filters} onChange={handleFilterChange} />

//         {filters.parameter && filters.parameter !== '--Select Parameter--' && (
//           <>
//             <PowerChart data={filteredChartData} parameter={filters.parameter} />
//             <DataTable data={filteredTableData} parameter={filters.parameter} />
//           </>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Filters from './FilterPanel';
import PowerChart from './PowerChart';
import DataTable from './DataTable';
import axios from 'axios';
import DatePickerComponent from './DatePickerComponent';

const Dashboard = () => {
  const [filters, setFilters] = useState({ time: '', device: '', parameter: '' });
  const [allChartData, setAllChartData] = useState([]);
  const [allTableData, setAllTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // // Call API when component mounts
    // axios.get('http://65.0.176.7:5000/api/gateway-data?start=1747906766&end=1847906966')
    //   .then(response => {
    //     setAllChartData(response.data);
    //     setLoading(false);
    //     console.log("+=========");
        
    //   })
    //   .catch(error => {
        
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   });

    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://65.0.176.7:5000/api/gateway-data?start=1747906766&end=1847906966');
        setAllChartData(response.data);
      } catch (err) {
        console.log({err})
        // setError('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  // useEffect(() => {
  //   fetch("http://65.0.176.7:5000/api/gateway-data?start=1747906766&end=1847906966")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("API call failed");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setAllChartData(data.chartData || []);
  //       setAllTableData(data.tableData || []);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredChartData = allChartData.filter((entry) => {
    return (
      (!filters.time || entry.time === filters.time.split(' - ')[0]) &&
      (!filters.device || entry.device === filters.device)
    );
  });

  const filteredTableData = allTableData.filter((entry) => {
    return (
      (!filters.time || entry.time === filters.time) &&
      (!filters.device || entry.device === filters.device)
    );
  });

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
      hello world
        <div className="top-bar">
          <input type="text" placeholder="Search using keywords or name..." />
          <div className="user">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                marginRight: '8px',
                objectFit: 'cover'
              }}
            />
            Jasica Williamson
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%' }}>
          <img
            src="https://media.istockphoto.com/id/476098860/vector/wonderful-morning-in-the-blue-mountains.jpg?s=612x612&w=0&k=20&c=0nuLvsWKXPReu01RvbXTKIwlUYxOQvoXD_qVBrsapxc="
            alt="Background"
            style={{
              height: '150px',
              width: '100%',
              objectFit: 'cover',
              borderRadius: '15px'
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: 'black',
              fontSize: '16px',
              fontWeight: 'bold',
              lineHeight: '1.5'
            }}
          >
            Hi, Jasica! Good Evening...<br />
            <span style={{ fontWeight: 'normal' }}>Welcome Home, it's snowing outside stay safe</span>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: 'black',
              fontSize: '14px',
              textAlign: 'right'
            }}
          >
            12 May 2022<br />
            -15°C &nbsp; | &nbsp; 10:23 PM
          </div>
        </div>

        <DatePickerComponent />

        <Filters filters={filters} onChange={handleFilterChange} />

        {loading && <p>Loading data...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {!loading && !error && filters.parameter && filters.parameter !== '--Select Parameter--' && (
          <>
            <PowerChart data={filteredChartData} parameter={filters.parameter} />
            <DataTable data={filteredTableData} parameter={filters.parameter} />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
