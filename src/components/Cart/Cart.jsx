import React, { useState, useEffect } from "react";
// import './ProductView.css'
import '../../App.css'
import { Form, Row, Col, Button } from "react-bootstrap"
import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
    return (
        <>
            <div class="row align-items-center my-5 justify-content-md-center align-self-start custom-col" >


                <div className="col-lg-5 custom-col cart " >
                    <div className={styles.cart__items}>
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                    <div className={styles.cart__summary}>
                        <h4 className={styles.summary__title}>Thông tin sản phẩm</h4>
                        <div className={styles.summary__price}>
                            <span>TOTAL: ({totalItems} items)</span>
                            <span>{totalPrice} VND</span>
                        </div>
                    </div>

                </div>
                <div class="col-lg-1"> </div>
                <div class="col-lg-5 custom-col justify-content-md-center info-form" >

                    <Form className='info-form'>
                        <h1>Thông tin giao hàng</h1>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Họ và Tên </Form.Label>
                                <Form.Control placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Tỉnh</Form.Label>
                                <Form.Control placeholder="Tinh" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Quận/ Huyện</Form.Label>
                                <Form.Control placeholder="Quan/Huyen" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Phường/ Xa</Form.Label>
                                <Form.Control placeholder="Phuong/Xa" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Số Nhà</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Gửi đơn hàng
                        </Button>
                    </Form>

                </div>

            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};


export default connect(mapStateToProps)(Cart);

