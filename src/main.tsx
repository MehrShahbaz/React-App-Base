import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/store";

import "./index.css";
import RouterConfig from "./routes/routerConfig";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>
);
