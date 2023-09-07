import './App.css'
import Navbar from './components/Navbar/nav'
import Events from './components/Events/event'
import { useState } from 'react';
import Form from './components/Form/form';

function App() {

const [search, setSearch] = useState("")

const handleNavSearch = (termino) => {
setSearch(termino)
};
console.log(search);

  return (
    <>
    <Form />
     <Navbar onSearch={handleNavSearch} />
     <Events searchValue={search} />
    </>
  )
}



export default App
