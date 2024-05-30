import React from 'react'
import './Resume.css'
import ResumeApi from './ResumeApi'
import Card from './Card'

const Resume = () => {
    return (
        <>
            <section className='Resume' id='resume'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>Карта обновлений веб-сайта</h4>
                        <h1>Разработка современного веб-сайта университета для абитуриентов</h1>
                    </div>
                    <div className='content-section mtop d_flex'>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2024</h4>
                                <h1>Что разработано</h1>
                            </div>
                            <div className='content'>
                                {ResumeApi.map((value, id) => {
                                    if (value.category === "education") {

                                        return <Card key={id} title={value.title} year={value.year} rate={value.rate} desc={value.desc} />
                                    }

                                })}
                            </div>
                        </div>
                        <div className='left'>
                            <div className='heading'>
                                <h4>2025</h4>
                                <h1>Что планируется добавить</h1>
                            </div>
                            <div className='content'>
                                {ResumeApi.map((value, id) => {
                                    if (value.category === "experience") {

                                        return <Card key={id} title={value.title} year={value.year} rate={value.rate} desc={value.desc} />
                                    }

                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume
