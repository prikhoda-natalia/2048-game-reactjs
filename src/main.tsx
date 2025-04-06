import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "~/features/App";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "~/features/App/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/2048-game-reactjs">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
