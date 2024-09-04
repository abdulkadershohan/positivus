'use client';
import { data } from '@fakeData/index';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Collapse, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import Card from '../shared/Card';
import IconBox from '../shared/IconBox';
import TextWithBg from '../shared/TextWithBg';


export default function WorkingProcess() {
    const { description, items, title } = data?.working_process || {};
    const [index, setIndex] = React.useState<number | null>(1);

    const handleToggle = (id: number) => {
        setIndex(prevIndex => (prevIndex === id ? null : id));
    };

    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">
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
                        <TextWithBg text={title} bgcolor="primary" />
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
                            {description}
                        </Typography>
                    </Stack>
                    {items.map((item) => (
                        <Card key={item.id}
                            bgcolor={index === item.id ? 'primary' : 'secondary'}
                        >
                            <Stack key={item.id}>
                                <Stack
                                    direction={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Stack direction={'row'} alignItems={'center'} gap={{ md: 4, xs: 2 }} >
                                        <Typography
                                            color={(theme) => theme.palette.text.primary}
                                            fontSize={{
                                                xs: 20,
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
                                            borderColor: 'inherit',
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
                                        <Divider
                                            sx={{
                                                borderColor: (theme) => theme.palette.info.main,
                                            }}
                                        />
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
        </div>
    );
}
