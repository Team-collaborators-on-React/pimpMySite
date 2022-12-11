import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/home_page/HomePage'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import ContactUs from './components/contactus/ContactUs'
import './App.scss'

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contactus" element={<ContactUs />} />
            </Routes>
    )
}

export default App
