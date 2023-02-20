import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.scss";
import { ParamProvider } from "./Context/ParamContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <ParamProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ParamProvider>
    </Layout>
  </React.StrictMode>
);
