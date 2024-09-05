import type { Schema, Attribute } from '@strapi/strapi';

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
    email: Attribute.Component<'form.input'>;
    button: Attribute.Component<'component.component'>;
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
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.menu': HeaderMenu;
      'form.radio': FormRadio;
      'form.input': FormInput;
      'footer.menu': FooterMenu;
      'component.social': ComponentSocial;
      'component.responsive-button': ComponentResponsiveButton;
      'component.logo': ComponentLogo;
      'component.image': ComponentImage;
      'component.copyright': ComponentCopyright;
      'component.contact': ComponentContact;
      'component.component': ComponentComponent;
    }
  }
}
