import { useCodeContext } from "../../hooks";

export const Output = () => {
  const { result } = useCodeContext();
  return (
    <div className="Output">
      <h1>{result.result}</h1>
    </div>
  );
};
