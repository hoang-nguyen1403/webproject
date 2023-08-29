import React from 'react'
import './PageSupport.css'

function PageSupport() {
    return (
        <div className='container'>
            <h1 className='header-border'>OUR STYLE</h1>
            <div className="row align-items-center my-5">
                <div className="col-lg-4">
                    <img
                        className="img-fluid rounded mb-4 mb-lg-0"
                        src='/images/hinh_chinh_1.jpg'
                        alt="about-img"
                    />
                </div>
                <div className="col-lg-6 d-flex flex-column">
                    <p>
                        <b>21 SALVADOR </b><br />
                        Những sản phẩm đến từ 21 Salvador có chất liệu là 100% cotton, được in ép nhiệt với công nghệ kỹ thuật
                        cao và công nghệ may áo ống, không có đường chỉ bên hông áo. hằm mang tới cho khách hàng những sản phẩm
                        có chất lượng tốt nhất, thoáng mát, làm tôn lên cách
                        tính riêng của từng sản phẩm. <br></br>
                        Xin quý khách vui lòng inbox cho page để được tư vấn chi tiết và biết thêm những sản phẩm khác. <br />
                        Xin cám ơn.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PageSupport
