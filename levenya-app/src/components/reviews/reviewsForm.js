import React from 'react'
import Reviews from './reviews'
 function ReviewsForm(){
return(
    <div className='stayReview'>
        <h1 className='stayReview__text'>Оставить отзыв</h1>
        <form className ='stayReview__form'>
                <label for='fname'>Имя</label>
                <input type='text' id='fname' name='fname' placeholder='Ваше имя'></input>

                <label for='mail'>Email</label>
                <input type='email' id='mail' name='mail' placeholder='Ваш имейл'></input>

                <label for='mark'>Оценка</label>
                <input type='tel' id='mark' name='mark' placeholder='Ваша оценка...'></input>

                <label for='event'>Событие</label>
                <input type='text' id='event' name='event' placeholder='Ваше событие...'></input>

                <label for='comment'>Комментарий</label>
                <input type='text' id='comment' name='comment' placeholder='Ваш комментарий'></input>
                <input type="submit" value="Отправить"></input>
        </form>
    </div>
)
}
export default ReviewsForm