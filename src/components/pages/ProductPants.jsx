import React from 'react';
import '../../App.css';
import LargeCard from '../LargeCard';
import { Link } from "react-router-dom"
import Tshirt from '../Tshirt';
import Pant from '../Pant';

export default function ProductsPant() {
  return <>
      <div className="row align-items-center my-5 justify-content-md-center" >
        <div className="col-lg-8 ">
          <h1 className='header-border'>Our Products</h1>
          <p> Tất cả những sản phẩm trong bộ sưu tập đầu tiên được bày bán tại đây. Chắc chắn bạn sẽ tìm thấy được những sản phẩm ưng ý nhất.</p>
        </div>
      </div>
      <div className="row  justify-content-md-center" >
      <div className="col-lg-2 custom-column ">
          <p className="h4"> Danh mục sản phẩm </p>
          <Link to='/products/tshirt' className="w-100  text_custom_style"><p className='header-border'>+  Tee </p></Link>
          <Link to='/products/pant' className="w-100  text_custom_style"><p className='header-border'>+ Pant </p></Link>
        </div>

        <div className="col-lg-10 ">
          <Pant />
        </div>
      </div>

  </>;
}

