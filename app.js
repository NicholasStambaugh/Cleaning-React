// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import BookingForm from './components/BookingForm';
import EstimateForm from './components/EstimateForm';

// Render the BookingForm and EstimateForm components
ReactDOM.render(
  <React.StrictMode>
    <BookingForm />
    <EstimateForm />
  </React.StrictMode>,
  document.getElementById('booking-form')
);
