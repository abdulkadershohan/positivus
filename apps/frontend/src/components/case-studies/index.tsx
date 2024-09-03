'use client';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from '../shared/Card';
import TextWithBg from '../shared/TextWithBg';
const data = [
    {
        id: 1,
        text: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
    },
    {
        id: 2,
        text: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`
    },
    {
        id: 3,
        text: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`
    }
]
export default function CaseStudies() {
    const slider = React.useRef<Slider | null>(null);
    const settings = {
        className: "center",
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // dots: true
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    return (
        <Container maxWidth='lg' id='blog'>
            <Stack spacing={6}>
                <Stack spacing={6}>
                    <Stack
                        direction={{
                            xs: 'column',
                            md: 'row',
                        }}
                        gap={6}
                        alignItems={'center'}
                    >
                        <TextWithBg text="Case Studies " bgcolor="primary" />
                        <Typography
                            color={(theme) => theme.palette.text.primary}
                            maxWidth={{
                                xs: 390,
                                md: 580,
                            }}
                            fontSize={{
                                xs: 'caption.fontSize',
                                md: 'body2.fontSize',
                            }}
                            textAlign={{
                                xs: 'center',
                                md: 'left',
                            }}
                        >
                            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                        </Typography>
                    </Stack>
                </Stack>
                <Card bgcolor='info'
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}
                >
                    <Stack direction={'row'} spacing={4} >
                        {data.map((item, index) => (
                            <Stack key={item.id} direction="row" alignItems="center">
                                <Stack spacing={4}>
                                    <Typography
                                        color={(theme) => theme.palette.text.secondary}
                                        fontSize={{
                                            xs: 16,
                                            md: 18,
                                        }}
                                        fontWeight={400}
                                    >
                                        {item.text}
                                    </Typography>
                                    <Stack
                                        direction='row'
                                        gap={2} alignItems='center'
                                        sx={{
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            width: 'fit-content',
                                        }}
                                        component={Link}
                                        href='#'
                                    >
                                        <Typography
                                            color={(theme) => theme.palette.primary.main}
                                            variant='body1'
                                        >
                                            Learn More
                                        </Typography>
                                        <CallMadeIcon
                                            sx={{
                                                color: (theme) => theme.palette.primary.main,
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                                {index < data.length - 1 && (
                                    <Divider
                                        flexItem
                                        orientation='vertical'
                                        sx={{
                                            marginLeft: 4,
                                        }}
                                    />
                                )}
                            </Stack>
                        ))}
                    </Stack>

                </Card>
                <Stack
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }
                    }}
                >
                    <Slider {...settings} ref={slider}>
                        {data.map((item, index) => (
                            <Box key={item.id} >
                                <Stack
                                    sx={{
                                        bgcolor: (theme) => theme.palette.info.main,
                                        p: 4,
                                        borderRadius: '45px',
                                        mx: 2,
                                    }}
                                >
                                    <Stack spacing={4}>
                                        <Typography
                                            color={(theme) => theme.palette.text.secondary}
                                            fontSize={{
                                                xs: 16,
                                                md: 18,
                                            }}
                                            fontWeight={400}
                                        >
                                            {item.text}
                                        </Typography>
                                        <Stack
                                            direction='row'
                                            gap={2} alignItems='center'
                                            sx={{
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                width: 'fit-content',
                                            }}
                                            component={Link}
                                            href='#'
                                        >
                                            <Typography
                                                color={(theme) => theme.palette.primary.main}
                                                variant='body1'
                                            >
                                                Learn More
                                            </Typography>
                                            <CallMadeIcon
                                                sx={{
                                                    color: (theme) => theme.palette.primary.main,
                                                }}
                                            />
                                        </Stack>
                                    </Stack>
                                    {index < data.length - 1 && (
                                        <Divider
                                            flexItem
                                            orientation='vertical'
                                            sx={{
                                                marginLeft: 4,
                                            }}
                                        />
                                    )}
                                </Stack>
                            </Box>
                        ))}
                    </Slider>
                </Stack>
            </Stack>
        </Container >
    )
}
