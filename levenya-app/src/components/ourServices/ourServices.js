import React from 'react'

 function OurServices(){
     return(
         <div className='ourServices'>
             <h1>Наши услуги</h1>
             <div className='container'>
                <div className='firstElement'>
                    <img src={require('../../img/1.jpg')}></img>
                    <div className='gridText'>text</div>
                </div>
                <div className='secondElement'>
                <img src={require('../../img/2.jpg')}></img>
                    <div className='gridText'>text</div>
                </div>
                <div className='thirdElement'>
                <img src={require('../../img/3.jpg')}></img>
                    <div className='gridText'>text</div>
                </div>
                <div className='fourthElement'>
                <img src={require('../../img/4.jpg')}></img>
                    <div className='gridText'>text</div>
                </div>
                <div className='fivethElement'>
                <img src={require('../../img/5.jpg')}></img>
                    <div className='gridText'>text</div>
                </div>
                <div className='sixthElement'></div>
             </div>
         </div>
     )
 }
 export default OurServices