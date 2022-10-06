import React, { Component } from 'react';
import Link from "next/link";
import Image from "next/image";
import {dataNew} from "../../shared/data/dataNew";
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'
 
export default class NewStem extends Component {
  constructor(props) {
    super(props);
    this.state ={
      newscontent: dataNew,
    }
  }
    render() {
      const newsContent = this.state.newscontent.map((content) => {
        return (
          <Link  href={`/news/${content.id}`} >
            <a className="col-lg-3 col-md-6 col-12 my-2 hover-scale" style={{textDecoration: 'none'}}>

                    <div className="row card-image pb-2 mx-auto" style={{height: '100%'}}>
                      <div className="col-12 px-0">
                        <Image src={content.img} style={{width: '100%', height: 'auto'}} />
                        <p className="mt-2 mx-3 f-f-Gilroy-Bold f-s-14" style={{minHeight: '42px'}}>
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
        )
      })
        return (
          <DefaultLayout>
            <div>
            <div className="container py-4 f-s-26 f-f-Gilroy-Bold">
              Tin tức
              <div className="blue-gradient" style={{width: '180px'}} />
            </div>
            <section>
              <div className="container">
                <div className="row" id="listNews">
                  {newsContent}
                </div>
              </div>
            </section>
          </div>
          </DefaultLayout>
        )
    }
}