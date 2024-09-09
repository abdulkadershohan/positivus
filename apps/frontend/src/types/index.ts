import { StackProps, SxProps, TypographyProps } from "@mui/material";

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
            target: "_blank" | "_self" | "_parent" | "_top";
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
            bgcolor: 'primary' | 'secondary' | 'info'
            color: 'primary' | 'secondary' | 'info';
            iconColor: 'primary' | 'secondary' | 'info';
            iconBgColor: 'primary' | 'secondary' | 'info';
            iconLabelColor: 'text.primary' | 'text.secondary' | 'text.info';
        }[];
        link: {
            title: string;
            link: string;
            target: "_blank" | "_self" | "_parent" | "_top";
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
            target: "_blank" | "_self" | "_parent" | "_top";
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
            target: "_blank" | "_self" | "_parent" | "_top";
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
            target: "_blank" | "_self" | "_parent" | "_top";
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
                target: "_blank" | "_self" | "_parent" | "_top";
            }[];
            button: {
                title: string;
                href: string;
                target: "_blank" | "_self" | "_parent" | "_top";
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
                target: "_blank" | "_self" | "_parent" | "_top";
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
                href: string;
                target: "_blank" | "_self" | "_parent" | "_top";
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
                    target: "_blank" | "_self" | "_parent" | "_top";
                };
            };
        };
    };
}
export type ISingleServiceProps = {
    title: string;
    text: string;
    image: string;
    link: string;
    bgcolor: 'primary' | 'secondary' | 'info'
    color: 'primary' | 'secondary' | 'info';
    iconColor: 'primary' | 'secondary' | 'info';
    iconBgColor: 'primary' | 'secondary' | 'info';
    labelColor?: 'text.primary' | 'text.secondary' | 'text.info';
    id?: number;
    btnTitle: {
        title: string;
        link: string;
        target: "_blank" | "_self" | "_parent" | "_top";
    }
};
export type ICardProps = {
    children: React.ReactNode,
    onClick?: () => void
    sx?: SxProps
    cardProps?: StackProps,
    bgcolor?: 'primary' | 'secondary' | 'info'
}
export type IconBoxProps = {
    bgcolor?: string;
    iconColor?: string;
    onClick?: () => void;
    label?: string;
    labelProps?: TypographyProps,
    labelColor?: string,
    icon?: React.ReactNode
};
export type ITextWithBgProps = {
    text: string
    rest?: TypographyProps
    bgcolor: 'primary' | 'secondary' | 'info'
}


/// backend

// banner component type
export type IBannerComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        image: {
            id: number;
            alt: string;
            image: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: null; // Adjust this type if 'formats' may contain data
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: {
                            public_id: string;
                            resource_type: string;
                        };
                        createdAt: string;
                        updatedAt: string;
                    };
                };
            };
        };
        button: {
            id: number;
            title: string;
            href: string;
            target: string;
        };
    }
};

// company_logo component type
export type ICompanyLogoComponent = {
    data: {
        id: number;
        __component: string;
        logo: {
            id: number;
            alt: string;
            image: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: null; // Adjust this type if 'formats' may contain data
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: {
                            public_id: string;
                            resource_type: string;
                        };
                        createdAt: string;
                        updatedAt: string;
                    };
                };
            };
        }[];
    }
}

// service component type
export type IServiceComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        services: IService[];
    }
}

export type IService = {
    id?: number;
    title: string;
    text: string;
    color: "primary" | "secondary" | "info";
    bgcolor: "primary" | "secondary" | "info";
    iconColor: "primary" | "secondary" | "info";
    iconBgColor: "primary" | "secondary" | "info";
    iconLabelColor: "text.primary" | "text.secondary" | "text.info";
    image: {
        id: number;
        alt: string;
        image: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string | null;
                    caption: string | null;
                    width: number;
                    height: number;
                    formats: null; // Adjust if 'formats' may contain data
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl: string | null;
                    provider: string;
                    provider_metadata: {
                        public_id: string;
                        resource_type: string;
                    };
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
    };
    button: {
        id: number;
        title: string;
        href: string;
        target: string;
    };
}

// proposal component type
export type IProposalComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        image: {
            id: number;
            alt: string;
            image: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: null; // Adjust if 'formats' may contain data
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: {
                            public_id: string;
                            resource_type: string;
                        };
                        createdAt: string;
                        updatedAt: string;
                    };
                };
            };
        };
        button: {
            id: number;
            sm_title: string;
            md_title: string;
            href: string;
            target: string;
        };
    }
}

// case_studies component type
export type ICaseStudiesComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        button: {
            id: number;
            title: string;
            href: string;
            target: string;
        };
        items: {
            id: number;
            title: string;
        }[];
    };
}

// working_process component type
export type IWorkingProcessComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        data: {
            id: number;
            title: string;
            description: string;
        }[];
    };

}

// team component type
export type ITeamComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        button: {
            id: number;
            title: string;
            href: string;
            target: string;
        };
        members: {
            id: number;
            name: string;
            role: string;
            description: string;
            linkedin: string;
            image: {
                id: number;
                alt: string;
                image: {
                    data: {
                        id: number;
                        attributes: {
                            name: string;
                            alternativeText: string | null;
                            caption: string | null;
                            width: number;
                            height: number;
                            formats: {
                                thumbnail: {
                                    ext: string;
                                    url: string;
                                    hash: string;
                                    mime: string;
                                    name: string;
                                    path: string | null;
                                    size: number;
                                    width: number;
                                    height: number;
                                    sizeInBytes: number;
                                    provider_metadata: {
                                        public_id: string;
                                        resource_type: string;
                                    };
                                };
                            };
                            hash: string;
                            ext: string;
                            mime: string;
                            size: number;
                            url: string;
                            previewUrl: string | null;
                            provider: string;
                            provider_metadata: {
                                public_id: string;
                                resource_type: string;
                            };
                            createdAt: string;
                            updatedAt: string;
                        };
                    };
                };
            };
        }[];
    };
}

// testimonial component type
export type ITestimonialComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        testimonials: {
            id: number;
            name: string;
            position: string;
            description: string;
        }[];
    };
}

// contact_us component type
export type IContactUsComponent = {
    data: {
        id: number;
        __component: string;
        title: string;
        description: string;
        image: {
            id: number;
            alt: string;
            image: {
                data: {
                    id: number;
                    attributes: {
                        name: string;
                        alternativeText: string | null;
                        caption: string | null;
                        width: number;
                        height: number;
                        formats: any | null; // Adjust based on the actual structure of formats if needed
                        hash: string;
                        ext: string;
                        mime: string;
                        size: number;
                        url: string;
                        previewUrl: string | null;
                        provider: string;
                        provider_metadata: {
                            public_id: string;
                            resource_type: string;
                        };
                        createdAt: string;
                        updatedAt: string;
                    };
                };
            };
        };
        button: {
            id: number;
            title: string;
            href: string;
            target: string;
        };
        form1: {
            id: number;
            label: string;
            placeholder: string;
            required: boolean;
        };
        form2: {
            id: number;
            label: string;
            placeholder: string;
            required: boolean;
        };
        form3: {
            id: number;
            label: string;
            placeholder: string;
            required: boolean;
        };
        radio: {
            id: number;
            label: string;
            value: number;
        }[];
    };
}


