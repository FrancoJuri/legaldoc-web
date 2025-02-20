

const Features = () => (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Herramientas poderosas para abogados modernos
          </p>
        </div>
  
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: "Análisis de documentos",
                description: "Sube tus documentos PDF y obtén un análisis detallado en segundos.",
              },
              {
                name: "Preguntas y respuestas",
                description: "Haz preguntas específicas sobre el documento y obtén respuestas precisas al instante.",
              },
              {
                name: "Resúmenes inteligentes",
                description: "Genera resúmenes concisos de documentos extensos para una rápida revisión.",
              },
              {
                name: "Seguridad y privacidad",
                description: "Tus documentos están seguros con nuestro cifrado de extremo a extremo.",
              },
            ].map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
)

export default Features;