import React, { useState } from 'react';
import Collection from '../components/Collection';

const NotesPage = () => {
  const [collections, setCollections] = useState([]);
  const [newCollectionTitle, setNewCollectionTitle] = useState('');
  const [showCollectionInput, setShowCollectionInput] = useState(false);

  const handleCreateCollection = () => {
    setShowCollectionInput(true);
  };

  const handleSaveCollection = () => {
    if (newCollectionTitle) {
      const newCollection = {
        id: Date.now(),
        title: newCollectionTitle,
        backgroundColor: getRandomColor(),
        notes: [],
      };
      setCollections((prevCollections) => [...prevCollections, newCollection]);
      setNewCollectionTitle('');
      setShowCollectionInput(false);
    }
  };

  const handleCancelCollection = () => {
    setShowCollectionInput(false);
    setNewCollectionTitle('');
  };

  const handleDeleteNote = (collectionId, noteId) => {
    const updatedCollections = collections.map((collection) => {
      if (collection.id === collectionId) {
        const updatedNotes = collection.notes.filter((note) => note.id !== noteId);
        return { ...collection, notes: updatedNotes };
      }
      return collection;
    });
    setCollections(updatedCollections);
  };

  const handleUpdateNote = (collectionId, noteId, updatedTitle, updatedContent) => {
    const updatedCollections = collections.map((collection) => {
      if (collection.id === collectionId) {
        const updatedNotes = collection.notes.map((note) => {
          if (note.id === noteId) {
            return {
              ...note,
              title: updatedTitle,
              content: updatedContent,
            };
          }
          return note;
        });
        return { ...collection, notes: updatedNotes };
      }
      return collection;
    });
    setCollections(updatedCollections);
  };

  const getRandomColor = () => {
    const colors = ['#f8e6ea', '#f9e6f5', '#e5e8f8', '#e7f8e8', '#f8f7e5'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      {!showCollectionInput && (
        <button onClick={handleCreateCollection}>Create New Collection</button>
      )}

      {showCollectionInput && (
        <div>
          <input
            type="text"
            value={newCollectionTitle}
            onChange={(e) => setNewCollectionTitle(e.target.value)}
          />
          <button onClick={handleSaveCollection}>Save Collection</button>
          <button onClick={handleCancelCollection}>Cancel</button>
        </div>
      )}

      {collections.map((collection) => (
        <Collection
          key={collection.id}
          title={collection.title}
          backgroundColor={collection.backgroundColor}
          notes={collection.notes}
          onDeleteNote={(noteId) => handleDeleteNote(collection.id, noteId)}
          onUpdateNote={(noteId, updatedTitle, updatedContent) =>
            handleUpdateNote(collection.id, noteId, updatedTitle, updatedContent)
          }
          onAddNote={(note) => {
            const updatedCollections = collections.map((col) => {
              if (col.id === collection.id) {
                return { ...col, notes: [...col.notes, note] };
              }
              return col;
            });
            setCollections(updatedCollections);
          }}
        />
      ))}
    </div>
  );
};

export default NotesPage;
