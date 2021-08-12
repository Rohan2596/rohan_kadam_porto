import React from "react";
import '../../style/component.css'
class HeaderComponent extends React.Component{

    render(){
        return(
             <div class="header_container">
                 <div class="header_name_container">Rohan Kadam</div> 
                 <div class="header_section_container">
                     <span class="section_title">Work Experience</span>
                     <span class="section_title">About Me</span>
                     <span class="section_title">Contact</span>
                 </div>

             </div>

        );
    }
}
export default HeaderComponent;