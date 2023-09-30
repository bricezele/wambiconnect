/**
 * @Project wambi-connect
 * @File GlobalStyle.tsx
 * @Path core/application/components/layout
 * @Author BRICE ZELE
 * @Date 06/08/2023
 */
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    overflow-x: hidden;
    font-family: 'Work Sans';
    line-height: 1;
    font-weight: 400;
    font-style: normal;
    color: #9c9c9c;
    font-size: 18px;
  }

  ol, ul {
    list-style: none;
  }

  a:hover {
    text-decoration: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a:focus {
    text-decoration: none;
    outline: none;
  }

  a:hover {
    color: #fff;
  }

  button {
    outline: none;
  }

  input {
    outline: none;
  }

  textarea {
    outline: none;
  }

  section {
    width: 100%;
  }

  img {
    float: left;
  }

  p {
    font-size: 18px;
    line-height: 24px;
  }
`
export default GlobalStyle
