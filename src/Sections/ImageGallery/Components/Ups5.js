import React from "react";
import Popups from "reactjs-popup";
import Sbc from "../../../Assets/productImgs/steel-belt-conveyors.jpg";
       


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Steel Belt Conveyors </div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Sbc} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          Having year of experience, we are involved in offering best quality of Steel Belt Conveyors. These Steel Belt Conveyors are known for their supreme quality and durability. The offered Steel Belt Conveyors are extensively used in many food processing applications and in many other suitable applications.
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


