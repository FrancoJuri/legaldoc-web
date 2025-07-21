import { Link } from "react-router";

const PricingCard = ({ 
  title, 
  price,
  fullPrice,
  features, 
  highlighted, 
  icon, 
  buttonIcon, 
  buttonText,
  isAnnual,
  currency = 'ARS',
}) => {

  const whatsappLink = title === 'Pro' ? 'https://wa.link/om143h' : 'https://wa.link/kyhvwf';

  return (
    <div className={`rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
      highlighted 
        ? 'bg-primary-500 text-white' 
        : 'bg-white border border-gray-200'
    }`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <span className="text-3xl">{icon}</span>
      </div>

      <div className="mb-8">
        {isAnnual && (
          <div className="text-sm mb-1">
            <span className={`line-through ${highlighted ? 'text-gray-200' : 'text-gray-500'}`}>
              {currency} ${fullPrice}
            </span>
            <span className={`ml-1 ${highlighted ? 'text-gray-200' : 'text-gray-500'}`}>por año</span>
          </div>
        )}
        <div>
          <span className="text-3xl font-bold">{currency} ${price}</span>
          <span className="text-sm ml-1">{isAnnual ? 'por año' : 'por mes'}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg 
              className={`w-4 h-4 mr-2 ${
                highlighted ? 'text-white' : 'text-primary-500'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

        <Link 
          to={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
            highlighted 
              ? 'bg-white text-primary-500 hover:bg-gray-100' 
              : 'bg-primary-500 text-white hover:bg-primary-600'
          }`}
        >
          {buttonIcon}
          {buttonText}
        </Link>
    </div>
  );
};

export default PricingCard;
