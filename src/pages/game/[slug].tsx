import React from 'react'
import Game, { GameTemplateProps } from 'templates/Game'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { initializeApollo } from 'utils/apollo'
import { useRouter } from 'next/router'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from 'graphql/queries/games'
import { QueryGameBySlugVariablesType, QueryGamesVariablesType } from 'graphql/types/games.types'
import { GetStaticProps } from 'next'
import { ResponseQueryGameBySlugType, ResponseQueryGamesType } from 'graphql/types/games.types'
import { QueryRecommended } from 'graphql/types/recommended.types'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper } from 'utils/mappers'

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

  if(!data.games.length) return { notFound: true }

  const game = data.games[0]

  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

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
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
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
