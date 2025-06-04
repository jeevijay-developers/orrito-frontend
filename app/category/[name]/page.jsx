import FooterSeven from '@/components/layout/footers/FooterSeven'
import Header9 from '@/components/layout/header/Header1'
import AllProductsByCategory from '@/components/product/AllProductsByCategory'

import React from 'react'

const page = ({ params }) => {
  return (
    <>
      <main>
        <Header9 />
        <AllProductsByCategory params={params} />
        <FooterSeven />
      </main>

    </>
  )
}

export default page