import React from "react";
import Popups from "reactjs-popup";
import Crc from "../../../Assets/productImgs/conveyor-roller-chains.jpg";


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Conveyor Roller Chains</div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Crc} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          Conveyor Roller Chains offered can be made available in different finish configuration choices as well as in sturdy construction standards so as to provide for reliable working support. Finding use in conveying and elevating applications, these roller chains come in welded steel finish and can be offered in options like straight sidebar roller chains, offset side roller chains, welded steel drag chains among others. Some of its features include made using select grade alloy steel for lasting finish; product developed using superior barrel forming process and carburizing heat treatment for high strength and longer service life; pre-stretched and anti-fatigue finish; available as per ANSI, BS, DIN and JIS standards.        
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


