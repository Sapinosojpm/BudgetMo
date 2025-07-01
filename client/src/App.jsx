import Navbar from './components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Ipon from './pages/Ipon'
import Gastos from './pages/Gastos'
import Login from './pages/Login'
function App() {
  

  return (
    <>
     <Navbar />
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ipon" element={<Ipon />} />
      <Route path="/gastos" element={<Gastos />} />
      <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
