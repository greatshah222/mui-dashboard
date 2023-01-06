import Header from "../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StatBox from "../components/StatBox";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import { mockTransactions } from "../data/mockData";
import ProgressCircle from "../components/ProgressCircle";
import GeographyChart from "../components/GeographyChart";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent={"space-between"} alignItems="center">
                <Header title={"Dashboard"} subTitle={"Welcome to your dashboard"} />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontWeight: "bold",
                            padding: "10px 20px",
                            fontSize: "14px",
                        }}
                    >
                        <DownloadOutlinedIcon
                            sx={{
                                mr: "10px",
                            }}
                        />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID AND CHARTS */}
            {/* // broken down into 12 grids
             */}

            <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gridAutoRows={"140px"} gap="20px">
                {/* ROW 1 */}
                {/* This will take 3 out of 12 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems={"center"} justifyContent="center">
                    <StatBox
                        title="12,361"
                        subTitle={"Email Sent"}
                        progress="0.75"
                        increase={"+14%"}
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems={"center"} justifyContent="center">
                    <StatBox
                        title="12,112,361"
                        subTitle={"Traffic Inbound"}
                        progress="0.85"
                        increase={"+48%"}
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems={"center"} justifyContent="center">
                    <StatBox
                        title="42,361"
                        subTitle={"Sales Obtained"}
                        progress="0.5"
                        increase={"+21%"}
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems={"center"} justifyContent="center">
                    <StatBox
                        title="32,121"
                        subTitle={"New Cusomer"}
                        progress="0.35"
                        increase={"+5%"}
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px",
                                }}
                            />
                        }
                    />
                </Box>
                {/* ROW 2 */}
                {/* Row takes twice here */}
                <Box gridColumn={"span 8"} gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Box mt="25px" p="0 30px" display={"flex"} justifyContent="space-between" alignItems={"center"}>
                        <Box>
                            <Typography variant="h5" fontWeight={"600"} color={colors.grey[100]}>
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3" fontWeight={"bold"} color={colors.greenAccent[500]}>
                                € 56,987
                            </Typography>
                        </Box>

                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/* Transacttion */}
                <Box gridColumn={"span 4"} gridRow="span 2" overflow={"auto"} backgroundColor={colors.primary[400]}>
                    <Box
                        display={"flex"}
                        justifyContent="space-between"
                        // alignItems={"center"}
                        flexDirection="column"
                        borderBottom={`4px solid  ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        p="15px"
                    >
                        <Typography variant="h5" fontWeight={"600"} color={colors.grey[100]}>
                            Recent Transactions
                        </Typography>
                        {mockTransactions.map((el, i) => (
                            <Box
                                key={i}
                                display="flex"
                                justifyContent={"space-between"}
                                alignItems="center"
                                borderBottom={`4px solid  ${colors.primary[500]}`}
                                color={colors.grey[100]}
                                p="15px"
                            >
                                <Box>
                                    <Typography variant="h5" fontWeight={"600"} color={colors.greenAccent[500]}>
                                        {el.txId}
                                    </Typography>
                                    <Typography variant="h5" fontWeight={"600"} color={colors.grey[100]}>
                                        {el.user}
                                    </Typography>
                                </Box>

                                <Box color={colors.grey[100]}>{el.date}</Box>
                                <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius={"4px"}>
                                    €{el.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* ROW 3 */}

                <Box gridColumn={"span 4"} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight={"600"}>
                        Campaign
                    </Typography>
                    <Box display={"flex"} flexDirection="column" mt="25px" alignItems={"center"}>
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            fontWeight={"600"}
                            color={colors.greenAccent[500]}
                            sx={{
                                mt: "15px",
                            }}
                        >
                            € 48,656 revenue generated
                        </Typography>
                        <Typography>Includes extra expenses and costs</Typography>
                    </Box>
                </Box>

                {/* ROw 3 second box */}
                <Box gridColumn={"span 4"} gridRow="span 2" backgroundColor={colors.primary[400]}>
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{
                            p: "30px 30px 0 30px",
                        }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height={"250px"} mt="-25px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                {/* ROw 3 third box */}

                <Box gridColumn={"span 4"} gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
                    <Typography
                        variant="h5"
                        fontWeight={"600"}
                        sx={{
                            mb: "15px",
                        }}
                    >
                        Traffic based On Country
                    </Typography>
                    <Box height={"200px"}>
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
