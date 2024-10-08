import React from 'react';
import './App.css';
import DateTime from './components/dateTime';
import IncomePage from './components/incomePage';

export default function MyApp() {
  return (
    <div>
      <h1>Welcome User</h1>
      <DateTime></DateTime>
      <IncomePage income={5.00}></IncomePage>
    </div>
  );
}
