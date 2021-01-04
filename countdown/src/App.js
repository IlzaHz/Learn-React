import './App.css';

import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <Countdown
        timeTillDate="05 26 2020, 6:00 am"
        timeFormat="MM DD YYYY, h:mm a" 
      />
    </div>
  );
}

export default App;
