import { Container, Grid, Paper, Skeleton, Typography } from '@mui/material';

import AnimatedButton from './AnimatedButton';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export default function PoemPaperSkeleton({ poem }) {
    return (
        <>
            <Container maxWidth="md">
                <Paper square={false} variant="elevation" elevation={3}>
                    <Grid container spacing={2}>
                        <Grid size={2}>
                            <AnimatedButton text="<< All Poems" to="/poetry" colour="primary" variant="text" sx={{ mt: { xs: "8px", md: "18px" }, ml: "2px" }} />
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "1.2rem" }}> <Skeleton width="70%" /> </Typography>
                            <Typography variant="h7" sx={{ textAlign: "center", mt: { xs: "14px", md: "4px" }, fontSize: "0.9rem" }}> <Skeleton width="70%" /> </Typography>
                        </Grid>
                        <Grid size={2}>
                            
                        </Grid>
                    </Grid>

                    <br />

                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />

                    <br />

                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />

                    <br />

                    <Typography variant="subtitle2" sx={{ mx: 12, textAlign: "left" }}> 
                        <Skeleton width={60} />
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}