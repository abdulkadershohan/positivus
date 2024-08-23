'use client';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
const data = {
    title: `Navigating the digital landscape for success`,
    description: `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`,
    banner: {
        src: "/images/banner/banner.svg",
        alt: "Hero",
    },

}
export default function Banner() {
    return (
        <Container maxWidth='lg' >
            <Stack width={'100%'}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={6}>
                            <Typography
                                variant="h1"
                                fontSize={{
                                    xs: 'h2.fontSize',
                                    md: 'h1.fontSize',
                                }}
                                color={(theme) => theme.palette.text.primary}
                            >{data.title}</Typography>
                            <Typography
                                variant="body1"
                                fontSize={{
                                    xs: 'body2.fontSize',
                                    md: 'body1.fontSize',
                                }}
                                color={(theme) => theme.palette.text.primary}

                            >{data.description}</Typography>
                            <Stack
                                sx={{
                                    width: {
                                        xs: '100%',
                                        md: 'fit-content',
                                    }
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="info"

                                >
                                    Book a consultation
                                </Button>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            sx={{
                                height: {
                                    xs: 300,
                                    md: 500,
                                },
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <Image
                                src={data.banner.src}
                                alt={data.banner.alt}
                                fill={true}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container >

    )
}
