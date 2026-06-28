import { Routes, Route, useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from "framer-motion";

import { createTheme, responsiveFontSizes , ThemeProvider } from '@mui/material/styles';

import './App.css'

import DottedBackground from './components/DottedBackground';

import Home from './pages/Home';
import Poetry from './pages/Poetry';
import Poem from './pages/Poem';
import NotFound from "./pages/NotFound";

import { useMemo } from "react";

function App() {
    const location = useLocation();

    const theme = useMemo(() => {
        let t = createTheme();
        return responsiveFontSizes(t);
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <DottedBackground />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/poetry" element={ <Poetry /> } />
                        <Route path="/poem/:id" element={ <Poem /> } />

                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default App
