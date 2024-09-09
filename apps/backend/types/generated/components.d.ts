import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface HeaderMenu extends Schema.Component {
  collectionName: 'components_header_menus';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    menu: Attribute.Component<'component.component', true>;
    button: Attribute.Component<'component.component'>;
  };
}

export interface FormRadio extends Schema.Component {
  collectionName: 'components_form_radios';
  info: {
    displayName: 'radio';
    icon: '';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.Integer;
  };
}

export interface FormInput extends Schema.Component {
  collectionName: 'components_form_inputs';
  info: {
    displayName: 'Input';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface FooterMenu extends Schema.Component {
  collectionName: 'components_footer_menus';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    menu: Attribute.Component<'component.component', true>;
    contact: Attribute.Component<'component.contact'>;
    copyright: Attribute.Component<'component.copyright'>;
    social: Attribute.Component<'component.social'>;
    form: Attribute.Component<'form.input'>;
    button: Attribute.Component<'component.component'>;
  };
}

export interface ComponentWorkingProcessCard extends Schema.Component {
  collectionName: 'components_component_working_process_cards';
  info: {
    displayName: 'WorkingProcessCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentTestimonialCard extends Schema.Component {
  collectionName: 'components_component_testimonial_cards';
  info: {
    displayName: 'TestimonialCard';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ComponentTeamMembersCard extends Schema.Component {
  collectionName: 'components_component_team_members_cards';
  info: {
    displayName: 'TeamMembersCard';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    image: Attribute.Component<'component.image'>;
    description: Attribute.Text;
    linkedin: Attribute.String;
  };
}

export interface ComponentSocial extends Schema.Component {
  collectionName: 'components_component_socials';
  info: {
    displayName: 'social';
  };
  attributes: {
    facebook: Attribute.String;
    twitter: Attribute.String;
    linkedin: Attribute.String;
  };
}

export interface ComponentServicesCard extends Schema.Component {
  collectionName: 'components_component_services_cards';
  info: {
    displayName: 'ServicesCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    image: Attribute.Component<'component.image'>;
    color: Attribute.Enumeration<['primary', 'secondary', 'info']>;
    bgcolor: Attribute.Enumeration<['primary', 'secondary', 'info']>;
    iconColor: Attribute.Enumeration<['primary', 'secondary', 'info']>;
    iconBgColor: Attribute.Enumeration<['primary', 'secondary', 'info']>;
    iconLabelColor: Attribute.Enumeration<
      ['text.primary', 'text.secondary', 'text.info']
    >;
    button: Attribute.Component<'component.component'>;
  };
}

export interface ComponentResponsiveButton extends Schema.Component {
  collectionName: 'components_component_responsive_buttons';
  info: {
    displayName: 'responsive_button';
    description: '';
  };
  attributes: {
    sm_title: Attribute.String;
    md_title: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_parent', '_top']>;
  };
}

export interface ComponentLogo extends Schema.Component {
  collectionName: 'components_component_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    dark_logo: Attribute.Component<'component.image'>;
    light_logo: Attribute.Component<'component.image'>;
  };
}

export interface ComponentImage extends Schema.Component {
  collectionName: 'components_component_images';
  info: {
    displayName: 'Image';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    alt: Attribute.String;
  };
}

export interface ComponentCopyright extends Schema.Component {
  collectionName: 'components_component_copyrights';
  info: {
    displayName: 'copyright';
  };
  attributes: {
    title: Attribute.String;
    button: Attribute.Component<'component.component'>;
  };
}

export interface ComponentContact extends Schema.Component {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    email: Attribute.String & Attribute.Required;
    address: Attribute.Text;
  };
}

export interface ComponentComponent extends Schema.Component {
  collectionName: 'components_button_components';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
    target: Attribute.Enumeration<['_self', '_blank', '_parent', '_top']> &
      Attribute.DefaultTo<'_self'>;
  };
}

export interface ComponentCaseStudiesCard extends Schema.Component {
  collectionName: 'components_component_case_studies_cards';
  info: {
    displayName: 'CaseStudiesCard';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
  };
}

export interface BlockWorkingProcess extends Schema.Component {
  collectionName: 'components_block_working_processes';
  info: {
    displayName: 'working process';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    data: Attribute.Component<'component.working-process-card', true>;
  };
}

export interface BlockTestimonial extends Schema.Component {
  collectionName: 'components_block_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Component<'component.testimonial-card', true>;
  };
}

export interface BlockTeam extends Schema.Component {
  collectionName: 'components_block_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.component'>;
    members: Attribute.Component<'component.team-members-card', true>;
  };
}

export interface BlockService extends Schema.Component {
  collectionName: 'components_block_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    services: Attribute.Component<'component.services-card', true>;
  };
}

export interface BlockProposal extends Schema.Component {
  collectionName: 'components_block_proposals';
  info: {
    displayName: 'proposal';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Component<'component.image'>;
    button: Attribute.Component<'component.responsive-button'>;
  };
}

export interface BlockContactUs extends Schema.Component {
  collectionName: 'components_block_contact_uses';
  info: {
    displayName: 'Contact us';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    button: Attribute.Component<'component.component'>;
    image: Attribute.Component<'component.image'>;
    form1: Attribute.Component<'form.input'>;
    form2: Attribute.Component<'form.input'>;
    form3: Attribute.Component<'form.input'>;
    radio: Attribute.Component<'form.radio', true>;
  };
}

export interface BlockCompanyLogo extends Schema.Component {
  collectionName: 'components_block_company_logos';
  info: {
    displayName: 'Company logo';
  };
  attributes: {
    logo: Attribute.Component<'component.image', true>;
  };
}

export interface BlockCaseStudies extends Schema.Component {
  collectionName: 'components_block_case_studies';
  info: {
    displayName: 'Case studies';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'component.component'>;
    items: Attribute.Component<'component.case-studies-card', true>;
  };
}

export interface BlockBanner extends Schema.Component {
  collectionName: 'components_block_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Component<'component.image'>;
    button: Attribute.Component<'component.component'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'header.menu': HeaderMenu;
      'form.radio': FormRadio;
      'form.input': FormInput;
      'footer.menu': FooterMenu;
      'component.working-process-card': ComponentWorkingProcessCard;
      'component.testimonial-card': ComponentTestimonialCard;
      'component.team-members-card': ComponentTeamMembersCard;
      'component.social': ComponentSocial;
      'component.services-card': ComponentServicesCard;
      'component.responsive-button': ComponentResponsiveButton;
      'component.logo': ComponentLogo;
      'component.image': ComponentImage;
      'component.copyright': ComponentCopyright;
      'component.contact': ComponentContact;
      'component.component': ComponentComponent;
      'component.case-studies-card': ComponentCaseStudiesCard;
      'block.working-process': BlockWorkingProcess;
      'block.testimonial': BlockTestimonial;
      'block.team': BlockTeam;
      'block.service': BlockService;
      'block.proposal': BlockProposal;
      'block.contact-us': BlockContactUs;
      'block.company-logo': BlockCompanyLogo;
      'block.case-studies': BlockCaseStudies;
      'block.banner': BlockBanner;
    }
  }
}
