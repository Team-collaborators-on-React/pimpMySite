import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/home_page/HomePage'
import './App.scss'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}

export default App
