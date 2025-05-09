/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGames
// ====================================================

export interface QueryGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGames_games {
  __typename: "Game";
  name: string;
  slug: string;
  price: number;
  cover: QueryGames_games_cover | null;
  developers: (QueryGames_games_developers | null)[];
}

export interface QueryGames {
  games: (QueryGames_games | null)[];
}

export interface QueryGamesVariables {
  limit: number;
}
