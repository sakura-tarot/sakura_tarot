import React from "react"
import './TarotReading.css';
import GeneralHeader from "../../components/Header/GeneralHeader/GeneralHeader"
import CardReading from "../../components/CardReading/CardReading"
import ImageMagicWand from '../../assets/img/magic-wand.svg';
import ImageMoonCat from '../../assets/img/black-cat.png';

function TarotReading(){
    return (
        <>
            <GeneralHeader />

            <div className='reading-alert-info'>
                <img className='image-wand' src={ImageMagicWand} alt='Image of Sakura’s magic wand' />
                <p>Toca cada carta  y conoce  su signicado  en tu vida.</p>
            </div>

            <CardReading/>

            <div className="moon-cat">
                <img className='moon-cat-image' src={ImageMoonCat} alt='Image of Moon Cat' />
            </div>
        </>
    )
}

export default TarotReading

/*
 <div className="moon-cat">
            <img className='moon-cat-image' src={ImageMoonCat} alt='Image of Moon Cat' />
            </div>*/