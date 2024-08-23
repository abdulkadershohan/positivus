'use client';
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Card from "../shared/Card";
import IconBox from "../shared/IconBox";
import TextWithBg from "../shared/TextWithBg";
const data = [
    {
        id: 1,
        title: "Search engine",
        text: "optimization",
        image: "/images/services/image2.svg",
        link: "#",
        bgcolor: 'secondary',
        color: 'primary',
        iconColor: 'primary',
        iconBgColor: 'info',
        iconLabelColor: 'text.primary'
    },
    {
        id: 2,
        title: "Pay-per-click",
        text: "advertising",
        image: "/images/services/image4.svg",
        link: "#",
        bgcolor: 'primary',
        color: 'secondary',
        iconColor: 'primary',
        iconBgColor: 'info',
        iconLabelColor: 'text.primary'
    },
    {
        id: 3,
        title: "Social media",
        text: "marketing",
        image: "/images/services/image1.svg",
        link: "#",
        bgcolor: 'info',
        color: 'secondary',
        iconColor: 'info',
        iconBgColor: 'secondary',
        iconLabelColor: 'text.secondary'
    },
    {
        id: 4,
        title: "Email",
        text: "marketing",
        image: "/images/services/image5.svg",
        link: "#",
        bgcolor: 'secondary',
        color: 'primary',
        iconColor: 'primary',
        iconBgColor: 'info',
        iconLabelColor: 'text.primary'
    },
    {
        id: 5,
        title: "Content",
        text: "creation",
        image: "/images/services/image3.svg",
        link: "#",
        bgcolor: 'primary',
        color: 'secondary',
        iconColor: 'primary',
        iconBgColor: 'info',
        iconLabelColor: 'text.primary'
    },

    {
        id: 6,
        title: "Analytics and ",
        text: "Tracking",
        image: "/images/services/image6.svg",
        link: "#",
        bgcolor: 'info',
        color: 'secondary',
        iconColor: 'info',
        iconBgColor: 'secondary',
        iconLabelColor: 'text.secondary'
    }
]
export default function Services() {
    const SingleServiceCard = ({ title, text, image, link, bgcolor, color, iconColor, iconBgColor, labelColor }: any) => {
        return (
            <Card
                bgcolor={bgcolor}

            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TextWithBg text={title} bgcolor={color}
                            rest={{
                                fontSize: {
                                    xs: 26,
                                    md: 'h3.fontSize'
                                }
                            }}
                        />
                        <TextWithBg text={text} bgcolor={color}
                            rest={{
                                fontSize: {
                                    xs: 26,
                                    md: 'h3.fontSize'
                                }
                            }}
                        />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction={'row'}
                            gap={4}
                            alignItems={'flex-end'}
                        >
                            <Box
                                sx={{
                                    display: {
                                        sm: 'none',
                                        xs: 'block'
                                    }
                                }}
                            >
                                <IconBox
                                    bgcolor={iconBgColor}
                                    iconColor={iconColor}

                                />
                            </Box>
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: {
                                        xs: 130,
                                        md: 210
                                    },
                                    overflow: 'hidden',

                                }}
                            >
                                <Image
                                    src={image}
                                    alt={title}
                                    fill={true}
                                />
                            </Box>
                        </Stack>

                    </Grid>
                </Grid>
                <Box py={2} />
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block'
                        }
                    }}
                >
                    <IconBox
                        bgcolor={iconBgColor}
                        iconColor={iconColor}
                        label="Learn more"
                        labelColor={labelColor}

                    />
                </Box>
            </Card>
        )
    }

    return (
        <Container maxWidth='lg' id='services' >
            <Stack spacing={6} >
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row'
                    }}
                    gap={6}
                    alignItems={'center'}
                >
                    <TextWithBg text="Services" bgcolor="primary" />
                    <Typography
                        color={(theme) => theme.palette.text.primary}
                        maxWidth={{
                            xs: 390,
                            md: 580
                        }}
                        fontSize={{
                            xs: 'caption.fontSize',
                            md: 'body2.fontSize',
                        }}
                        textAlign={{
                            xs: 'center',
                            md: 'left'
                        }}
                    >
                        At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                    </Typography>
                </Stack>
                <Stack>
                    <Grid container spacing={6}>
                        {data.map((item) => (
                            <Grid item xs={12} md={6} key={item.id}>
                                <SingleServiceCard
                                    title={item.title}
                                    text={item.text}
                                    image={item.image}
                                    link={item.link}
                                    bgcolor={item.bgcolor}
                                    color={item.color}
                                    iconColor={item.iconColor}
                                    iconBgColor={item.iconBgColor}
                                    labelColor={item.iconLabelColor}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Stack>
        </Container>
    )
}
