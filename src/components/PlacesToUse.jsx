import React, { useRef } from 'react';
import '../styles/PlacesToUse.css';
import firstImage from '../assets/1.jpg';
import secondImage from '../assets/2.jpg';
import thirdImage from '../assets/3.jpg';
import fourthImage from '../assets/4.jpg';
import fifthImage from '../assets/5.jpg'

export const PlacesToUse = () => {

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

    return(
        <div className="places-to-use">
            <div className="title-cont">
                Mądre i efektywne nawadnianie wszystkich obszarów ogrodu
            </div>
            <div className="box" ref={section1Ref} id='section1'>
                <img className='box-image' src={firstImage} alt="First Image" />
                <div className="box-text-cont">
                    <div className="box-text-title">
                        Balkony & Tarasy
                    </div>
                    <div className="box-text">
                        Rośliny doniczkowe wymagają częstszego podlewania niż grządki czy krzewy. Powód: mniejsza ilość gleby może wchłonąć i zmagazynować wodę. To sprawia, że codzienne podlewanie jest obowiązkowe. Precyzyjne podlewanie przy użyciu GARDENA Micro-Drip-System i jego kroplowników zapewnia właściwą pielęgnację roślin doniczkowych, które dzięki niemu pięknie rozkwitają.
                    </div>
                </div>
            </div>

            <div className="box" ref={section2Ref} id='section2'>
                <div className="box-text-cont">
                    <div className="box-text-title">
                        Grządki
                    </div>
                    <div className="box-text second-text">
                        Ugaś nienasycone pragnienie Twoich rabat kwiatowych i grządek warzywnych. Rośliny składają się w ponad 90% z wody, dlatego potrzebują dużych ilości wody, aby dobrze się rozwijać, zwłaszcza w gorących miesiącach letnich. Odkryj GARDENA Micro-Drip-System z szeroką gamą dysz zraszających i kroplowników, aby Twoje grządki pięknie się rozwijały.
                    </div>
                </div>
                <img className='box-image' src={secondImage} alt="Second Image" />
            </div>

            <div className="box" ref={section3Ref} id='section3'>
                <img className='box-image' src={thirdImage} alt="Third Image" />
                <div className="box-text-cont">
                    <div className="box-text-title">
                        Żywopłoty
                    </div>
                    <div className="box-text">
                        System Micro-Drip-System zapewnia równomierne i wydajne nawadnianie żywopłotów i rzędów roślin. Podlewanie korzeni za pomocą linii kroplujących zapewnia im odpowiednią ilość wody. Zdecyduj, czy chcesz ułożyć linię kroplującą nad czy pod ziemią - obie opcje są możliwe.
                    </div>
                </div>
            </div>

            <div className="box" ref={section4Ref} id='section4'>
                <div className="box-text-cont">
                    <div className="box-text-title">
                        Trawnik
                    </div>
                    <div className="box-text second-text">
                        Trawniki są prawdziwymi pożeraczami wody. Trawa uwielbia słońce, ale jednocześnie pochłania olbrzymie ilości wody, dlatego podczas gorących i suchych miesięcy letnich narażona jest na usychanie.  GARDENA Sprinklersystem to idealne rozwiązanie do nawadniania trawników, które zadba o to, aby trawnik pozostawał zawsze zielony i bujny. Ta wygodna i wodooszczędna instalacja podziemna ze zraszaczami wynurzalnymi idealnie nadaje się do małych i dużych ogrodów.
                    </div>
                </div>
                <img className='box-image' src={fourthImage} alt="Fourth Image" />
            </div>

            <div className="box" ref={section5Ref} id='section5'>
                <img className='box-image' src={fifthImage} alt="Third Image" />
                <div className="box-text-cont">
                    <div className="box-text-title">
                        Instalacja wodna pod ziemią
                    </div>
                    <div className="box-text">
                    Używanie węża ogrodowego lub konewki to tradycyjne sposoby podlewania ogrodu, ale nowoczesna technologia zmieniła trendy w kwestii nawadniania ogrodów. Dzięki Pipeline nawet odległe obszary ogrodu zostaną odpowiednio zaopiekowane, aby mogły w pełni rozkwitać. Rozwijanie i zwijanie długich węży ogrodowych to już przeszłość. Pipeline to nowoczesny system na stałe montowany pod ziemią.
                    </div>
                </div>
            </div>
        </div>
    );
}