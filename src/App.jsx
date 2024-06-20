import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const WIP_MESSAGE = "Disculpa las molestias, esta página aún se encuentra en construcción..."
  const ERROR_MESSAGE = "¡Uy! Esa página no existe, intentalo de nuevo..."

  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<h2>{WIP_MESSAGE}</h2>} />
          <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
        </Routes>
      </main>
      <footer>
        Swiftly Cuadernos | 2024
      </footer>
    </BrowserRouter>
  )
}

export default App
