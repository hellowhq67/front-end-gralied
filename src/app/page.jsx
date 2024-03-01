import Navbar from '@/components/Navigations/Navbar'
import NestedMenu from '@/components/Navigations/NestedMenu'
import Banner from '@/components/Sections/banner/Banner'
import ShopByStyle from '@/components/Sections/shopbystyle/ShopByStyle'
import Mensweare from '@/components/Sections/Mensweare/Mensweare'
import Card from '@/components/Sections/FeaturedCollection/Card'
import React from 'react'
import Womensweare from '@/components/Sections/Womenswere/Womenswere'
import Designers from '@/components/Sections/PopulerDesigner/Designers'
import Slider from '@/components/Sections/Slider/Slider'
import Footer from '@/components/Navigations/Footer'
import Modal from '@/components/authModal/Modals'
import Banner2 from '@/components/Sections/banner/Banner2'


export default function page() {
  return (
    <div>
      <Navbar />
      <div style={{display:"flex",flexDirection:"column",height:"100%", margin:"4rem 0px"}}>
        <NestedMenu/>
         <Banner/>
         <Modal/>
         <ShopByStyle/>
         <Card/>
         <Mensweare/>
         <Womensweare/>
         <Designers/>
         <Slider/>
         
      </div>
      <Banner2/>
         <Footer/>
    </div>

  )
}
