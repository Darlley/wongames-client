import { gql } from "@apollo/client";

export const QUERY_GAMES = gql`
  query QueryGames ($limit: Int!) {
    games (pagination: { limit: $limit }) {
      name
      slug
      price

      cover {
        url
      }
      developers {
        name
      }
    }
  }
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug ($slug: String) {
    games (
      filters:  {
        slug:  {
          eq: $slug
        }
      }
    ) {
      name
      price
      description
      short_description
      rating
      release_date
      cover {
        src: url
        label: alternativeText
      }
      gallery {
        src: url
        label: alternativeText
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
` 