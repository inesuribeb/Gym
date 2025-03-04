import React, { useState, useEffect, useRef } from 'react';
import './Picture.css';

function Picture() {
    const [darkness, setDarkness] = useState(0);
    const [visibleWords, setVisibleWords] = useState(0);
    const [animationStarted, setAnimationStarted] = useState(false);
    const textRef = useRef(null);
    
    // Divide el texto en palabras
    const words = "Diseñamos planes de resultado a medida para que tu entrenamiento sea eficaz, no lesivo y motivante.".split(" ");
    const highlightedWords = ["planes", "resultado", "entrenamiento", "eficaz", "motivante"];

    // Efecto para manejar la animación automática una vez iniciada
    useEffect(() => {
        if (animationStarted && visibleWords < words.length) {
            const timer = setTimeout(() => {
                setVisibleWords(prev => prev + 1);
            }, 100); // 100ms entre cada palabra
            
            return () => clearTimeout(timer);
        }
    }, [animationStarted, visibleWords, words.length]);

    // Efecto para manejar el scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Para el oscurecimiento de imagen
            const scrollThreshold = 0;
            const darkDistance = 1000;
            
            if (scrollPosition <= scrollThreshold) {
                setDarkness(0);
            } else if (scrollPosition >= scrollThreshold + darkDistance) {
                setDarkness(0.7);
            } else {
                const newDarkness = 0.7 * ((scrollPosition - scrollThreshold) / darkDistance);
                setDarkness(newDarkness);
            }
            
            // Para iniciar la animación de palabras
            if (!animationStarted && textRef.current) {
                const textPosition = textRef.current.getBoundingClientRect();
                
                if (textPosition.top < window.innerHeight * 0.8) {
                    setAnimationStarted(true);
                    setVisibleWords(1); // Comenzamos con la primera palabra
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animationStarted]);

    const shouldHighlight = (word) => {
        // Eliminar cualquier punto o coma al final de la palabra para la comparación
        const cleanWord = word.replace(/[.,;!?]$/, '');
        return highlightedWords.includes(cleanWord.toLowerCase());
    };

    return (
        <div className='picture-container'>
            <div className='image-wrapper'>
                <img src="/pictures/summit8.png" alt="mujer en gimnasio empujando rueda" />
                <div 
                    className="image-overlay" 
                    style={{ backgroundColor: `rgba(0, 0, 0, ${darkness})` }}
                ></div>
            </div>
            <div className="text-container" ref={textRef}>
            {words.map((word, index) => (
                    <React.Fragment key={index}>
                        <span 
                            className={`word ${index < visibleWords ? 'visible' : ''} ${shouldHighlight(word) ? 'highlighted' : ''}`}
                        >
                            {word}
                        </span>
                        {index < words.length - 1 && <span className="space"> </span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Picture;

// import './Picture.css'

// function Picture() {
//     return (
//         <div className='picture-container'>
//             <div className='image-wrapper'>
//                 <img src="/pictures/summit8.png" alt="mujer en gimnasio empujando rueda" />
//             </div>
//             <h5>Diseñamos planes de resultado a medida para que tu entrenamiento sea eficaz, no lesivo y motivante.</h5>
//         </div>
//     )
// }

// export default Picture;