import React from "react"
import Blog from "./blog/Blog"
import Customer from "./customer/Customer"
import Discount from "./discount/Discount"
import Dishes from "./dishes/Dishes"
import Hero from "./hero/Hero"
import Menu from "./menu/Menu"
import Offer from "./offer/Offer"
import Team from "./team/Team"
import Footer from "../common/footer/Footer"

const Hom = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Offer />
      <Dishes />
      <Discount />
      <Team />
      <Customer />
      <Blog />
      <Footer />

    </>
  )
}

export default Hom
