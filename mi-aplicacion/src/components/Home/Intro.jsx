import './Intro.css';

function Intro() {
    return (
        <section className='intro-section'>
            {/* <h1>Diseñamos planes de resultado a medida para que tu entrenamiento sea eficaz, no lesivo y motivante.</h1> */}
            <h1>
                Creamos una forma de moverte que sea{' '}
                <span className='highlight'>consciente</span>,{' '}
                <span className='highlight'>constante</span> y{' '}
                <span className='highlight'>colectiva</span>.
            </h1>
        </section>
    )
}

export default Intro;