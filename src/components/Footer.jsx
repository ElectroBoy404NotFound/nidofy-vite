import { Box, Container, Stack, Typography, IconButton } from "@mui/material";

import { CiYoutube } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 0,
                py: 3,
                borderTop: 0,
                backdropFilter: "blur(8px)",
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    © {new Date().getFullYear()} Nikunj Doke
                </Typography>

                <Stack direction="row" spacing={1}>
                    <IconButton
                        component="a"
                        href="https://www.youtube.com/@electronics-hub-nd"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        aria-label="YouTube"
                        color="primary"
                        sx={{
                            transition: "0.2s",
                            "&:hover": {
                                color: "#FF0000",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        <CiYoutube />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://github.com/ElectroBoy404NotFound"
                        target="_blank"
                        rel="noopener noreferrer"

                        aria-label="GitHub"
                        color="primary"
                        sx={{
                            transition: "0.2s",
                            "&:hover": {
                                color: "#181717",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        <FaGithub />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://www.instagram.com/projectswithnido/"
                        target="_blank"
                        rel="noopener noreferrer"
                        
                        aria-label="Instagram"
                        color="primary"
                        sx={{
                            transition: "0.2s",
                            "&:hover": {
                                color: "#FFFFFF",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        <FaInstagram />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://x.com/TheMeowBoyCat"
                        target="_blank"
                        rel="noopener noreferrer"

                        aria-label="Twitter"
                        color="primary"
                        sx={{
                            transition: "0.2s",
                            "&:hover": {
                                color: "#000000",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        <FaXTwitter />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="www.linkedin.com/in/nikunj-doke"
                        target="_blank"
                        rel="noopener noreferrer"

                        aria-label="LinkedIn"
                        color="primary"
                        sx={{
                            transition: "0.2s",
                            "&:hover": {
                                color: "#0A66C2",
                                transform: "translateY(-3px)",
                            },
                        }}
                    >
                        <FaLinkedin />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;