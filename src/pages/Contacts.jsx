import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import { mockDataContacts, mockDataTeam1 } from "../data/mockData";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        {
            field: "countryId",
            headerName: "CountryId",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "lastName",
            headerName: "Last Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "postalCode",
            headerName: "Postal Code",
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 1,
        },
        {
            field: "emailAddress",
            headerName: "Email",
            flex: 4,
        },
        {
            field: "firstName",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        { field: "country", headerName: "Country Name" },

        {
            field: "city",
            headerName: "City",
        },
        {
            field: "regionId",
            headerName: "Region ID",
        },
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subTitle="List of Contacts for Future Reference" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none !important",
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
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid rows={mockDataTeam1} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
};

export default Contacts;
