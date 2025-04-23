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
