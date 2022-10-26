import './App.css';
import { toNumberArray } from './functions/functions'

function App() {

  return (
    <div className="App">
      <div>
        <p>{toNumberArray(["1.1","2.2","3.3"])}</p>
        <p>{toNumberArray(["1","2","3"])}</p>
      </div>
    </div>
  );
}

export default App;
