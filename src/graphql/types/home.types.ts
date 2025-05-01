
/**
 * BANNER
 */

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
  game: QueryGamesType | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
}

import { QueryGameBySlugGamesType, QueryGamesType } from "./games.types";
/**
 * FIELDS
 */

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./global.types";

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}