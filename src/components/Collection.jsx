import React, { useState } from 'react';
import TestNote from './TestNote';

function Collection({ notes }) {
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(true);
  const [editing, setEditing] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [collectionNotes, setCollectionNotes] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSaveTitle = () => {
    if (title) {
      setShowInput(false);
      setEditing(false);
      setShowEditButton(true);
    }
  };

  const handleEditTitle = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    if (title) {
      setShowInput(false);
      setEditing(false);
      setShowEditButton(true);
    }
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setTitle('');
    setShowInput(true);
  };

  const handleAddNote = () => {
    const newNote = <TestNote key={Date.now()} />;
    setCollectionNotes([...collectionNotes, newNote]);
  };

  return (
    <div>
      {showInput ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
          />
          <button onClick={handleSaveTitle}>Save Title</button>
        </div>
      ) : (
        <div>
          {editing ? (
            <div>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder={title}
              />
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{title}</h3>
              {showEditButton && (
                <div>
                  <button onClick={handleEditTitle}>Edit Title</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {collectionNotes}
      <button onClick={handleAddNote}>Add Note</button>

      {notes.map((note, index) => (
        <div key={index}>{note}</div>
      ))}
    </div>
  );
}

export default Collection;
