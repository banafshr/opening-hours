import React from 'react';
import OpeningHours from 'containers/OpeningHours';
import './App.css';

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="App">
      <OpeningHours />
    </div>
  );
}

export default App;
