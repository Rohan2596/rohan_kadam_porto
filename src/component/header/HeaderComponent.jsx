import React from "react";
import '../../style/component.css'
class HeaderComponent extends React.Component{

    render(){
        return(
             <div className="header_container">
                 <div className="header_name_container">Rohan Kadam</div> 
                 {/* <div class="header_section_container">
                     <span class="section_title">Work Experience</span>
                     <span class="section_title">About Me</span>
                     <span class="section_title">Contect With Me</span>
                 </div> */}

             </div>

        );
    }
}
export default HeaderComponent;