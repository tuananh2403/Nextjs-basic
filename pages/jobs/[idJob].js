import React,{ Component} from 'react';
import { useRouter } from 'next/router';
import {listJobs,majors } from '../../shared/data/dataLibrary'
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'

export default function Job() {
      const router = useRouter();
        return (
          <DefaultLayout>
            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        {/*  */}
        <input type="text" defaultValue="G00" className="d-none" id="idListJob" name />
        <section className="py-3">
          <div className="container py-4 f-s-34 f-f-Gilroy-Bold px-0">
            <a href="/jobs" style={{color: '#0775ad'}}><i className="fa-solid fa-arrow-right"><span>
                  Danh sách các nhóm ngành đào tạo
                </span>
              </i></a>
            <div className="blue-gradient" style={{minWidth: '180px'}} />
          </div>
          <div className="container">
            <div className="row">
              <p className="f-f-Gilroy-Bold col-12 f-s-35 t-a-center up" style={{color: '#4a4a4a'}} id="title">
                {listJobs.map(job => {
                  if (job.id === router.query.idJob){
                    return job.title;
                  }
                })}
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row py-4 px-3" style={{backgroundColor: '#ebebeb', border: '1px solid #83bad6'}}>
              <div className="col-lg-12">
                <ul id="jobs-list">
                  {majors.map((major) => {
              
                    if (major.parentID === router.query.idJob){
                      return (
                        <li className="f-f-Gilroy-Bold f-s-30">
                            <div className="c-blue-search t-de-none hover-c-grey hover">
                              {major.name}
                            </div>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      </DefaultLayout>
        )
    }
