import React, { Component } from 'react';
import DefaultLayout from '../../layout/defaultLayout/defaultLayout';
import Image from 'next/image';
import { useSelector } from 'react-redux';
export default function Jobs ()  {
      const job = useSelector((state) => state.library);
      const listJob = job.job.map((job) => {
        return (
          <div className="col-lg-3 col-sm-4 t-a-center py-3 hover-scale c-white t-de-none">
          <div className="bg-card-blue py-3 px-3 hover-bg-to-grey">
            <Image src={job.image} className="m-w-100 job-image" />
            <p className="f-f-Gilroy-Bold f-s-26 pt-3 job-title">
              {job.title}
            </p>
          </div>
        </div>
        )
      })
        return (
          <DefaultLayout>

            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        <section>
          <div style={{backgroundColor: '#f4f4f4'}}>
            <div className="container py-4">
              <p className="f-f-Gilroy-Heavy col-12 f-s-40 t-a-center" style={{color: '#4a4a4a'}}>
                DANH SÁCH CÁC NHÓM NGÀNH ĐÀO TẠO
              </p>
              <div className="row" id="jobs-list">
                  {listJob}
              </div>
            </div>
          </div>
        </section>
      </div>
          </DefaultLayout>
        )
    }
