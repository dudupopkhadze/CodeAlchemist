import { useCodeContext } from "../../hooks";

export const ControlPanel = () => {
  const { run } = useCodeContext();
  return (
    <div className="ControlPanel">
      <button className="run" onClick={run}>
        Run
      </button>
    </div>
  );
};
