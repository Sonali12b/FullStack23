import React from 'react'
import './Body.css'
import { Card } from "./Card";
export const Body = () => {
    const arr=[
        {
            "title":"20th Century Girl",
            "img":"https://i.pinimg.com/736x/32/62/e8/3262e801fa7a19fad9e206bffde75950.jpg",
            "desc":"Set in 1999, the story revolves around Na Bo-ra (Kim Yoo-jung), a seventeen-year-old high school student with a bright personality.",
            "rating":"9/10"
        },
        {
            "title":"MidNight",
            "img":"https://hips.hearstapps.com/hmg-prod/images/71pxkyfg95l-ri-1660162048.jpg",
            "desc":"Kyeong-mi (Jin Ki-joo), a deaf woman, works as a sign language counselor at the sign language call center. ",
            "rating":"9/10"
        },{
            "title":"The Pirates: The Last Royal Treasure",
            "img":"https://imgsrv2.voi.id/uv3SVtIebxcfqwKjGj3HTgWqUWMft5hE8wvft32FG5A/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xMzgzNjIvMjAyMjAyMjMxODAwLW1haW4uY3JvcHBlZF8xNjQ1NjE0MDQ5LmpwZw.jpg",
            "desc":"Moo-chi (Kang Ha-neul), the head of the bandits, who claims to be the best swordsman in Goryeo, and Hae-rang (Han Hyo-joo), the owner of a pirate ship that conquered the sea. ",
            "rating":"9/10"
        },{
            "title":"Soulmate",
            "img":"https://m.media-amazon.com/images/M/MV5BOGMzZWNhYWItM2IwYy00ODI5LTlmMTAtNWIwOWE0NWNiYmE5XkEyXkFqcGdeQXVyNjI4NDY5ODM@._V1_.jpg",
            "desc":"Two girls first meet at the age of 13 and become friends. For the next 14 years, the two girls experience love, jealousy and personal growth.",
            "rating":"9/10"
        },{
            "title":"20th Century Girl",
            "img":"https://i.pinimg.com/736x/32/62/e8/3262e801fa7a19fad9e206bffde75950.jpg",
            "desc":"Set in 1999, the story revolves around Na Bo-ra (Kim Yoo-jung), a seventeen-year-old high school student with a bright personality.",
            "rating":"9/10"
        },
    ]
  return (
    <div className='content1'>
    <div className='content2'>My Cinema</div>
    <div className='content3'>{arr.map((el)=>{
      return(
      <Card title={el.title} img={el.img} desc={el.desc} rating={el.rating} />)
      })
      }</div>
    </div>
    
  )
}
