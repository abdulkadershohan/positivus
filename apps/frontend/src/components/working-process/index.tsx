'use client';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Collapse, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Card from '../shared/Card';
import IconBox from '../shared/IconBox';
import TextWithBg from '../shared/TextWithBg';

const data = [
    {
        id: 1,
        title: 'Consultation',
        description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
    },
    {
        id: 2,
        title: 'Strategy Development',
        description: `Based on the information gathered during the consultation, we will develop a comprehensive digital marketing strategy that outlines the goals, objectives, and tactics to be used in your campaign. This will serve as a roadmap for our team to follow throughout the campaign.`,
    },
    {
        id: 3,
        title: 'Implementation',
        description: `Once the strategy has been approved, we will begin implementing the tactics outlined in the plan. This may include optimizing your website for search engines, creating content for social media, or launching a pay-per-click advertising campaign.`,
    },
    {
        id: 4,
        title: 'Monitoring & Reporting',
        description: `Throughout the campaign, we will monitor the performance of your digital marketing efforts and provide regular reports on key metrics such as website traffic, leads generated, and return on investment. This will allow us to make data-driven decisions and optimize the campaign for maximum results.`,
    },
    {
        id: 5,
        title: 'Optimization',
        description: `Based on the data collected during the monitoring phase, we will make adjustments to the campaign to improve performance and achieve better results. This may involve tweaking ad copy, adjusting targeting parameters, or optimizing landing pages for better conversion rates.`,
    },
    {
        id: 6,
        title: 'Results',
        description: `At the end of the campaign, we will provide a detailed report on the results achieved, including key performance indicators, return on investment, and recommendations for future campaigns. This will allow you to see the impact of our work and make informed decisions moving forward.`,
    }
];

export default function WorkingProcess() {
    const [index, setIndex] = React.useState<number | null>(1);

    const handleToggle = (id: number) => {
        setIndex(prevIndex => (prevIndex === id ? null : id));
    };

    return (
        <Container maxWidth='lg' id='use-cases'>
            <Stack spacing={6}>
                <Stack
                    direction={{
                        xs: 'column',
                        md: 'row',
                    }}
                    gap={6}
                    alignItems={'center'}
                >
                    <TextWithBg text="Our Working Process " bgcolor="primary" />
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
                        Step-by-Step Guide to Achieving Your Business Goals
                    </Typography>
                </Stack>
                {data.map((item) => (
                    <Card key={item.id}
                        bgcolor={index === item.id ? 'primary' : 'secondary'}
                    >
                        <Stack key={item.id}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'space-between'}
                            >
                                <Stack direction={'row'} alignItems={'center'} gap={4} >
                                    <Typography
                                        color={(theme) => theme.palette.text.primary}
                                        fontSize={{
                                            xs: 30,
                                            md: 60,
                                        }}
                                        fontWeight={500}
                                    >
                                        {item.id < 10 ? `0${item.id}` : item.id}
                                    </Typography>
                                    <Typography
                                        color={(theme) => theme.palette.text.primary}
                                        fontSize={{
                                            xs: 18,
                                            md: 30,
                                        }}
                                        fontWeight={500}

                                    >
                                        {item.title}
                                    </Typography>
                                </Stack>
                                <Box
                                    sx={{
                                        border: '1px solid',
                                        borderRadius: '50%',
                                        borderColor: (theme) => theme.palette.info.main,
                                        cursor: 'pointer',

                                    }}
                                    onClick={() => handleToggle(item.id)}

                                >
                                    <IconBox
                                        bgcolor='secondary'
                                        icon={index === item.id ? <RemoveIcon /> : <AddIcon />}
                                    />
                                </Box>
                            </Stack>
                            <Collapse in={index === item.id}>
                                <Stack spacing={4} py={4}>
                                    <Divider />
                                    <Typography
                                        color={(theme) => theme.palette.text.primary}
                                        fontSize={{
                                            xs: 18,
                                            md: 30,
                                        }}
                                        fontWeight={500}
                                    >
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Collapse>
                        </Stack>
                    </Card>

                ))}
            </Stack>
        </Container>
    );
}
