import React, { useState } from "react";
import '../../App.css';
import './ProductView.css'
import '../Footer.css'
import {
    useParams
} from "react-router-dom";
import productInformation from '../data_information'
import { Modal, Button } from 'react-bootstrap';

import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

const ProductView = ({ current, addToCart }) => {
    const { name } = useParams();
    const dataInfo = productInformation[`${String(name)}`]
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);

    const [buy, setBuy] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const hanldeBuy = () => setBuy(true)

    const refundHandleClose = () => setOpen(false);
    const refundHandleShow = () => setOpen(true);
    const buyHandleClose = () => setBuy(false);
    const buyHandleShow = () => setBuy(true);
    return <>
        <div className="row align-items-center my-5 justify-content-md-center align-self-start custom-col" >
            <div className="col-lg-3 custom-col">

                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo.url3} />
                </div>
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="  img-custom" src={dataInfo['url1']} />
                </div>

                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo['url5']} />
                </div>

            </div>
            <div className="col-lg-3 custom-col align-self-start">
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className=" img-custom" src={dataInfo['url4']} />
                </div>
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo['url2']} />
                </div>


            </div>
            <div className="col-lg-4 align-self-start product-info-box">
                <div className="row " >
                    <div className="card-body">
                        <h5 className="card-title display-4">{name}</h5>
                        <p className="card-text">Giá: {dataInfo['price']} VND</p>
                        <h5 className="card-title">Size </h5>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-dark">S</button>
                            <button type="button" className="btn btn-outline-dark">M</button>
                            <button type="button" className="btn btn-outline-dark">L</button>
                            <button type="button" className="btn btn-outline-dark">XL</button>
                        </div>
                    </div>
                </div>

                <div className="row align-items-top my-5 justify-content-md-center custom-col" >
                    {/* <button type="button" className="btn btn-outline-dark btn-lg btn-block" onClick={() =>
                         addToCart(dataInfo['ID'])}>Thêm vào giỏ hàng</button> */}
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block"
                        onClick={hanldeBuy}>
                        Thêm vào giỏ hàng
                    </Button>
                    <Modal show={buy} onHide={buyHandleClose}>
                        <Modal.Header>
                            <Modal.Title>Thanh Toán</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>
                                    Cảm ơn quý khách đã lựa chọn sản phẩm của 21 Salvador.  Hiện tại chúng tôi chưa hỗ trợ mua hàng qua website.<br></br>
                                    Xin vui lòng liên hệ số điện thoại 0763838391 hoặc nhắn tin vào fanpage 21 Salvador  để được hỗ trợ mua. <br />
                                    Xin cảm ơn.
                                </p>
                                <p >Liên lạc với chúng tôi ngay </p>
                                <a class='social-icon-link instagram custom_text_insta' href='https://www.instagram.com/21salvador.clothing/'><i class='fab fa-instagram' /> Instagram</a> <br/>
                                <a class='social-icon-link facebook custom_text_faceb' href='https://www.facebook.com/21Salvador.Offical'> <i class='fab fa-facebook-f' /> Facebook
                                    
                                </a>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={buyHandleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <p> miễn phí ship cho đơn hàng lớn hơn 500.000 VND [ free shipping ] </p>
                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn"
                        onClick={handleShow}>
                        Bảng size
                    </Button>
                    <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
                        <Modal.Header>
                            <Modal.Title>Bảng size</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="img-custom" src='/images/size_table.png' />
                            <img className="img-custom" src='/images/size_img.png' />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn"
                        onClick={refundHandleShow}>
                        Đổi trả sản phẩm
                    </Button>
                    <Modal show={open} onHide={refundHandleClose}>
                        <Modal.Header>
                            <Modal.Title>Đổi trả sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>
                                    ĐỔI TRẢ: <br></br>
                                    - Quý khách có thể đổi hàng trong vòng 3 ngày kể từ ngày nhận hàng.
                                    <br></br>
                                    -         Mặt hàng khi đổi phải còn nguyên vẹn, còn tem mác, chưa qua sử dụng và chưa giặt.<br></br>
                                    -         Hàng mua rồi xin vui lòng không trả lại. 21 SALVADOR chỉ cho quý khách đổi trả khi đổi size và lỗi sản xuất (bung chỉ, in bị lem mực)<br></br>

                                    * Mọi thắc mắc khác xin vui lòng liên hệ số điện thoại 0763838391 hoặc nhắn tin vào fanpage 21 Salvador  để được hỗ trợ nhé. Xin cám ơn.
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={refundHandleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>

            </div>
        </div>

    </>;
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);

