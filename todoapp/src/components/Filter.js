// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter" style={{marginTop:"15px", }}>
      <button style={{marginRight:"10px", backgroundColor:"#a44ae8"}} onClick={() => setFilter('all')}>All</button>
      <button style={{marginLeft:"50px", backgroundColor:"#21de7c"}} onClick={() => setFilter('completed')}>Completed</button>
      <button style={{marginLeft:"50px", backgroundColor:"#e8f005"}} onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default Filter;
