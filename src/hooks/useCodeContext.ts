import React from "react";
import { CodeContext } from "../contexts";

export const useCodeContext = () => {
  const context = React.useContext(CodeContext);
  if (context === undefined) {
    throw new Error("useCodeContext must be used within a CodeContextProvider");
  }
  return context;
};
