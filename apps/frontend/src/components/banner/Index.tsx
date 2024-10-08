'use client';
import { IBannerComponent } from '@/types';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import Link from 'next/link';
export default function Banner({ data }: IBannerComponent) {

    const { title, description, button, image } = data || {};
    const banner = image?.image?.data?.attributes
    return (
        <Container maxWidth='lg' >
            <Stack width={'100%'} pt={10}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">

                            <Stack spacing={6} >
                                {title &&
                                    <Typography
                                        variant="h1"
                                        fontSize={{
                                            xs: 'h2.fontSize',
                                            md: 'h1.fontSize',
                                        }}
                                        textAlign={{
                                            xs: 'center',
                                            sm: 'left',
                                        }}
                                        sx={{
                                            color: (theme) => theme.palette.text.primary
                                        }}
                                    >{title}</Typography>
                                }
                                {description &&
                                    <Typography
                                        variant="body1"
                                        fontSize={{
                                            xs: 'body2.fontSize',
                                            md: 'body1.fontSize',
                                        }}
                                        sx={{
                                            color: (theme) => theme.palette.text.primary
                                        }}

                                    >{description}</Typography>
                                }
                                {button &&
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
                                            LinkComponent={Link}
                                            href={button?.href}
                                            target={button?.target || '_self'}

                                        >
                                            {button?.title}
                                        </Button>

                                    </Stack>
                                }
                            </Stack>
                        </div>
                    </Grid>
                    {banner &&
                        <Grid item xs={12} md={6}>
                            <div data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">

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
                                        src={banner?.url}
                                        alt={image?.alt || 'banner'}
                                        fill={true}
                                    />
                                </Stack>
                            </div>
                        </Grid>
                    }
                </Grid>
            </Stack>
        </Container >
    )
}
