export const detectUserCountry = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        countryCode: data.country_code,
        countryName: data.country_name
      };
    } catch (error) {
      console.error('Error detecting country:', error);
      return {
        countryCode: 'AR',
        countryName: 'Argentina'
      }; // Default to Argentina if detection fails
    }
};
  
export const getCurrencyByCountry = (countryCode) => {
return countryCode === 'AR' ? 'ARS' : 'USD';
};