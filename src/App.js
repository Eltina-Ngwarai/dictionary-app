import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className='container'>
        <main>
          <h1>Dictionary </h1>
          <Dictionary/>
        </main>
      </div>
      <footer>
          Coded by <a href='https://github.com/elty-annie/dictionary-app'>Eltina Ngwarai</a>
        </footer>
    </div>
  );
}

export default App;
