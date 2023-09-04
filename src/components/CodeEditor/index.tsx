import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { useCodeContext } from "../../hooks";
import { ControlPanel } from "../ControlPanel";

export const CodeEditor = () => {
  const { code, setCode } = useCodeContext();

  return (
    <div className="CodeEditor">
      <CodeMirror
        value={code}
        theme={sublime}
        extensions={[javascript({ jsx: true })]}
        onChange={(v) => setCode(v.toString())}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
      <ControlPanel />
    </div>
  );
};
