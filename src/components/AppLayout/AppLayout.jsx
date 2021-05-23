import React from 'react';
import './styles.css';

export default function AppLayout({ children }) {

  return (
    <div className="app">
      {children}
    </div>
  );
}

