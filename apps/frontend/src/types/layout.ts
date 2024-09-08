type CloudinaryMetadata = {
    public_id: string;
    resource_type: string;
};

type ImageAttributes = {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: CloudinaryMetadata;
    createdAt: string;
    updatedAt: string;
};

type IImageData = {
    id: number;
    attributes: ImageAttributes;
};

type Logo = {
    id: number;
    alt: string | null;
    image: {
        data: IImageData;
    };
};

type MenuItem = {
    id: number;
    title: string;
    href: string;
    target: string;
};

type Button = {
    id: number;
    title: string;
    href: string;
    target: string;
};

type Contact = {
    id: number;
    title: string;
    address: string;
    phone: string;
    email: string;
};

type Copyright = {
    id: number;
    title: string;
    button: Button;
};

type SocialLinks = {
    id: number;
    facebook: string;
    twitter: string;
    linkedin: string;
};

type Form = {
    id: number;
    label: string;
    placeholder: string;
    required: boolean | null;
};

type Header = {
    id: number;
    menu: MenuItem[];
    button: Button;
};

type Footer = {
    id: number;
    menu: MenuItem[];
    contact: Contact;
    copyright: Copyright;
    social: SocialLinks;
    form: Form;
    button: Button;
};

type LogoData = {
    id: number;
    dark_logo: Logo;
    light_logo: Logo;
};

type Attributes = {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    header: Header;
    logo: LogoData;
    footer: Footer;
};

export type ILayoutData = {
    id: number;
    attributes: Attributes;
};

export type ApiResponse = {
    data: ILayoutData;
    meta: Record<string, any>;
};
