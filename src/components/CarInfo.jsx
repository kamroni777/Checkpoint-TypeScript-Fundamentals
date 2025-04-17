import React from 'react';

const CarInfo = ({ car }) => {
  const handleStart = () => {
    car.start();
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      margin: '20px',
      maxWidth: '300px'
    }}>
      <h2>Car Details</h2>
      <p><strong>Make:</strong> {car.make}</p>
      <p><strong>Model:</strong> {car.model}</p>
      <p><strong>Year:</strong> {car.year}</p>
      <button 
        onClick={handleStart}
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Start Engine
      </button>
    </div>
  );
};

export default CarInfo;