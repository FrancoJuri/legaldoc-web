const PricingToggle = ({ isAnnual, setIsAnnual }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`font-medium ${!isAnnual ? 'text-primary-500' : 'text-gray-500'}`}>Mensual</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={isAnnual}
          onChange={(e) => setIsAnnual(e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
      </label>
      <span className={`font-medium ${isAnnual ? 'text-primary-500' : 'text-gray-500'}`}>Anual</span>
      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">¡2 MESES GRATIS!</span>
    </div>
  );
};

export default PricingToggle;
