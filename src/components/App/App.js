import './App.css';
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer'
import {Routes, Route} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';
import React, {useState} from 'react';
import Header from '../Header/Header'

function App() {
  const [values, setSearchTerms] = useState({city: '', state: '', zipCode: ''})

  const updateSearch = (values) => {
    setSearchTerms({city: values.city, state: values.state, zipCode: values.zipCode})
  }

  console.log(process.env)

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<SearchForm updateSearch={updateSearch} />} />
        <Route path='/museums' element={<MuseumsContainer queryValues={values} />} />
      </Routes>
    </main>
  );
}

export default App;
