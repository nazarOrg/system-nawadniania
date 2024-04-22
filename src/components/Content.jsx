import '../styles/Content.css';
import autoNawadnianie from '../assets/auto-nawadnianie.jpg';

export const Content = () => {

    return(
        <div className="content">
            <div className="center-image">
                <img src={autoNawadnianie} alt="Center Image" className='center-image' />
                <div className='title'>Automatyczne nawadnianie, które pracuje razem z Tobą.</div>
            </div>
            <div className="text-cont">
                <div className="title-for-text">
                    Oszczędzaj wodę i czas, gdy Twój ogród rozkwita.
                </div>
                <div className="text">
                Marzysz o relaksie w swojej kwitnącej oazie, ale wydaje Ci się, że większość czasu spędzasz na podlewaniu ogrodu? W takim razie automatyczne nawadnianie jest odpowiedzią na Twoje ogrodnicze potrzeby. Nasze produkty do automatycznego nawadniania zadbają o Ciebie i Twój ogród. Nieważne, czy chcesz podlewać doniczki na tarasie, grządki warzywne w szklarni czy trawnik w ogrodzie. Nasz innowacyjny, łatwy do przystosowania i oszczędzający wodę system zawsze pracuje razem z Tobą.
                </div>
            </div>
            <div className="youtube-video">
            <iframe className='youtube-video' width="560" height="315" src="https://www.youtube.com/embed/VX2BpfMPt4o?si=59TJsXxNm9ixciNZ&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    );
}