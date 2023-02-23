import React from "react"
import Heading from "../../common/Heading"
import { cdata, customer } from "../../data/Data"
import "./customer.css"

const Customer = () => {
  return (
    <>
      <section className='customer'>
        <div className='scontainer flexSB'>
          <div className='left row'>
            <Heading subtitle='Customer Feedback' title='WHAT DO PEOPLE SAY ABOUT US?' />
            <p>At Petango, we believe that adopting a pet is one of the most rewarding experiences you can have. Our mission is to make the process of finding a new pet easy, enjoyable, and as stress-free as possible. Our website offers a comprehensive database of adoptable cats and dogs from animal shelters and rescue groups across the United States. We provide detailed information about each pet, including photos, biographies, and contact information for the shelter or rescue group. We also provide helpful tips and advice on the adoption process and caring for your new pet.</p>

            <div className='leftContent grid2'>
              {cdata.map((val, index) => (
                <div className='box' key={index}>
                  <h1>{val.num}</h1>
                  <h4>{val.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='right row'>
            {customer.map((val, index) => (
              <div className='items' key={index}>
                <div className='img flexSB'>
                  <img src={val.cover} alt='' />
                  <span>{val.icon}</span>
                </div>
                <p>{val.desc}</p>
                <div className='details'>
                  <div className='dbox'>
                    <h3>{val.name}</h3>
                    <label>{val.post}</label>
                  </div>
                  <div className='dbox'>
                    <span>{val.rate}</span>
                    <h4>{val.ratenum}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Customer
