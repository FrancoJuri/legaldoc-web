import francoJuriImg from '../assets/francojuri-founder.png';

const AboutUs = () => (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Sobre nosotros</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tenemos una misión clara
          </p>
        </div>
        <div className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-500">
            Fundamos <strong>DocuLegal</strong> con un propósito claro: &quot;Revolucionar el trabajo en el sector legal mediante la implementación de <strong>Inteligencia Artificial</strong>.&quot;
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Estamos en el <strong>auge de la inteligencia artificial</strong>, y no aprovechar su potencial es una gran desventaja.
            Nos dimos cuenta de que podíamos dar el primer paso en nuestra misión resolviendo un problema tedioso para los abogados: <strong>el analisis de documentos.</strong>
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Así nació DocuLegal, una plataforma diseñada especialmente <strong>para abogados</strong>, con el objetivo de automatizar esta tarea repetitiva y permitirles <strong>enfocarse en lo que realmente importa</strong>: brindar asesoramiento legal de alto valor a sus clientes.
          </p>
        </div>
        <div className="mt-8">
          <img
            className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
            src={francoJuriImg}
            alt="Fundador de LegalAI"
          /> 
          <div className="text-center mt-4">
            <p className="text-lg font-medium text-gray-900">
              <a href="https://francojuri.com" target="_blank" className="hover:underline">Franco Juri</a>
            </p>
            <p className="text-sm text-gray-500">Fundador de DocuLegal - Desarrollador de Software</p>
          </div>
        </div>
      </div>
    </div>
)

export default AboutUs;