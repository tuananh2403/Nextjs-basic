import React ,{Component} from 'react';
import {dataFooterContact,dataFooterAdresss} from '../shared/data/dataHeader'
 class Footer extends Component  {
     constructor(props) {
         super(props);
         this.state = {
             contact: dataFooterContact,
             address : dataFooterAdresss
         }
     }
    render() {
    return(
    <div className="footer bg-info shadow text-white">
        <div className="container-fluid mt-5" style={{backgroundColor: "#0f4b80"}}>
            <div className="justify-content-center">             
            <div class="text-center mt-2 p-2">
                <b>{this.state.address[0].nameCompany}</b>
            </div> 
            <div class="text-center">
                <div> {this.state.address[0].tower}</div>
                <div> {this.state.address[0].address}</div>
           
             </div>  
             <div class="row justify-content-end">
                 {this.state.contact.map(contact => {
                     return (
                         <a href="index.html" class="c-white mx-3"
                             >{contact.title}</a>

                     )
                 })}
            </div>
             </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        </div>
    </div>
    )
}}
export default Footer;