'use client'
import { ITestimonialComponent } from '@/types';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TextWithBg from "../shared/TextWithBg";

export default function Testimonials({ data }: ITestimonialComponent) {
    const { title, description, testimonials } = data || {}
    const [currentIndex, setCurrentIndex] = useState(0);

    const slider = React.useRef<Slider | null>(null);
    const settings = {
        className: "center",
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 500,
        autoplay: true,
        beforeChange: (oldIndex: number, newIndex: number) => setCurrentIndex(newIndex), // Track the current index
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
            <Container maxWidth='lg' id='testimonials' >
                <Stack spacing={6}  >
                    <Stack
                        direction={{
                            xs: 'column',
                            md: 'row',
                        }}
                        gap={6}
                        alignItems={'center'}
                    >
                        {title && <TextWithBg text={title} bgcolor="primary" />}
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
                    <Stack gap={4} position={'relative'} bgcolor={(theme) => theme.palette.info.main} borderRadius={6} p={{ xs: 0, sm: 4 }} >
                        {testimonials &&
                            <Slider {...settings} ref={slider}>
                                {
                                    testimonials?.map((testimonial) => (
                                        <Box key={testimonial?.id} p={2}>
                                            <Stack
                                                sx={{
                                                    boxShadow: '0 4px 6px rgba(255, 255, 255, 0.3), 0 1px 3px rgba(255, 255, 255, 0.2)',
                                                    borderRadius: '45px',
                                                    border: (theme) => `1px solid ${theme.palette.primary.main}`,
                                                    padding: 4
                                                }}
                                            >
                                                <Stack gap={2}>
                                                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                                        <Stack>
                                                            {testimonial.name &&
                                                                <Typography sx={{
                                                                    color: (theme) => theme.palette.text.secondary
                                                                }} fontWeight={400} fontSize={20}>
                                                                    {testimonial?.name}
                                                                </Typography>
                                                            }
                                                            {testimonial.position &&
                                                                <Typography sx={{
                                                                    color: (theme) => theme.palette.text.secondary
                                                                }} fontWeight={400} fontSize={14}>
                                                                    {testimonial?.position}
                                                                </Typography>
                                                            }
                                                        </Stack>
                                                    </Stack>
                                                    {testimonial.description &&
                                                        <Typography sx={{
                                                            color: (theme) => theme.palette.text.secondary
                                                        }} fontWeight={400} fontSize={16}>
                                                            {testimonial?.description}
                                                        </Typography>
                                                    }
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    ))
                                }

                            </Slider>
                        }
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            gap={4}
                            display={{
                                xs: 'none',
                                sm: 'flex',
                            }}
                        >
                            <IconButton
                                sx={{
                                    color: (theme) => theme.palette.text.primary,
                                    bgcolor: (theme) => theme.palette.background.paper,
                                    "&:hover": {
                                        bgcolor: (theme) => theme.palette.primary.main,
                                        color: (theme) => theme.palette.primary.contrastText,
                                    },
                                }}
                                onClick={() => slider.current?.slickPrev()}
                            >
                                <ArrowBackOutlinedIcon sx={{ height: 32, width: 32 }} />
                            </IconButton>
                            <Stack direction={'row'} gap={2}>
                                {testimonials && testimonials?.map((testimonial, index) => (
                                    <IconButton
                                        key={testimonial?.id}
                                        sx={{
                                            color: (theme) =>
                                                index === currentIndex
                                                    ? theme.palette.primary.contrastText
                                                    : theme.palette.text.secondary,
                                            bgcolor: (theme) => index === currentIndex ? theme.palette.primary.main : 'inherit',
                                            "&:hover": {
                                                bgcolor: (theme) => theme.palette.primary.main,
                                                color: (theme) => theme.palette.primary.contrastText,
                                            },
                                        }}
                                        onClick={() => slider.current?.slickGoTo(index)}
                                    >
                                        <PagesOutlinedIcon sx={{ height: 32, width: 32 }} />
                                    </IconButton>
                                ))}
                            </Stack>

                            <IconButton
                                sx={{
                                    color: (theme) => theme.palette.text.primary,
                                    bgcolor: (theme) => theme.palette.background.paper,
                                    "&:hover": {
                                        bgcolor: (theme) => theme.palette.primary.main,
                                        color: (theme) => theme.palette.primary.contrastText,
                                    },
                                }}
                                onClick={() => slider.current?.slickNext()}
                            >
                                <ArrowForwardOutlinedIcon sx={{ height: 32, width: 32 }} />
                            </IconButton>

                        </Stack>
                    </Stack>
                </Stack>
            </Container >
        </div>
    )
}
