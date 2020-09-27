import React from "react";
import {FacebookShareButton} from "react-share";
import ShareFacebook from "../images/shareFacebook.jpg";
       
export default function SocialMediaButtons({ restaurant}) {
    const {
        name,
        contact
      } = restaurant;
    const quote = "Restaurant: " + name
       return (
           
             <FacebookShareButton 
                url={contact['email']}
                quote={quote}
                hashtag="#MelpOnlyTheBest"
                >
                 <img src={ShareFacebook} alt='Share' className='facebook-img'/>
              </FacebookShareButton>

              
       );
}