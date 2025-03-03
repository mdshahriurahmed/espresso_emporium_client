
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Products from './Component/Products'
import NotFound from './Component/NotFound'
import Login from './Component/Login'
import Signup from './Component/Signup'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './AuthProvider'
import Dashboard from './Component/Dashboard'

function App() {


  return (
    <>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<AuthProvider>
          <Dashboard></Dashboard>

        </AuthProvider>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
