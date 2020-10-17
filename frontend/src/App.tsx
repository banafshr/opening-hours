import React from 'react';
import OpeningHours from 'containers/OpeningHours';

const App: React.FC<Record<string, unknown>> = () => {
  return (
    <div className="App">
      <OpeningHours />
    </div>
  );
}

export default App;
