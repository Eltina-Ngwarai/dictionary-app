import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1>Everyday Dictionary </h1>
          <Dictionary defaultKeyword="rainbow" />
        </main>
      </div>
      <footer>
        Coded by{" "}
        <a href="https://github.com/elty-annie/dictionary-app">
          Eltina Ngwarai
        </a>
      </footer>
    </div>
  );
}

export default App;
