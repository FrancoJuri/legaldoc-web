import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "./";


const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const shouldShowBlur = () => {
        return hasScrolled || isMenuOpen || location.pathname === '/precios';
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setHasScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    const isCurrentPath = (path) => {
        return location.pathname === path ? 'bg-gray-100' : '';
    };

    return (
        <header>
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 top-16 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
            <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
                isMenuOpen 
                    ? 'bg-white' 
                    : shouldShowBlur()
                        ? 'bg-white/95 backdrop-blur-sm' 
                        : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block h-8 w-auto">
                            <Logo hasScrolled={shouldShowBlur()} />
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link 
                                to="/" 
                                className={`${
                                    shouldShowBlur()
                                        ? 'text-gray-800 hover:bg-gray-200' 
                                        : 'text-white hover:bg-white/10'
                                } px-3 py-2 rounded-md text-sm font-medium ${
                                    isCurrentPath('/') && (shouldShowBlur() ? 'bg-gray-200' : 'bg-white/10')
                                }`}
                            >
                                Inicio
                            </Link>
                            <Link 
                                to="/precios" 
                                className={`${
                                    shouldShowBlur()
                                        ? 'text-gray-800 hover:bg-gray-200' 
                                        : 'text-white hover:bg-white/10'
                                } px-3 py-2 rounded-md text-sm font-medium ${
                                    isCurrentPath('/precios') && (shouldShowBlur() ? 'bg-gray-200' : 'bg-white/10')
                                }`}
                            >
                                Precios
                            </Link>
                        </div>
                    </div>

                    {/* Right side buttons - Only visible on desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="https://app.doculegal.site" target="_blank" rel="noopener noreferrer" className="bg-highlight hover:bg-highlight-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md">
                            Probar Gratis
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <Link to="https://app.doculegal.site" target="_blank" rel="noopener noreferrer" className="mr-4 max-[370px]:mr-1 bg-highlight hover:bg-highlight-600 text-white px-3 py-2 rounded-md text-sm font-medium shadow-md max-[370px]:text-xs max-[370px]:px-2">
                            Probar Gratis
                        </Link>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${
                                shouldShowBlur()
                                    ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' 
                                    : 'text-white hover:text-white hover:bg-white/10'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            )}
                        </button>
                    </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div 
                    className={`md:hidden transform transition-all duration-300 ease-in-out ${
                        isMenuOpen 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                    } bg-white absolute w-full shadow-lg`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/" 
                            onClick={handleMenuClose} 
                            className={`text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium ${isCurrentPath('/')}`}
                        >
                            Inicio
                        </Link>
                        <Link 
                            to="/precios" 
                            onClick={handleMenuClose} 
                            className={`text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium ${isCurrentPath('/precios')}`}
                        >
                            Precios
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
  );
}

export default Navbar;