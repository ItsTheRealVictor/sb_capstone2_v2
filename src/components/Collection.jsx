import React, { useState } from 'react';
import Note from './Note';
import { ChromePicker } from 'react-color';

function Collection({ collection, onSaveCollection }) {
  const [title, setTitle] = useState(collection.title);
  const [showInput, setShowInput] = useState(true);
  const [editing, setEditing] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [collectionNotes, setCollectionNotes] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [tempBackgroundColor, setTempBackgroundColor] = useState(backgroundColor);

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

  const handleEditCollection = () => {
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
    setTitle(collection.title);
    setShowInput(true);
  };

  const handleAddNote = () => {
    const newNote = <Note key={Date.now()} />;
    setCollectionNotes([...collectionNotes, newNote]);
  };

  const handleOpenColorPicker = () => {
    setTempBackgroundColor(backgroundColor);
    setShowColorPicker(true);
  };

  const handleCancelColorSelection = () => {
    setShowColorPicker(false);
  };

  const handleSaveColorSelection = () => {
    setBackgroundColor(tempBackgroundColor);
    setShowColorPicker(false);
  };

  const handleSaveCollection = () => {
    const updatedCollection = {
      ...collection,
      title: title,
      backgroundColor: backgroundColor,
      notes: collectionNotes,
    };
    onSaveCollection(updatedCollection);
    setShowInput(true);
    setTitle('');
    setCollectionNotes([]);
  };

  const handleColorChange = (color) => {
    setTempBackgroundColor(color.hex);
  };

  return (
    <div style={{ backgroundColor }}>
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
                  <button onClick={handleEditCollection}>Edit Collection</button>
                  {showColorPicker ? (
                    <div>
                      <ChromePicker color={tempBackgroundColor} onChange={handleColorChange} />
                      <button onClick={handleSaveColorSelection}>Save Color</button>
                      <button onClick={handleCancelColorSelection}>Cancel</button>
                    </div>
                  ) : (
                    <button onClick={handleOpenColorPicker}>Change Background Color</button>
                  )}
                  <button onClick={handleSaveCollection}>Save Collection</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {collectionNotes}
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}

export default Collection;
