
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Client/Register'
import SignIn from './pages/Client/Signin'
import NotFound404 from './components/common/NotFound404'

function App() {

  return (
    <>
    <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/signin' element={<SignIn/>} />

      <Route path='/404' element={<NotFound404/>} />
    </Routes>
    </>
  )
}

export default App
