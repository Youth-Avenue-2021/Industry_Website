import React from "react";
import Popups from "reactjs-popup";
import Cac from "../../../Assets/productImgs/conveyor-attachment-chain.jpg"


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Conveyor Attachment Chain </div>
        <img className="lg:h-48 md:ml-52 md:mb-6 mb-0 ml-0 md:h-36 md:w-6/12 flex flex-col justify-center " src={Cac} alt="blog" />
        <div className="content text-base text-black"> 
          {" "}
          Conveyor Attachment Chain offered comes in durable construction finish can be made available in different surface color options like natural, black and others. Further, the latest process technology used in its manufacturing as well as superior heat treatment and anti-fatigue support also makes these attachment chains for conveyors provide for reliable performance. Some of its features include sutiable for use in areas like packing machines, luggage conveyor, food production line and others; deliver constant transmission ratio; provide for longer service life; working temperature between -10°C to 150°C.
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


