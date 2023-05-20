import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import NotesPage from './pages/NotesPage';
import FlashcardPage from './pages/FlashcardPage';
import CollectionGenerator from './components/CollectionGenerator';
import Sidebar from './components/Sidebar';

const App = () => {
  const [collections, setCollections] = useState([]);

  const addCollection = (collection) => {
    setCollections([...collections, collection]);
  };

  return (
    <Router>
      <Navbar />
      <Sidebar collections={collections} />
      <Routes>
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/notespage" element={<NotesPage />} />
        <Route path="/flashcards" element={<FlashcardPage />} />
      </Routes>
      <CollectionGenerator addCollection={addCollection} />
    </Router>
  );
};

export default App;
