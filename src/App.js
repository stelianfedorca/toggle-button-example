import { useState } from 'react';

import { Switch } from './components';

import './App.css';

function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  function handleToggle() {
    setIsEnabled(!isEnabled);
  }

  return (
    <div className="App">
      <div className="switch-container">
        <Switch
          isToggled={isEnabled}
          onToggle={handleToggle}
          isEnabled={isEnabled}
        />
      </div>
    </div>
  );
}

export default App;
