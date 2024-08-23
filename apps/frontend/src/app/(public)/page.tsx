import Banner from "@/components/banner/Index";
import CompanyLogo from "@/components/company-logo";
import { Container, Stack } from "@mui/material";
const data = {
  title: `Navigating the digital landscape for success`,
  description: `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`,
  banner: {
    src: "/images/banner/banner.svg",
    alt: "Hero",
  },
  company_logo: [
    {
      src: "/images/company-logo/logo1.svg",
      alt: "Logo 1",
    },
    {
      src: "/images/company-logo/logo2.svg",
      alt: "Logo 2",
    },
    {
      src: "/images/company-logo/logo3.svg",
      alt: "Logo 3",
    },
    {
      src: "/images/company-logo/logo4.svg",
      alt: "Logo 4",
    },
    {
      src: "/images/company-logo/logo5.svg",
      alt: "Logo 5",
    },
    {
      src: "/images/company-logo/logo6.svg",
      alt: "Logo 6",
    },
  ],

}
export default function Page() {
  return (
    <Container maxWidth='lg' >
      <Stack
        py={4}
        spacing={4}
      >
        <Banner />
        <CompanyLogo />



      </Stack>
    </Container >
  )
}
