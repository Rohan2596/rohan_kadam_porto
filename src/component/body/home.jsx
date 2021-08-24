import React from "react";
import '../../style/component.css'

class HomeComponent extends React.Component{

    render(){
        return(
             <div class="home_container">
                <div class="home_titleImage_container">
                    <div class="home_title_container">
                       <span class="home_heading_1">Namaskar,my name</span>
                       <span class="home_heading_2">Rohan Kadam</span>
                      
                    </div>
                    <div class="home_image_container">
                         {/* <div class="image_circle">

                         </div> */}
                    </div>
                 
                 </div>
                 <div  class="home_description">
                        I,m Full Stack Developer from Mumbai,India.

                    </div>
                    <div class="arrow_icon">
                         <div class="left_arrow"></div>
                         <div class="right_arrow"></div>
                    </div>
             </div>

        );
    }
}

export default HomeComponent;