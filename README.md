# mc-react-classname

Create React Elements using CSS Classes. Useful to work with CSS frameworks and legacy projects.

## Motivation

Sometimes I have to deal with CSS Framworks from CDNs or I have to implement new components using legacy Desing Systems or themes. Anyway, for different reasons, you might ended up using CSS classes to style your components, at that might polute your code quite a lot. I tried many libraries, and there are many awesome libraries out there, but nothing as simple or straight forward as what I'm trying to achieve here.
Let me know what you think.

## Installation

```bash
> yarn add mc-react-classname
```

## Use

### Using [TailwindCSS](https://tailwindcss.com/):

- TailwindCSS CDN:

```html
<link
  href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
  rel="stylesheet"
/>
```

- `components.ts`

```ts
import css from "mc-react-classname";

// Layout
export const Main = css.div`
  absolute top-0 left-0 
  min-h-screen min-w-full 
  bg-gray-800 
`;
// Table
export const Table = css.table`
  relative w-full h-screen 
  border overflow-auto
`;
export const Head = css.thead``;
export const Title = css.th`
  sticky top-0 px-6 py-3
`;
export const Body = css.tbody`divide-y`;
export const Cell = css.td`
  px-6 py-4 text-center
`;
export const Row = css.tr``;
```

- `App.tsx`

```tsx
import { Main, Table, Head, Title, Body, Cell, Row } from "components";

function App() {
  return (
    <Main style={{ fontFamily: "'Lato',sans-serif" }}>
      <Table>
        <Head>
          <Row>
            <Title className="text-red-900 bg-red-300">Header</Title>
          </Row>
        </Head>
        <Body className="bg-red-100">
          <Row>
            <Cell>Column</Cell>
          </Row>
        </Body>
        <Head>
          <Row>
            <Title className="text-green-900 bg-green-300">Header</Title>
          </Row>
        </Head>
        <Body className="bg-green-100">
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
        </Body>
        <Head>
          <Row>
            <Title className="text-blue-900 bg-blue-300">Header</Title>
          </Row>
        </Head>
        <Body className="bg-blue-100">
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
        </Body>
        <Head>
          <Row>
            <Title className="text-yellow-900 bg-yellow-300">Header</Title>
          </Row>
        </Head>
        <Body className="bg-yellow-100">
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
        </Body>
        <Head>
          <Row>
            <Title className="text-purple-900 bg-purple-300">Header</Title>
          </Row>
        </Head>
        <Body className="bg-purple-100">
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
          <Row>
            <Cell>Column</Cell>
          </Row>
        </Body>
      </Table>
    </Main>
  );
}
```
