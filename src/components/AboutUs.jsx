

const AboutUs = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Sobre nosotros</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Transformando la práctica legal
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-500">
            Fundamos LegalAI con una misión clara: revolucionar la forma en que los abogados trabajan con documentos
            legales. Como ex abogados, experimentamos de primera mano la frustración de pasar incontables horas revisando
            documentos extensos y complejos.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Nos dimos cuenta de que la inteligencia artificial podía transformar este proceso, ahorrando tiempo valioso y
            mejorando la precisión. Así nació nuestra plataforma, diseñada por abogados para abogados, con el objetivo de
            liberar a los profesionales legales de las tareas repetitivas y permitirles enfocarse en lo que realmente
            importa: proporcionar asesoramiento legal de alto valor a sus clientes.
          </p>
        </div>
        <div className="mt-10">
          <img
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            src="/placeholder.svg?height=224&width=224"
            alt="Fundador de LegalAI"
          />
          <div className="mt-3 text-center">
            <p className="text-sm font-medium text-gray-900">María Rodríguez</p>
            <p className="text-sm text-gray-500">Co-fundadora y CEO</p>
          </div>
        </div>
      </div>
    </div>
)

export default AboutUs;