import React from "react";
import Popups from "reactjs-popup";
import Sc from "../../../Assets/productImgs/scraper-conveyorsjpg";


  const contentStyle =  {
    maxWidth: "900px",
      width: "90%",
    };

 const CustomModal = () => 
 (

  <Popups
  trigger={<button className="button"> Open Modal </button>}
  modal
    contentStyle={contentStyle}
  >
    
    {close  => (
      <div className="modal bg-[#F5F5F5] p-5 border-2 border-[#FDE047]">
        <a className=" close cursor-pointer text-black p-1 text-4xl" onClick={close}>
          &times;
          
        </a>
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4">Scraper Conveyors</div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Sc} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          Scraper Conveyors offered comes in compact design as well as in durable construction patented finish which makes thee provide for reliable and lasting service performance. Further, the airtight construction finish of these conveyors as well as options of horizontal, vertical inclination makes these deliver reliable service support. Some of its features include suitable for conveying of powder/small size granular matter; available in different power options of 8.75 to 11.25kw; functional capacity of 12 to 24mts/hour; suitable for use in heavy duty applications.        
        </div>
        <div className="actions">
          <Popups
            // trigger={<button className="button"> Menu Demo </button>}
            position="top center"
            closeOnDocumentClick
            contentStyle={{ padding: "0px", border: "none" }}
          >
           
          </Popups>
          <button
            className="button bg-amber-300 mt-4 p-2 flex  mx-auto"
            onClick={() => {
              console.log("modal closed ");
              close();
              
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popups>


);
        

export default (CustomModal);
// export default Wa(CustomModal);


