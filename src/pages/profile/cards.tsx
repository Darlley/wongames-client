import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'
import CardsList, { CardsListProps } from 'components/CardsLists'

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}