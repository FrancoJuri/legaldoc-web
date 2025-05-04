import legalDocFirst from '../assets/legaldoc-first.png';
import legalDocSecond from '../assets/legaldoc-second.png';
import legalDocThird from '../assets/legaldoc-third.png';

const Transformation = () => {
  const steps = [
    {
      number: "1",
      title: "Sube tus documentos legales .PDF",
      description: "Carga fácilmente tus documentos legales en formato PDF a nuestra plataforma segura.",
      image: legalDocFirst,
    },
    {
      number: "2",
      title: "Abre un chat con tu documento legal",
      description: "Inicia una conversación interactiva con tu documento. Nuestra IA procesará y entenderá todo su contenido.",
      image: legalDocSecond,
    },
    {
      number: "3",
      title: "Pregunta lo que necesites!",
      description: "Obtén respuestas precisas y análisis detallados sobre cualquier aspecto de tu documento legal.",
      image: legalDocThird,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">La solución</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transforma tu práctica legal con IA
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Mira como funciona LegalDoc
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                         gap-8 items-center`}
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-medium text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-500">
                  {step.description}
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transformation;