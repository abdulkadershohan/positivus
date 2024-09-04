'use client';
import { data } from "@fakeData/index";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Proposal() {
    const { button, description, image, title } = data?.proposal || {};
    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
            <Container maxWidth='lg'>
                <Stack sx={{ borderRadius: 10, p: 6, bgcolor: (theme) => theme.palette.background.paper }}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={6} data-aos={'fade-right'}
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Stack spacing={4}>
                                <Typography
                                    variant="h3"
                                    fontSize={{
                                        xs: 26,
                                        md: "h3.fontSize"
                                    }}
                                    color={(theme) => theme.palette.text.primary}

                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={{
                                        xs: "caption.fontSize",
                                        md: "body2.fontSize"
                                    }}
                                    color={(theme) => theme.palette.text.primary}
                                >
                                    {description}
                                </Typography>
                                <Stack
                                    sx={{
                                        display: {
                                            xs: 'block',
                                            sm: 'none'
                                        }
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="info"
                                        fullWidth
                                        LinkComponent={Link}
                                        href={button?.href}
                                        target={button?.target || '_self'}


                                    >
                                        {button.sm.title}
                                    </Button>

                                </Stack>
                                <Stack
                                    sx={{
                                        width: 'fit-content',
                                        display: {
                                            xs: 'none',
                                            sm: 'block'
                                        }
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="info"

                                    >
                                        {button.md.title}
                                    </Button>

                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} data-aos={'fade-left'}
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Stack
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 400,
                                    display: {
                                        xs: 'none',
                                        md: 'block'
                                    }
                                }}
                            >
                                <Image
                                    src={image}
                                    alt="Proposal"
                                    fill={true}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </div>

    )
}
