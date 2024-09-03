'use client'
import { Box, Button, Container, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import TextWithBg from '../shared/TextWithBg'

export default function ContactUs() {
    return (
        <Container maxWidth='lg' id='ContactUs' >
            <Stack spacing={6} >
                <Stack spacing={6}>
                    <Stack
                        direction={{
                            xs: 'column',
                            md: 'row',
                        }}
                        gap={6}
                        alignItems={'center'}
                    >
                        <TextWithBg text="Contact Us" bgcolor="primary" />
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
                            Connect with Us: Let{`'`}s Discuss Your Digital Marketing Needs
                        </Typography>
                    </Stack>
                    <Stack position={'relative'} overflow={'hidden'} sx={{ borderRadius: 10, p: { md: 6, xs: 2 }, bgcolor: (theme) => theme.palette.background.paper }} >
                        <Grid container spacing={4} >
                            <Grid item xs={12} md={6}>
                                <Stack component={'form'} gap={4}>
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            defaultValue={0}
                                            sx={{
                                                color: (theme) => theme.palette.text.primary,
                                                fontSize: {
                                                    xs: 'caption.fontSize',
                                                    md: 'body2.fontSize',
                                                },
                                            }}
                                        >
                                            <FormControlLabel value={0} control={<Radio
                                                sx={{
                                                    color: (theme) => theme.palette.text.primary,

                                                }}
                                            />} label="Say Hi" />
                                            <FormControlLabel value={1} control={<Radio
                                                sx={{
                                                    color: (theme) => theme.palette.text.primary,
                                                }}
                                            />} label="Get a Quote" />
                                        </RadioGroup>
                                    </FormControl>
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            Name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder='Name'
                                            variant="outlined"
                                            sx={{
                                                color: (theme) => theme.palette.text.primary,
                                                '& .MuiOutlinedInput-root': {
                                                    pl: 2,
                                                    borderRadius: 4,
                                                    '& fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                },
                                            }}
                                        />
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            Email *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder='Email'
                                            variant="outlined"
                                            required
                                            sx={{
                                                color: (theme) => theme.palette.text.primary,
                                                '& .MuiOutlinedInput-root': {
                                                    pl: 2,
                                                    borderRadius: 4,
                                                    '& fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                },
                                            }}
                                        />
                                    </Stack>
                                    <Stack spacing={1}>
                                        <Typography
                                            variant='caption'
                                            color={(theme) => theme.palette.text.primary}
                                        >
                                            Message *
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder='Message'
                                            variant="outlined"
                                            sx={{
                                                color: (theme) => theme.palette.text.primary,
                                                '& .MuiOutlinedInput-root': {
                                                    pl: 2,
                                                    borderRadius: 4,
                                                    '& fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: (theme) => theme.palette.text.primary,
                                                    },
                                                },
                                            }}
                                            multiline
                                            rows={7}
                                            required
                                        />
                                    </Stack>
                                    <Button
                                        variant='contained'
                                        color='info'
                                        type='submit'
                                        sx={{
                                            '&:hover': {
                                                bgcolor: (theme) => theme.palette.primary.main,
                                                color: (theme) => theme.palette.primary.contrastText,
                                            },

                                        }}
                                    >
                                        Send Message
                                    </Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6} display={{
                                xs: 'none',
                                md: 'block'
                            }}>
                                <Stack
                                    sx={{
                                        position: 'absolute',
                                        width: 650,
                                        height: 700,
                                        top: 0,
                                        bottom: 0,
                                        left: "72%",
                                        transform: "translateX(5%)",
                                        margin: " auto 0",

                                    }}
                                >
                                    <Box component={Image}
                                        src={'/images/contact-us/Illustration.svg'}
                                        alt="Proposal"
                                        fill={true}

                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>

                </Stack>
            </Stack>
        </Container >
    )
}
