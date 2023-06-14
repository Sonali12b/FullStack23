import React from 'react'
import { Routes,Route } from "react-router-dom";
import { Signin } from './Pages/Signin';
import { Signup } from './Pages/Signup';
import { Body } from './components/Body';
import { SearchProvider } from "./components/searchContext";
export const Allroutes = () => {
  return (
    <Routes>
          <Route path='/' element={<SearchProvider><Body /> </SearchProvider>} />

            <Route path='/signin' element={<Signin></Signin>}/>
            <Route path='/signup' element={<Signup></Signup>}/>
    </Routes>

  )
}
