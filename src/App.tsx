
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Client/Register'
import SignIn from './pages/Client/Signin'

function App() {

  return (
    <>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
    </>
  )
}

export default App
