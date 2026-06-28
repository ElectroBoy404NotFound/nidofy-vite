import DividerLine from "../components/DividerLine";
import HomeSectionHeading from "../components/HomeSectionHeading";
import PoemCard from "../components/PoemCard"
import PoemCardSkeleton from "../components/PoemCardSkeleton"

import { useEffect, useState } from 'react';

import { useAnimate, useInView } from "framer-motion"

import { Box, Typography, Grid, Card, CardContent, Skeleton } from '@mui/material';

import OnScrollFadeInAnim from "../animators/OnScrollFadeInAnim";

import AnimatedButton from "../components/AnimatedButton";

import { getListOfPoems } from "../data/Api";
import { sortByDateAndId } from "../data/Utils";

function Poetry() {
    const [poetryData, setPoetryData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getListOfPoems();
            setPoetryData(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <OnScrollFadeInAnim>
                <br />
                <Box component="div">
                    <Grid container spacing={2}>
                        <Grid size={2}>
                            <AnimatedButton text="<< Home" to="/" variant="text" />
                        </Grid>
                        
                        <Grid size={8}>
                            <HomeSectionHeading text="My Poems" />
                        </Grid>

                        <Grid size={2}></Grid>
                    </Grid>

                    <br />
                    <Grid container spacing={2}>
                        { 
                            poetryData.length === 0
                                ? Array.from({ length: 8 }).map((_, i) => (
                                    <Grid
                                        key={i}
                                        size={{ xs: 12, sm: 8, md: 6, lg: 3 }}
                                    >
                                        <PoemCardSkeleton />
                                    </Grid>
                                )) : sortByDateAndId(poetryData).map(poem => (
                                    <Grid size={{ xs: 12, sm: 8, md: 6, lg: 3 }} key={poem.id}>
                                        <PoemCard poem={poem} />
                                    </Grid>
                                ))
                        }
                    </Grid>
                </Box>
            </OnScrollFadeInAnim>

            <DividerLine />
        </>
    );
}

export default Poetry;