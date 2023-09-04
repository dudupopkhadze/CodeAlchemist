import { CodeEditor, Footer, Header, Output } from "./components";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <CodeEditor />
        <Output />
      </div>
      <Footer />
    </div>
  );
}

export default App;
