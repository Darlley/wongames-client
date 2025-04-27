import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    },
  })

  return {
    props: {
      revalidate: 6,
      games: data.games.map((game: GameType) => ({
        title: game?.name,
        developer: game?.developers[0].name,
        img: game?.cover?.url ? `http://localhost:1337${game?.cover?.url}` : '/img/logo-gh.svg',
        price: new Intl.NumberFormat('en', {
          style: 'currency',
          currency: 'USD'
        }).format(game?.price),
      })),
      filterItems: filterItemsMock
    }
  }
}

type GameType = {
  name: string
  slug: string
  price: number
  cover: {
    url: string
  }
  developers: Array<{
    name: string
  }>
}