import React from "react"
import { hero, socialIcon } from "../../data/Data"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container pt'>
          <div className='content flexSB'>
            <div className='text'>
              <h2>#petango</h2>
              <h1>Giving loving homes to furry friends!</h1>
              <p>Adopting a pet from a shelter or rescue is a great way to give a pet a loving home while also helping other animals in need. .</p>
              <div className='button'>
                <button className='btn1'>Adopt Now</button>
              </div>
            </div>
            <div className='img'>
              <img src='../images/pupp.png' alt='' />
            </div>
            {/* <div className='details'>
              {hero.map((val, index) => {
                return (
                  <div className='box flexSB' key={index}>
                    <div className='id'>
                      <h3 className='icon'>0{val.id}</h3>
                    </div>
                    <div className='title'>
                      <h3>{val.title}</h3>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div> */}
          </div>
          <div className='socialIcon flexSB'>
            <div className='social flex'>
              {socialIcon.slice(0, 3).map((val, index) => {
                return (
                  <div>
                    <label> {val.icon}</label>
                    <span>{val.name}</span>
                  </div>
                )
              })}
            </div>
            {/* <div className='play flexSB'>
              <h5>PLAY VIDEO</h5>
              <i className='fa fa-play icon'></i>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
