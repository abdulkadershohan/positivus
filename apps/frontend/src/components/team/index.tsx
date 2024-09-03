'use client';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../shared/Card';
import TextWithBg from '../shared/TextWithBg';
const data = [
    {
        id: 1,
        name: 'John Smith',
        role: 'CEO and Founder',
        image: '/images/team/image1.png',
        description: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy. Passionate about helping businesses grow`,
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'Director of Operations',
        description: `7+ years of experience in project management and team leadership. Strong organizational and communication skills`,
        image: '/images/team/image2.png',
    },
    {
        id: 3,
        name: 'Michael Brown',
        role: 'Senior SEO Specialist',
        description: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`,
        image: '/images/team/image3.png',
    },
    {
        id: 4,
        name: 'Emily Johnson',
        role: 'PPC Manager',
        description: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`,
        image: '/images/team/image4.png',
    },
    {
        id: 5,
        name: 'Brian Williams',
        role: 'Social Media Specialist',
        description: `4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics.`,
        image: '/images/team/image5.png',
    },
    {
        id: 6,
        name: 'Sarah Kim',
        role: 'Content Creator',
        description: `2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries`,
        image: '/images/team/image6.png',
    }
]
export default function Team() {
    return (
        <Container maxWidth='lg' id='team'>
            <Stack spacing={6}>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    gap={6}
                    alignItems={'center'}
                >
                    <TextWithBg text="Team" bgcolor="primary" />
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
                        Meet the skilled and experienced team behind our successful digital marketing strategies
                    </Typography>
                </Stack>
                <Stack>
                    <Grid container spacing={4}>
                        {
                            data.map((item) => (
                                <Grid item xs={12} sm={6} md={4} key={item.id}>
                                    <Card
                                        sx={{
                                            bgcolor: 'none',
                                            position: 'relative',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                transition: 'transform 0.3s ease-in-out',
                                                cursor: 'pointer',
                                            },
                                        }}
                                    >
                                        <Stack spacing={4}>
                                            <Stack direction={'row'} gap={2}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    height={100}
                                                    width={100}
                                                />
                                                <Stack justifyContent={'flex-end'}>
                                                    <Typography
                                                        variant='h4'
                                                        fontWeight={500}
                                                        fontSize={{
                                                            xs: 'body2.fontSize',
                                                            md: 'h4.fontSize',
                                                        }}
                                                        color={(theme) => theme.palette.text.primary}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        variant='h4'
                                                        fontWeight={500}
                                                        fontSize={{
                                                            xs: 'caption.fontSize',
                                                            md: 'body2.fontSize',
                                                        }}
                                                        color={(theme) => theme.palette.text.primary}
                                                    >
                                                        {item.role}
                                                    </Typography>
                                                </Stack>

                                            </Stack>
                                            <Divider />
                                            <Typography
                                                variant='h4'
                                                fontWeight={500}
                                                fontSize={{
                                                    xs: 'caption.fontSize',
                                                    md: 'body2.fontSize',
                                                }}
                                                color={(theme) => theme.palette.text.primary}
                                            >
                                                {item.description}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 25,
                                                    bgcolor: (theme) => theme.palette.info.main,
                                                    borderRadius: '50%',
                                                    height: 40,
                                                    width: 40,
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}

                                            >
                                                <LinkedInIcon color='primary' />
                                            </Box>

                                        </Stack>
                                    </Card>
                                </Grid>


                            ))
                        }
                    </Grid>
                    <Stack spacing={4} pt={4} alignItems={{
                        xs: 'center',
                        md: 'flex-end',
                    }}>
                        <Button
                            variant='contained'
                            color='info'
                            sx={{
                                '&:hover': {
                                    bgcolor: (theme) => theme.palette.primary.main,
                                    color: (theme) => theme.palette.primary.contrastText
                                },
                            }}
                            LinkComponent={Link}
                            href='#'
                        >
                            See all team
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Container>
    )
}
