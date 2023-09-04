import { useCodeContext } from "../../hooks";

export const ControlPanel = () => {
  const { run } = useCodeContext();

  return (
    <button className="run" onClick={run}>
      Run
    </button>
  );
};
