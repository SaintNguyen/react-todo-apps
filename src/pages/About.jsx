import React from 'react';
import huunguyen from "../images/XuanHuu.jpg"
const About = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-sm navbar-light fixed-top" id="navbar">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <h6><a href="https://www.facebook.com/saintnguyen1112" class="gradient-text"><i class="fab fa-facebook-f" aria-hidden="true" style={{'font-size' : '18px' }}></i>Facebook</a></h6>
          </li>
		  <li class="nav-item">
            <h6><a href="https://www.instagram.com/xn__huung/" class="gradient-text"><i class="fab fa-instagram" aria-hidden="true" style={{'font-size' : '18px' }}></i>Instagram</a></h6>
          </li>
		  <li class="nav-item">
            <h6><a href="https://www.twitch.tv/saint_nguyen" class="gradient-text"><i class="fa-brands fa-twitch" aria-hidden="true" style={{'font-size' : '18px' }}></i>Twitch</a></h6>
          </li>
          
          
        </ul>
      </div>
    </nav>
    <h1 class="aos-item" ><b>Nguyễn Xuân Hữu</b></h1>
      <div id="line"></div>
      <h3 class="aos-item" >SV Đại học Sư phạm TP. Hồ Chí Minh</h3>

      <div class=" presentation">
      <div class="col-6 col-md-3 infos">
      <h5><i class="fa fa-user"></i> 20 Tuổi</h5>
            <h5><i class="fa fa-compass"></i> Việt Nam</h5>
			<h5><i class="fa fa-phone"></i> +84: 0393942398</h5>
			<h5><i class="fa fa-envelope-open"></i> nguyenxuanhuu12c3@gmail.com</h5>		
      </div>
      <div class="d-none d-md-block col-md-6">
            <h5 class="typed">Họ tên : Nguyễn Xuân Hữu</h5> 
            <h5 class="typed"> Ngày Sinh : ngày 11 tháng 12 năm 2002</h5>
            <h5 class="typed">MSSV : 46 . 01 . 104 . 064</h5>
            <h5 class="typed">Địa chỉ : Quận 12 , TP. Hồ Chí Minh . Hiện tại là sinh viên năm 3 khoa công nghệ thông tin của trường đại học Sư phạm TP.Hồ Chí Minh .</h5>
          </div>
          <div class="col-6 col-md-3 photo">
          <img src={huunguyen} alt="huu"/>
          </div>
      </div>

        </header>
    );
};

export default About;