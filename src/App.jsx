import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './layout/header/header'
import { Home } from './pages/home/home'
import { Users } from './pages/users/users'
import {Contact} from "./pages/contact/contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
