import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getTests} from "./actions";
import './topbar.css'
const styles = {
    topBar: {
        position: 'fixed',
        width: '100%' ,
        zIndex: '5000',
        background: 'none',
        color: '#999',
        opacity: '0.92',
        transition: 'all 0.5s ease',
        borderBottom: '1px solid rgba(200, 200, 200, 0.8)'
      },
      menu:{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',

        background: 'none',
        color: '#999'
      },
      topBarLeft:{

      },
      wrapper: {

      },
      header: {
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '50',
        '&::before':{
          content: '',
          position: 'absolute',

          top:'0',
          left:'0',
          width: '100%' ,
          height:'100%',
          backgroundСolor: 'black'
        }


      }
}
function TopBar({test,getTests}){
    console.log(test)
    const [email, setEmail] = useState('')
    const send = (e) => {
        console.log(email)
        e.preventDefault();
        getTests(email)
    }
    return (

      <div className='wrapper topbar' style={styles.wrapper}>
        <header className='header' style={styles.header}>
          <div className='container' style={styles.container}>
            <div className='header__body' style={styles.header__body}>
              <a href='' className='header__logo' style={styles.header__logo}>
                <img src='' alt=''></img>
              </a>
              <div className='header__burger'>
                <span></span>
              </div>
              <nav className='header__menu'>
                <ul className='header__list'>
                  <li>
                    <a href='' className='header__link'>Головна</a>
                  </li>
                  <li>
                    <a href='' className='header__link'>Про нас</a>
                  </li>
                  <li>
                    <a href='' className='header__link'>Нашi послуги</a>
                  </li>
                  <li>
                    <a href='' className='header__link'>Портфолio</a>
                  </li>
                  <li>
                    <a href='' className='header__link'>Biдгуки</a>
                  </li>
                  <li>
                    <a href='' className='header__link'>Контакти</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className='content'>
          <div className='container'>
            <div className='content__text'>
              <p>We have created the jQuery Migrate plugin to simplify the transition from older versions of jQuery. The plugin restores deprecated features and behaviors so that older code will still run properly on newer versions of jQuery. Use the uncompressed development version to diagnose compatibility issues, it will generate warnings on the console that you can use to identify and fix problems. Use the compressed production version to simply fix compatibility issues without generating console warnings.

There are two versions of Migrate. The first will help you update your pre-1.9 jQuery code to jQuery 1.9 up to 3.0. You can get that version here:

Download the compressed, production jQuery Migrate 1.4.1

Download the uncompressed, development jQuery Migrate 1.4.1

The second version helps you update code to run on jQuery 3.0 or higher, once you have used Migrate 1.x and upgraded to jQuery 1.9 or higher:

Download the compressed, production jQuery Migrate 3.3.0

Download the uncompressed, development jQuery Migrate 3.3.0

linkCross-Browser Testing with jQuery
Be sure to test web pages that use jQuery in all the browsers you want to support. The Microsoft Developer Resources site makes available virtual machines for testing many different versions of Internet Explorer. Older versions of other browsers can be found at oldversion.com.

linkjQuery Pre-Release Builds
The jQuery team is constantly working to improve the code. Each commit to the Github repo generates a work-in-progress version of the code that we update on the jQuery CDN. These versions are sometimes unstable and never suitable for production sites. We recommend they be used to determine whether a bug has already been fixed when reporting bugs against released versions, or to see if new bugs have been introduced.
</p>
            </div>
          </div>
        </div>
          <form>
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={send} >Send</button>
          </form>
      </div>


      )
}
const mapStateToProps = store => ({
    test:store.test.data
});

const mapDispatch = dispatch => bindActionCreators({
  getTests,
}, dispatch);

export default connect(mapStateToProps, mapDispatch)(TopBar);
