import React, { useState } from 'react';
import { Button } from '@mui/material';
import Collection from '../components/Collection';

function NotesPage() {
  const [collections, setCollections] = useState([]);
  const [showCollectionForm, setShowCollectionForm] = useState(false);
  const [newCollectionTitle, setNewCollectionTitle] = useState('');

  const handleCreateCollection = () => {
    setShowCollectionForm(true);
  };

  const handleCancelCollection = () => {
    setShowCollectionForm(false);
    setNewCollectionTitle('');
  };

  const handleSaveCollection = () => {
    const newCollection = {
      title: newCollectionTitle,
      notes: [],
    };
    setCollections((prevCollections) => [...prevCollections, newCollection]);
    setShowCollectionForm(false);
    setNewCollectionTitle('');
  };

  const handleTitleChange = (e) => {
    setNewCollectionTitle(e.target.value);
  };

  const handleCreateNote = (collectionIndex, newNote) => {
    const updatedCollections = [...collections];
    updatedCollections[collectionIndex].notes.push(newNote);
    setCollections(updatedCollections);
  };

  return (
    <div>
      {!showCollectionForm && (
        <Button variant="contained" onClick={handleCreateCollection}>
          Create New Collection
        </Button>
      )}

      {showCollectionForm && (
        <div>
          <input
            type="text"
            placeholder="Collection Title"
            value={newCollectionTitle}
            onChange={handleTitleChange}
          />
          <Button variant="contained" onClick={handleSaveCollection}>
            Save Collection
          </Button>
          <Button onClick={handleCancelCollection}>Cancel</Button>
        </div>
      )}

      {collections.map((collection, index) => (
        <Collection
          key={index}
          title={collection.title}
          notes={collection.notes}
          onCreateNote={(newNote) => handleCreateNote(index, newNote)}
        />
      ))}
    </div>
  );
}

export default NotesPage;
