'use client';
import { data } from "@fakeData/index";
import { Container, Grid, Stack, Typography } from "@mui/material";
import TextWithBg from "../shared/TextWithBg";
import SingleServiceCard from "./SingleServiceCard";
export default function Services() {
    const { description, services, title, link: btnTitle } = data?.service || {};
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
            <Container maxWidth='lg' id='services' >
                <Stack spacing={6} >
                    <Stack
                        direction={{
                            xs: 'column',
                            md: 'row'
                        }}
                        gap={6}
                        alignItems={'center'}
                    >
                        <TextWithBg text={title} bgcolor="primary" />
                        <Typography
                            sx={{
                                color: (theme) => theme.palette.text.primary
                            }}
                            maxWidth={{
                                xs: 390,
                                md: 580
                            }}
                            fontSize={{
                                xs: 'caption.fontSize',
                                md: 'body2.fontSize',
                            }}
                            textAlign={{
                                xs: 'center',
                                md: 'left'
                            }}
                        >
                            {description}

                        </Typography>
                    </Stack>
                    <Stack>
                        <Grid container spacing={6}>
                            {services.map((item, index) => (
                                <Grid item xs={12} md={6} key={item.id}
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                >
                                    <SingleServiceCard
                                        {...item}
                                        btnTitle={btnTitle}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
