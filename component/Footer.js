import React from 'react';
import {useSelector} from 'react-redux'
 function Footer  () {
    const dataFooter = useSelector((state) => state.header.footer)
    return(
    <div className="footer bg-info shadow text-white">
        <div className="container-fluid mt-5" style={{backgroundColor: "#0f4b80"}}>
            <div className="justify-content-center">             
            <div class="text-center mt-2 p-2">
                <b>{dataFooter[0].nameCompany}</b>
            </div> 
            <div class="text-center">
                <div> {dataFooter[0].tower}</div>
                <div> {dataFooter[0].address}</div>       
             </div> 
             </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        </div>
    </div>
    )
}
export default Footer;