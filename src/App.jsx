import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/Home'
import SinglePage from './routes/singlePage/SinglePage'
import Cart from './components/cart/Cart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlePage" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </>
  )
}

export default App
