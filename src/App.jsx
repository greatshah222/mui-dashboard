import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TopBar from "./pages/global/TopBar";
import { ColorModeContext, useMode } from "./theme";
import SideBar from "./pages/global/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar />
                    <main className="content">
                        <TopBar />
                        <Routes path="/" element={<Dashboard />} />
                        {/* <Routes path="/team" element={<Team />} /> */}
                        {/* <Routes path="/contacts" element={<Contacts />} /> */}
                        {/* <Routes path="/invoices" element={<Invoices />} /> */}
                        {/* <Routes path="/form" element={<Form />} /> */}
                        {/* <Routes path="/bar" element={<Bar />} /> */}
                        {/* <Routes path="/pie" element={<Pie />} /> */}
                        {/* <Routes path="/line" element={<Line />} /> */}
                        {/* <Routes path="/faq" element={<FAQ />} /> */}
                        {/* <Routes path="/geography" element={<Geography />} /> */}
                        {/* <Routes path="/calendar" element={<Calendar />} /> */}
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
