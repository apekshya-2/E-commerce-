import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { CategoryProduct } from './pages/CategoryProduct'

const App = () => {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false)

  const getLocation = async () => {
    if (!navigator.geolocation) {
      console.log('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        try {
          const res = await axios.get(url)
          const exactLocation = res.data.address
          setLocation(exactLocation)
          setOpenDropdown(false)
        } catch (error) {
          console.log('Failed to fetch location data:', error)
        }
      },
      (err) => {
        console.log('User denied location access', err)
      }
    )
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path='/category/:category' element={<CategoryProduct/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart location={location} getLocation={getLocation}/>} 
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
