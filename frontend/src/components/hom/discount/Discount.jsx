import React from "react"
import Heading from "../../common/Heading"
import "./discount.css"

const Discount = () => {
  return (
    <>
      <section className='discount offer'>
        <div className='scontainer flexSB'>
          <div className='row'>
            <Heading subtitle='#Adoptnow' title='Make a difference in a pets life. Adopt today. ' />
            <p>Pet adoption is a wonderful way to provide a loving home to an animal in need. Adopting a pet can be a deeply rewarding experience, but it's important to be aware of the responsibility involved.</p>
            <div className='button flex '>
              <button className='btn2'>Adopt now</button>
              {/* <h1>
                $46.99 <span>$59.99</span>
              </h1> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Discount
