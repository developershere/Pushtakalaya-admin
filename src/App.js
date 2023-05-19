
import './App.css';

import MainContant from './components/maincontent';
import { Route, Routes } from 'react-router-dom';


import Category from './components/category/Category';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import FreeBook from './components/freeBook/freebook';
import User from './components/user/user';
import SignIn from './components/signin/signin';
import UpdateCategory from './components/category/updateCategory';
import Permission from './components/permission/permission';
import SignUp from './components/signup/signup';
import Home from './components/Home/Home';
import Book from './components/Books/book';
import ViewDescription from './components/viewDescription/description';
import Order from './components/orders/order';
import ShippedOrder from './components/orders/shippedOrder';
import ProtectedRoute from './components/protectedroute/protected';



function App(){
   
  return <div>

  
         <Routes>
            <Route  path='/' element={<SignIn/>}></Route>
            <Route  path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path='/category' element={<ProtectedRoute><Category/></ProtectedRoute>}></Route>
            <Route path='/book' element={<ProtectedRoute><Book/></ProtectedRoute>}></Route>
            <Route path='/freebook' element={<ProtectedRoute><FreeBook/></ProtectedRoute>}></Route>
            <Route path='/user' element={<ProtectedRoute><User/></ProtectedRoute>}></Route>
            <Route path='/updateCategory' element={<UpdateCategory/>}></Route>
            <Route path='/permission' element={<ProtectedRoute><Permission/></ProtectedRoute>}></Route>
            <Route path='/signup' element={<ProtectedRoute><SignUp/></ProtectedRoute>}></Route>
             <Route path='/viewDescription' element={<ProtectedRoute><ViewDescription/></ProtectedRoute>}/>
             <Route path='/orders' element={<ProtectedRoute><Order/></ProtectedRoute>}/>
             <Route path='/shippedOrder' element={<ProtectedRoute><ShippedOrder/></ProtectedRoute>}/>
            
         </Routes>
      
     
   
    </div>
  
}

export default App;
