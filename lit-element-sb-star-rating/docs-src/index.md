---
layout: page.11ty.cjs
title: <sb-star-rating> ⌲ Home
---

# &lt;sb-star-rating>

`<sb-star-rating>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<sb-star-rating>` is just an HTML element. You can it anywhere you can use HTML!

```html
<sb-star-rating></sb-star-rating>
```

  </div>
  <div>

<sb-star-rating></sb-star-rating>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<sb-star-rating>` can be configured with attributed in plain HTML.

```html
<sb-star-rating name="HTML"></sb-star-rating>
```

  </div>
  <div>

<sb-star-rating name="HTML"></sb-star-rating>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<sb-star-rating>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;sb-star-rating&gt;</h2>
  <sb-star-rating .name=${name}></sb-star-rating>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;sb-star-rating&gt;</h2>
<sb-star-rating name="lit-html"></sb-star-rating>

  </div>
</section>
