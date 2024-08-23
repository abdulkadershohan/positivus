'use client';
import { Container, Stack, Typography } from "@mui/material";
import TextWithBg from "../shared/TextWithBg";

export default function Services() {
    return (
        <Container maxWidth='lg' >
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
        </Container>
    )
}
