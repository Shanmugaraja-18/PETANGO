import React from "react"
import { Link } from "react-router-dom"
import { blog, navList, socialIcon } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='scontainer'>
          <div className='newletter flexSB'>
            <h1 className='row'>SUBSCRIBE NEWSLETTER</h1>
            <div className='input flex row'>
              <input type='text' placeholder='Enter your email' />
              <button className='btn1'>SUBSCRIBE NOW</button>
            </div>
          </div>

          <div className='content grid'>
            <div className='items'>
              <h3>ABOUT PETANGO</h3>
              <p>we believe that adopting a pet is one of the most rewarding experiences you can have. Our mission is to make the process of finding a new pet easy, enjoyable, and as stress-free as possible</p>
            </div>

            <div className='items'>
              <h3>CONTACT US</h3>
              <h4>
                <span>ADDRESS: </span>chennai India
              </h4>
              <h4>
                <span>MAIL: </span>support@example.com
              </h4>
              <h4>
                <span>PHONE: </span>+111111111111
              </h4>
              <h4>
                <span>FAX ID: </span>+9 333333333333
              </h4>
            </div>

            <div className='items'>
              <h3>LINKS</h3>
              <ul>
                {navList.map((val, index) => {
                  return (
                    <li>
                      <Link to={val.path}>{val.text}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className='items blogs'>
              <h3>RECENT BLOG</h3>

              {blog.slice(0, 2).map((val, index) => (
                <div className='box flex' key={index}>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h5>{val.name}</h5>
                    <span>{val.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <section className='legal'>
        <div className='scontainer flexSB'>
          
          <p>Copy Right - petango'23</p>

          <div className='social'>
            {socialIcon.map((val) => {
              return <span>{val.icon}</span>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
