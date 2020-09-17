import React from 'react'
function Shares(){
   return(
       <div className='shares'>
           <form className='shares_formToOrder'>
           <label for='fname'>Имя</label>
                <input type='text' id='fname' name='fname' placeholder='Ваше имя'></input>

                <label for='phoneNumber'>Email</label>
                <input type='tel' id='phoneNumber' name='phoneNumber' placeholder='Ваш имейл'></input>

                <label for='mark'>Оценка</label>
                <input type='tel' id='mark' name='mark' placeholder='Ваша оценка...'></input>

                <label for='event'>Событие</label>
                <input type='text' id='event' name='event' placeholder='Ваше событие...'></input>

                <label for='data'>Дата</label>
                <input type='date' id='data' name='data' placeholder='Дата события...'></input>

                <label for='comment'>Комментарий</label>
                <input type='text' id='comment' name='comment' placeholder='Ваш комментарий'></input>
                
                <input type="submit" value="Отправить"></input>
      
           </form>
       </div>
   
    )
}
export default Shares