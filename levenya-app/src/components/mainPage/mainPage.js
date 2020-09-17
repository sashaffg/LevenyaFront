import React from 'react'
import sample from './sunset.mp4'
import './mainPage.css'
import Cost from '../cost/cost'
import HeaderBar from '../headerBar/headerBar'
import Footer from '../../components/footerBar/footer'
function MainPage(){
    return(
        <div className='wrapper'>
            <header>
                <HeaderBar></HeaderBar>
            </header>
            <body>
            <div className='videoAndText'>
                <video className='videoAndText__video' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className='videoAndText__text'>
                    <p>Организация корпоративных и праздничных мероприятий</p>
                    <h1>Ивент-агентство Levenia</h1>
                </div>
           </div>
           <div className='eventAgency'>
               <h1>Івент Агентство Левеня</h1>
               <div>Організація свят завжди пов’язана з доволі великими турботами. Event агентство “Пікан” із радістю допоможе Вам організувати свято чи захід на будь-який смак. Ми беремо на себе всі турботи пов’язані з організацією та проведенням свята: написання сценарію, підбір ведучих, місця проведення, аніматорів, музикантів, артистів, професійних Dj-в, танцювальних колективів, фото та відео послуги і т.д. індивідуально підходимо до кожного заходу. Гарантуємо унікальність кожного свята!</div>
                <h2>Індивідуальна організація свят із Студією «Пікан»</h2>
                <div>Якщо ж Ви відчуваєте в собі бажання організувати свято самостійно – ми прийдемо Вам на допомогу та  запропонуємо різноманітні супутні послуги, котрі можна замовити, як окремо, так і комбінувати між собою. Ми з радістю готові Вам надати сучасні та просторі зали для проведення урочистих подій чи семінарів, запропонувати цікавий сценарій для проведення святкувань, який об’єднає в собі побажання замовника разом з креативними ідеями організатора, влаштувати театралізовані шоу та інші незвичні дійства, допомогти з організацією семінарів та тренінгів.</div>
           </div>

           <div className='fullscreen'>
                    <Cost/>
            </div>
            </body>
            <footer>
            <Footer></Footer>
            </footer>
        </div>
    )
}
export default MainPage