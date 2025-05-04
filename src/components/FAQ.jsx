import { useState} from 'react';

const FAQ = () => {
    const faqs = [
      {
        question: "¿Qué tipos de documentos puede analizar la plataforma?",
        answer:
          "Nuestra plataforma puede analizar todo tipo de documentos legales, incluyendo contratos, escrituras, testamentos, informes periciales, y más.",
      },
      {
        question: "¿Cómo garantizan la seguridad y confidencialidad de los documentos?",
        answer:
          "La seguridad es nuestra prioridad. Tenemos reglas estrictas en nuestra base de datos para que solo tu puedas ver los documentos que subiste.",
      },
      {
        question: "¿Cuánto tiempo se tarda en analizar un documento?",
        answer:
          "Depende del tamaño del documento. Puedes obtener un resumen en cuestión de segundos y luego puedes hacer la cantidad de preguntas que quieras sobre el documento.",
      },
      {
        question: "¿Puedo hacer preguntas específicas sobre el documento?",
        answer:
          "Sí, una vez que el documento ha sido analizado, puedes hacer preguntas específicas y nuestra IA te proporcionará respuestas basadas en el contenido del documento y te indicara de que parte del documento se basa la respuesta.",
      },
      {
        question: "¿Cuál es el costo de la plataforma?",
        answer: (
          <>
            Tenemos los precios mas bajos del mercado (desde $35.000 pesos argentinos x mes) y somos la única plataforma especializada en el sector legal. Por ahora, ofrecemos 2 planes que puedes elegir. La diferencia entre ellos radica en la cantidad de documentos que puedes analizar y la longitud máxima de los mismos. Además, puedes probar nuestra plataforma de forma gratuita antes de decidirte.{' '}
            <a 
              href="/precios" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver precios
            </a>
          </>
        ),
      },
      {
        question: "¿Es posible cancelar mi suscripción en cualquier momento?",
        answer:
          "Sí, puedes cancelar tu suscripción en cualquier momento. No hay tarifas ocultas ni penalizaciones.",
      },
    ]
  
    // Agregar estado para controlar la pregunta abierta
    const [openQuestion, setOpenQuestion] = useState(null);

    // Función para manejar el click en una pregunta
    const toggleQuestion = (questionIndex) => {
      setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
    };

    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Preguntas frecuentes</h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="pt-6">
                  <dt className="text-lg">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="text-left w-full flex justify-between items-start text-gray-400"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg
                          className={`h-6 w-6 transform ${
                            openQuestion === index ? "rotate-180" : "rotate-0"
                          } transition-transform duration-200`}
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
                  <dd 
                    className={`mt-2 pr-12 transition-all duration-300 ease-in-out ${
                      openQuestion === index 
                        ? "max-h-96 opacity-100 transform translate-y-0" 
                        : "max-h-0 opacity-0 transform -translate-y-2 overflow-hidden"
                    }`}
                  >
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          {/* Nuevo banner */}
          <div className="max-w-3xl mx-auto mt-12 bg-blue-600 rounded-lg py-8 px-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes más dudas?
              </h3>
              <p className="text-white mb-6">
                Estamos aquí para ayudarte con todas tus consultas
              </p>
              <a
                href="https://wa.link/sikush"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Contáctanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FAQ;