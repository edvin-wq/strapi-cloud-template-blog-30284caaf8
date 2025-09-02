import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedBrands extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_brands';
  info: {
    displayName: 'Featured Brands';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFranchiseAndCareersSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_franchise_and_careers_sections';
  info: {
    displayName: 'Franchise & Careers Section';
  };
  attributes: {
    cards: Schema.Attribute.Component<'cards.franchise-careers-card', true>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['main', 'service', 'page', 'singlePage']
    > &
      Schema.Attribute.DefaultTo<'main'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface BlocksMainNewsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_main_news_sections';
  info: {
    displayName: 'Restaurant News Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksParallaxHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_parallax_heroes';
  info: {
    displayName: 'Parallax Hero';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface BlocksServiceCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_cards';
  info: {
    displayName: 'Service Cards';
  };
  attributes: {
    services: Schema.Attribute.Component<'cards.service-card', true>;
  };
}

export interface BlocksTextSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_text_sections';
  info: {
    displayName: 'Text Section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
  };
}

export interface CardsFranchiseCareersCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_franchise_careers_cards';
  info: {
    displayName: 'Franchise Careers Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CardsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    get_in_touch: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface SiteSettingsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    address: Schema.Attribute.Blocks & Schema.Attribute.Required;
    opening_hours: Schema.Attribute.Blocks & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SiteSettingsSocialInfo extends Struct.ComponentSchema {
  collectionName: 'components_site_settings_social_infos';
  info: {
    displayName: 'SocialInfo';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.carousel': BlocksCarousel;
      'blocks.featured-brands': BlocksFeaturedBrands;
      'blocks.franchise-and-careers-section': BlocksFranchiseAndCareersSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.main-news-section': BlocksMainNewsSection;
      'blocks.parallax-hero': BlocksParallaxHero;
      'blocks.service-cards': BlocksServiceCards;
      'blocks.text-section': BlocksTextSection;
      'cards.franchise-careers-card': CardsFranchiseCareersCard;
      'cards.service-card': CardsServiceCard;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'site-settings.contact-info': SiteSettingsContactInfo;
      'site-settings.social-info': SiteSettingsSocialInfo;
    }
  }
}
