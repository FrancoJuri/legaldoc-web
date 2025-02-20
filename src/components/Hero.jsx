const Hero = () => (
    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 min-h-[70vh]">
      <div className="max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Analiza documentos legales</span>
            <span className="block">en cuestión de segundos</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Nuestro analizador de documentos con IA está diseñado específicamente para abogados, ahorrándote horas de
            trabajo manual y permitiéndote encontrar la información crucial en un instante.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-primary-50 sm:px-8"
              >
                Probar gratis
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm text-indigo-100">
            Los abogados ahorran un promedio de 5 horas por semana usando nuestra plataforma
          </p>
        </div>
      </div>
    </div>
)

export default Hero;