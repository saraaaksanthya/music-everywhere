import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Navigation bar
import MusicPlayer from './MusicPlayer';
import SearchBar from './SearchBar';
import SongsList from './SongsList'; // Songs list page
import About from './About'; // About page
import Contact from './Contact'; // Contact page
import './App.css';

// Array of song details
const songDetails = [
  { title: "Kannadi Poove", artist: "Santhosh Narayanan", duration: "4:21" },
  { title: "Sithira Puthiri", artist: "Sai Abhyankkar", duration: "3:46" },
  { title: "Yedi", artist: "GV Prakash", duration: "3:21" },
  { title: "Dhinam Oru Kavithai", artist: "Sriram Srinivasan", duration: "1:42" },
  { title: "Vazhithunaiye", artist: "Leon James", duration: "3:38" },
  { title: "Quit Pannuda", artist: "Anirudh Ravichandher", duration: "4:16" },
  { title: "Thangamey", artist: "Anirudh Ravichandher", duration: "4:22" },
  { title: "Yennai Izhukkuthadi", artist: "AR Rahman", duration: "3:48" },
  { title: "K for Kabaradakkam", artist: "Asal Kolaar", duration: "2:25" },
  { title: "Thaaye Thaaye", artist: "Sid Sriram", duration: "3:38" },
];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div className="home-container">
                <h1 className="heading">MUSIC EVERYWHERE</h1>
                <div className="search-bar-container">
                  <SearchBar onSearch={handleSearch} />
                </div>
                <div className="music-player-container">
                  <MusicPlayer searchQuery={searchQuery} />
                </div>
              </div>
            }
          />
          {/* Songs List Route */}
          <Route path="/songs" element={<SongsList songs={songDetails} />} />
          {/* About Page Route */}
          <Route path="/about" element={<About />} />
          {/* Contact Page Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
