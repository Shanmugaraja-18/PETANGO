import React, { useState } from "react"
import Heading from "../../common/Heading"
import { dishes } from "../../data/Data"
import "./dishes.css"

const Dishes = () => {
  const [menuItems, setMenuItem] = useState(dishes)

  const filterItems = (category) => {
    const newItems = dishes.filter((item) => item.category === category)
    setMenuItem(newItems)

    // for all data show
    if (category === "all") {
      setMenuItem(dishes)
      return
    }
  }
  return (
    <>
      <section className='dishes'>
        <div className='scontainer'>
          <Heading subtitle='#petango' title='Our Pets' />

          <div className='button'>
            <button onClick={() => filterItems("all")} className='btn1'>
              All
            </button>
            <button onClick={() => filterItems("DOGS")} className='btn1'>
              DOG
            </button>
            <button onClick={() => filterItems("CATS")} className='btn1'>
              CAT
            </button>
            <button onClick={() => filterItems("BIRDS")} className='btn1'>
              BIRDS
            </button>
          </div>

          <div className='content grid2'>
            {menuItems.map((items, index) => (
              <div className='box' key={index}>
                <div className='img'>
                  <img src={items.cover} alt='' />
                </div>
                {/* <div className='title flex'>
                  <h4>
                    {items.sub} ,{items.category}
                  </h4>
                  {items.rate.map((icon) => (
                    <span>{icon}</span>
                  ))}
                </div> */}
                <h3>{items.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Dishes
