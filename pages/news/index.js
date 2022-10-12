import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import DefaultLayout from "../../layout/defaultLayout/defaultLayout";
import { useSelector, useDispatch } from 'react-redux';
import {nextPage, prevPage} from '../../reducer/pagination'
export default function NewStem() {
    const newPage = useSelector((state) => state.pagination)
    const dispatch = useDispatch();
    function btnNext(){
      let numberPage = document.querySelector('#page-num')
      if (newPage.current < newPage.totalPages){
        numberPage.value = newPage.current + 1 ;
      }
      dispatch(nextPage());
      }    
      function btnPrevious(){
      let numberPage = document.querySelector('#page-num')
      console.log(newPage.current)
        if (newPage.current > 1){
          numberPage.value = newPage.current - 1 ;
        }
        dispatch(prevPage());
      }
      const newsContent = newPage.data.map((content,index) => {
      if(index >=0 && index < 8) {
      return (
        <Link href={`/news/${content.id}`}>
          <a
            className="col-lg-3 col-md-6 col-12 my-2 hover-scale"
            style={{ textDecoration: "none" }}
          >
            <div
              className="row card-image pb-2 mx-auto"
              style={{ height: "100%" }}
            >
              <div className="col-12 px-0">
                <Image
                  src={content.img}
                  style={{ width: "100%", height: "auto" }}
                />
                <p
                  className="mt-2 mx-3 f-f-Gilroy-Bold f-s-14"
                  style={{ minHeight: "42px" }}
                >
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
        </Link>
      )};
    });
    return (
      <DefaultLayout>
        <div>
          <div className="container py-4 f-s-26 f-f-Gilroy-Bold">
            Tin tức
            <div className="blue-gradient" style={{ width: "180px" }} />
          </div>
          <section>
            <div className="container">
              <div className="row" id="listNews">
                {newsContent}
              </div>
            </div>
            <div id="content" class="p-4 p-md-5 pt-5">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <button
                      class="page-link"
                      href="#"
                      id="btn-prev"
                      display="none"
                      onClick={btnPrevious}
                    >
                      Previous
                    </button>
                  </li>
                  <li class="page-item disabled">
                  <input
                  type="input"
                  disabled="true"
                  className="t-a-center form-control"
                  style={{ maxWidth: "100px", maxHeight: "40px" }}
                  id="page-num"
                  name
                  defaultValue={'1'}
                />
                  </li>
                  <li class="page-item">
                    <button
                      class="page-link"
                      id="btn-next"
                      onClick={btnNext}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </DefaultLayout>
    );
}
