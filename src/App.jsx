import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './pages/FrontPage';
import NotesPage from './pages/NotesPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/notespage" element={<NotesPage />} />
      </Routes>
    </Router>
  );
};

export default App;