import React from 'react'
import Card from './Card'
import Review from './Review'

const Brands = () => {
  return (
    <div>
       <section>
          <h1>Brands we Serve</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8 items-center  max-h-full">
            <Card  label="Auto Analytics" image="/home-images/logo/cadillac-logo-2021-full-640.png" disableHover={true}/>
          </div>

          <h1>Our customers say the nicest things about our service</h1>
          <Review />

        </section>
    </div>
  )
}

export default Brands
