'use client';
import { ICaseStudiesComponent } from '@/types';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from '../shared/Card';
import TextWithBg from '../shared/TextWithBg';

export default function CaseStudies({ data }: ICaseStudiesComponent) {
    const { data: items, title, description, button } = data || {};
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
        <div data-aos="fade-up"
            data-aos-duration="2000">
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
                            {title &&
                                <TextWithBg text={title} bgcolor="primary" />
                            }
                            {description &&
                                <Typography
                                    sx={{
                                        color: (theme) => theme.palette.text.primary
                                    }}
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
                                    {description}
                                </Typography>
                            }
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
                            {items && items.map((item, index) => (
                                <Stack key={item.id} direction="row" alignItems="center">
                                    <Stack spacing={4}>
                                        {item?.title &&
                                            <Typography
                                                sx={{
                                                    color: (theme) => theme.palette.text.secondary
                                                }}
                                                fontSize={{
                                                    xs: 16,
                                                    md: 18,
                                                }}
                                                fontWeight={400}
                                            >
                                                {item?.title}
                                            </Typography>
                                        }
                                        {
                                            button?.title &&
                                            <Stack
                                                direction='row'
                                                gap={2} alignItems='center'
                                                sx={{
                                                    cursor: 'pointer',
                                                    textDecoration: 'none',
                                                    width: 'fit-content',
                                                }}
                                                component={Link}
                                                href={button?.href || '#'}
                                                target={button?.target || '_self'}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: (theme) => theme.palette.primary.main,
                                                    }}
                                                    variant='body1'
                                                >
                                                    {button?.title}
                                                </Typography>
                                                <CallMadeIcon
                                                    sx={{
                                                        color: (theme) => theme.palette.primary.main,
                                                    }}
                                                />
                                            </Stack>
                                        }
                                    </Stack>
                                    {index < items.length - 1 && (
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
                        {items?.length > 0 &&
                            <Slider {...settings} ref={slider}>
                                {items?.map((item, index) => (
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
                                                {item?.title &&
                                                    <Typography
                                                        sx={{
                                                            color: (theme) => theme.palette.text.secondary
                                                        }}
                                                        fontSize={{
                                                            xs: 16,
                                                            md: 18,
                                                        }}
                                                        fontWeight={400}
                                                    >
                                                        {item?.title}
                                                    </Typography>
                                                }
                                                {
                                                    button?.title &&
                                                    <Stack
                                                        direction='row'
                                                        gap={2} alignItems='center'
                                                        sx={{
                                                            cursor: 'pointer',
                                                            textDecoration: 'none',
                                                            width: 'fit-content',
                                                        }}
                                                        component={Link}
                                                        href={button?.href || '#'}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                color: (theme) => theme.palette.primary.main,
                                                            }}
                                                            variant='body1'
                                                        >
                                                            {button?.title}
                                                        </Typography>
                                                        <CallMadeIcon
                                                            sx={{
                                                                color: (theme) => theme.palette.primary.main,
                                                            }}
                                                        />
                                                    </Stack>
                                                }
                                            </Stack>
                                            {index < items.length - 1 && (
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
                        }
                    </Stack>
                </Stack>
            </Container >
        </div>
    )
}
