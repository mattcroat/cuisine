import { css } from '@emotion/react'

export const globalStyles = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* spacing */
    --spacing-8: 0.5rem;
    --spacing-16: 1rem;
    --spacing-24: 1.5rem;
    --spacing-32: 2rem;
    --spacing-64: 4rem;
    /* font size */
    --size-16: 1rem;
    --size-20: 1.25rem;
    --size-24: 1.5rem;
    --size-32: 2rem;
    --size-40: 2.5rem;
    /* colors */
    --charcoal-13: hsl(0, 0%, 13%);
    --charcoal-28: hsl(0, 0%, 28%);
    --alabaster-98: hsl(0, 0%, 98%);
    --alabaster-99: hsl(0, 0%, 99%);
    --buttercup-50: hsl(44, 90%, 50%);
    --snow-100: hsl(0, 0%, 100%);
    --cod-gray-10: hsla(0, 0%, 10%, 60%);
    --gray-52: hsl(0, 0%, 52%);
    --silver-78: hsla(0, 0%, 78%, 20%);
    /* box shadow */
    --shadow-lg: 0px 4px 20px rgba(0, 0, 0, 0.1);
    /* radius */
    --radius-base: 4px;
  }

  body {
    font-family: 'Merriweather', serif;
    font-size: var(--size-16);
    color: var(--charcoal-13);
    background-color: var(--snow-100);
  }

  h1,
  h2,
  h3 {
    font-family: 'Playfair Display', serif;
  }

  h2,
  h3 {
    color: var(--charcoal-28);
  }

  h1 {
    font-size: var(--size-32);
  }

  h2 {
    font-size: var(--size-24);
  }

  h3 {
    font-size: var(--size-20);
  }

  p {
    font-weight: 300;
    line-height: 1.6;
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    position: relative;
    color: inherit;
    text-decoration: none;
  }

  a::after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background-color: var(--charcoal-13);
    transition: width 0.3s;
  }

  a:hover::after {
    width: 100%;
  }

  a,
  input,
  button {
    transition: box-shadow 0.3s;
  }

  *:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: 0 0 0 2px var(--buttercup-50);
  }

  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }

  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }

  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }

  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
`
