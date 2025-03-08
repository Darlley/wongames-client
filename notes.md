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