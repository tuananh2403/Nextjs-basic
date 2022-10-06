import React, { Component } from "react";
import {listDocuments} from '../../shared/data/dataLibrary'
import Image from 'next/image'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'

export default class Courses extends Component {
  constructor(props){
    super(props);
    this.state = {
      listDocuments: listDocuments,
  }}
  render() {
    const listDocuments = this.state.listDocuments.map((document) => {
      return (
        <a
        className="col-lg-4 col-md-3 py-4 col-sm-12 hover-scale hover-orange t-de-none"
        href="/content2"
      >
        <Image
          src={document.image}
          className="m-w-100"
        />
      </a>
      )
    })
    return (
      <DefaultLayout>

      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
          />
        <section className="py-3">
          <div className="container py-4 f-s-26 f-f-Gilroy-Bold px-0">
            Tài liệu hướng nghiệp
            <div className="blue-gradient" style={{ minWidth: "180px" }} />
          </div>
          <div className="container px-0">
            <div className="row" id="ebook">
             {listDocuments}
            </div>
          </div>
        </section>
      </div>
          </DefaultLayout>
    );
  }
}
