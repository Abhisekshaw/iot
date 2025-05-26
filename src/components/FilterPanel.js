/**
 * The Filters component in React renders three dropdown select elements for time, device, and
 * parameter with corresponding options and onChange event handler.
 * @returns The `Filters` component is being returned. It is a functional component in React that
 * displays three select dropdowns for filtering time, device, and parameter. The component takes two
 * props: `filters` which contains the current filter values, and `onChange` which is a function to
 * handle changes in the filters.
 */
import React from 'react';

const Filters = ({ filters, onChange }) => {
  return (
    <div className="filters">
      <select name="time" value={filters.time} onChange={onChange}>
        <option>--Select Time--</option>
        <option>10 AM - 11 AM</option>
        <option>11 AM - 12 PM</option>
      </select>

      <select name="device" value={filters.device} onChange={onChange}>
        <option>--Select device--</option>
        <option>Device A</option>
        <option>Device B</option>
      </select>

      <select name="parameter" value={filters.parameter} onChange={onChange}>
        <option>--Select Parameter--</option>
        <option>Pb</option>
        <option>Tb</option>
         <option>VmT</option>
          <option>VbT</option>
           <option>Qb</option>
            <option>BatR</option>
      </select>
    </div>
  );
};

export default Filters;
