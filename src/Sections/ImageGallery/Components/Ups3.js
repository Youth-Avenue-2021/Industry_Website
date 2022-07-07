import React from "react";
import Popups from "reactjs-popup";
import Cc from "../../../Assets/productImgs/conveyor-chains.jpg";


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4"> Conveyor Chains </div>
        <img className="lg:h-48 md:ml-52 md:mb-6 mb-0 ml-0 md:h-36 md:w-6/12 flex flex-col justify-center " src={Cc} alt="blog" />
        <div className="content text-base text-black"> 
          {" "}
          We offer a precision-engineered range of Conveyor Chains to our valuable clients. The liquid/gas flow from the attached pipes is regulated with due to passage rotation in transverse plug of these valves. Owing to such features, these valves are used for entering or extracting material from two different chambers, whose pressure levels are different. With their continuous chain arrangement, these conveyors carry a series of single pendants used for conveying the product from one end to other. The process is undertaken by means of motor driven or other system adopted and products to be conveyed are suspended on the pendants.
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


