import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useTheme } from "@mui/material";
import Header from "../components/Header";
import { tokens } from "../theme";
import { mockDataContacts, mockDataInvoices, mockDataTeam1 } from "../data/mockData";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },

        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },

        {
            field: "cost",
            headerName: "Cost",
            flex: 1,

            renderCell: (params) => <Typography color={colors.greenAccent[500]}>€{params.row.cost}</Typography>,
        },

        {
            field: "phone",
            headerName: "Phone Number",
        },
        {
            field: "date",
            headerName: "Date",
        },
    ];

    return (
        <Box m="20px">
            <Header title="Invoices" subTitle="Random Title for Invoices" />
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
                }}
            >
                {/* // for giving selection for checkbox */}
                <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
            </Box>
        </Box>
    );
};

export default Invoices;
