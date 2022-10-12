import React from 'react';
import Image from 'next/image';
import DefaultLayout from '../../layout/defaultLayout/defaultLayout'
import { useSelector } from 'react-redux';
export default function Refer () {
      const data = useSelector((state) => state.refer.refer)
      const dataRefer = data.map((refer) => {
        return (
          <a className="col-lg-6 col-md-6 col-sm-6 t-de-none t-a-center py-4 hover-scale" href={`refer/${refer.id}`}>
                <Image src={refer.image} className="m-w-100 pb-1" />
                <p className="f-f-SFProDisplay-Bold t-c-red" style={{minWidth: '60%'}} />
              </a>
        )
      })
        return (
          <DefaultLayout>

            <div>
        <div style={{width: '100%', backgroundColor: '#777777', height: '2px'}} />
        <section className="pt-3">
          <div className="container px-0 f-s-26 f-f-Gilroy-Bold">
            Bài dạy STEM minh họa
            <div className="blue-gradient" style={{minWidth: '180px'}} />
          </div>
          <div className="container px-0">
            <div className="row">
              {dataRefer}
            </div>
          </div>
        </section>
      </div>
          </DefaultLayout>
        )
    }
