import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import './Banner.css'



const bannerBG = {
    background: 'url(/images/bg.png)',
}

const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400

}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerBG}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} style={varticalCenter}>
                        <Box>
                            <Typography variant='h3'>
                                Your new smile starts here
                            </Typography>
                            <Typography variant='p'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci pariatur atque! Ipsa corporis delectus, non numquam quo asperiore
                            </Typography>
                            <br />
                            <Button variant="contained" sx={{ my: 5 }} className="btn-a">Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={varticalCenter}>
                        <img src="/images/chair.png" alt="" style={{ width: '70%' }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;