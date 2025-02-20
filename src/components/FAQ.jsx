

const FAQ = () => {
    const faqs = [
      {
        question: "¿Qué tipos de documentos puede analizar la plataforma?",
        answer:
          "Nuestra plataforma puede analizar una amplia gama de documentos legales, incluyendo contratos, escrituras, testamentos, informes periciales, y más. Está diseñada para manejar documentos en formato PDF.",
      },
      {
        question: "¿Cómo garantizan la seguridad y confidencialidad de los documentos?",
        answer:
          "La seguridad es nuestra prioridad. Utilizamos cifrado de extremo a extremo para todos los documentos subidos a nuestra plataforma. Además, no almacenamos los documentos más allá del tiempo necesario para el análisis.",
      },
      {
        question: "¿Cuánto tiempo se tarda en analizar un documento?",
        answer:
          "El tiempo de análisis depende del tamaño y complejidad del documento, pero en general, la mayoría de los documentos se analizan en cuestión de segundos a minutos.",
      },
      {
        question: "¿Puedo hacer preguntas específicas sobre el documento?",
        answer:
          "Sí, una vez que el documento ha sido analizado, puedes hacer preguntas específicas y nuestra IA te proporcionará respuestas basadas en el contenido del documento.",
      },
      {
        question: "¿La plataforma es compatible con otros softwares legales?",
        answer:
          "Estamos trabajando continuamente en integraciones con otros softwares legales populares. Actualmente, ofrecemos API para facilitar la integración con tus herramientas existentes.",
      },
    ]
  
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Preguntas frecuentes</h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-lg">
                    <button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className="h-6 w-6 transform rotate-0"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}

export default FAQ;