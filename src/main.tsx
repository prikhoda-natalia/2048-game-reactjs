import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import App from "~/features/App";
import { store } from "~/features/App/store";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/2048-game-reactjs">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
