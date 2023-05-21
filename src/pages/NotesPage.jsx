import React, { useState } from 'react';
import { Button } from '@mui/material';
import Collection from '../components/Collection';
import CollectionList from '../components/CollectionList';

const NotesPage = () => {
  const [collections, setCollections] = useState([]);
  const [savedCollections, setSavedCollections] = useState([]);

  const handleCreateCollection = () => {
    setCollections((prevCollections) => [
      ...prevCollections,
      {
        id: Date.now(),
        title: '',
        backgroundColor: '#ffffff',
        notes: []
      }
    ]);
  };

  const handleDeleteCollection = (collectionId) => {
    setCollections((prevCollections) =>
      prevCollections.filter((collection) => collection.id !== collectionId)
    );
    setSavedCollections((prevCollections) =>
      prevCollections.filter((collection) => collection.id !== collectionId)
    );
  };

  const handleAddNote = (collectionId, note) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            notes: [...collection.notes, note]
          };
        }
        return collection;
      })
    );
  };

  const handleDeleteNote = (collectionId, noteId) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            notes: collection.notes.filter((note) => note.id !== noteId)
          };
        }
        return collection;
      })
    );
  };

  const handleUpdateNote = (collectionId, noteId, updatedTitle, updatedContent) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            notes: collection.notes.map((note) => {
              if (note.id === noteId) {
                return {
                  ...note,
                  title: updatedTitle,
                  content: updatedContent
                };
              }
              return note;
            })
          };
        }
        return collection;
      })
    );
  };

  const handleUpdateCollection = (collectionId, updatedCollection) => {
    setCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            ...updatedCollection
          };
        }
        return collection;
      })
    );
  };

  const handleSaveCollection = (collectionData) => {
    setSavedCollections((prevCollections) => [
      ...prevCollections,
      { id: Date.now(), ...collectionData }
    ]);
    setCollections((prevCollections) => prevCollections.filter((collection) => collection.id !== collectionData.id));
  };

  return (
    <div>
      <Button onClick={handleCreateCollection}>Create New Collection</Button>
      {collections.map((collection) => (
        <Collection
          key={collection.id}
          id={collection.id}
          title={collection.title}
          backgroundColor={collection.backgroundColor}
          notes={collection.notes}
          onDeleteNote={handleDeleteNote}
          onUpdateNote={handleUpdateNote}
          onAddNote={(note) => handleAddNote(collection.id, note)}
          onDeleteCollection={handleDeleteCollection}
          onUpdateCollection={(updatedCollection) =>
            handleUpdateCollection(collection.id, updatedCollection)
          }
          onSaveCollection={handleSaveCollection}
        />
      ))}
      {savedCollections.length > 0 && <CollectionList collections={savedCollections} />}
    </div>
  );
};

export default NotesPage;
