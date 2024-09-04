import Banner from "@/components/banner/Index";
import CaseStudies from "@/components/case-studies";
import CompanyLogo from "@/components/company-logo";
import ContactUs from "@/components/contact-us";
import Proposal from "@/components/proposal";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import WorkingProcess from "@/components/working-process";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack spacing={12}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Banner />
      <CompanyLogo />
      <Services />
      <Proposal />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
      <ContactUs />
    </Stack>


  )
}
