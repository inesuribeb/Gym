import Presentacion from '../components/Home/Presentacion';
import Picture from '../components/Home/Picture';
import Intro from '../components/Home/Intro';
import Planes from '../components/Home/Planes';
import './Home.css'

function Home () {
    return (
        <div className="home-container">
            <Presentacion />
            {/* <Picture /> */}
            <Intro />
            <Planes />
        </div>
    )
}

export default Home;