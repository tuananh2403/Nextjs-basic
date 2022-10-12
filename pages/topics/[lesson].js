import React, { Component} from 'react';
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'

export default class Lesson extends Component {
    render() {
        return (
          <DefaultLayout>
            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        <section className="py-3" id="topicSite">
          <input type="text" defaultValue="T000001" id="idTopic" className="d-none" name />
          <div className="container px-0 f-s-26 f-f-Gilroy-Bold">
            Chủ đề giáo dục STEM
            <div className="blue-gradient" style={{minWidth: '180px'}} />
          </div>
          <div className="container px-0 f-f-Gilroy-Bold f-s-18" style={{color: '#0674ad'}}>
            <div className="tab-content row f-f-Gilroy-Bold">
              <div id="Class6" className="col-12 tab-pane active">
                <div className="row px-3 h-100">
                  <div className="col-lg-4 px-0 py-3" style={{backgroundColor: '#f9f9f9'}}>
                    <div className="col py-2 position-relative text-center">
                      <img id="imageTopic" className="m-w-100" style={{border: '1px solid'}} src='https://stemtrunghoc.edu.vn/videos/output/V000001.jpg'/>
                      <a href="video.html">
                        <div className="w-100 hover" id="playVideo" style={{background: 'black', opacity: '0.7'}}>
                          <p className="py-2 c-white">
                            <i className="fa fa-play" aria-hidden="true" /> Phát
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="col">
                      <div className="f-s-18" id="titleVideoList">
                        Hình có trục đối xứng: Quạt Mandala
                      </div>
                      <div className="f-s-14 d-inline-flex f-f-Gilroy-Regular" style={{color: '#9c9c9c'}}>
                        <span> 7/6/2021</span>
                      </div>
                    </div>
                    <div className="col">
                      <span className="f-s-22 c-black f-f-Gilroy-Bold">Mô tả:</span>
                      <p className="f-s-16 f-f-Gilroy-Light-Italic" id="descriptionVideo">
                        Tài liệu này cung cấp video kiến thức nền cho học sinh về
                        chủ đề "Hình có trục đối xứng: Quạt Mandala", cùng với đó là
                        video hướng dẫn thực hiện để học sinh có thể thực hành tạo
                        ra sản phầm thực tế thông qua chủ đề.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 py-1 f-f-Gilroy-Regular" id="listVideo" style={{overflowY: 'scroll', height: '690px'}}>
                    <div className="px-3" id="listVideoButton">
                      <a className="row card my-1 navx active hover">
                        <div className="col-4">
                          <img className="m-w-100 py-2" src="https://stemtrunghoc.edu.vn/videos/output/V000001.jpg" />
                        </div>
                        <div className="col-8 px-0 align-self-center">
                          <p className="f-s-20">Trục đối xứng, tâm đối xứng</p>
                        </div> </a><a className="row card my-1 navx hover">
                        <div className="col-4">
                          <img className="m-w-100 py-2" src="https://stemtrunghoc.edu.vn/videos/output/V000002.jpg" />
                        </div>
                        <div className="col-8 px-0 align-self-center">
                          <p className="f-s-20">
                            Hướng dẫn thực hiện sản phẩm quạt Mandala
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </DefaultLayout>
        )
    }
}