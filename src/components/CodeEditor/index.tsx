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
  const onChange = React.useCallback((value: string) => {
    console.log("value:", value);
  }, []);

  return (
    <div className="CodeEditor">
      <CodeMirror
        value={startingValue}
        theme={sublime}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        basicSetup={{ highlightActiveLine: false }}
      />
    </div>
  );
};
