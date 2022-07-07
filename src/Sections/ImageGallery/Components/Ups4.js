import React from "react";
import Popups from "reactjs-popup";
import Ccs from "../../../Assets/productImgs/chain-conveyor-systems.jpg";


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
        <div className="header flex justify-center text-3xl mx-auto text-black p-1 pb-4">Chain Conveyors </div>
        <img className="lg:h-48 md:ml-56 md:mb-6 mb-0 ml-0 md:h-36 md:w-5/12 flex flex-col justify-center " src={Ccs} alt="blog" />

        <div className="content text-base text-black"> 
          {" "}
          We bring forth a wide range of chain conveyor systems for our valuable clients. These Chain conveyor systems as developed as per the international quality norms & standards. Our offered conveyors utilize a motorized unremitting chain arrangement, carrying a series of single pendants. Widely applicable in various industrial sectors, these conveyors are used for conveying or transporting products or material from one unit to another. Further, these systems are extensively used in the automotive industry for conveying car parts through paint plants.
          <br/>
          Following are the alluring features of our systems:
          <br/>
          • Hassle-free operation
          <br/>
          •Sturdy in construction
          <br/>
          •Excellent speed

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


