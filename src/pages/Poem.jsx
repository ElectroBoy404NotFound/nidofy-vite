import DividerLine from "../components/DividerLine";
import HomeSectionHeading from "../components/HomeSectionHeading";

import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useAnimate, useInView } from "framer-motion"

import { Container, Typography, Paper, Grid } from '@mui/material';

import OnScrollFadeInAnim from "../animators/OnScrollFadeInAnim";

import AnimatedButton from "../components/AnimatedButton";

import { getPoem } from "../data/Api";

function Poem() {
    const { id } = useParams();
    const [ poemData, setPoemData ] = useState({
        "id": -1,
        "title": "",
        "poem": [[]],
        "date": "",
        "signature": "",
        "signatureLength": -1,
        "createdAt": ""
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getPoem(id);
            setPoemData(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <OnScrollFadeInAnim>
                <br />
                <Container maxWidth="md">
                    <Paper square={false} variant="elevation" elevation={3}>
                        <Grid container spacing={2}>
                            <Grid size={2}>
                                <AnimatedButton text="<< All Poems" to="/poetry" colour="primary" variant="text" sx={{ mt: { xs: "8px", md: "18px" }, ml: "2px" }} />
                            </Grid>
                            <Grid size={8}>
                                <Typography variant="h5" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "1.2rem" }}> { poemData.title } </Typography>
                                <Typography variant="h7" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "0.9rem" }}> Written on { poemData.date } </Typography>
                            </Grid>
                            <Grid size={2}>
                                
                            </Grid>
                        </Grid>

                        <br />

                        { 
                            poemData.poem.map(stanza => ( 
                                <>
                                    {
                                        stanza.map(line => (
                                            <Typography variant="body2" sx={{ mx: 4, textAlign: "left" }}> 
                                                {line}
                                            </Typography> 
                                        ))
                                    }
                                    < br/>
                                </>
                            ))
                        }

                        <Typography variant="subtitle2" sx={{ mx: 12, textAlign: "left" }}> 
                            ~ { poemData.signature }
                        </Typography> 
                    </Paper>
                </Container>
            </OnScrollFadeInAnim>

            <DividerLine />
        </>
    );
}

export default Poem;