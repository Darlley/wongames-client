import React from 'react'
import Game, { GameTemplateProps } from 'templates/Game'

export default function GamePage({ cover }: GameTemplateProps) {
  return (
    <Game cover={cover} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      cover: 'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'dota-2' } },
    ],
    fallback: false
  }
}
