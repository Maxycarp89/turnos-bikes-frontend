import React, { useEffect, useState, useRef } from "react";

const images = ["/hero.png"];

const HeroLanding = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000
    );
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="relative pt-28">
      <div className="container mx-auto px-6">
        <div className="carousel-wrapper w-full rounded-2xl overflow-hidden shadow-xl">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[520px]">
            {images.map((src, i) => (
              <div
                key={src}
                className={`carousel-slide ${
                  i === index ? "carousel-slide-active" : ""
                }`}
                role="img"
                aria-label={`slide-${i}`}
              >
                {/* Imagen adaptativa dentro del slide: object-contain para mostrar completa */}
                <div className="slide-media w-full h-full flex items-center justify-center bg-gradient-to-b from-[#ea580c] to-[#fdba74]">
                  <img
                    src={src}
                    alt={`slide-${i}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Copy overlay dentro del slide (solo en desktop) */}
                <div className="carousel-content absolute mt-24 inset-0 invisible lg:visible flex px-6 py-8 lg:py-12  pointer-events-none lg:pointer-events-auto">
                  <div className="max-w-3xl mx-auto lg:mx-0 lg:max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                      Service profesional para tu bicicleta
                    </h1>
                    <p className="text-white/90 mt-3 mb-5">
                      Mantenimiento, ajustes y personalizaciones realizados por
                      técnicos expertos. Reserva hoy y vuelve a rodar con
                      confianza.
                    </p>
                    <div className="flex gap-4 items-center">
                      <a
                        href="#booking"
                        className="inline-block bg-white  text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#ea580c] hover:text-white transition-colors duration-300 focus:bg-[#ea580c] focus:text-white"
                      >
                        Reservar ahora
                      </a>
                      <a
                        href="#services"
                        className="inline-block bg-[#ea580c] border border-white/30 text-gray-200 font-semibold px-5 py-3 rounded-lg hover:bg-white hover:border-white hover:text-gray-900 transition-colors duration-300 focus:bg-white focus:border-white focus:text-gray-900"
                      >
                        Ver servicios
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile copy: mostrar contenido debajo del carousel en pantallas pequeñas */}
          <div className="mobile-hero-copy block lg:hidden bg-white p-6 rounded-b-2xl shadow-md mt-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Service profesional para tu bicicleta
            </h2>
            <p className="text-gray-600 mt-2">
              Mantenimiento, ajustes y personalizaciones realizados por técnicos
              expertos. Reserva hoy y volvé a rodar con confianza.
            </p>
            <div className="mt-2 flex gap-3 items-center pt-2">
              <a
                href="#booking"
                className="bg-primary-600 text-white px-4 py-2 rounded text-center"
              >
                Reservar ahora
              </a>
              <a
                href="#services"
                className="bg-gray-200 px-4 py-2 rounded text-center"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;
