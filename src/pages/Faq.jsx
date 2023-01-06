import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";
import Header from "../components/Header";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const allFAQ = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Box m="20px">
            <Header title="FAQ" subTitle="Frequently asked question page for noobs" />

            {allFAQ.map((el) => (
                <Box
                    key={el}
                    sx={{
                        mb: "10px",
                    }}
                >
                    <Accordion key={el} defaultExpanded>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color={colors.greenAccent[500]} variant="h5">
                                An Important question
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente in vel laudantium fugit officiis? Commodi quasi dolore
                                quibusdam ratione explicabo facilis porro sunt eius cumque, officiis in earum. In, delectus?
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    );
};

export default Faq;
