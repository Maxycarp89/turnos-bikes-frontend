import React from 'react'

const FooterLanding = ()=>{
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/logo.png" alt="logo footer" className='h-24 pb-0' />
          <p className="text-sm mt-2">Service profesional. Atención rápida y personalizada.</p>
        </div>
        <div>
          <h5 className="font-semibold">Contacto</h5>
          <p className="text-sm mt-2">Tel: +54 9 11 1234-5678</p>
          <p className="text-sm">Email: contacto@turnosbike.com</p>
        </div>
        <div>
          <h5 className="font-semibold">Horarios</h5>
          <p className="text-sm mt-2">Lun - Vie: 09:00 - 18:00</p>
          <p className="text-sm">Sáb: 09:00 - 14:00</p>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Grupo yuhmak. Todos los derechos reservados.</div>
    </footer>
  )
}

export default FooterLanding
