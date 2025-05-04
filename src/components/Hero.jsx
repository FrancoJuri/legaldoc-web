import legalDocHero from '../assets/legaldoc-hero.png';
import legalDocHeroResponsive from '../assets/legaldoc-hero-responsive.png';

const Hero = () => (
    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 min-h-[70vh]">
      <div className="max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              <span className="block">Analiza tus documentos legales</span>
              <span className="block">en cuestión de minutos</span>
            </h1>
            <p className="mt-3 text-sm text-indigo-100 sm:text-base md:mt-4 md:text-lg max-w-xl mx-auto md:mx-0">
              Nuestro analizador de documentos con IA está diseñado específicamente para abogados, ahorrándote horas de
              trabajo manual y permitiéndote encontrar la información crucial en un instante.
            </p>
            <div className="mt-8">
              <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-1 sm:gap-5">
                <a
                  href="https://wa.link/09sns7"
                  target='_blank'
                  rel='noopener noreferrer'
                  className="flex items-center justify-center px-4 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 bg-white hover:bg-primary-50 sm:px-6"
                >
                  Probar gratis
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs text-indigo-100 sm:text-sm">
              Los abogados ahorran un promedio de 8 horas por semana usando nuestra plataforma
            </p>
          </div>
          
          <div className="relative w-full h-full group perspective-1000">
            <div className="w-full h-full flex items-center justify-center transition-transform duration-300 ease-out hover:scale-[1.02]">
              <img 
                src={legalDocHero}
                className="max-w-full max-h-[500px] w-auto h-auto rounded-lg shadow-xl transition-all duration-300 ease-out hover:shadow-2xl transform-gpu group-hover:translate-y-[-2px] hover:rotate-y-[-2deg] hover:rotate-x-[2deg] hidden max-[480px]:hidden min-[481px]:block"
                alt="Sistema LegalDoc Desktop"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  const xRotation = ((y - rect.height / 2) / rect.height) * -10;
                  const yRotation = ((x - rect.width / 2) / rect.width) * 10;
                  
                  el.style.transform = `
                    perspective(1000px)
                    scale(1.02)
                    rotateX(${xRotation}deg)
                    rotateY(${yRotation}deg)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                }}
              />
              <img 
                src={legalDocHeroResponsive}
                className="max-w-full max-h-[500px] w-auto h-auto rounded-lg shadow-xl block min-[481px]:hidden"
                alt="Sistema LegalDoc Mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
)

export default Hero;