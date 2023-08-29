import React from 'react'
import "./Cards.css"
import SmallCard from './SmallCard'
import productInformation from './data_information'

function Tshirt() {
    const tshirt_data = productInformation
    const tshirt1 = tshirt_data['21 UPSIDE DOWN TEE']
    const tshirt2 = tshirt_data['LEOPARD TEE']
    const tshirt3 = tshirt_data['BLACK POMEGRANATE TEE']
    const tshirt4 = tshirt_data['BLACK ROSE TEE']
    const tshirt5 = tshirt_data['PURPLE LINE TEE']
    const tshirt6 = tshirt_data['WHITE BASIC TEE']
    const tshirt7 = tshirt_data['BLACK BASIC TEE']

    // console.log(tshirt_data.tshirt1)
    
    return (
        <div className="cards">
        <div className="row align-items-center my-5">
            <div className="col-lg-3">
                <SmallCard path={tshirt1.url1} name={tshirt1.name} ID={1}
                price={tshirt1.price}  />
            </div>
            <div className="col-lg-3">
                <SmallCard path={tshirt2.url1} name={tshirt2.name} ID={2}
                price={tshirt2.price}  />
            </div>
            <div className="col-lg-3">
                <SmallCard path={tshirt3.url1} name={tshirt3.name} ID={3}
                price={tshirt3.price}  />
            </div>
            <div className="col-lg-3">
                <SmallCard path={tshirt4.url1} name={tshirt4.name} ID={4}
                price={tshirt3.price}  />
            </div>
        </div>
        <div class="row align-items-center my-5">
        <div className="col-lg-3">
                <SmallCard path={tshirt5.url1} name={tshirt5.name} ID={5}
                price={tshirt5.price}  />
            </div>
            <div className="col-lg-3">
                <SmallCard path={tshirt6.url1} name={tshirt6.name} ID={6}
                price={tshirt6.price}  />
            </div>
            <div className="col-lg-3">
                <SmallCard path={tshirt7.url1} name={tshirt7.name} ID={3}
                price={tshirt7.price}  />
            </div>
        </div>
        {/* <h1 class='header-border'>BOTTOM</h1>
        <div class="row align-items-center  justify-content-center my-5">
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4738-Edit.jpg" />
            </div>
            <div class="col-lg-3">
                <SmallCard path="/images/21Salvador4748-Edit.jpg" />
            </div>
        </div> */}
    </div>
    )
}

export default Tshirt
