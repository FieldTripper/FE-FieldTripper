import './App.css';
import MuseumsContainer from '../MuseumsContainer/MuseumsContainer'
import {Routes, Route} from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';

function App() {

  const submitSearch = () => {
    
  }

  return (
    <main>
      <Routes>
        <Route path='/' element={<SearchForm />} />
        <Route path='/museums' element={<MuseumsContainer />} />
      </Routes>
    </main>
  );
}

export default App;
