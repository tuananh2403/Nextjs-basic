import React, { Component } from "react";
import Image from 'next/image';
import DefaultLayout from "../../layout/defaultLayout/defaultLayout";
import { useSelector } from "react-redux";
export default function Videos  () {
    const data = useSelector((state) => state.refer.video)
    const videos = data.map((video) => {
      return (
        <a
                className="col-lg-4 col-md-4 col-sm-6 t-de-none t-a-center py-4 hover-scale"
                href={`/videos/${video.id}`}
              >
                <Image
                  src={video.image}
                  className="m-w-100 pb-1"
                />
                <p
                  className="f-f-SFProDisplay-Bold t-c-red"
                  style={{ minWidth: "60%" }}
                />{" "}
              </a>
      )
    })
    return (
      <DefaultLayout>

      <div>
        <div
          style={{ width: "100%", backgroundColor: "#777777", height: "2px" }}
          />
        <section className="py-3" id="topicSite">
          <div className="container px-0 f-s-26 f-f-Gilroy-Bold">
            Video tham khảo thực hiện bài dạy STEM
            <div className="blue-gradient" style={{ minWidth: "180px" }} />
          </div>
          <div
            className="container px-0 f-f-Gilroy-Bold f-s-18"
            style={{ color: "#0674ad" }}
            >
            <div className="row" id="listTopicVideo">
                {videos}
            </div>
          </div>
        </section>
      </div>
            </DefaultLayout>
    );
  }

