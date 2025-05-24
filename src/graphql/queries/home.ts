import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner.fragment";
import { GameFragment } from "graphql/fragments/game.fragment";
import { HighlightFragment } from "graphql/fragments/highlight.fragment"

export const QUERY_HOME = gql`
  query QueryHome ($date: Date!) {
    banners {
      ...BannerFragment
    }
    

    newGames: games ( 
      filters:  {
        release_date:  {
          gt: $date
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
          gt: $date
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

    sections: home {
      newGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      
      popularGames {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
      
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
      
      freeGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${HighlightFragment}
`
