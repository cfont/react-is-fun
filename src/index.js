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
      <Book title="The Sun also Rises" author="Ernest Hemingway" pages={260} />
    </div>
  )
}

render(
  <Library />,
  document.getElementById('root')
)