import {
  QueryHome_banners,
  QueryHome_freeGames,
  QueryHome_newGames,
  QueryHome_sections_freeGames_highlight,
  QueryHome_sections_newGames_highlight,
  QueryHome_sections_popularGames_highlight, QueryHome_sections_upcomingGames_highlight,
  QueryHome_upcomingGames
} from "graphql/types/home.types";

export const bannerMappper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
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
  }))
}

export const gamesMapper = (games: QueryHome_newGames[] | QueryHome_upcomingGames[] | QueryHome_freeGames[] | undefined) => {
  return games && games.map((game) => ({
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: game.cover ? `http://localhost:1337${game.cover.url}` : '/img/logo-gh.svg',
    price: game.price
  }))
}

export const highlightMapper = (game: QueryHome_sections_newGames_highlight | QueryHome_sections_popularGames_highlight | QueryHome_sections_upcomingGames_highlight | QueryHome_sections_freeGames_highlight | null | undefined) => {
  return {
    title: game?.title,
    subtitle: game?.subtitle,
    backgroundImage: `http://localhost:1337${game?.background?.url ?? "/img/red-dead-img.jpg"}`,
    floatImage: `http://localhost:1337${game?.floatImage?.url}`,
    buttonLabel: game?.buttonLabel,
    buttonLink: game?.buttonLink,
    alignment: game?.alignment
  }
}