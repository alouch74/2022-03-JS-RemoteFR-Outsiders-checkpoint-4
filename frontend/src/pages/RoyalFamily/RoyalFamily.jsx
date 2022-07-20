import React from 'react';
import "./RoyalFamily.css";

function RoyalFamily(){
   return (
      <>
   <h3>kingdom of Colchis</h3>
   <div className="contenu">
   <h2>
     The Royal Family
   </h2>
   <div className="gallery">
     <a
       href="https://media.istockphoto.com/photos/young-man-as-nicholas-ii-on-dark-green-background-retro-style-of-picture-id1269286055?b=1&k=20&m=1269286055&s=170667a&w=0&h=T3o2HvvA0TIUO6_2nsFt6FAqV7LzgI2CbY2_pllHcYM="
     >
       <img
         src="https://media.istockphoto.com/photos/young-man-as-nicholas-ii-on-dark-green-background-retro-style-of-picture-id1269286055?b=1&k=20&m=1269286055&s=170667a&w=0&h=T3o2HvvA0TIUO6_2nsFt6FAqV7LzgI2CbY2_pllHcYM="
       />
     </a>
     <div className="desc">king assets</div>
   </div>

   <div className="gallery">
     <a
       href="https://cdn.pixabay.com/photo/2015/05/07/19/49/girl-757031__340.jpg"
     >
       <img
         src="https://cdn.pixabay.com/photo/2015/05/07/19/49/girl-757031__340.jpg"
       />
     </a>
     <div className="desc">princess madeas</div>
   </div>

   <div className="gallery">
     <a
       href="https://cdn.pixabay.com/photo/2017/11/23/10/22/story-2972523__340.jpg"
     >
       <img
         src="https://cdn.pixabay.com/photo/2017/11/23/10/22/story-2972523__340.jpg"
       />
     </a>
     <div className="desc">queen Idyia</div>
   </div>
 </div>
 </>
   );
}

export default RoyalFamily;