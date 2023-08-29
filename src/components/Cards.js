import React, { useEffect, useState } from "react";
import LargeCard from './LargeCard'
import Tshirt from './Tshirt'
import Pant from "./Pant";
import "./Cards.css"


function Cards() {
    return (
        <div className="cards">
            {/* <h1 class='header-border'>LET OUR PRODUCT BE YOUR SPECIAL ITEM</h1> */}
            <div class="row align-items-center my-5 justify-content-md-center" >
                <div class="col-lg-4 ">
                    <LargeCard src="/images/21Salvador4703-Edit.jpg" title="T-SHIRT" path ='/products/tshirt'            />
                </div>
                <div class="col-lg-4">
                    <LargeCard src="/images/21Salvador4743-Edit.jpg" title="PANT" path ='/products/pant'/>
                </div>
            </div>
            <h1 class='header-border'>OUR PRODUCTS</h1>
            
            <div id="tshirt" class="row align-items-center my-5 justify-content-md-center" >
                <Tshirt /> 
            </div>
            <h1 class='header-border'>PANTS</h1>
            <div id='pant' class="row align-items-center my-5 justify-content-md-center" >
                <Pant />
            </div>
            
        </div>
    )
}

export default Cards
