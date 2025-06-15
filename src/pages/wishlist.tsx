import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'

import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecommended } from 'graphql/types/recommended.types'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(data.recommended?.section?.highlight),
      recommendedSectionTitle: data.recommended?.section?.title
    }
  }
}