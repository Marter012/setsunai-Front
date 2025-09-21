import React from 'react'
import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pieces from '../pages/Pieces/Pieces'
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder'


const Routes = () => {
  return (
    <ReactDomRoutes>      
      <Route path='/' element={<Home/>}/>
      <Route path='/Pieces' element={<Pieces/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
    </ReactDomRoutes>
  )
}

export default Routes
