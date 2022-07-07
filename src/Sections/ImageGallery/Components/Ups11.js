import React from "react";
import Popups from "reactjs-popup";
import Mc from "../../../Assets/productImgs/mechanical-conveyors.jpg";


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Mechanical Conveyors</div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Mc} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          Mechanical Conveyors offered can be made available by us in different finish configuration choices as well as in technically advanced design support which makes these suitable for handling work processes in different industry sectors. Further, the tubular design of these conveyors allows for faster movement support. Some of its features include conveyor capable of conveying high volumes of material at defined angle without efficiency loss; proven finish designs; can be operated at any angle; easy to clean and maintain design; can handle up to 120,000 kg/hr; multi-outlet distribution support among others.        
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


