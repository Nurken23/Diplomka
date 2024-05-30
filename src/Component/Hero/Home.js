import React from 'react'
import "./Home.css"
import hero from "../pic/logo.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import Typewriter from "typewriter-effect";

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3></h3>
                        <h1> Это приложение разработано для <span> Дипломной работы </span></h1>
                        <h1 className='surname'> Разработка современного веб-сайта университета для абитуриентов <span>веб-сайта университета для абитуриентов</span></h1>
                        <h2 className='efect'>
                            <span className='a_efect'> Посмотрим </span>
                            <span className='options_span'>
                                <Typewriter options={{ strings: ["Как работает", "Наш сервис"], autoStart: true, loop: true }} />
                            </span>
                        </h2>
                        <p> </p>
                        <div className='hero_btn d_flex'>
                            
                        <div className='col_1'>
                        <h4>Ищите нас в социальных сетях</h4>
<div className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <a href="https://www.facebook.com/satbayevuniversity/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className='btn_shadow' style={{ margin: '0 10px !important', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className='fab fa-facebook-f'></i> 
        </div>
        
    </a>
    <a href="https://www.instagram.com/satbayev_university/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className='btn_shadow' style={{ margin: '0 10px !important', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className='fab fa-instagram'></i>
        </div>
    </a>
    
    <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className='btn_shadow' style={{ margin: '0 10px !important', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className='fab fa-linkedin-in'></i>
        </div>
    </a>
</div>

</div>


                            <div className='col_1'>
                                <h4>Лучшие технологии</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt="" />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt="" />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt="" />
                                </button>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div className='right'>
                        <div className='gradient-border'>
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
