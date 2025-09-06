import type { Schema, Struct } from '@strapi/strapi';

export interface ShareKeyList extends Struct.ComponentSchema {
  collectionName: 'components_share_key_lists';
  info: {
    displayName: 'key_list';
    icon: 'bulletList';
  };
  attributes: {
    key_list: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface TeamsSectionMainKey extends Struct.ComponentSchema {
  collectionName: 'components_teams_section_main_keys';
  info: {
    displayName: 'main_key';
    icon: 'apps';
  };
  attributes: {
    key_name: Schema.Attribute.String & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'share.key-list', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'share.key-list': ShareKeyList;
      'teams-section.main-key': TeamsSectionMainKey;
    }
  }
}
