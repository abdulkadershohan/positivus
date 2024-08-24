'use client';
import CallMadeIcon from '@mui/icons-material/CallMade';
import { Container, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
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
            </Stack>
        </Container>
    )
}
