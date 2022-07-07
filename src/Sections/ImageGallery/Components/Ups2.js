import React from "react";
import Popups from "reactjs-popup";
import Ccb from "../../../Assets/productImgs/Steel-Belt-Conveyor.jpg"


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Centralized Conveyors Belt </div>
        <img className="lg:h-48 md:ml-52 md:mb-6 mb-0 ml-0 md:h-36 md:w-6/12 flex flex-col justify-center " src={Ccb} alt="blog" />
        <div className="content text-base text-black"> 
          {" "}
          Centralized Conveyors Belt provided by us has high strength and is noted for long service life.
        <br/>
          Features:
          Free from flaws
          High strength
          High load bearing ability
          <br/>
          Specifications:
          Fabric belt safety factor (SF) = 10:1 over operating tension
          Operating tension = 80 da/cm = 80 N/mm
          Belt breaking strength rating = 80 N/mm x SF=10 = 800 N/mm
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


