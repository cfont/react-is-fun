import React from 'react'
import { render } from 'react-dom'

let bookList = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  { title: "Hunger", author: "Roxane Gay", pages: 320 },
  { title: "White Teeth", author: "Zadie Smith", pages: 480 },
  { title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304 },
];

render(
  <Library books={bookList} />,
  document.getElementById('root')
)