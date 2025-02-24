
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Component/Header'
import Home from './Component/Home'
import Products from './Component/Products'
import NotFound from './Component/NotFound'

function App() {


  return (
    <>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </>
  )
}

export default App
