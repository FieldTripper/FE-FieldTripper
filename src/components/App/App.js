import './App.css';
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer'
import {Routes, Route} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';
import React, {useState} from 'react';

function App() {
  // const [museums, setMuseums] = useState([])
  const updateSearch = () => {
 
  }


  return (
    <main>
      <Routes>
        <Route path='/' element={<SearchForm updateSearch={updateSearch} />} />
        <Route path='/museums' element={<MuseumsContainer />} />
      </Routes>
    </main>
  );
}

export default App;
