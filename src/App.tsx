import React, {useState} from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import CharacterDetails from "./pages/CharacterDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

function App() {

    const [search, setSearch] = useState<string>(localStorage.getItem('currentSearch') ?? '')

    return (
        <div>
            <nav className='flex h-[50px] mb-2 items-center bg-gray-500 text-white'>
                <div className='ml-2'>Rick & Morty Characters</div>
                <Link className='ml-4' to='/'>Home</Link>
                <Link className='ml-4' to='/about'>About</Link>
                <div className='ml-auto flex'>
                    <MagnifyingGlassIcon className='mr-2 w-8 h-8'/>
                    <input
                        className='block ml-auto mr-4 w-60 appearance-none rounded-none rounded-md border border-gray-300 px-2 py-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search'
                    />
                </div>

            </nav>
            <Routes>
                <Route path='/' element={<Home search={search}/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/character/:id' element={<CharacterDetails/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
