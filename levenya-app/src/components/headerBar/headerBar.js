import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../headerBar/headerBar.css'

function HeaderBar(){
    return <nav>
    <Link to="/main">Главная</Link>
    <Link to='/aboutUs'>Про нас</Link>
    <Link to='/ourServices'>Наши услуги</Link>
    <Link to='/shares'>Акции</Link>
    <Link to='/portfolio'>Портфолио</Link>
    <Link to='/blog'>Блог</Link>
    <Link to='/reviews'>Отзывы</Link>
    <Link to='/contacts'>Контакты</Link>
    <Link to='/adminpanel'>Админ</Link>
</nav>
}
       
    
export default HeaderBar