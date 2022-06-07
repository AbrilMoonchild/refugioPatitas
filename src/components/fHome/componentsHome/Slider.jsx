import React from 'react'
import img1 from '../imagesHome/simg1.jpg'
import img2 from '../imagesHome/simg2.jpg'
import img3 from '../imagesHome/simg3.jpg'
import '../stylesHome/Slider.css'
function Slider() {
  return (
    <div className='container-all'>
        <input type='radio' id='1' name='image-slide' hidden></input>
        <input type='radio' id='2' name='image-slide' hidden></input>
        <input type='radio' id='3' name='image-slide' hidden></input>

        <div className='slide'>
            <div className="item-slide">
                <img src={img1} alt="imagen 1" />
            </div>
            <div className="item-slide">
                <img src={img2} alt="imagen 2" />
            </div>
            <div className="item-slide">
                <img src={img3} alt="imagen 3" />
            </div>
        </div>

        <div className='pagination'>
            <label className='pagination-item' htmlFor='1'>
                <img src={img1} alt="img1" />
            </label>

            <label className='pagination-item' htmlFor='2'>
                <img src={img2} alt="img2" />
            </label>

            <label className='pagination-item' htmlFor='3'>
                <img src={img3} alt="img3" />
            </label>
        </div>

    </div>
    
  )
}

export  {Slider}