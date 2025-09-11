import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAuraMilestoneSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_aura_milestone_sections';
  info: {
    displayName: 'Aura Milestone Section';
  };
  attributes: {
    data: Schema.Attribute.Component<'cards.aura-milestone-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBoardDirectors extends Struct.ComponentSchema {
  collectionName: 'components_blocks_board_directors';
  info: {
    displayName: 'Board Directors';
  };
  attributes: {
    description: Schema.Attribute.Text;
    teams: Schema.Attribute.Component<'cards.team-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBrandsFilterSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brands_filter_sections';
  info: {
    displayName: 'Brands Filter Section';
  };
  attributes: {
    categoryAllTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'All'>;
    description: Schema.Attribute.Text;
    hasCategoryAll: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    maxBrands: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12>;
    serviceType: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    showTabbing: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCardSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_sections';
  info: {
    displayName: 'Card Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    subheading: Schema.Attribute.Text;
  };
}

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

export interface BlocksContactInformation extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_informations';
  info: {
    displayName: 'Contact Information';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    store: Schema.Attribute.Component<'cards.brand-contact-info', true>;
    tiktok: Schema.Attribute.String;
    website: Schema.Attribute.String;
    x: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface BlocksCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface BlocksFactFiguresSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fact_figures_sections';
  info: {
    displayName: 'Fact Figures Section';
    icon: 'collapse';
  };
  attributes: {
    description: Schema.Attribute.Text;
    statsInfo: Schema.Attribute.Component<'cards.fact-info-counter', true>;
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

export interface BlocksFullSizeImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_size_images';
  info: {
    displayName: 'Full Size Image';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    isParallax: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
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
      Schema.Attribute.DefaultTo<'page'>;
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

export interface BlocksMediaRoomSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_room_sections';
  info: {
    displayName: 'Media Room Section';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPartnerWithUsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_partner_with_us_sections';
  info: {
    displayName: 'Partner With Us Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRestaurantBrandsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_restaurant_brands_sections';
  info: {
    displayName: 'Restaurant Brands Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksRestaurantsHappeningSection
  extends Struct.ComponentSchema {
  collectionName: 'components_blocks_restaurants_happening_sections';
  info: {
    displayName: 'Restaurants Happening Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    restaurants_happenings: Schema.Attribute.Relation<
      'oneToMany',
      'api::restaurants-happening.restaurants-happening'
    >;
    title: Schema.Attribute.String;
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

export interface BlocksShuffleGallery extends Struct.ComponentSchema {
  collectionName: 'components_blocks_shuffle_galleries';
  info: {
    displayName: 'Shuffle Gallery';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our brands have rapidly grown, becoming popular destinations for various customer segments due to our wide range of offerings.'>;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Gallery'>;
  };
}

export interface BlocksSignatureMenu extends Struct.ComponentSchema {
  collectionName: 'components_blocks_signature_menus';
  info: {
    displayName: 'Signature Menu';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
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

export interface CardsAuraMilestoneCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_aura_milestone_cards';
  info: {
    displayName: 'Aura Milestone Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    year: Schema.Attribute.String;
  };
}

export interface CardsBrandContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_cards_brand_contact_infos';
  info: {
    displayName: 'Brand Contact Info';
  };
  attributes: {
    address: Schema.Attribute.String;
    delivery: Schema.Attribute.Component<'elements.link', true>;
    location: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    otherPhoneNo: Schema.Attribute.String;
    otherPhoneText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Other Phone No:'>;
    phoneNo: Schema.Attribute.String;
    workingHoursInfo: Schema.Attribute.Blocks;
    workingInfo: Schema.Attribute.Component<'elements.working-info', true>;
  };
}

export interface CardsCardPost extends Struct.ComponentSchema {
  collectionName: 'components_cards_card_posts';
  info: {
    displayName: 'Card Post';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    excerpt: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CardsFactInfoCounter extends Struct.ComponentSchema {
  collectionName: 'components_cards_fact_info_counters';
  info: {
    displayName: 'Fact Info Counter';
  };
  attributes: {
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['number', 'percentage']> &
      Schema.Attribute.DefaultTo<'number'>;
    value: Schema.Attribute.String;
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

export interface CardsTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    description: Schema.Attribute.String;
    fullName: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
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
    text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Find Out More'>;
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

export interface ElementsWorkingInfo extends Struct.ComponentSchema {
  collectionName: 'components_elements_working_infos';
  info: {
    displayName: 'Working Info';
  };
  attributes: {
    day: Schema.Attribute.String;
    hours: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    applestore: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    get_in_touch: Schema.Attribute.Component<'elements.link', false>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
    playstore: Schema.Attribute.String;
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
      'blocks.aura-milestone-section': BlocksAuraMilestoneSection;
      'blocks.board-directors': BlocksBoardDirectors;
      'blocks.brands-filter-section': BlocksBrandsFilterSection;
      'blocks.card-section': BlocksCardSection;
      'blocks.carousel': BlocksCarousel;
      'blocks.contact-information': BlocksContactInformation;
      'blocks.cta-section': BlocksCtaSection;
      'blocks.fact-figures-section': BlocksFactFiguresSection;
      'blocks.featured-brands': BlocksFeaturedBrands;
      'blocks.franchise-and-careers-section': BlocksFranchiseAndCareersSection;
      'blocks.full-size-image': BlocksFullSizeImage;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.main-news-section': BlocksMainNewsSection;
      'blocks.media-room-section': BlocksMediaRoomSection;
      'blocks.partner-with-us-section': BlocksPartnerWithUsSection;
      'blocks.restaurant-brands-section': BlocksRestaurantBrandsSection;
      'blocks.restaurants-happening-section': BlocksRestaurantsHappeningSection;
      'blocks.service-cards': BlocksServiceCards;
      'blocks.shuffle-gallery': BlocksShuffleGallery;
      'blocks.signature-menu': BlocksSignatureMenu;
      'blocks.text-section': BlocksTextSection;
      'cards.aura-milestone-card': CardsAuraMilestoneCard;
      'cards.brand-contact-info': CardsBrandContactInfo;
      'cards.card-post': CardsCardPost;
      'cards.fact-info-counter': CardsFactInfoCounter;
      'cards.franchise-careers-card': CardsFranchiseCareersCard;
      'cards.service-card': CardsServiceCard;
      'cards.team-card': CardsTeamCard;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.working-info': ElementsWorkingInfo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'site-settings.contact-info': SiteSettingsContactInfo;
      'site-settings.social-info': SiteSettingsSocialInfo;
    }
  }
}
