import React from "react";
import '../../style/component.css'
import rohanImage from '../../images/rohankadam.png'
class HomeComponent extends React.Component{

    render(){
        return(
             <div className="home_container">
                <div className="home_titleImage_container">
                    <div className="home_title_container">
                       <span className="home_heading_1">Namaskar,my name</span>
                       <span className="home_heading_2">Rohan Kadam</span>
                      
                    </div>
                    <div className="home_image_container">
                        <img src={rohanImage} alt="" className="image_circle" />
                    </div>
                 
                 </div>
                 <div  className="home_description">
                        I,m Full-Stack Developer from Mumbai,India.

                    </div>
                    <div className="arrow_icon">
                         <div className="left_arrow"></div>
                         <div className="right_arrow"></div>
                    </div>
             </div>

        );
    }
}

export default HomeComponent;