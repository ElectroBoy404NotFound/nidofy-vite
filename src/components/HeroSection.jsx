import { Box, Container, Stack, Typography } from '@mui/material';

function HeroSection() {
    return (
        <Box
            component="header"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Box
                    component="img"
                    src="/static/me.jpeg"
                    alt="Nikunj Doke"
                    sx={{
                        width: { 
                            xs: 120, 
                            sm: 160, 
                            md: 200 
                        },
                        height: 'auto',
                        display: 'block',
                        mx: 'auto',
                        mb: 3,
                        boxShadow: 3,
                        borderRadius: 6,
                    }}
                />

                <Stack spacing={2} alignitems="center" textalign="center">
                    <Typography variant="h3" className="text-red-600" style={{ fontFamily: 'cursive' }}>
                        Nikunj Doke
                    </Typography>

                    <Typography variant="body2">
                        Full Stack Developer | Writer | Film Enthusiast
                    </Typography>
                </Stack>
            </Container>
        </Box>
  );
}

export default HeroSection;