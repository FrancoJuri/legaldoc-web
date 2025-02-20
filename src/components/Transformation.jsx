

const Transformation = () => (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">La solución</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforma tu práctica legal con IA
          </p>
        </div>
  
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "Análisis rápido",
                description: "Analiza documentos extensos en segundos, liberando tu tiempo para tareas más importantes.",
              },
              {
                title: "Precisión mejorada",
                description:
                  "Nuestra IA identifica y extrae información clave con una precisión superior a la revisión manual.",
              },
              {
                title: "Ahorro de costos",
                description: "Reduce los costos operativos y ofrece servicios más competitivos a tus clientes.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
  
        <div className="mt-10 text-center">
          <img className="mx-auto" src="/placeholder.svg?height=400&width=600" alt="Cómo funciona" />
        </div>
      </div>
    </div>
)

export default Transformation;