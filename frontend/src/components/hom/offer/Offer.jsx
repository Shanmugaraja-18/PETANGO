import React from "react"
import Heading from "../../common/Heading"
import "./offer.css"

const Offer = () => {
  return (
    <>
      <section className='offer'>
        <div className='scontainer flexSB'>
          <div className='row'>
            <Heading subtitle='#petango' title='A Fur-ever Home for Every Pet!' />
            <p>We are delighted to help you find a loving companion for your home. Here you can learn about the 
              many pets available for adoption in your area and get tips on how to care for them.It’s important
             to understand that taking on the responsibility of pet ownership is a big commitment. That’s why we’ve 
             assembled this resource to help you make an informed decision. We’ll provide you with information about
              the different types of pets available, the needs of each type, and the best ways to care for them. We’ll
               also give you an overview of the adoption process and provide you with tips to help you find the right pet
                for your home. Whether you’re looking for a dog, cat, rabbit, bird, or another type of pet,
                 we’re here to help you find the perfect match. </p>
            <div className='button flex '>
              <button className='btn2'>Donate now</button>
              
            </div>
          </div>
          <div className='row'>
            <img src='../images/tt.png' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Offer
