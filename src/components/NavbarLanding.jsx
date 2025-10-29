import React, {useEffect, useState} from 'react'

const NavbarLanding = ()=>{
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-40 transition-all ${scrolled? 'backdrop-blur bg-white/70 shadow-md': 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo2" className="h-24 rounded-md shadow-sm" />
          
        </div>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#services" className="hover:text-primary-600 transition">Servicios</a>
          <a href="#requirements" className="hover:text-primary-600 transition">Requisitos</a>
          <a href="#booking" className="hover:text-primary-600 transition">Reservar</a>
          <a href="/login" className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
            Iniciar Sesión
          </a>
        </nav>
        <div className="md:hidden">
          <a href="#booking" className="bg-primary-600 text-white px-3 py-2 rounded-md">Reservar</a>
        </div>
      </div>
    </header>
  )
}

export default NavbarLanding
