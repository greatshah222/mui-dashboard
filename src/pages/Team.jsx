import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { useTheme } from "@mui/material";
import { mockDataTeam1 } from "../data/mockData";
import { tokens } from "../theme";
import Header from "../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        // MUI NEEDS TO HAVE ID PROPERTY
        {
            field: "id",
            headerName: "ID",
        },
        // flex 1 mewans it will grow
        {
            field: "firstName",
            headerName: "First Name",
            flex: 1,
            // custom class name so we can change the color
            cellClassName: "name-column--cell",
        },
        {
            field: "emailAddress",
            headerName: "Email Address",
            flex: 1,
        },
        {
            field: "countryId",
            headerName: "Country Id",
            // number for some reaosn gets alogned to right so alignt ot left
            headerAlign: "left",
            align: "left",
        },
        {
            field: "country",
            headerName: "Country Name",
        },
        {
            field: "role",
            headerName: "Access Level",
            flex: 1,
            // to customize
            renderCell: ({ row }) => {
                let role = row?.role;
                // { row: { role } }
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display={"flex"}
                        justifyContent="center"
                        borderRadius={"4px"}
                        backgroundColor={role === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
                    >
                        {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {role === "manager" && <SecurityOutlinedIcon />}
                        {role === "user" && <LockOpenOutlinedIcon />}

                        <Typography color={colors.grey[100]}>{role}</Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box m="20px">
            <Header title="User" subTitle="Manage User" />

            <Box
                m="40px 0 0 0 "
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },

                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                <DataGrid rows={mockDataTeam1} columns={columns} />
            </Box>
        </Box>
    );
};

export default Team;
