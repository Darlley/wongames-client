Aula 94

Um componente deve ser tanto um `button` quanto um anchor link `a`:

```ts
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
```

Com o type podemos extender igual interface usando `&`:

```ts
export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: JSX.Element
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  as?: React.ElementType
} & ButtonTypes
```

Usamos assim:

```tsx
<Button as="a" href="/link">
  Buy now
</Button>

<Button as="button" type="submit">
  Submit
</Button>
```

Nos testes podemos desestruturar o método `debug`:

```tsx
const { debug, container } = renderWithTheme(
  <Button as="a" href="/link">
    Buy now
  </Button>
)
debug(container)
```

No console ele vai renderizar o container (botão).

## SEÇÃO 17

Artigos:

1. ["Inclusively Hiding & Styling Checkboxes and Radio Buttons"](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/), Sarasoueidan.
2. ["How to Make Custom Accessible Checkboxes and Radio Buttons"](https://webdesign.tutsplus.com/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074t), Sami Keijonen.
3. ["Custom Styling Form Inputs With Modern CSS Features"](https://css-tricks.com/custom-styling-form-inputs-with-modern-css-features/), Aaron Iker.


Como saber a tipagem de um elemento HTML?

```tsx
export type CheckboxProps = {
  label?: string
  htmlFor: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>
```

Existe uma lista destes cheat sheets (InputHTMLAttributes<HTMLInputElement>): https://www.saltycrane.com/cheat-sheets/typescript/react/latest/

Fechar modal com ESC:

```tsx	
useEffect(() => {
  const handleKeyUp = ({ key }: KeyboardEvent) => {
    key === 'Escape' && setIsOpen(false)
  }

  window.addEventListener('keyup', handleKeyUp)
  return () => window.removeEventListener('keyup', handleKeyUp)
}, [])
```

AULA 197

Os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

`getStaticProps` => gerar estático em build time (gatsby)
`getServerSideProps` => gerar via ssr a cada request (nunca vai para o bundle do client)
`getInitialProps` => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
`getStaticPaths` => gerar rotas dinamicas dos recursos estáticos de uma API em build time, o fallback false força a criar uma estática especifica manualmente, fallback true é quando recupera de de uma API externa.


**CONDICIONAL DE PROPRIEDADES**

Faça uma condicional pela propriedade com destriction de bjeto vazio (se existir a prop name o id vai ser o mesmo):

```tsx
<S.Input
  name={name}
  {...(label ? { id: name } : {})}
  {...props}
/>
```

---

### GRAPHQL

Enquanto o Strapi usa por baixo dos panos o Apollo Server, na nossa aplciação Next usamos o [Apollo Client](https://www.apollographql.com/docs/react/get-started), que fuciona de forma parecida com SWR ou React Query, é um Gerenciador de Estados próprio para GraphQL.

`npm install @apollo/client graphql`

Crie um Provider na `_app.tsx`

```tsx
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export default function App() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
```

E nos componentes use o Hook do Apollo:

```tsx
import { useQuery, gql } from '@apollo/client';

export default function ComponenteXYZ() {
  const { loading, error, data } = useQuery(
    gql`
      query getGames {
        games {
          name
        }
      }
    `
  );

  loading && <p>Carregando...</p>
  error && <p>Erro...</p>
  data && <Listagem />
}
```

No DevTools você consegue ver a request do GraphQL.

O problema é que nossos dados estão sendo gerados no client após a renderização da página. Devemos gerar ele no servidor para não dar problema com SEO e melhorar a performance evitando um load inicial. Para evitar isso crie um arquivo `utils/apollo.ts` que verifica se ja existe uma isntancia do Client, se não existir ele cria uma nova em modo SSR.

Agora fazendo a requisição no servidor:

```tsx
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data, loading, error } = await apolloClient.query({
    query: GET_LOCATIONS
  })

  return {
    props: {
      data
    }
  }
}
```

No DevTools você não consegue mais ver a request do GraphQL, mas consegue fazer um console.log para ver na CLI ou receber o data pela props do componente.

--- 

Como estamos trabalhando com SSR toda requisição deve ser feita em páginas.

Com o `getServerSideProps` toda vez que faz uma requisição ele refaz tudo, muitas requisições sobrecarrega o servidor. Uma página de listagens de jogos não precisa ser real time, então é melhor usar o `getStaticProps` para gerar estático em build time, mas diferente do Gatsby passamos uma parametro `revalidate` para ele atualizar o estático (refazer o build) em determinado tempo em segundos. Então quando o cliente acessa a página ele vê uma página estática que foi gerada em até 60 segundos atrás.

---

Para a geração de tipagens com `apollo` deu erro na primeira tentativa então eu testei outra solução, mas eu voltei atras e instalei as mesmas versões utilizadas no curso e deu certo.

Mas a ouutra solução que eu tinha testado foi esta https://www.apollographql.com/tutorials/client-side-graphql-react/05-codegen:

1. instalar as dependencias `npm install -D @graphql-codegen/cli @graphql-codegen/client-preset`.
2. Criar o arquivo `apollo.config.js`
3. Executar o script `graphql:generate: graphql-codegen`
