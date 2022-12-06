import './App.css';
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer'
import {Routes, Route} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';
import React, {useState} from 'react';

function App() {
  const [values, setSearchTerms] = useState({city: '', state: '', zipCode: ''})

  const updateSearch = (values) => {
    setSearchTerms({city: values.city, state: values.state, zipCode: values.zipCode})
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<SearchForm updateSearch={updateSearch} />} />
        <Route path='/museums' element={<MuseumsContainer queryValues={values} />} />
      </Routes>
    </main>
  );
}

export default App;
