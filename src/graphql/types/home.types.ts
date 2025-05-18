import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE } from "./global.types";
import { QueryGameBySlugGamesType, QueryGamesType } from "./games.types";

/**
 * HOME
*/
export interface QueryHome {
  banners: QueryHome_banners[];
  newGames: QueryHome_newGames[];
  upcomingGames: QueryHome_upcomingGames[];
  freeGames: QueryHome_freeGames[];
}

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

/**
 * NEW GAMES
 */
export interface QueryHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_newGames_cover | null;
  developers: QueryHome_newGames_developers[];
  price: number;
}

/**
 * UPCOMING GAMES
 */
export interface QueryHome_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upcomingGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_upcomingGames_cover | null;
  developers: QueryHome_upcomingGames_developers[];
  price: number;
}

/**
 * FREE GAMES
 */
export interface QueryHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_freeGames_cover | null;
  developers: QueryHome_freeGames_developers[];
  price: number;
}

/**
 * FIELDS
 */

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