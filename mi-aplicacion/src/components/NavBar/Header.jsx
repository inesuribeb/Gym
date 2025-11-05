import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './Header.css'

function Header({ isDarkTheme }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    
    const headerClass = `header-container ${isDarkTheme ? 'header-dark' : 'header-light'} ${visible ? '' : 'header-hidden'} ${isScrolled ? 'header-scrolled' : ''}`;
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            
            const hasScrolled = currentScrollPos > 50;
            
            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
            setIsScrolled(hasScrolled);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return (
        <div className={headerClass}>
            <h1>
                <Link to="/">W42 SOCIAL</Link>
            </h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/metodo" className={isActive('/metodo') ? 'active' : ''}>
                            Método
                        </Link>
                    </li>
                    <li>
                        <Link to="/entrenamiento" className={isActive('/entrenamiento') ? 'active' : ''}>
                            Manifesto
                        </Link>
                    </li>
                    <li>
                        <Link to="/vosotros" className={isActive('/vosotros') ? 'active' : ''}>
                            Vosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/conecta" className={isActive('/conecta') ? 'active' : ''}>
                            Conecta
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;