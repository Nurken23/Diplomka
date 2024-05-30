import React from 'react'
import Card from "./Card"
import BlogApi from "./BlogApi"
import "../Portfolio/Portfolio.css"
import "./Blog.css"

const Blog = () => {
  return (
    <section className='portfolio blog' id="blog">
      <div className='container'>
        <div className='heading text-center'>
          <h4>Интересная информация про</h4>
          <h1>Наш Университет</h1>
        </div>
        <div className='content grid'>
          {BlogApi.map((card, index) => (
            <Card
              key={index}
              id={card.id}
              image={card.image}
              image_two={card.image_two}
              image_three={card.image_three}
              image_four={card.image_four}
              image_five={card.image_five}
              image_six={card.image_six}
              image_seven={card.image_seven}
              title_one={card.title_one}
              title_two={card.title_two}
              title_three={card.title_three}
              title_four={card.title_four}
              title_five={card.title_five}
              title_six={card.title_six}
              title_seven={card.title_seven}
              desc_one = {card.desc_one}
              desc_two = {card.desc_two}
              desc_three= {card.desc_three}
              desc_four = {card.desc_four}
              desc_five = {card.desc_five}
              desc_six = {card.desc_six}
              desc_seven = {card.desc_seven}
              date={card.date}
              title={card.title}
              description={card.description}
              dio_one={card.dio_one}
              modalImage={card.modalImage}
              texts={card.texts}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
