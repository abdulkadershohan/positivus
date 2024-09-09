import Banner from '@/components/banner';
import CaseStudies from '@/components/case-studies';
import CompanyLogo from '@/components/company-logo';
import ContactUs from '@/components/contact-us';
import Proposal from '@/components/proposal';
import Services from '@/components/services';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import WorkingProcess from '@/components/working-process';

const blockComponentMapping = {
   "block.banner": {
      component: Banner
   },
   "block.company-logo": {
      component: CompanyLogo
   },
   "block.service": {
      component: Services
   },
   "block.proposal": {
      component: Proposal
   },
   "block.case-studies": {
      component: CaseStudies
   },
   "block.working-process": {
      component: WorkingProcess
   },
   "block.team": {
      component: Team
   },
   "block.testimonial": {
      component: Testimonials
   },
   "block.contact-us": {
      component: ContactUs
   },

} as any;

export default blockComponentMapping;