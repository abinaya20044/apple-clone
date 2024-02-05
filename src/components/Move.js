import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import f1 from "../images/ff.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"
import f4 from "../images/f4.jpg"
import f5 from "../images/f5.jpg"
import f6 from "../images/f6.jpg"

import {BsFillPlayCircleFill} from "react-icons/bs";
function Part() {
    return(
       <Carousel className="mt-4 relative"
       centerMode={true}
       centerSlidePercentage={80}
       showThumbs={false}
       showStatus={false}
       autoPlay={false}
       >
        <div>
            <img src={f5} alt=""/>
            <div className='absolute left-12 bottom-16 flex items-center space-x-2'>
        
                    <div>

                       <BsFillPlayCircleFill size='10'/>
                    </div>
            
            </div>

        </div>
        <div>
            <img src={f1} alt=""/>

        </div>
        <div>
            <img src={f2} alt=""/>

        </div>
        <div>
            <img src={f3} alt=""/>

        </div>
        <div>
            <img src={f4} alt=""/>

        </div>
        <div>
            <img src={f5} alt=""/>

        </div>
        <div>
            <img src={f6} alt=""/>

        </div>
       </Carousel>


    )


}
export default Part;