import { gql } from "@apollo/client";
import { BannerFragment } from "graphql/fragments/banner.fragment";
import { GameFragment } from "graphql/fragments/game.fragment";
import { HighlightFragment } from "graphql/fragments/highlight.fragment"

export const QUERY_UPCOMING = gql`
  query QueryUpcoming ($date: Date!) {
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

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`
