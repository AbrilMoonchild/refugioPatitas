import '../styles/App.css';
import { Headlist } from './Headlist';
import { Bodylist } from './Bodylist';

function App(props) {
  return (
    <div className="App">
      <>
        <Headlist/>
        <Bodylist/>
      </>
    </div>
  );
}

export default App;