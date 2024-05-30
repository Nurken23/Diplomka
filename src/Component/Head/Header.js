import React, { useState } from "react"
import "./Header.css"
import logo from "../pic/imgonline-com-ua-Resize-tshDpGQugr97q.png"


const App = () => {
    // when scroll header at top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })
    // toggle menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='navlink'>
                        {/* <ul className='link f_flex uppercase'> */}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

                            <li> <a href="#home">Домашняя</a></li>
                            <li> <a href="#features">Актуальные новости</a></li>
                            <li> <a href="#portfolio">Направление обучения</a></li>
                            <li> <a href="#resume">Карта обновлений</a></li>
                            <li> <a href="#clients">Отзывы</a></li>
                            <li> <a href="#blog">Про нас</a></li>
                            <li> <a href="#contact">Обратная связь</a></li>
                            
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ?
                                <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>
                            }

                        </button>
                    </div>
                </div>
            </header >

            {/* <section className="demo"></section> */}
        </>
    )
}

export default App
