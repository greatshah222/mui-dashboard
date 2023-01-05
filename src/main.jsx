import React from "react";
import ReactDOM from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProSidebarProvider>
                <App />
            </ProSidebarProvider>
        </BrowserRouter>
    </React.StrictMode>
);
