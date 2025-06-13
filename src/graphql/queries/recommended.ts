import { gql } from "@apollo/client"
import { GameFragment } from "graphql/fragments/game.fragment";
import { HighlightFragment } from "graphql/fragments/highlight.fragment"

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`