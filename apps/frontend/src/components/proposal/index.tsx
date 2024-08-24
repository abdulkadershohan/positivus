'use client';
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const data = {
    title: `Let’s make things happen`,
    description: `Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.`,
    image: '/images/proposal/image1.svg',
}
export default function Proposal() {
    return (
        <Container maxWidth='lg'>
            <Stack sx={{ borderRadius: 10, p: 6, bgcolor: (theme) => theme.palette.background.paper }}>
                <Grid container spacing={4} >
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <Typography
                                variant="h3"
                                fontSize={{
                                    xs: 26,
                                    md: "h3.fontSize"
                                }}
                                color={(theme) => theme.palette.text.primary}

                            >
                                {data.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontSize={{
                                    xs: "caption.fontSize",
                                    md: "body2.fontSize"
                                }}
                                color={(theme) => theme.palette.text.primary}
                            >
                                {data.description}
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

                                >
                                    Get proposal
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
                                    Get your free proposal
                                </Button>

                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                                src={data.image}
                                alt="Proposal"
                                fill={true}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container>

    )
}
