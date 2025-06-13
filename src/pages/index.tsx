import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome, QueryHomeVariables } from 'graphql/types/home.types'
import { bannerMappper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const TODAY_DATE = new Date().toISOString().slice(0, 10)

  const { 
    data: { banners, newGames, upcomingGames, freeGames, sections } 
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: TODAY_DATE
    }
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