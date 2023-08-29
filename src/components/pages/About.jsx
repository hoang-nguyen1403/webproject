import React from 'react';
import '../style/About.css'

const About = () => {
  return (
    <div className="container">
      {/* <div class="row align-items-center my-5">
        <div class="col-lg-12">
          <div class="card bg-dark text-white">
            <img class="card-img logo" src="/images/logo.png" alt="Card image"/>
            <div class ="card-img-overlay">
            <h1 class ="card-title">Card title</h1>
            <p class ="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="row align-items-center my-5">
        <div className="col-lg-7">
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src='/images/hinh_chinh_1.jpg'
            alt="about-img"
          />
        </div>
        <div className="col-lg-5">
          <h1 className="font-weight-light">About Us</h1>
          <p>
            <b>21 SALVADOR </b><br/>
            Quần áo (Thương hiệu)<br/>
            Online Store.<br/>
            Based in SaiGon.<br/>
            Hotline: 0763838391.<br/>
            Email: 21.2121salvador@gmail.com<br/>
            
            Những sản phẩm đến từ 21 Salvador có chất liệu là 100% cotton, được in ép nhiệt với công nghệ kỹ thuật
            cao và công nghệ may áo ống, không có đường chỉ bên hông áo. hằm mang tới cho khách hàng những sản phẩm
             có chất lượng tốt nhất, thoáng mát, làm tôn lên cách 
            tính riêng của từng sản phẩm. <br></br>
            Xin quý khách vui lòng inbox cho page để được tư vấn chi tiết và biết thêm những sản phẩm khác. <br/>
            Xin cám ơn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;