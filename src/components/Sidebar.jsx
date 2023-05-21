import React from 'react'

function Sidebar({ notes }) {
  return (
    <div>
      <h1>fart</h1>
      {notes.map((note) => {
        <p>note: {note.title} </p>
      })}


    </div>
  )
}

export default Sidebar