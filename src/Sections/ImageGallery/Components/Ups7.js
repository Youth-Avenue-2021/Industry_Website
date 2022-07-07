import React from "react";
import Popups from "reactjs-popup";
import Hbc from "../../../Assets/productImgs/hinged-steel-belt-conveyors.jpeg";


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4">Hinged Steel Belt Conveyors</div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Hbc} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          Matching to the huge market demands, we are involved in offering best quality of Hinged Steel Belt Conveyors. These Hinged Steel Belt Conveyors are available in the market in huge range at most reasonable rates. Further, the offered Hinged Steel Belt Conveyors are extensively used to convey virtually any type of metal scrap.
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


