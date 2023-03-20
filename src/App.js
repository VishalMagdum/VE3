import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ModulePage from './components/ModulePage';
import { data, search } from './store'

import Module from './components/Module';
import SearchIcon from './components/SearchIcon';
import SearchPage from './components/SearchPage';
import Homeicon from './components/Homeicon';
function App() {

  return (
    <BrowserRouter>
      <SearchIcon />
      <Homeicon />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/select-module' element={<ModulePage data={data} />} />

        {data && data.map((item, index) => (
          <Route path={`/module-${item.module}`} element={< Module data={item} />} />
        ))}
        <Route path='/search' element={<SearchPage search={search} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
