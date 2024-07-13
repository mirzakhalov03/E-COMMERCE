import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/Home'
import Cart from './components/cart/Cart'
import Product from './routes/singlePage/Product'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()


  return (

    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </>
  )
}

export default App
