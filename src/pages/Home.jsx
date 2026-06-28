import HeroSection from "../components/HeroSection";
import DottedBackground from "../components/DottedBackground";
import DividerLine from "../components/DividerLine";
import HomeSectionHeading from "../components/HomeSectionHeading";
import PoemCard from "../components/PoemCard"
import PoemCardSkeleton from "../components/PoemCardSkeleton"

import { useEffect, useState } from 'react';

import { SiC, SiCplusplus, SiCss, SiJavascript, SiPython, SiSpringboot, SiExpress, SiReact, SiAndroidstudio, SiNginx } from "react-icons/si";
import { FaJava, FaNode, FaCloudflare } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";

import { useAnimate, useInView } from "framer-motion"

import { Box, Typography } from '@mui/material';

import OnScrollFadeInAnim from "../animators/OnScrollFadeInAnim";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AnimatedButton from "../components/AnimatedButton";

import { getHomeData } from "../data/Api";
import { sortByDateAndId } from "../data/Utils";

function Home() {
    const [homedata, setHome] = useState({
        "numberOfPoems": 0,
        "numberOfProject": -1,
        "poetry": [],
        "projects": []
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getHomeData();
            setHome(data);
        }

        fetchData();
    }, []);

    return (
        <>
            <HeroSection />

            <DividerLine />
            <OnScrollFadeInAnim>
                <Box component="div">
                    <HomeSectionHeading text="About" />
                    
                    <Typography variant="subtitle1">
                        I'm Nikunj Doke, a passionate full stack developer from India who is also interested in film-making and writing.
                    </Typography>
                    
                    <Typography variant="subtitle1">
                        I've worked with multiple languages including
                    </Typography>
                    
                    <Box component="div" sx={{ display: "inline-flex", fontSize: 30, gap: 1, verticalAlign: "middle" }}>
                        <SiC />
                        <SiCplusplus />
                        <FaJava />
                        <TiHtml5 />
                        <SiCss />
                        <SiJavascript />
                        <FaNode />
                        <SiPython />
                    </Box>

                    <Typography variant="subtitle1">
                        And frameworks and tools and tools such as
                    </Typography>

                    <Box component="div" sx={{ display: "inline-flex", fontSize: 30, gap: 1, verticalAlign: "middle" }}>
                        <SiSpringboot  />
                        <SiExpress />
                        <SiReact />
                        <FaCloudflare />
                        <SiAndroidstudio />
                        <SiNginx />
                    </Box>

                    <Typography variant="subtitle1">
                        I also occationally do pentesting and bug hunting and work on various hardware platforms including Arduino, ESP8266 & ESP32, Raspberry Pi, etc.
                    </Typography>
                </Box>
                <DividerLine />
            </OnScrollFadeInAnim>
            <OnScrollFadeInAnim>
                <Box component="div">
                    <HomeSectionHeading text="My Poems" />

                    <Typography variant="subtitle1">
                        This is a collection of poems I wrote.
                    </Typography>

                    <br />
                    
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y]}
                        spaceBetween={25}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                    >
                        { 
                            homedata.numberOfPoems === 0 ? 
                                Array.from({ length: 8 }).map((_, i) => (
                                    <SwiperSlide> <PoemCardSkeleton /> </SwiperSlide>
                                ))
                            : sortByDateAndId(homedata.poetry).map(poem => (
                                <SwiperSlide><PoemCard poem={poem} /></SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <br />
                    <AnimatedButton text="View All" to="/poetry" variant="contained" />
                </Box>
            </OnScrollFadeInAnim>

            <DividerLine />
        </>
    );
}

export default Home;