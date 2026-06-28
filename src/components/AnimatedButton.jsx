import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function AnimatedButton({ text, to, colour="secondary", variant="outlined", sx={} }) {
    return (
        <>
            <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }} >
                <Button component={Link} to={to} variant={variant} color={colour} sx={sx}>
                    {text}
                </Button>
            </motion.div>
        </>
    );
}