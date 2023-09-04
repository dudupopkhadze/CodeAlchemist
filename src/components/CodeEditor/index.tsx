import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";

const startingValue = `const bg = () => {
  console.log(this.name + '  hello');
};

console.log(bg);
`;

export const CodeEditor = () => {
  const [value, setValue] = React.useState(startingValue);
  const onChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const run = () => {
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: value }),
    })
      .then((r) => r.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="CodeEditor">
      <button onClick={run}>Run</button>
      <CodeMirror
        value={value}
        theme={sublime}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        basicSetup={{ highlightActiveLine: false }}
      />
    </div>
  );
};
