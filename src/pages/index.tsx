import { useQuery, gql } from '@apollo/client';

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo';

const GET_LOCATIONS = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data, loading, error } = await apolloClient.query({
    query: GET_LOCATIONS
  })

  return {
    props: {
      data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighligth: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}