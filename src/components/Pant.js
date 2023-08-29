import React from 'react'
import "./Cards.css"
import SmallCard from './SmallCard'

import productInformation from './data_information'


function Pant() {
    const tshirt_data = productInformation
    const pant1 = tshirt_data['BLACK PANT']
    const pant2 = tshirt_data['BLUE DENIM PANT']
    return (
        <div className="cards">
        <div className="row align-items-center  justify-content-center my-5">
            <div className="col-lg-3">
                <SmallCard path={pant1.url1} name={pant1.name} ID={8}
                price={pant1.price} />
            </div>
            <div className="col-lg-3">
                <SmallCard path={pant2.url1} name={pant2.name} ID={9}
                price={pant2.price} />
            </div>
        </div>
    </div>
    )
}

export default Pant
