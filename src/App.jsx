import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import NotesPage from './pages/NotesPage';
import FlashcardPage from './pages/FlashcardPage';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/notespage" element={<NotesPage />} />
        <Route path="/flashcards" element={<FlashcardPage/>}/>
      </Routes>
      <Sidebar/>
    </Router>
  );
};

export default App;