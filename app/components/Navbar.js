"use client"
import React,{useEffect,useRef,useState} from 'react'

import '.././styles/navbar.css'
export default function Navbar() {
   
    const [isNavOpen, setIsNavOpen] = useState(false);
    const listId = ['list-menu','contact-menu','bg-anim-navbar']
    const listIdPage = ['','aboutus','portfolio','contact']
    const ref = useRef(null)
   /*  useEffect(() => {
        if (typeof window !== 'undefined') {
            for (let i = 0; i < listIdPage.length; i++) {
                if(`/${listIdPage[i]}` == window.location.pathname) {
                    if( i === 0) {
                        document.getElementById('home').classList.add('show-tag')
                    }else{
                        document.getElementById(listIdPage[i]).classList.add('show-tag')
                    }
                 
                }else{
                    if( i === 0) {
                        document.getElementById('home').classList.add('hidden-tag')
                    }else{
                        document.getElementById(listIdPage[i]).classList.add('hidden-tag')
                    }
                   
                }
             }
          }
     
    },[]) */
    
    const toggleNav = () => {
      setIsNavOpen(prevState => !prevState);
    };
    return (
        <nav ref={ref} className={`navbar-wrapper ${isNavOpen ? 'nav-open-checkk' : ''}`}>
            <div className={`heading-menu max-w-1k4 ${isNavOpen ? 'nav-open-checkk' : ''}`}>
                <button className='left' onClick={toggleNav}>(MENU)</button>
                <div className='logo'>20STUDIO</div>
                <button className='right'>(WORK)*</button>
            </div>
            <div className={`list-menu ${isNavOpen ? 'show___list-item' : ''}`} id="list-menu">
                <div id="home" className='menu-item'>
                    <a href='/'>
                        <span>(YOU ARE HERE)</span>
                       
                        <div className='headingRotate'>
                            <h3>Home</h3>
                            <div className='back'>Home</div>
                        </div>
                        <span>(YOU ARE HERE)</span>
                    </a>
                </div>
                <div id="aboutus" className='menu-item'>
                    <a href='/aboutus'>
                        <span>(YOU ARE HERE)</span>
                     
                        <div className='headingRotate'>
                            <h3>About Us</h3>
                            <div className='back'>About Us</div>
                        </div>
                        <span>(YOU ARE HERE)</span>
                    </a>
                </div>
                <div id="portfolio" className='menu-item'>
                    <a href='/portfolio'>
                        <span>(YOU ARE HERE)</span>
                      
                        <div className='headingRotate'>
                            <h3>Portfolio</h3>
                            <div className='back'>Portfolio</div>
                        </div>
                        <span>(YOU ARE HERE)</span>
                    </a>
                </div>
                <div id="contact" className='menu-item'>
                    <a href='/contact'>
                        <span>(YOU ARE HERE)</span>
                       
                        <div className='headingRotate'>
                            <h3>Contact</h3>
                            <div className='back'>Contact</div>
                        </div>
                        <span>(YOU ARE HERE)</span>
                    </a>
                </div>
              
            </div>
            <div className={`contact-menu ${isNavOpen ? 'show___contact-menu' : ''}`}  id="contact-menu">
                <a>(Facebook)</a>
                <a>(Zalo)</a>
                <a>(Phone)</a>
            </div>
            <div className={`bg-anim-navbar ${isNavOpen ? 'show___bg-anim-navbar' : ''}`} id="bg-anim-navbar"></div>
        </nav>
    )
}
