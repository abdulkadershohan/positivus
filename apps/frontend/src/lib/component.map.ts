import { AllCategory, BlogSection, BreadCrumbs, CandidateFilter, CompanyFilter, HeroSection, JobFilter, PopularCategories, PopularListedJobs, ReviewsSection } from "ui";

const blockComponentMapping = {
   "banner.banner-one": {
      component: HeroSection
   },
   "header.breadcrumbs": {
      component: BreadCrumbs
   },
   "forms.job-filter": {
      component: JobFilter
   },
   "forms.company-filter": {
      component: CompanyFilter
   },
   "forms.candidate-filter": {
      component: CandidateFilter
   },
   "block.category-card": {
      component: PopularCategories
   },
   "block.category-card2": {
      component: AllCategory
   },
   "block.job-card": {
      component: PopularListedJobs
   },
   "block.review-card": {
      component: ReviewsSection
   },
   "block.blog-card": {
      component: BlogSection
   }
} as any;

export default blockComponentMapping;
