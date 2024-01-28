import { useState } from 'react'


//Importamos nuestros componentes
import Show from './components/Show'
import Edit from './components/Edit'
import Create from './components/Create'

//Importamos el router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
