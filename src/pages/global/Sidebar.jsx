import { useState } from "react";

import { Box, IconButton, Typography, useTheme } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Item = ({ title, icon, to, selected, setSelected }) => {
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            routerLink={<Link to={to} />}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const SideBar = () => {
    const theme = useTheme();

    const colors = tokens(theme.palette.mode);

    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();

    return (
        <Box
            sx={{
                "& .ps-sidebar-root": {
                    border: "none !important",
                },
                "& .ps-sidebar-container": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .ps-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .ps-container-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .ps-menu-button": {
                    background: `${colors.primary[400]} !important`,
                },

                // item on hover
                "& .ps-menu-button:hover": {
                    color: "#868dfb !important",
                },
                // active selected ccolor
                "& .ps-active .ps-menu-button": {
                    color: "#6870fa !important",
                    // color: "red !important",
                },
            }}
        >
            <Sidebar>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => {
                            toggleSidebar();
                            collapseSidebar();
                        }}
                        icon={collapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {/* If not collapsed */}
                        {!collapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINS
                                </Typography>
                                <IconButton>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}

                    {!collapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent={"center"} alignItems="center">
                                <img
                                    src="https://source.unsplash.com/random"
                                    width={"80px"}
                                    height="80px"
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                    }}
                                />
                            </Box>
                            <Box textAlign={"center"}>
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{
                                        marginTop: "5px",
                                    }}
                                >
                                    Icareus
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}

                    <Box paddingLeft={collapsed ? undefined : "10%"}>
                        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Profile Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="FAQ page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Pie Chart" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SideBar;
