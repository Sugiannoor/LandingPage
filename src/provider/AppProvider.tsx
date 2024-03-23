import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StyleProvider } from "./StyleProvider";

type props = {
  children: React.ReactNode;
};
export const AppProvider: React.FC<props> = ({ children }) => {
  return (
    <StyleProvider>
      <Router>{children}</Router>
    </StyleProvider>
  );
};
