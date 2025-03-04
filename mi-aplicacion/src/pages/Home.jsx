import Presentacion from '../components/Home/Presentacion';
import Picture from '../components/Home/Picture';
import Planes from '../components/Home/Planes';
import './Home.css'

function Home () {
    return (
        <div className="home-container">
            <Presentacion />
            <Picture />
            <Planes />
        </div>
    )
}

export default Home;