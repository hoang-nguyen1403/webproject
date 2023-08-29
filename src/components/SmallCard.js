import React from "react";
import './smallCard.css'
import { Link } from 'react-router-dom'

// Redux
import { connect } from "react-redux";
import {
    loadCurrentItem,
    addToCart,
} from '../components/redux/Shopping/shopping-actions'

// function (props, addToCart) {
const SmallCard = ({ ID, path, name, price,addToCart }) => {

    return (
        <div className="card smallCard" >
            <img className="card-img-top" src={path} />
            <div className="card-body">
                <p className="card-title"><b>{name}</b></p>
                <p className="card-text">Giá: {price} VND</p>
                <Link to={`/products/tshirt/${name}/`} class="btn btn-dark text-secondary w-50 ">Chi tiết </Link>
                {/* <a href="#" class="btn btn-dark  text-secondary w-25 ">Buy</a> */}
                {/* <button
                    onClick={() => addToCart(ID)}
                    className="btn btn-dark  text-secondary w-50"
                >
                 Mua Ngay
                </button> */}
            </div>

        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

// export default SmallCard

export default connect(null, mapDispatchToProps)(SmallCard);
