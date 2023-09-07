import './App.css'
import Navbar from './components/Navbar/index'
import Events from './components/Events'
import { useState } from 'react';

function App() {

const [search, setSearch] = useState("")

const handleNavSearch = (termino) => {
setSearch(termino)
};
console.log(search);

  return (
    <>
     <Navbar onSearch={handleNavSearch} />
     <Events searchValue={search} />
    </>
  )
}



export default App
