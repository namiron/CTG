import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.scss";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store/store.ts";
import router from "./routes/Ways.tsx";
import { ConfigProvider, theme } from "antd";
import Auth from "./components/auth/Auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
