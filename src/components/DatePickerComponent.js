// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";


// const DatePickerComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   return (
//     <div className="date-picker-container">
//       <label className="date-label">Select Date:</label>
//       <DatePicker
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         dateFormat="dd MMM yyyy"
//         className="custom-datepicker"
//         popperPlacement="bottom"
//         placeholderText="Choose a date"
//       />
//     </div>
//   );
// };

// export default DatePickerComponent;
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="date-picker-container">
      <label className="date-label">Select Date Range:</label>
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        dateFormat="dd MMM yyyy"
        className="custom-datepicker"
        popperPlacement="bottom"
        placeholderText="Choose a date range"
        isClearable
      />
    </div>
  );
};

export default DatePickerComponent;
