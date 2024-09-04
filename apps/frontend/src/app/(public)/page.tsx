import Banner from "@/components/banner/Index";
import CaseStudies from "@/components/case-studies";
import CompanyLogo from "@/components/company-logo";
import ContactUs from "@/components/contact-us";
import Proposal from "@/components/proposal";
import Services from "@/components/services";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";
import WorkingProcess from "@/components/working-process";
import { Paper } from "@mui/material";

export default function Page() {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: 'background.default',
      }}
      elevation={0}
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
    </Paper>


  )
}
