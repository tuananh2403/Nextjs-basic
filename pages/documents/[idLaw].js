import React, { Component } from "react";
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'

export default class Content2 extends Component {
  render() {
    return (
        <DefaultLayout>

            <section>
        <div className="container">
          <div className>
            <input
              type="text"
              defaultValue="EB00"
              className="d-none"
              id="idContentLegislation"
              name
              />
            <div
              className="col-12 pdfobject-container py-4"
              id="example1"
              style={{ color: "#686868" }}
              >
              <span
                className=" f-s-20 t-t-uppercase f-f-Lato-Bold"
                id="nameContentLegislation"
                >
                Hướng dẫn thực hiện bài dạy STEM và hoạt động trải nghiệm STEM 6
              </span>
              <div className="row">
                <div
                  className=" f-f-Lato-Medium col-lg-10 col-sm-9 f-s-14"
                  style={{ color: "#b9b8b8" }}
                  >
                  <i className="fa fa-calendar" aria-hidden="true" /> 27/03/2021
                </div>
                <div
                  className=" f-f-Gilroy-Heavy f-s-16 col-lg-2 col-sm-3"
                  style={{ textAlign: "right", color: "#686868" }}
                  >
                  <span>Tảivề:</span>
                  <a
                    id="legislationDown"
                    href="/pdf/HuongDanGiaoDucSTEM6.pdf"
                    download
                    >
                    <img src="/images/dow.png" />
                  </a>
                </div>
              </div>
              <iframe class=" w-100" height="800" id="legislationIframe" src="/PDF/document/29-NQTW.pdf"></iframe>
            </div>
          </div>
        </div>
      </section>
        </DefaultLayout>
    );
  }
}
