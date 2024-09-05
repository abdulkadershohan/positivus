import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form.radio': FormRadio;
      'form.input': FormInput;
    }
  }
}
