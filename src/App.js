import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Chutkowski Daniel
        </p>
        <a
          className="App-link"
          href="https://pollub.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Politechnika Lubelska
        </a>
      </header>
    </div>
  );
}

export default App;
