'use client';
import { data } from '@fakeData/index';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function Banner() {

    const { title, description, banner, button } = data.banner
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
                            >{title}</Typography>
                            <Typography
                                variant="body1"
                                fontSize={{
                                    xs: 'body2.fontSize',
                                    md: 'body1.fontSize',
                                }}
                                color={(theme) => theme.palette.text.primary}

                            >{description}</Typography>
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
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: (theme) => theme.palette.primary.main,
                                            color: (theme) => theme.palette.primary.contrastText,
                                        },
                                    }}

                                >
                                    {button?.title}
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
                                src={banner.url}
                                alt={banner.alt}
                                fill={true}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container >

    )
}
