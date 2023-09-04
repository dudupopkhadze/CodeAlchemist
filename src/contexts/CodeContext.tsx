import React from "react";
interface ICodeContext {
  code: string;
  setCode: (code: string) => void;
  run: () => void;
  result: { error: string; result: string };
}

export const CodeContext = React.createContext<ICodeContext | undefined>(
  undefined
);

export const CodeContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [code, setCode] = React.useState<string>("");
  const [result, setResult] = React.useState<ICodeContext["result"]>({
    error: "",
    result: "",
  });

  const run = () => {
    fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((r) => r.json())
      .then((res: ICodeContext["result"]) => setResult(res));
  };

  return (
    <CodeContext.Provider
      value={{
        code,
        setCode,
        run,
        result,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};
