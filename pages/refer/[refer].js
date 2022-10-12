import React, { Component } from 'react';
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'


export default class Refer1 extends Component {
    render() {
        return (
            <DefaultLayout>
            <div style={{height:'622px'}}>
            <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
            <section className="pt-3" >
              {/* <input type="text" value="R002" id="idRefer" class="d-none" name=""> */}
              <div className="container px-0">
                <a href="/referstem" className="c-black t-de-none"><span className="f-s-26 f-f-Gilroy-Bold">Bài dạy:</span>
                  <span className="f-s-26 f-f-Gilroy-Regular"> Quạt Mandala </span></a>
                <div className="blue-gradient" style={{minWidth: '180px'}} />
              </div>
              <div className="container pt-3">
                <div className="row">
                  <a className="col-lg-6 col-md-6 col-sm-6 t-de-none t-a-center py-4 hover-scale" href="/content2">
                    <img src="https://stemtrunghoc.edu.vn/images/giaoan_icon.png" className="m-w-100 pb-1" />
                    <p className="f-f-SFProDisplay-Bold t-c-red" style={{minWidth: '60%'}}>
                      Kế hoạch bài dạy
                    </p>
                  </a>
                  <a className="col-lg-6 col-md-6 col-sm-6 t-de-none t-a-center py-4 hover-scale" href="/lesson">
                    <img src="https://stemtrunghoc.edu.vn/images/video_icon.png" className="m-w-100 pb-1" />
                    <p className="f-f-SFProDisplay-Bold t-c-red" style={{minWidth: '60%'}}>
                      Video thực hiện bài dạy
                    </p>
                  </a>
                </div>
              </div>
            </section>
          </div>
          </DefaultLayout>
        )
    }
}