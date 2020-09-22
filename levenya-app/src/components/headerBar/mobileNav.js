import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../headerBar/headerBar.scss'

export default class MobileNav extends Component {
  state = { active:false }
  handleClick=(e)=>{
    e.preventDefault();
    this.setState({active:!this.state.active})
  }
  render(){
    return( 
        <div className='mobContainer'>
          <nav role="navigation" id="navigation" className="list">
            <a href="/aboutUs" className="item-link">About</a>
            <a href="/ourServices" className="item-link">Service</a>
            <a href="/shares" className="item-link">Shares</a>
            <a href="/portfolio" className="item-link">Portfolio</a>
            <a href="/blog" className="item-link">Blog</a>
            <a href="/reviews" className="item-link">Reviews</a>
            <a href="/contacts" className="item-link">Contacts</a>
          </nav>
          </div>
  )
  }
   
}
