import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { DynamicResourceProvider } from "./DynamicResourceContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DynamicResourceProvider>
      <App />
    </DynamicResourceProvider>
  </React.StrictMode>,
);
