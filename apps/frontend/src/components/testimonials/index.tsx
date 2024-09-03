'use client'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TextWithBg from "../shared/TextWithBg";
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "Marketing Manager",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "CEO",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 3,
        name: "John Doe",
        position: "Marketing Manager",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 4,
        name: "Jane Smith",
        position: "CEO",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 5,
        name: "John Doe",
        position: "Marketing Manager",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 6,
        name: "Jane Smith",
        position: "CEO",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },
    {
        id: 7,
        name: "John Doe",
        position: "Marketing Manager",
        text: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
    },

]

export default function Testimonials() {
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
        beforeChange: (oldIndex: any, newIndex: any) => setCurrentIndex(newIndex), // Track the current index
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
        <Container maxWidth='lg' >
            <Stack spacing={6}  >
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    gap={6}
                    alignItems={'center'}
                >
                    <TextWithBg text="Testimonials" bgcolor="primary" />
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
                        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                    </Typography>
                </Stack>
                <Stack gap={4} position={'relative'} bgcolor={(theme) => theme.palette.info.main} borderRadius={6} p={{ xs: 0, sm: 4 }} >
                    <Slider {...settings} ref={slider}>
                        {
                            testimonials.map((testimonial) => (
                                <Box key={testimonial.id} p={2}>
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
                                                    <Typography color={(theme => theme.palette.text.secondary)} fontWeight={400} fontSize={20}>
                                                        {testimonial.name}
                                                    </Typography>
                                                    <Typography color={(theme => theme.palette.text.secondary)} fontWeight={400} fontSize={14}>
                                                        {testimonial.position}
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                            <Typography color={(theme => theme.palette.text.secondary)} fontWeight={400} fontSize={16}>
                                                {testimonial.text}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            ))
                        }

                    </Slider>
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
                            {testimonials.map((testimonial, index) => (
                                <IconButton
                                    key={testimonial.id}
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
    )
}
