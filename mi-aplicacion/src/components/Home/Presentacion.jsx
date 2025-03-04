import { useEffect, useState } from 'react';
import './Presentacion.css'

function Presentacion() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            const scrollThreshold = 50;
            
            const fadeOutDistance = 400;
            
            if (scrollPosition <= scrollThreshold) {
                setOpacity(1);
            } else if (scrollPosition >= scrollThreshold + fadeOutDistance) {
                setOpacity(0);
            } else {
                const newOpacity = 1 - ((scrollPosition - scrollThreshold) / fadeOutDistance);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="presentacion-container">
            <h5>Consigue tu mejor versión gracias a un entrenamiento y seguimiento adpatado a ti.</h5>
            <h1 style={{ opacity: opacity }}>SUMMIT F.C</h1>
        </div>
    )
}

export default Presentacion;