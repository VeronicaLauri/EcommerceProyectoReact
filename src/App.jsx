import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartComponentContext } from './context/CartContext.jsx'
import { CartItemListContainer } from './components/CartItemListContainer/CartItemListContainer.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'

function App() {
  const WIP_MESSAGE = "Disculpa las molestias, esta página aún se encuentra en construcción..."
  const ERROR_MESSAGE = "¡Uy! Esa página no existe, intentalo de nuevo..."

  return (
    <CartComponentContext>
    <BrowserRouter basename="/Ecommerce-Swiftly-React">
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<h2>{WIP_MESSAGE}</h2>} />
          <Route path="/cart" element={<CartItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
        </Routes>
      </main>
      <footer>
        Swiftly Cuadernos | 2024 | Ecommerce React JS
      </footer>
    </BrowserRouter>
    </CartComponentContext>
  )
}

export default App
