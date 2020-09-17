import React from 'react'

function Cost(){
    return(
        <div className='costOfEvent'>
            <h1 className='costOfEvent__text'>Узнай стоимость твоего праздника</h1>
            <form className='costOfEvent__forms'>
                <label for='fname'>Имя</label>
                <input type='text' id='fname' name='firstname' placeholder='Ваше имя...'></input>

                <label for='mail'>Email</label>
                <input type='email' id='mail' name='mail' placeholder='Ваш имейл'></input>

                <label for='phonenumber'>Телефон</label>
                <input type='tel' id='phonenumber' name='phonenumber' placeholder='Ваш номер...'></input>

                <label for='event'>Событие</label>
                <input type='text' id='event' name='event' placeholder='Ваше событие...'></input>

                <label for='dateOfEvent'>Дата события</label>
                <input type='date' id='dateOfEvent' name='dateOfEvent'></input>

                <label for='quantityOfPeople'>Количество особ</label>
                <input type='number' id='quantityOfPeople' name='quantityOfPeople' placeholder='Комментарий'></input>
           
                <label for='comment'>Комментарий</label>
                <input type='text' id='comment' name='comment' placeholder='Ваш комментарий'></input>
                <input type="submit" value="Отправить"></input>
            </form>
        </div>
    )
}

export default Cost