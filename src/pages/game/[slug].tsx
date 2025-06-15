import React from 'react'
import Game, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from 'graphql/queries/games'
import { QueryGameBySlugVariablesType, QueryGamesVariablesType } from 'graphql/types/games.types'
import { GetStaticProps } from 'next'
import { ResponseQueryGameBySlugType, ResponseQueryGamesType } from 'graphql/types/games.types'
import { QueryRecommended } from 'graphql/types/recommended.types'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { QueryUpcoming, QueryUpcomingVariables } from 'graphql/types/upcoming.types'

const apolloClient = initializeApollo()

export default function GamePage(props: GameTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <Game {...props} />
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<ResponseQueryGameBySlugType, QueryGameBySlugVariablesType>({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: String(params?.slug)
    }
  })

  if (!data.games.length) return { notFound: true }

  const game = data.games[0]

  /**
   * GET RECOMMENDED GAMES
   */
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  if (!recommended) return { notFound: true }

  /**
   * GET UPCOMING GAMES
  */
  const TODAY_DATE = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY_DATE
    }
  })

  if (!upcoming) return { notFound: true }

  return {
    props: {
      revalidate: 10,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: String(game.price ?? ''),
        description: game.short_description
      },
      gallery: game.gallery.map(image => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name)
      },
      upcomingSectionTitle: upcoming?.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming?.upcomingGames),
      upcomingHighlight: highlightMapper(upcoming?.showcase?.upcomingGames?.highlight),
      recommendedGames: gamesMapper(recommended.recommended?.section?.games),
      recommendedSectionTitle: recommended.recommended?.section?.title
    }
  }
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<ResponseQueryGamesType, QueryGamesVariablesType>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}
