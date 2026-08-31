import React from 'react'
import {Container, Carousel} from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import './Testimonials.css'
import usePageMeta from '../hooks/usePageMeta'

const testimonials = [
   {
    name: 'Sarah Johnson',
    quote: 'Hyrox has completely changed my approach to fitness. The equipment is excellent, the trainers are supportive, and the workouts are challenging without feeling repetitive. I’ve noticed a big improvement in my strength and stamina since joining.',
    rating: 5,
    img: '/testimonial-1.jpg',
  },
  {
    name: 'David Kim',
    quote: 'I absolutely love training at Hyrox! The atmosphere is energetic and welcoming, and the trainers make sure everyone uses the right technique. It’s a great place to stay motivated and consistent with your fitness goals.',
    rating: 5,
    img: '/testimonial-2.jpg',
  },
  {
    name: 'Emily Torres',
    quote: 'Hyrox is one of the best gyms I’ve joined. The gym is clean, well-equipped, and has a really positive environment. I especially enjoy the functional workouts because they keep every session interesting and challenging',
    rating: 4,
    img: '/testimonial-3.jpg',
  },
]



const Testimonials = () => {
usePageMeta('testimonials')
  return (
    <div style={{paddingTop:'110px', minHeight:'100vh', backgroundColor:"#0d0d0d"}} className='text-white pb-5'>
      <Container>
        <h1 className='mb-2 fw-bold text-center'>What Our Members Say</h1>
        <p className='mb-5 text-center' style={{color:'#aaa'}}>
          Real Efforts, Real Results, Real Stroies
        </p>

        <Carousel indicators={true} controls={true} className="testimonoial-carousel">
          {testimonials.map((t)=>(
            <Carousel.Item key={t.name}>
              <div className="testimonial-slide">
                <img src={t.img} alt={t.name} className='testimonial-img'/>
                <div className="testimonial-stars mb-2">
                  {Array.from({length: t.rating}).map((_,i)=>(
                    <FaStar key={i}/>
                  ))}
                </div>
                <p className="testimonial-quote">{t.quote}</p>
                <h5 className='fw-bold'>{t.name}</h5>
              </div>
            </Carousel.Item>
          ))}
          </Carousel>

      </Container>

    </div>
  )
}

export default Testimonials