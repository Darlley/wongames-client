import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/types/home.types'
import { bannerMappper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClienty = initializeApollo()

  const { data: { banners, newGames, upcomingGames, freeGames, sections } } = await apolloClienty.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 10,
      banners: bannerMappper(banners),
      newGames: gamesMapper(newGames),
      mostPopularGames: gamesMapper(sections?.popularGames?.games!),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
      sectionTitles: {
        newGames: sections?.newGames?.title ?? "News",
        mostPopularGames: sections?.popularGames?.title ?? "Most Popular",
        upcomingGames: sections?.upcomingGames?.title ?? "Upcoming",
        freeGames: sections?.freeGames?.title ?? "Free games",
      }
    }
  }
}