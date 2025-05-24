import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGamesVariablesType, ResponseQueryGamesType } from 'graphql/types/games.types'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<ResponseQueryGamesType, QueryGamesVariablesType>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    },
  })

  return {
    props: {
      revalidate: 6,
      games: data?.games?.map((game) => ({
        slug: game?.slug,
        title: game?.name,
        developer: game?.developers[0].name,
        img: game?.cover?.url ? `http://localhost:1337${game?.cover?.url}` : '/img/logo-gh.svg',
        price: game.price,
      })),
      filterItems: filterItemsMock
    }
  }
}