import Header from '../../component/Header'
import Footer from '../../component/Footer'

function DefaultLayout({children}){
    return (
    <>
        <Header/>
       
           <div className="content"> {children} </div>
        <Footer/>
    </>
    )
}
export default DefaultLayout;   