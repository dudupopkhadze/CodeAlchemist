import { CodeEditor, Header, Output } from "./components";
import { CodeContextProvider } from "./contexts";

function App() {
  return (
    <div className="app">
      <Header />
      <CodeContextProvider>
        <div className="main">
          <CodeEditor />
          <Output />
        </div>
      </CodeContextProvider>
    </div>
  );
}

export default App;
