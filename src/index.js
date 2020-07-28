import React, { Component } from 'react'
import { render } from 'react-dom'

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      Welcome to the Library
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root')
)