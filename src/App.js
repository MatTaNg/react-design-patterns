import './App.css';
import ConsumeStateReducer from './stateReducer.js';
import ConsumeCompoundComponent from './compoundComponent.js';

function App() {
  return (
    <div className="grid">
      <div className="gridCell">
        <div className="container">
          <p>State Reducer Pattern:</p> <ConsumeStateReducer />
        </div>
      </div>
      <div className="gridCell">
        <div className="container">
          <p>Compound Components:</p> <ConsumeCompoundComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
