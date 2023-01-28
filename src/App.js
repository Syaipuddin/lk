import React, {useEffect} from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate } from 'react-router-dom';


import HomePage from './components/homepage';
import Program from './components/program';
import Berita from './components/berita';
import AdminBerita from './components/adminberita';
import TambahBerita from './components/tambahBerita';
import IsiBerita from './components/isiBerita';
import IsiProgram from './components/isiProgram';
import tambahBerita from './components/tambahBerita';

function App (){
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path='/' element = {<HomePage/>}/>
                                <Route path='/program' element = {<Program/>}/>
                                <Route path='/berita' element = {<Berita/>}/>
                                <Route path='/adminberita' element = {<AdminBerita/>} />
                                <Route path='adminberita/tambahberita' element = {<TambahBerita/>} />
                                <Route path='/berita/id' search='?id=:id' element = {<IsiBerita />} />
                                <Route path='/program/id' search='?id=:id' element = {<IsiProgram />} />
                        </Routes>
                </BrowserRouter>
        )
    
}


export default App;