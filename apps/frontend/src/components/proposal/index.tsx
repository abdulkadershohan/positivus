'use client';
import { IProposalComponent } from "@/types";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Proposal({ data }: IProposalComponent) {
    const { button, description, image, title } = data || {};
    const imageUrl = image?.image?.data?.attributes?.url
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
                                {title &&
                                    <Typography
                                        variant="h3"
                                        fontSize={{
                                            xs: 26,
                                            md: "h3.fontSize"
                                        }}
                                        sx={{
                                            color: (theme) => theme.palette.text.primary
                                        }}

                                    >
                                        {title}
                                    </Typography>
                                }
                                {description &&
                                    <Typography
                                        variant="body2"
                                        fontSize={{
                                            xs: "caption.fontSize",
                                            md: "body2.fontSize"
                                        }}
                                        sx={{
                                            color: (theme) => theme.palette.text.primary
                                        }}
                                    >
                                        {description}
                                    </Typography>
                                }
                                {button?.sm_title &&
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
                                            {button?.sm_title}
                                        </Button>

                                    </Stack>
                                }
                                {button?.md_title &&
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
                                            {button?.md_title}
                                        </Button>

                                    </Stack>
                                }
                            </Stack>
                        </Grid>
                        {imageUrl &&
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
                                        src={imageUrl}
                                        alt={image?.alt || title || 'image'}
                                        fill={true}
                                    />
                                </Stack>
                            </Grid>
                        }
                    </Grid>
                </Stack>
            </Container>
        </div>

    )
}
