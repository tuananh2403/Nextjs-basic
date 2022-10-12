import React, { Component } from "react";
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'
import { useSelector } from "react-redux";

export default function DocumentLaw () {
  const listDocument = useSelector((state) => state.document)
    const dataLaws = listDocument.law.map((dataLaw) => {
      return (
        <tr>
          <td className="f-f-Gilroy-Bold t-c-black">{dataLaw.number}</td>
           <td className="f-f-Gilroy-Bold t-c-black">{dataLaw.startDay}</td>
          <td>
             <a
               href={`/documents/${dataLaw.id}`}
                        className="f-f-Gilroy-Bold f-s-16 t-c-black hover-green t-de-none text-uppercase"
            >
             {dataLaw.abstract}
            </a>
          </td>
        </tr>
      )
    })
    return (
<DefaultLayout>

      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
          />
        <section>
          <div className="container pt-3">
            <div className="row">
              <div className="f-f-Gilroy-Bold f-s-26 col-12 px-0">
                Văn bản pháp luật
              </div>
              <div className="blue-gradient" style={{ width: "180px" }} />
            </div>
          </div>
          <div className="container">
            <div className="row" style={{ font: "-webkit-control" }}>
              <table className="tabledoc table-bordered f-f-Gilroy-Regular col-12">
                <thead>
                  <tr className="t-a-center">
                    <th style={{ width: "15%" }}>SỐ/ KÝ HIỆU</th>
                    <th style={{ width: "10%" }}>NGÀY BAN HÀNH</th>
                    <th>TRÍCH YẾU</th>
                  </tr>
                </thead>
                <tbody id="tabledoc">
                    {dataLaws}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
          </DefaultLayout>
    );
  
}
