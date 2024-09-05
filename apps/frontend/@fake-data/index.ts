import { IData } from "@/types";

export const data: IData = {
    banner: {
        title: `Navigating the digital landscape for success`,
        description: `Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.`,
        banner: {
            url: "/images/banner/banner.svg",
            alt: "Banner",
        },
        button: {
            title: 'Book a consultation',
            href: '#',
            target: '_self'
        }
    },
    company_logo: [
        {
            url: "/images/company-logo/logo1.svg",
            alt: "Logo 1",
        },
        {
            url: "/images/company-logo/logo2.svg",
            alt: "Logo 2",
        },
        {
            url: "/images/company-logo/logo3.svg",
            alt: "Logo 3",
        },
        {
            url: "/images/company-logo/logo4.svg",
            alt: "Logo 4",
        },
        {
            url: "/images/company-logo/logo5.svg",
            alt: "Logo 5",
        },
        {
            url: "/images/company-logo/logo6.svg",
            alt: "Logo 6",
        },
    ],
    service: {
        title: `Our Services`,
        description: `At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:`,
        services: [
            {
                id: 1,
                title: "Search engine",
                text: "optimization",
                image: "/images/services/image2.svg",
                link: "#",
                bgcolor: 'secondary',
                color: 'primary',
                iconColor: 'primary',
                iconBgColor: 'info',
                iconLabelColor: 'text.primary'
            },
            {
                id: 2,
                title: "Pay-per-click",
                text: "advertising",
                image: "/images/services/image4.svg",
                link: "#",
                bgcolor: 'primary',
                color: 'secondary',
                iconColor: 'primary',
                iconBgColor: 'info',
                iconLabelColor: 'text.primary'
            },
            {
                id: 3,
                title: "Social media",
                text: "marketing",
                image: "/images/services/image1.svg",
                link: "#",
                bgcolor: 'info',
                color: 'secondary',
                iconColor: 'info',
                iconBgColor: 'secondary',
                iconLabelColor: 'text.secondary'
            },
            {
                id: 4,
                title: "Email",
                text: "marketing",
                image: "/images/services/image5.svg",
                link: "#",
                bgcolor: 'secondary',
                color: 'primary',
                iconColor: 'primary',
                iconBgColor: 'info',
                iconLabelColor: 'text.primary'
            },
            {
                id: 5,
                title: "Content",
                text: "creation",
                image: "/images/services/image3.svg",
                link: "#",
                bgcolor: 'primary',
                color: 'secondary',
                iconColor: 'primary',
                iconBgColor: 'info',
                iconLabelColor: 'text.primary'
            },

            {
                id: 6,
                title: "Analytics and ",
                text: "Tracking",
                image: "/images/services/image6.svg",
                link: "#",
                bgcolor: 'info',
                color: 'secondary',
                iconColor: 'info',
                iconBgColor: 'secondary',
                iconLabelColor: 'text.secondary'
            }
        ],
        link: {
            title: 'Learn more',
            link: '#',
            target: '_self'
        }
    },
    proposal: {
        title: `Let’s make things happen`,
        description: `Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.`,
        image: '/images/proposal/image1.svg',
        button: {
            sm: {
                title: 'Get proposal',
            },
            md: {
                title: 'Get your free proposal',
            },
            href: '#',
            target: '_self'
        }
    },
    case_studies: {
        title: `Case Studies`,
        description: `Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies`,
        items: [
            {
                id: 1,
                text: `For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.`,
            },
            {
                id: 2,
                text: `For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.`
            },
            {
                id: 3,
                text: `For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.`
            }
        ],
        link: {
            title: 'Learn more',
            link: '#',
            target: '_self'
        }
    },
    working_process: {
        title: `Our Working Process`,
        description: `Step-by-Step Guide to Achieving Your Business Goals`,
        items: [
            {
                id: 1,
                title: 'Consultation',
                description: `During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.`,
            },
            {
                id: 2,
                title: 'Strategy Development',
                description: `Based on the information gathered during the consultation, we will develop a comprehensive digital marketing strategy that outlines the goals, objectives, and tactics to be used in your campaign. This will serve as a roadmap for our team to follow throughout the campaign.`,
            },
            {
                id: 3,
                title: 'Implementation',
                description: `Once the strategy has been approved, we will begin implementing the tactics outlined in the plan. This may include optimizing your website for search engines, creating content for social media, or launching a pay-per-click advertising campaign.`,
            },
            {
                id: 4,
                title: 'Monitoring & Reporting',
                description: `Throughout the campaign, we will monitor the performance of your digital marketing efforts and provide regular reports on key metrics such as website traffic, leads generated, and return on investment. This will allow us to make data-driven decisions and optimize the campaign for maximum results.`,
            },
            {
                id: 5,
                title: 'Optimization',
                description: `Based on the data collected during the monitoring phase, we will make adjustments to the campaign to improve performance and achieve better results. This may involve tweaking ad copy, adjusting targeting parameters, or optimizing landing pages for better conversion rates.`,
            },
            {
                id: 6,
                title: 'Results',
                description: `At the end of the campaign, we will provide a detailed report on the results achieved, including key performance indicators, return on investment, and recommendations for future campaigns. This will allow you to see the impact of our work and make informed decisions moving forward.`,
            }
        ],
    },
    team: {
        title: "Team",
        description: `Meet the skilled and experienced team behind our successful digital marketing strategies`,
        members: [
            {
                id: 1,
                name: 'John Smith',
                role: 'CEO and Founder',
                image: '/images/team/image1.png',
                description: `10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy. Passionate about helping businesses grow`,
            },
            {
                id: 2,
                name: 'Jane Doe',
                role: 'Director of Operations',
                description: `7+ years of experience in project management and team leadership. Strong organizational and communication skills`,
                image: '/images/team/image2.png',
            },
            {
                id: 3,
                name: 'Michael Brown',
                role: 'Senior SEO Specialist',
                description: `5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization`,
                image: '/images/team/image3.png',
            },
            {
                id: 4,
                name: 'Emily Johnson',
                role: 'PPC Manager',
                description: `3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis`,
                image: '/images/team/image4.png',
            },
            {
                id: 5,
                name: 'Brian Williams',
                role: 'Social Media Specialist',
                description: `4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics.`,
                image: '/images/team/image5.png',
            },
            {
                id: 6,
                name: 'Sarah Kim',
                role: 'Content Creator',
                description: `2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries`,
                image: '/images/team/image6.png',
            }
        ],
        button: {
            title: "See all team",
            href: '#',
            target: '_self'
        }
    },
    testimonial: {
        title: "Testimonials",
        description: `Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services`,
        testimonials: [
            {
                id: 1,
                name: "John Doe",
                position: "Marketing Manager",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 2,
                name: "Jane Smith",
                position: "CEO",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 3,
                name: "John Doe",
                position: "Marketing Manager",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 4,
                name: "Jane Smith",
                position: "CEO",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 5,
                name: "John Doe",
                position: "Marketing Manager",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 6,
                name: "Jane Smith",
                position: "CEO",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },
            {
                id: 7,
                name: "John Doe",
                position: "Marketing Manager",
                description: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`
            },

        ]

    },
    contact_us: {
        title: `Contact Us`,
        description: `Connect with Us: Let's Discuss Your Digital Marketing Needs`,
        form: {
            name: {
                label: 'Name',
                placeholder: 'Name',
            },
            email: {
                label: 'Email',
                placeholder: 'Email',
            },
            message: {
                label: 'Message',
                placeholder: 'Message',
            },
            radio: [
                {
                    id: 1,
                    label: 'Say Hi',
                    value: 0
                },
                {
                    id: 2,
                    label: 'Get a Quote',
                    value: 1
                },

            ],
        },
        button: {
            title: 'Send message',
        },
        image: {
            url: '/images/contact-us/Illustration.svg'
        }
    },
    layout: {
        header: {
            logo: {
                darkLogo: {
                    url: "/images/logo/logoLight.png"
                },
                lightLogo: {
                    url: "/images/logo/logoDark.png"
                }
            },
            navItems: [
                {
                    title: 'About us',
                    href: '#about-us',
                    target: '_self',
                },
                {
                    title: 'Services',
                    href: '#services',
                    target: '_self',
                },
                {
                    title: 'Use Cases',
                    href: '#use-cases',
                    target: '_self',
                },
                {
                    title: 'Testimonials',
                    href: '#testimonials',
                    target: '_self',
                },
                {
                    title: 'Blog',
                    href: '/#blog',
                    target: '_self',
                },
            ],
            button: {
                title: 'Request a quote',
                href: '/#contact-us',
                target: '_self'
            }
        },
        footer: {
            logo: {
                darkLogo: {
                    url: "/images/logo/logoLight.png"
                },
                lightLogo: {
                    url: "/images/logo/logoDark.png"
                }



            },
            navItems: [
                {
                    title: 'About us',
                    href: '#about-us',
                    target: '_blank',
                },
                {
                    title: 'Services',
                    href: '#services',
                    target: '_self',
                },
                {
                    title: 'Use Cases',
                    href: '#use-cases',
                    target: '_self',
                },
                {
                    title: 'Testimonials',
                    href: '#testimonials',
                    target: '_self',
                },
                {
                    title: 'Blog',
                    href: '/#blog',
                    target: '_self',
                },
            ],
            contact: {
                title: 'Contact Us',
                address: 'Address: 1234 Main St Moonstone City, Stardust State 12345',
                phone: '+1 (555) 555-5555',
                email: 'info@positivus.com',
            },
            form: {
                email: {
                    label: 'Email',
                    placeholder: 'Email',
                }
            },
            button: {
                title: 'Subscribe to news',
                target: '_self',
                href: '#'
            },
            social: {
                facebook: 'https://www.facebook.com',
                twitter: 'https://www.twitter.com',
                linkedin: 'https://www.linkedin.com',
            },
            copyright: {
                text: `Positivus. All rights reserved.`,
                link: {
                    title: 'Privacy Policy',
                    href: '#',
                    target: '_self',
                }
            }
        }
    }
}
