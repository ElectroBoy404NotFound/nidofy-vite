import { Container, Grid, Paper, Typography } from '@mui/material';

import AnimatedButton from './AnimatedButton';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function PoemPaper({ poem }) {
    console.log(poem);
    return (
        <>
            <Container maxWidth="md">
                <Paper square={false} variant="elevation" elevation={3}>
                    <Grid container spacing={2}>
                        <Grid size={2}>
                            <AnimatedButton text="<< All Poems" to="/poetry" colour="primary" variant="text" sx={{ mt: { xs: "8px", md: "18px" }, ml: "2px" }} />
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "1.2rem" }}> { poem.title } </Typography>
                            <Typography variant="h7" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "0.9rem" }}> Written on { poem.date } </Typography>
                        </Grid>
                        <Grid size={2}>
                            
                        </Grid>
                    </Grid>

                    <br />

                    { 
                        poem.poem.map((stanza, stanzaindex) => ( 
                            <Fragment key={ stanzaindex }>
                                {
                                    stanza.map((line, lineindex) => (
                                        <Typography variant="body2" sx={{ mx: 4, textAlign: "left" }} key={ (stanzaindex * 100) + lineindex }> 
                                            {line}
                                        </Typography> 
                                    ))
                                }
                                < br/>
                            </Fragment>
                        ))
                    }

                    <Typography variant="subtitle2" sx={{ mx: 12, textAlign: "left" }}> 
                        ~ { poem.signature }
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}