'use client';
import { data } from "@fakeData/index";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Card from "../shared/Card";
import IconBox from "../shared/IconBox";
import TextWithBg from "../shared/TextWithBg";

export default function Services() {
    const { description, services, title, link: btnTitle } = data.service
    const SingleServiceCard = ({ title, text, image, link, bgcolor, color, iconColor, iconBgColor, labelColor }: any) => {
        return (
            <Card
                bgcolor={bgcolor}
                sx={{
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease-in-out',
                        cursor: 'pointer',
                    },
                }}

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
                        label={btnTitle.title}
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
                    <TextWithBg text={title} bgcolor="primary" />
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
                        {description}

                    </Typography>
                </Stack>
                <Stack>
                    <Grid container spacing={6}>
                        {services.map((item) => (
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
