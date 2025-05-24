import Home, { HomeTemplateProps } from 'templates/Home'
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
      mostPopularGames: sections?.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      mostPopularHighlight: {
        title: sections?.popularGames?.highlight?.title,
        subtitle: sections?.popularGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.popularGames?.highlight?.background?.url ?? "/img/red-dead-img.jpg"}`,
        floatImage: `http://localhost:1337${sections?.popularGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.popularGames?.highlight?.buttonLabel,
        buttonLink: sections?.popularGames?.highlight?.buttonLink,
        alignment: sections?.popularGames?.highlight?.alignment
      },
      upcomingGames: upcomingGames?.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      upcomingHighlight: {
        title: sections?.upcomingGames?.highlight?.title,
        subtitle: sections?.upcomingGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.background?.url ?? "/img/red-dead-img.jpg"}`,
        floatImage: `http://localhost:1337${sections?.upcomingGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.upcomingGames?.highlight?.buttonLabel,
        buttonLink: sections?.upcomingGames?.highlight?.buttonLink,
        alignment: sections?.upcomingGames?.highlight?.alignment
      },
      freeGames: freeGames?.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
        price: game.price
      })),
      freeHighlight: {
        title: sections?.freeGames?.highlight?.title,
        subtitle: sections?.freeGames?.highlight?.subtitle,
        backgroundImage: `http://localhost:1337${sections?.freeGames?.highlight?.background?.url ?? "/img/red-dead-img.jpg"}`,
        floatImage: `http://localhost:1337${sections?.freeGames?.highlight?.floatImage?.url}`,
        buttonLabel: sections?.freeGames?.highlight?.buttonLabel,
        buttonLink: sections?.freeGames?.highlight?.buttonLink,
        alignment: sections?.freeGames?.highlight?.alignment
      },
      sectionTitles: {
        newGames: sections?.newGames?.title ?? "News",
        mostPopularGames: sections?.popularGames?.title ?? "Most Popular",
        upcomingGames: sections?.upcomingGames?.title ?? "Upcoming",
        freeGames: sections?.freeGames?.title ?? "Free games",
      }
    }
  }
}