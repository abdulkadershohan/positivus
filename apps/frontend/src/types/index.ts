export type IData = {
    banner: {
        title: string;
        description: string;
        banner: {
            url: string;
            alt: string;
        };
        button: {
            title: string;
            href: string;
            target: string;
        };
    };
    company_logo: {
        url: string;
        alt: string;
    }[];
    service: {
        title: string;
        description: string;
        services: {
            id: number;
            title: string;
            text: string;
            image: string;
            link: string;
            bgcolor: string;
            color: string;
            iconColor: string;
            iconBgColor: string;
            iconLabelColor: string;
        }[];
        link: {
            title: string;
            link: string;
            target: string;
        };
    };
    proposal: {
        title: string;
        description: string;
        image: string;
        button: {
            sm: {
                title: string;
            };
            md: {
                title: string;
            };
            href: string;
            target: string;
        };
    };
    case_studies: {
        title: string;
        description: string;
        items: {
            id: number;
            text: string;
        }[];
        link: {
            title: string;
            link: string;
            target: string;
        };
    };
    working_process: {
        title: string;
        description: string;
        items: {
            id: number;
            title: string;
            description: string;
        }[];
    };
    team: {
        title: string;
        description: string;
        members: {
            id: number;
            name: string;
            role: string;
            image: string;
            description: string;
        }[];
        button: {
            title: string;
            href: string;
            target: string;
        };
    };
    testimonial: {
        title: string;
        description: string;
        testimonials: {
            id: number;
            name: string;
            position: string;
            description: string;
        }[];
    };
    contact_us: {
        title: string;
        description: string;
        form: {
            name: {
                label: string;
                placeholder: string;
            };
            email: {
                label: string;
                placeholder: string;
            };
            message: {
                label: string;
                placeholder: string
            }
            radio: {
                id: number;
                label: string;
                value: number;
            }[];
        };
        button: {
            title: string;
        };
        image: {
            url: string;
        };
    };
    layout: {
        header: {
            logo: {
                darkLogo: {
                    url: string;
                };
                lightLogo: {
                    url: string;
                };
            };
            navItems: {
                title: string;
                href: string;
                target: string;
            }[];
            button: {
                title: string;
                href: string;
                target: string;
            };
        };
        footer: {
            logo: {
                darkLogo: {
                    url: string;
                };
                lightLogo: {
                    url: string;
                };
            };
            navItems: {
                title: string;
                href: string;
                target: string;
            }[];
            contact: {
                title: string;
                address: string;
                phone: string;
                email: string;
            };
            form: {
                email: {
                    label: string;
                    placeholder: string;
                };
            };
            button: {
                title: string;
                target: string;
                href: string;
            };
            social: {
                facebook: string;
                twitter: string;
                linkedin: string;
            };
            copyright: {
                text: string;
                link: {
                    title: string;
                    href: string;
                    target: string;
                };
            };
        };
    };
}