import NavbarLanding from '../components/NavbarLanding'
import HeroLanding from '../components/HeroLanding'
import ServicesLanding from '../components/ServicesLanding'
import RequirementsLanding from '../components/RequirementsLanding'
import BookingForm from '../components/BookingForm'
import FooterLanding from '../components/FooterLanding'

const Landing = () => {
  return (
    <div className="font-sans text-gray-800">
      <NavbarLanding />
      <main className="overflow-x-hidden">
        <HeroLanding />
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nuestros servicios</h2>
            <ServicesLanding />
          </div>
        </section>

        <section id="requirements" className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Requisitos</h2>
            <RequirementsLanding />
          </div>
        </section>

        <section id="booking" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Reserva tu service</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <BookingForm />
              </div>
              <div className="hidden lg:flex items-center justify-center card relative">
                <img src="/service2.jpg" alt="service" className="rounded-lg shadow-lg transform hover:scale-105 transition-transform" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterLanding />
    </div>
  )
}

export default Landing
