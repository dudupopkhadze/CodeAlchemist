import { useMemo } from "react";
import { useCodeContext } from "../../hooks";

export const Output = () => {
  const { result } = useCodeContext();

  const data = useMemo(() => {
    if (!result.result) return [];
    return result.result.split("\n").filter((d) => d);
  }, [result.result]);

  return (
    <div className="Output">
      {data.map((d, i) => (
        <div key={i}>
          <span className="lineNumber">{`[${i + 1}]`}</span>
          <span className="line">{d}</span>
        </div>
      ))}
    </div>
  );
};
