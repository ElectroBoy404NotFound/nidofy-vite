import { Typography } from '@mui/material';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function HomeSectionHeading({ text, colour="primary", variant="h4" }) {
    return (
        <>
            <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}>
                <Typography variant={variant} color={colour} sx={{ 
                    fontWeight: 500, 
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px',
                    textDecorationThickness: '2px',

                    '&:hover': {
                        textDecorationLine: 'underline',
                        textDecorationStyle: 'wavy',
                        textUnderlineOffset: '6.5px',
                        textDecorationThickness: '2.5px',
                    }
                }}>
                    {text}
                </Typography>
            </motion.div>
            <br />
        </>
    );
}