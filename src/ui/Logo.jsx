

const Logo = ({ hasScrolled }) => {
    return (
      <div className="mb-6 flex items-center gap-2">
        <svg className={`h-8 w-8 ${hasScrolled ? 'text-primary-600' : 'text-primary-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
        <span className={`text-xl font-bold ${hasScrolled ? 'text-gray-800' : 'text-white'}`}>LegalDoc</span>
      </div>
    );
  };
  
  export default Logo;