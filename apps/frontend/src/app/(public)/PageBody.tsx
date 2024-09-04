'use client';
import Banner from '@/components/banner/Index';
import CaseStudies from '@/components/case-studies';
import CompanyLogo from '@/components/company-logo';
import ContactUs from '@/components/contact-us';
import Proposal from '@/components/proposal';
import Services from '@/components/services';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import WorkingProcess from '@/components/working-process';
import { Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
export default function PageBody() {
    React.useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);
    return (
        <Paper
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                backgroundColor: (theme) => theme.palette.background.default,
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
