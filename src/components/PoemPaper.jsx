import { Container, Grid, Paper, Typography, IconButton, Snackbar } from '@mui/material';

import AnimatedButton from './AnimatedButton';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';

import { FaCopy, FaCheck } from "react-icons/fa6";

import { dateStringToNumerialString } from '../data/Utils'

export default function PoemPaper({ poem }) {
    const [copied, setCopied] = useState(false);
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
        title: 'Copied!'
    });
    const { vertical, horizontal, open, title } = state;

    const handleCopy = async () => {
        const header = `"${poem.title}" by ${poem.signature}, ${dateStringToNumerialString(poem.date)}\n\n`;

        let poemBody = poem.poem.map(stanza => stanza.join("\n")).join("\n\n");

        poemBody += `\r\n      ${'-'.repeat(poem.signatureLength)}${poem.signature}`;

        const finalPoem = header + poemBody;

        try {
            await navigator.clipboard.writeText(finalPoem);
            
            setCopied(true);
            setState({ ...state, title: "Copied to clipboard!" });
            setState({ ...state, open: true });

            setTimeout(() => {
                setCopied(false);
                setState({ ...state, open: false });
            }, 2000);

        } catch (err) {
            setState({ ...state, title: "Copy Failed!" });
        }
        setState({ ...state, open: true });
    };

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
                            <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }} >
                                <IconButton sx={{ textAlign: "right", mt: { xs: "14px", md: "14px" } }} onClick={ handleCopy }>
                                    { copied ? <FaCheck /> : <FaCopy />}
                                </IconButton>
                            </motion.div>
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
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={ open }
                    message={ title }
                    key={vertical + horizontal}
                />
            </Container>
        </>
    );
}