import React, { Component } from 'react';
import {dataNew} from '../shared/data/dataNew'
import {dataContent} from '../shared/data/dataContent'
import Image from 'next/image'

export default class HomePage extends Component {
   constructor(props) {
     super(props);
     this.state = {
       projects: dataContent,
       newscontent : dataNew,
     }
   }
    render(){
      const newsContent = this.state.newscontent.map((content,index) => {
        if(index < 4){
        return (
          <a className="col-lg-3 col-md-6 col-12 my-2 hover-scale" href={`/news/${content.id}`} style={{textDecoration: 'none'}}>
                    <div className="row card-image pb-2 mx-auto" style={{height: '100%'}}>
                      <div className="col-12 px-0">
                        <Image src={content.img} style={{width: '100%', height: 'auto'}} />
                        <p className="mt-2 mx-3 f-f-Gilroy-Bold f-s-14" style={{minHeight: '42px'}}>
                          {content.title}
                        </p>
                      </div>
                      <div className="col-12 align-self-end px-0">
                        <div className="mt-2 mx-3 c-blue f-f-Gilroy-Regular f-s-13">
                          {content.time}
                        </div>
                      </div>
                    </div>
                  </a>
        )}
      })
      const contentProject = this.state.projects.map((project) => {
        return (
          <a href={project.url} className="col-4 t-a-center hover-scale" style={{position: 'relative'}}>
              <img src={project.img} style={{maxWidth: '100%', height: 'auto'}} />
          </a>
        )
      })
        return(
        <div>
        <div className="container-fluid" style={{padding: "0px",position: "relative"}}>
           <img src="https://stemtrunghoc.edu.vn/images/home_slides/slide_0.png" 
            style={{objectFit: 'cover', width: '100%', height: '465px'}} />
             <div className="container-fluid" style={{position: 'absolute', bottom: '100px'}}>
                <div className="container">
                    <p className="f-f-Gilroy-Bold f-s-30 c-white" id="titleFirstNews">
                        Tiết học không sách vở khiến cô trò Hà Nội thích thú
                    </p>
                    <div className="row f-s-16 c-white mb-3">
                        <div className="col col-md-11 col-lg-7" id="subFirstNews">
                            Với đôi bàn tay thoăn thoắt nhuần nhuyễn việc cầm cưa cắt gỗ,
                            các cô cậu học trò được thỏa sức sáng tạo “nhặt phế thải để học
                            STEM”.
                        </div>
            </div>
          <a className="btn btn-viewmove" id="contentFirstNews" href="/intro">Xem thêm</a>
          </div>
          </div>
        </div>
        <section className="pt-3">
          <div className="container f-s-26 f-f-Gilroy-Bold">
            <span>Giới thiệu dự án
              <span>
                <div className="blue-gradient" /> </span></span>
          </div>
          <div className="container">
            <div className="row" />
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <p className="f-s-18 f-f-Gilroy-Regular" style={{color: '#4a4a4a'}}>
                  Chương trình Phát triển Giáo dục Trung học - Giai đoạn II (SESDP
                  II) xây dựng dựa trên những cải cách giáo dục được hỗ trợ bởi
                  Chương trình Phát triển Giáo dục Trung học (SESDP, các khoản vay
                  2582 và 2583-VIE, phê duyệt ngày 25 tháng 11 năm 2009). Chương
                  trình đưa vào áp dụng những phương tiện hành động mới...
                  <a href="overviews.html" className="f-f-Gilroy-Regular f-s-20 t-de-none" style={{color: '#0053a7'}}>Xem thêm</a>
                </p>
              </div>
              <div className="col-md-3 col-sm-12 t-a-center" style={{alignSelf: 'center'}}>
                <img src="https://stemtrunghoc.edu.vn/images/over_img1.png" className="m-w-100" />
              </div>
            </div>
          </div>
        </section>
        <section>
        <div className="container-fluid" style={{position: 'relative'}}>
          <div className="row align-items-center px-0 pos-abs" style={{height: '100%', width: '100%', zIndex: -1}}>
            <div style={{backgroundColor: '#719bc0', height: '380px', maxHeight: '260px', width: '100%'}} />
          </div>
          <div className="container py-5 c-white">
            <div className="row align-items-center" style={{position: 'relative'}}>
              <img src="https://stemtrunghoc.edu.vn/images/library_img.png" style={{width: '100%', height: 'auto'}} />
              <div className="col pos-abs">
                <div className="row">
                    {contentProject}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3">
        <div className="container f-s-26 f-f-Gilroy-Bold">
          Hướng nghiệp
          <div className="blue-gradient" />
        </div>
        <div className="container pt-3">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <p className="f-s-18 f-f-Gilroy-Regular" style={{color: '#4a4a4a'}}>
                Những năm gần đây, giáo dục hướng nghiệp và phân luồng học sinh
                sau trung học (gồm cả THCS và THPT) đạt được một số kết quả, góp
                phần tích cực phát triển nguồn nhân lực phù hợp, đáp ứng yêu cầu
                phát triển kinh tế - xã hội. Tuy nhiên, so với yêu cầu thực tiễn
                vẫn còn nhiều vấn đề cần phải tiếp tục giải quyết.
                <br />
                Mặc dù đạt được một số kết quả khả quan, nhưng để đáp ứng yêu cầu
                thực tiễn đặt ra, giáo dục hướng nghiệp và công tác phân luồng học
                sinh sau trung học còn bất cập, nhất là cơ chế, chính sách còn
                nhiều tồn tại, chậm được đổi mới. Trong khi đó, hệ thống giáo dục
                nghề nghiệp và thị trường lao động chưa phát triển lành mạnh, gây
                khó khăn cho việc lựa chọn ngành nghề của học sinh. Cơ sở vật
                chất, trang thiết bị và đội ngũ cán bộ quản lý, giáo viên, nhân
                viên làm công tác giáo dục hướng nghiệp ở trường trung học thiếu,
                chưa đáp ứng về chất lượng, trong khi tâm lý chạy theo bằng cấp
                trong xã hội còn nặng nề.
                <a href="/courses" className="f-f-Gilroy-Regular f-s-20 t-de-none" style={{color: '#0053a7'}}>Xem thêm</a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12 t-a-center" style={{alignSelf: 'center'}}>
              <img src="https://stemtrunghoc.edu.vn/images/job_img.png" className="m-w-100" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container f-s-26 f-f-Gilroy-Bold">
          Tin tức STEM
          <br />
          <div className="blue-gradient" style={{width: '180px'}} />
        </div>
        <div className="container">
          <div className="row" id="listNewHome">
                    {newsContent}
          </div>
        </div>
      </section>
        </div>
        )
    }
}
