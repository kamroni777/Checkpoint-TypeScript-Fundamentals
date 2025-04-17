import React from 'react';
import { Car } from './vehicle'; // Ensure Car is properly exported from './vehicle'
import CarInfo from './components/CarInfo'; // Ensure CarInfo is implemented correctly

function App() {
  // Create a Car instance with valid arguments
  const myCar = new Car("Toyota", "Camry", 2023);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Vehicle Demo</h1>
      {/* Pass the car instance to CarInfo */}
      <CarInfo car={myCar} />
    </div>
  );
}

export default App;