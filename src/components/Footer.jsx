import '../styles/Footer.css';

export const Footer = () => {
    
    return(
        <div className="footer">
            <div className="menu">
                <a href="#section0">Główna</a>
                <a href="#section1">Balkony & Tarasy</a>
                <a href="#section2">Grządki</a>
                <a href="#section3">Żywopłoty</a>
                <a href="#section4">Trawnik</a>
                <a href="#section5">Instalacja pod ziemią</a>
            </div>
            <div className="social-media">
                <div>
                    Śledź nas
                </div>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter-x"></i>
            </div>
            <div className="privacy">
                © 2024 consentmanager
            </div>
        </div>
    );
}