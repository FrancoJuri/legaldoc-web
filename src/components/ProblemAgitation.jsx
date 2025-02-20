
const ProblemAgitation = () => (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">El problema</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            La revisión manual de documentos es cosa del pasado
          </p>
        </div>
  
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "Tiempo perdido",
                description: "Horas interminables revisando documentos manualmente, retrasando otros casos importantes.",
              },
              {
                title: "Mayor margen de error",
                description:
                  "La fatiga y la presión pueden llevar a pasar por alto detalles cruciales en los documentos.",
              },
              {
                title: "Costos elevados",
                description: "El tiempo dedicado a la revisión manual se traduce en costos más altos para los clientes.",
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
      </div>
    </div>
)

export default ProblemAgitation;