import Heading from 'components/Heading'
import Logo from '../Logo'
import * as S from './styles'
import Link from 'next/link'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <Link href="https://www.instagram.com/won-games">
            <a target="_blank" rel="noopenner, noreferrer">
              Instagram
            </a>
          </Link>
          <Link href="https://www.twitter.com/won-games">
            <a target="_blank" rel="noopenner, noreferrer">
              Twitter
            </a>
          </Link>
          <Link href="https://www.youtube.com/won-games">
            <a target="_blank" rel="noopenner, noreferrer">
              Youtube
            </a>
          </Link>
          <Link href="https://www.facebook.com/won-games">
            <a target="_blank" rel="noopenner, noreferrer">
              Facebook
            </a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2020 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
