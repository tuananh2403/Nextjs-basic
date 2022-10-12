import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Head from 'next/head'

function DefaultLayout({children}){
    return (
    <>
        <Head>
            <title>Trần Tuấn Anh</title>

        </Head>
            <Header/>
            <div className="content"> {children} </div>
            <Footer/>

    </>
    )
}
export default DefaultLayout;   