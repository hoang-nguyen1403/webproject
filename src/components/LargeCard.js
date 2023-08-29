import React from 'react'
import './largeCard.css'
import { Link } from "react-router-dom"



function LargeCard(props) {
    return (
        <div className="card">
            <div className="card bg-dark text-white justify-content-md-center">
                <img className="card-img  img-largeCard" src={props.src}
                    alt="Card image" />
                <div className="card-img-overlay d-flex flex-column-reverse ">
                    <Link to={props.path} className="btn btn-light btn-lg w-70 p-3  text-size">Chi tiết</Link>
                    <h1 className="card-title display-6 text-left align-bottom text-style font-weight-bold">
                        {props.title}
                    </h1>
                </div>
            </div>
        </div>

    )
}

export default LargeCard
