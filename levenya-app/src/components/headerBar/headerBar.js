import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../headerBar/headerBar.css'

function HeaderBar(){
    return <ul>
    <li><a href="/">Home</a></li>
  <li><a href="/aboutUs">About</a></li>
  <li><a href="/ourServices">Service</a></li>
  <li><a href="/shares">Shares</a></li>
  <li><a href="/portfolio">Portfolio</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/reviews">Reviews</a></li>
  <li><a href="/contacts">Contacts</a></li>
  <li><a href="/adminpanel">adminpanel</a></li>
</ul>
}
       
    
export default HeaderBar