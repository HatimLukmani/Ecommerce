import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home></Home>}>
        
      </Route>
      <Route>

      </Route>
     </Routes>
     </BrowserRouter> 
     <Footer></Footer>
    </>
  )
}

export default App
