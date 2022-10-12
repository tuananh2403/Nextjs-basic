import React, { Component } from "react"
import { useSelector } from "react-redux"
import Image from 'next/image'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'

export default function Courses () {
  const documents = useSelector((state) => state.library)
    const listDocuments = documents.doucment.map((document) => {
      return (
        <a
        className="col-lg-4 col-md-3 py-4 col-sm-12 hover-scale hover-orange t-de-none"
        href={`courses/${document.id}`}
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

