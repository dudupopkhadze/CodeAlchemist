import { CodeEditor, ControlPanel, Header, Output } from "./components";
import { CodeContextProvider } from "./contexts";

function App() {
  return (
    <div className="app">
      <Header />
      <CodeContextProvider>
        <>
          <ControlPanel />
          <div className="main">
            <CodeEditor />
            <Output />
          </div>
        </>
      </CodeContextProvider>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
