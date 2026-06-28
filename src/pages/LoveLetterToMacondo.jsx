import AnimatedButton from "../components/AnimatedButton";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const bull = (
    <Box component="span" sx={{ mx: '1px', opacity: 0.6 }}>
        •
    </Box>
);

function LoveLetterToMacondo() {
    const card = (
        <CardContent>
            <Typography 
                sx={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}
            >
                Definition
            </Typography>
            <Typography 
                variant="h4" 
                component="div" 
                sx={{ my: 1, fontWeight: 500 }}
            >
                fo{bull}nd
            </Typography>
            <Typography sx={{ fontSize: 14, mb: 1.5 }}>
                adjective
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                Liking a person or thing, or liking doing something.
                <br />
                <em>"I am fond of Macondo."</em>
            </Typography>
        </CardContent>
    );

    return (
        <Box sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 6,
            px: 2,
        }}>
            <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        fontSize: { xs: 56, sm: 72 },
                        fontWeight: 500,
                        mb: 4,
                        background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: -1,
                    }}
                >
                    302 Fond
                </Typography>

                <Box sx={{ mb: 5, textAlign: 'left' }}>
                    <Typography 
                        component="p" 
                        sx={{ 
                            fontSize: 18,
                            lineHeight: 1.8,
                            mb: 2,
                            fontWeight: 500,
                        }}
                        color="primary"
                    >
                        Dear Macondo,
                    </Typography>

                    <Typography 
                        component="div" 
                        sx={{ 
                            fontSize: 16,
                            lineHeight: 1.8,
                            '& p': { mb: 2, m: 0 }
                        }}
                        color="secondary"
                    >
                        <p>For others, it may just be yet another YSWS. But for me, it was the 2nd YSWS I've ever shipped in after Sprig. And even before my Sprig arrived in my hands, one of my tiny projects finished review.</p>

                        <p>I thought I would stay till the end of the program. But I didn't.</p>

                        <p>Now that college (Inter 1st Year/11th Grade) started, I realised instead of doing in only one YSWS, maybe I should try the different YSWS's Hackclub offers.</p>

                        <p>But I won't act like Macondo gave me nothing — it gave me the experience of shipping a project, the experience of interacting with strangers explaining what I made...</p>

                        <p>And indeed, it's a feeling I can't explain in words.</p>

                        <p>And well. As they say, everything that starts has an end.</p>

                        <p>But the homely feeling of Macondo is something I'll never forget.</p>

                        <p>And something that can probably never be replaced...</p>

                        <p sx={{ mt: 3 }}>Thank you, Nathan (Organiser) and Gabin (Cool guy, reviewer at macondo who also handles the weekly journal)</p>

                        <p sx={{ mt: 3 }}>
                            Yours truly,<br />
                            <strong>Nikunj Doke</strong>
                        </p>
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Card 
                        variant="outlined" 
                        sx={{ 
                            maxWidth: 320,
                            mx: 'auto',
                            border: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        {card}
                    </Card>
                </Box>

                <Box>
                    <AnimatedButton text="Back to Pavilion" to="/" colour="secondary" />
                </Box>
            </Container>
        </Box>
    );
}

export default LoveLetterToMacondo;