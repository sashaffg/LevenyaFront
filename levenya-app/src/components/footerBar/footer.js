import React from 'react'
import './footer.css'
function Footer(){
    return (
        <div className='Footer'>
            <div className='contacts'>
                <h3>(067) 67-41-246 - організація Дитячих Свят, Весіль та Корпоративів</h3>
                <h3>(073) 08-34-037 - оформлення Дитячих та Дорослих свят.</h3>
                <div className='mail'>
                    <h3>levenya@ukr.net</h3>
                </div>
                <div className='address'>м. Львів, вул. Плугова, 2 А</div>
            </div>
            <div className='ask'>
                <form>
                <label for='fname'>Имя</label>
                <input type='text' id='fname' name='fname' placeholder='Ваше имя'></input>

                <label for='mail'>Email</label>
                <input type='email' id='mail' name='mail' placeholder='Ваш имейл'></input>

                <label for='comment'>Комментарий</label>
                <input type='text' id='comment' name='comment' placeholder='Ваш комментарий'></input>
                <input type="submit" value="Отправить"></input>
    
                </form>
                <div className='follow'>
                    <h1>Спроси у нас</h1>
                    <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20322.774388891776!2d30.446613624445774!3d50.453266466857066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc19f547785d%3A0xe7e588240239d964!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCw0LLQuNCw0YbQuNC-0L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2sro!4v1600367151737!5m2!1sru!2sro" ></iframe>
                </div>
            </div>
        </div>
        
    )
} 
export default Footer