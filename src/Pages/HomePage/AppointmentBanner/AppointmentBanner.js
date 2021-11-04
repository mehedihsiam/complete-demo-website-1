import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';

const appointmentBG = {
    background: `url(/images/appointment-bg.png)`,
    marginTop: '150px',
    height: '447px',
    backgroundColor: 'rgba(69, 76, 99, 0.9)',
    backgroundBlendMode: 'multiply',
    backgroundPosition: 'center'
}

const AppointmentBanner = () => {
    return (
        <Box sx={{ width: '100%' }} style={appointmentBG}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} md={6}>
                        <img
                            style={{ width: '100%', marginTop: '-125px' }}
                            src="/images/doctor.png" alt="" />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <Typography variant='h6' className="color-a">
                                APPOINTMENT
                            </Typography>
                            <Typography variant='h4' style={{ color: 'white' }}>
                                Make an Appointment Today
                            </Typography>
                            <Typography variant='p' style={{ color: 'white' }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptas deserunt quibusdam modi velit, saepe ea ipsa blanditiis corporis molestias.
                            </Typography>
                            <Button variant="contained" sx={{ my: 5 }} className="btn-a">Leran More</Button>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default AppointmentBanner;