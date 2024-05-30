import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className='box btn_shadow'>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* POPUP MODAL */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.modalImage} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1 className='text-center'>{props.title_one}</h1>
              <p>{props.desc_one}</p>
              
              {/* Показываем ссылку только для карточки с id 2 */}
              {props.id === 2 && (
                <p>Приглашаем вас <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer">ознакомиться с приложением</a> и протестировать его возможности.</p>
              )}
              {/* Second title and image */}
              
              {props.title_two && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_two}</h2>
                  <img src={props.image_two} alt='' />
            
                  <p>{props.desc_two}</p>
                </div>
              )}

              {/* Third title and image */}
              {props.title_three && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_three}</h2>
                  <img src={props.image_three} alt='' />
                  <p>{props.desc_three}</p>
                </div>
              )}

              {/* Fourth title and image */}
              {props.title_four && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_four}</h2>
                  <img src={props.image_four} alt='' />
                  <p>{props.desc_four}</p>
                </div>
              )}

              {/* Fifth title and image */}
              {props.title_five && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_five}</h2>
                  <img src={props.image_five} alt='' />
                  <p>{props.desc_five}</p>
                </div>
              )}

              {/* Sixth title and image */}
              {props.title_six && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_six}</h2>
                  <img src={props.image_six} alt='' />
                  <p>{props.desc_six}</p>
                </div>
              )}

              {/* Seventh title and image */}
              {props.title_seven && (
                <div className='section'>
                  <h2 className='text-center'>{props.title_seven}</h2>
                  <img src={props.image_seven} alt='' />
                  <p>{props.desc_seven}</p>
                </div>
              )}

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>

              <div className='contact mtop'>
                <h1>Оставить отзыв</h1>

                <form className='blog_contact d_flex'>
                  <div className='left'>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Email' />
                    <input type='text' placeholder='Website' />
                    <button className='btn_shadow'>Отправить</button>
                  </div>
                  <div className='right'>
                    <textarea
                      cols='30'
                      rows='12'
                      placeholder='Comment'
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
