
import React from 'react';
import './Hero.css';
import video from '../../assets/media/flower.mp4';
import img1 from '../../assets/media/window.png';
import img2 from '../../assets/media/1.jpeg';
import img3 from '../../assets/media/2.jpeg';
import img4 from '../../assets/media/3.webp';
import img5 from '../../assets/media/4.jpeg';
import img6 from '../../assets/media/5.jpeg';
import img7 from '../../assets/media/p1.jpeg';
import img8 from '../../assets/media/p2.webp';
import img9 from '../../assets/media/p3.jpeg';
import img10 from '../../assets/media/p4.jpeg';
import img11 from '../../assets/media/p5.jpeg';
import img12 from '../../assets/media/b1.jpeg';
import img13 from '../../assets/media/b2.webp';
import img14 from '../../assets/media/b3.jpeg';
import img15 from '../../assets/media/b4.jpeg';
import img16 from '../../assets/media/b5.webp';
import { BsArrowUpRight} from 'react-icons/bs';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Hero = () => {

const mainRef = useRef();
const textRef = useRef();
const imgRef = useRef();
const innerRef = useRef();


useLayoutEffect(()=> {
  const mainEl = mainRef.current;
  const textEl = textRef.current;
  const imgEl =imgRef.current;
 const innerEl = innerRef.current;

  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({
    toggleActions:"play none none reverse"
  })
  
 

  gsap.to(imgEl,{
    scale:202,
    ease:"ease",
    scrollTrigger:{
      trigger:'mainEl',
      scrub:1,
      start:"top top",
      end:"bottom",
      pin:true,
      pinSpacer:false,
    }
  })


  gsap.to('.right',{
  x:-600,
  ease:'ease',
  duration:.6,
  scrollTrigger:{
    trigger:mainEl,
    start:1,
  
  }
  })
  gsap.to('.left',{
    x:600,
    ease:'ease',
    duration:.6,
    scrollTrigger:{
      trigger:mainEl,
      start:1,
    
    }
    })
    
 const tll = gsap.timeline({
  stagger: {
    amount:4,
  },
  delay:.5,
  scrollTrigger:{
    trigger:mainEl,
    start:2,
  }
 })

 ScrollTrigger.create({
  animation:tll,
  trigger:mainEl,
  start:'top top',
  end:'+=600',
  scrub:1,
  pin:true,
  ease:'ease',
  
})

 tll
 .addLabel('label')
 .fromTo(innerEl.querySelector('.m1'),{y:150,opacity:0},{y:0,opacity:1,duration:1.5},'label')
 .fromTo(innerEl.querySelector('.m2'),{y:150,opacity:0},{y:0,opacity:1,duration:1.5},'label')
 .fromTo(innerEl.querySelector('.m3'),{y:150,opacity:0},{y:0,opacity:1,duration:1.5},'label')
 .fromTo(innerEl.querySelector('.p-text'),{y:80,opacity:0},{y:0,opacity:1,duration:1.5},'label')
 .fromTo(innerEl.querySelector('.work'),{opacity:0},{y:50,opacity:1,duration:2},'label')
 

  const tl = gsap.timeline({
    ease:'ease',
    scrollTrigger: {
      trigger:mainEl,
      start:'top center'
    }
  })

  tl
  .addLabel('my-label')
  .fromTo(mainEl.querySelector('.hero'),{opacity:0},{opacity:1},'my-label')
  .fromTo(textEl.querySelector('.tc '),{y:150,opacity:0, skewY:5},{y:0, opacity:1, duration:2,skewY:0 },'my-label')
  .fromTo(textEl.querySelector('.tc1'),{y:150,opacity:0, skewY:5},{y:0, opacity:1, duration:2,skewY:0},'my-label')
  .fromTo(textEl.querySelector('.tc2'),{y:150,opacity:0, skewY:5},{y:0, opacity:1, duration:2,skewY:0},'my-label')
  .fromTo(textEl.querySelector('.tc3'),{y:150,opacity:0, skewY:5},{y:0, opacity:1, duration:2,skewY:0},'my-label')
  .fromTo(textEl.querySelector('.b'),{y:30,letterSpacing:-10},{y:0,duration:1,delay:.5,letterSpacing:12},'my-label')
 


 return () => tll.kill();
 

},[])


  return (
   <div className="hero" ref={mainRef}>
    
    <section className='video'>
      <div className="video-container">
            <video muted autoPlay loop src={video}></video>
        </div>
        <div className="img-container" ref={imgRef}>
            <img id='img1' className='img1' src={img1} alt="" />
        </div>

        <div className="text-content" ref={textRef} >
       <div className='tc right' >
        <span  className='sm'>between</span></div>

       <div className='tc1 right'>
        <span className='bg'>Reality</span></div>

       <div className='tc2 left'>
        <span className='bg '>&</span></div>

       <div className='tc3 left'>
        <span className='bg'>Dream</span></div>

        <div className="b-text " ref={textRef}>
          <p className='b' >shots that will change your mind</p>
        </div>

        </div>

        <div className="inner-text " ref={innerRef} >
          <div className='text1 '>
          <div className="m-text">
            <div className='bg m1'>Push</div>
            <div className='sm m2'>The</div>
            <div className='bg m3'>Envelope</div>
          </div>
          <div className="p-text ">
            <p>Photography has become a big part of almost every 
              element of our lives.</p>
              <p>It become widespread and diverse but we know that 
                this is still a real form of art and magic.</p>
          </div>
          </div>

          <div className='text2 '>
           <div className='work'>
           <h3>EXPLORE WORKS <span><BsArrowUpRight/></span></h3>
           </div>
          </div>

        </div>
      </section>

      <section className="main" >
    <div className="boxes">

      <div className='box1'>
        <div className='b-img'>
          <img className='img-fluid' src={img2} alt="" />
          <img className='img-fluid' src={img3} alt="" />
        </div>

        <div>
          <h2>Carolina</h2>
          <p>28 October 2022</p>
         <div className='line'/>
         <h5>This series is excellently showing that ordinary portrait
           photography still can be inspiring for you</h5>
         <h5>Check the shots of beautiful Caroline in 
          hat with red and green lights.</h5>
        </div>

        <div>
          <img className='img-fluid' src={img4} alt="" />
         <div>
         <img className='img-fluid' src={img5} alt="" />
          <img className='img-fluid' src={img6} alt="" />
         </div>

        </div>
      </div>

      <div className='box2'>
        <div>
          <img className='img-fluid' src={img7} alt="" />
          <img className='img-fluid' src={img8} alt="" />
        </div>

        <div>
          <h2><span>Soul</span> Dance</h2>
          <p>17 September 2022</p>
         <div className='line line1'/>
         <h5>
Beautiful dance of Hanna in neon ligths with retro effect. 
Pink lights, pretty women and sensuality.</h5>
         <h5>Inspiring vibes and invisible beautiful soul on this shots.

</h5>
        </div>

        <div>
          <img className='img-fluid' src={img9} alt="" />
          <img className='img-fluid' src={img10} alt="" />
          <img className='img-fluid' src={img11} alt="" />

        </div>
      </div>

      <div className='box3'>
        <div>
         <div className="imga">
         <img className='img-fluid' src={img12} alt="" />
          <img className='img-fluid' src={img13} alt="" />
         </div>
          <img className='img-fluid' src={img14} alt="" />
          <img className='img-fluid' src={img15} alt="" />
        </div>

        <div>
          <h2><span>80's</span> Vibes</h2>
          <p>6 November 2022</p>
         <div className='line line1'/>
         <h5>Retro nostagia can be sweet and sour at the same time. Christina helped us to make photos,
           that will give you this feelings.</h5>
         <h5>Drop in past times with this collection of 80's styled photos.</h5>
        </div>

        <div>
        
          <img className='img-fluid' src={img16} alt="" />

        </div>
      </div>

    </div>
      </section>

   </div>
  )
}

export default Hero