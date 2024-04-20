import '../styles/NavBar.css';
import water from '../assets/water.png';

export const NavBar = () => {

    return(
        <div className="navbar">
            <div className="left-section">
                <a href='#'>
                    <img src={water} alt="logo" className='logo' />
                </a>
            </div>
            <div className="middle-section">
                <a href='#'>Balkony & Tarasy</a>
                <a href='#'>Grządki</a>
                <a href='#'>Żywopłoty</a>
                <a href='#'>Trawnik</a>
                <a href='#'>Instalacja wodna pod ziemią</a>
            </div>
            <div className="right-section">
                <i class="bi bi-search"></i>
                <i class="bi bi-heart"></i>
                <i class="bi bi-cart"></i>
            </div>
        </div>
    )
}