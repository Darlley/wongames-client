import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner.fragment";
import { GameFragment } from "graphql/fragments/game.fragment";

export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      ...BannerFragment
    }
    

    newGames: games ( 
      filters:  {
        release_date:  {
          gt: "2025-05-18"
        }
      }, 
      sort: ["release_date:desc"]
      pagination:  {
        limit: 8
      }
    ) {
      ...GameFragment
    }

    upcomingGames: games ( 
      filters:  {
        release_date:  {
          gt: "2025-05-18"
        }
      }, 
      sort: ["release_date:asc"]
      pagination:  {
        limit: 8
      }
    ) {
      ...GameFragment
    }

    freeGames: games ( 
      filters:  {
        price:  {
          eq: 0
        }
      }, 
      sort: ["release_date:desc"]
      pagination:  {
        limit: 8
      }
    ) {
      ...GameFragment
    }
  }

  ${BannerFragment}
  ${GameFragment}
`
