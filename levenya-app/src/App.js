import React, {Component} from 'react';
import './App.css';
import{
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"
import MainPage from './components/mainPage/mainPage';
import AboutUs from './components/aboutUs/aboutUs';
import OurServices from './components/ourServices/ourServices';
import Shares from './components/shares/shares';
import Portfolio from './components/portfolio/portfolio'
import Blog from './components/blog/blog';
import Reviews from './components/reviews/reviews';
import Contacts from './components/contacts/contacts';
import Admin from './components/admin/admin';
class App extends Component{
  render(){
    const{history} = this.props

    return(
      <div className="App">
        <Switch>
          <Route history={history} path='/main' component={MainPage}/>
          <Route history={history} path='/aboutUs' component={AboutUs}/>
          <Route history={history} path='/ourServices' component={OurServices}/>
          <Route history={history} path='/shares' component={Shares}/>
          <Route history={history} path='/portfolio' component={Portfolio}/>
          <Route history={history} path='/blog' component={Blog}/>
          <Route history={history} path='/reviews' component={Reviews}/>
          <Route history={history} path='/contacts' component={Contacts}/>
          <Route history={history} path='/adminpanel' component={Admin}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
