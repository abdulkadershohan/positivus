'use client';
import { data } from "@fakeData/index";
import { Container, Grid, Stack, Typography } from "@mui/material";
import TextWithBg from "../shared/TextWithBg";
import SingleServiceCard from "./SingleServiceCard";


export default function Services() {
    const { description, services, title, link: btnTitle } = data?.service || {};
    return (
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
                        color={(theme) => theme.palette.text.primary}
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
                        {services.map((item) => (
                            <Grid item xs={12} md={6} key={item.id}>
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
    )
}
