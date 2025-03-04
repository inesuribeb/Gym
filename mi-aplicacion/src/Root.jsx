import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Header from './components/NavBar/Header'
import Footer from './components/Footer/Footer'
import './Root.css'

function Root() {
    const location = useLocation();

    const lightThemeRoutes = ['/metodo', '/conecta'];
    const isDarkTheme = !lightThemeRoutes.includes(location.pathname);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="all-container" key={location.pathname}>
            <Header isDarkTheme={isDarkTheme} />
            <div className="outlet-container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root;