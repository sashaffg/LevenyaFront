import React,{Component} from 'react'
import {Link} from "react-router-dom"
import '../headerBar/headerBar.scss'
import ReactDOM from 'react-dom';
import MobileNav from './mobileNav';
/*document.querySelector('menu-icon').onClick=function(){
  this.classList.toggle('menu-icon-active');
}*/
export default class HeaderBar extends Component {
  state = { active:false }
  handleClick=(e)=>{
    e.preventDefault();
    this.setState({active:!this.state.active})
  }
  
  render(){
    
    return( 
      <div className="navbar" >
        {this.state.active && ReactDOM.createPortal(<MobileNav/>,document.getElementById("root"))}
        <div className="area">
            <a href="/main" className="brand">Brand</a>
          <nav role="navigation" id="navigation" className="list">
            <a href="/aboutUs" className="item-link">About</a>
            <a href="/ourServices" className="item-link">Service</a>
            <a href="/shares" className="item-link">Shares</a>
            <a href="/portfolio" className="item-link">Portfolio</a>
            <a href="/blog" className="item-link">Blog</a>
            <a href="/reviews" className="item-link">Reviews</a>
            <a href="/contacts" className="item-link">Contacts</a>
          </nav>
      <button data-collapse data-target="#navigation" className="toggle" onClick={this.handleClick}>
      <div  className= { `menu-icon ${this.state.active && 'menu-icon-active'}`} />
      </button>
    </div>
    
  </div>
  )
  }
   
}