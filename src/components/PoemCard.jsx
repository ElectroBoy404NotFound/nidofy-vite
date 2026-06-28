import { Card, CardContent, CardHeader, CardActions, Box, Button, Typography } from '@mui/material';

import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function PoemCard({ poem }) {
    // console.log(poem);

    return (
        <>
            <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}>
                <Card variant="outlined">
                    <CardHeader title={ poem.title } sx={{
                        "& .MuiCardHeader-title": {
                            fontSize: "1.1rem"
                        },
                    }} />
                    <CardContent>
                        <Typography variant="body2">
                            { poem.content }
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button size="small" component={Link} to={ `/poem/${poem.id}` }>Read full poem</Button>
                        <Typography variant="caption">
                            { poem.date }
                        </Typography>
                    </CardActions>
                </Card>
            </motion.div>
        </>
    );
}