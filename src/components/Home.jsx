import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import styles from '../theme/cssStyle'

const Home = () => {
    return (
        <section style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                <Typography sx={{ color: "black", fontSize: "20px" }}>
                    Hola! I&apos;m Abdur
                </Typography>
            </Box>
            <Box sx={{ marginTop: "40px" }}>
                <Typography className="gradient-text heading" sx={{fontSize:"120px",lineHeight:"100px",fontWeight:500}}>
                    <span>Web Designer</span><br/>
                    <span style={{fontSize:"80px"}}>&</span><br/>
                    <span>Full Stack Developer</span>
                </Typography>
            </Box>

            <Box sx={{ marginTop: "80px",gap:"20px",display:"flex" }}>
                <Button sx={{...styles.secondaryButton}}>
                    Download CV
                </Button>
                <Button sx={{...styles.primaryButton}}>
                    Contact Me
                </Button>
            </Box>
        </section>
    );
}

export default Home;
