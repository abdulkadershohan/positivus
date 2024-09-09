'use client'
import { ICompanyLogoComponent } from '@/types';
import { Container, Stack } from '@mui/material';
import Image from 'next/image';
export default function CompanyLogo({ data }: ICompanyLogoComponent) {

    const { logo } = data || {}
    if (logo.length === 0) return null
    return (
        <div data-aos="zoom-in">
            <Container maxWidth='lg' >
                <Stack direction='row' gap={{
                    xs: 2,
                    md: 10
                }}
                    flexWrap={'wrap'}
                >
                    {
                        logo.map((logo, index) => (
                            <Image
                                src={logo?.image?.data?.attributes?.url}
                                alt={logo.alt}
                                key={index}
                                width={125}
                                height={48}
                            />
                        ))

                    }
                </Stack>
            </Container>
        </div>
    )
}
