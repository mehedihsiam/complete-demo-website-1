import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from './Service/Service';
import './Services.css'


const services = [
    {
        name: "Cavity",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex hic ipsa totam cumque porro ipsum iste minima labore libero molestiae dolore sit, ab perferendis.",
        img: "images/cavity.png"
    },
    {
        name: "Fluoride",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex hic ipsa totam cumque porro ipsum iste minima labore libero molestiae dolore sit, ab perferendis.",
        img: "images/fluoride.png"
    },
    {
        name: "Whitening",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ex hic ipsa totam cumque porro ipsum iste minima labore libero molestiae dolore sit, ab perferendis.",
        img: "images/whitening.png"
    }
]


const Services = () => {
    return (
        <section>
            <Container sx={{ my: 15 }}>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }} className="color-a">
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: 'bold', my: "2rem" }}>
                    Service We Provide
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Services;