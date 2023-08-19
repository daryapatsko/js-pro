import React from 'react'
import "./style.css"
import Menu from '../Menu/Menu'





const SelectedPost = () => {
  return (
    <>
    <Menu menuClass='menu__container'>Artem Markin</Menu>
    <div className='selected__post-container'>
        <div className="selected__post-date">Aug. 16, 2023, 4:28 PM</div>
        <div className="selected__post-title">Italy, country of south-central Europe, occupying a peninsula that juts deep into the Mediterranean Sea.</div>
        <div className="selected__post-img">
          <img src='https://www.tourdom.ru/hotline/upload/medialibrary/c7e/c7ef1cc1da84e8561a04efccf19c8cb4.jpg' alt="pic_italy" />
        </div>
        <div className="selected__post-description">Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the world’s most rugged mountains. Italy’s highest points are along Monte Rosa, which peaks in Switzerland, and along Mont Blanc, which peaks in France. The western Alps overlook a landscape of Alpine lakes and glacier-carved valleys that stretch down to the Po River and the Piedmont. Tuscany, to the south of the cisalpine region, is perhaps the country’s best-known region. From the central Alps, running down the length of the country, radiates the tall Apennine Range, which widens near Rome to cover nearly the entire width of the Italian peninsula. South of Rome the Apennines narrow and are flanked by two wide coastal plains, one facing the Tyrrhenian Sea and the other the Adriatic Sea. Much of the lower Apennine chain is near-wilderness, hosting a wide range of species rarely seen elsewhere in western Europe, such as wild boars, wolves, asps, and bears. The southern Apennines are also tectonically unstable, with several active volcanoes, including Vesuvius, which from time to time belches ash and steam into the air above Naples and its island-strewn bay. At the bottom of the country, in the Mediterranean Sea, lie the islands of Sicily and Sardinia.</div>
        <div className="under_post">
            <button className='btn__selected-post'>Previous</button>
            <button className='btn__selected-post'>Next</button>
        </div>
      
    </div>
    </>
   
  )
}

export default SelectedPost
