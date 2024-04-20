import '../styles/Footer.css';

export const Footer = () => {

    return(
        <div className="footer">
            <div className="menu">
                <a href="#">Główna</a>
                <a href="#">Balkony & Tarasy</a>
                <a href="#">Grządki</a>
                <a href="#">Żywopłoty</a>
                <a href="#">Trawnik</a>
                <a href="#">Instalacja pod ziemią</a>
            </div>
            <div className="social-media">
                <div>
                    Śledź nas
                </div>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-twitter-x"></i>
            </div>
            <div className="privacy">
                © 2024 consentmanager
            </div>
        </div>
    );
}