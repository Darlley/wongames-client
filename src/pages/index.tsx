import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/types/home.types'

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
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image.url}`,
        title: banner?.title,
        subtitle: banner?.subtitle,
        buttonLabel: banner?.button?.label,
        buttonLink: banner?.button?.link,
        ...(banner?.ribbon && {
          ribbon: banner?.ribbon?.text || null,
          ribbonColor: banner?.ribbon?.color || null,
          ribbonSize: banner?.ribbon?.size || null,
        }),
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: sections?.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      upcomingGames: upcomingGames?.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      upcomingHighligth: highlightMock,
      freeGames: freeGames?.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      freeHighligth: highlightMock,
      sectionTitles: {
        newGames: sections?.newGames?.title ?? "News",
        mostPopularGames: sections?.popularGames?.title ?? "Most Popular",
        upcomingGames: sections?.upcomingGames?.title ?? "Upcoming",
        freeGames: sections?.freeGames?.title ?? "Free games",
      }
    }
  }
}