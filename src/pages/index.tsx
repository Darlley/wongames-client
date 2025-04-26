import { useQuery, gql } from '@apollo/client';

import Home from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const GET_LOCATIONS = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: any) {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log({
    loading, error, data
  })

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
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